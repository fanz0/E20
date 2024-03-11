const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { name, surname, username, password } = req.body;

  let user = await User.findOne({ username });

  if (user) {
    return res.status(409).json({
      message: "Questo username è già stato preso. Prova con qualcos'altro",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  user = new User({
    name,
    surname,
    username,
    password: hashedPassword,
  });

  await user.save();
  res.status(200).json({ message: "Registrazione effettuata con successo!" });
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user) {
    res.status(404).json({ message: "Questo username non esiste..." });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    res.status(500).json({ message: "Password errata!" });
  }

  const accessToken = jwt.sign(
    {
      UserInfo: {
        username: user.username,
        roles: user.roles,
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "10m",
    }
  );

  const refreshToken = jwt.sign(
    {
      username: user.username,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: "10m",
    }
  );

  res.cookie("jwt", refreshToken, {
    httpOnly: true,
    // secure: false,
    // sameSite: "none",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.json({
    message: "Login Effetuato con successo!",
    accessToken: accessToken,
  });
};

const refreshCookie = (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) {
    return res.status(401).json({ message: "Non autorizzato" });
  }

  const refreshToken = cookies.jwt;

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    async (err, decoded) => {
      if (err) {
        res.status(403).json({ message: "Accesso Negato" });
      }

      const user = await User.findOne({ username: decoded.username });

      if (!user) {
        return res.status(401).json({ message: "Non autorizzato" });
      }

      const accessToken = jwt.sign(
        {
          UserInfo: {
            username: user.username,
            roles: user.roles,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "10m",
        }
      );

      res.json({ message: "Sessione riaperta!", accessToken: accessToken });
    }
  );
};

const logoutUser = (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) {
    return res.status(204).json({ message: "Cookie non esistente" });
  }

  res.clearCookie("jwt", { httpOnly: true, sameSite: "none", secure: "false" });

  res.json({ message: "Cookie eliminato" });
};

module.exports = { registerUser, loginUser, logoutUser, refreshCookie };
