const User = require("../models/user.model");
const bcrypt = require("bcrypt");

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
  res.status(200).json({
    message:
      "Registrazione effettuata con successo! Effettua il login con le tue credenziali",
  });
};

const loginUser = (req, res) => {
  req.isAuthenticated();
  res.status(200).json({ message: "Login Effettuato con successo!" });
};

const logoutUser = (req, res) => {
  req.session.destroy((err) => {
    if (err) throw err;
    res.status(200).json({ message: "Logout Effettuato con Successo!" });
  });
};

module.exports = { registerUser, loginUser, logoutUser };
