import logo from "../../images/E20_logo.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className="bg-zinc-800/40 mt-24 grid grid-cols-1 md:grid-cols-3">
        <div className="flex flex-col items-center gap-2">
          <img src={logo} alt="logo" className="size-[50%] max-w-52" />
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
              />
            </svg>
            <p>Via delle Stelle 42, Fantasilandia</p>
          </div>
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <p>+39 1234567891</p>
          </div>
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <p>info@E20.it</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 mt-5">
          <h1 className="font-bold text-xl">Link</h1>
          <Link to="/about" className="hover:text-slate-400">
            Chi Siamo
          </Link>
          <Link to="/contacts" className="hover:text-slate-400">
            Contattaci
          </Link>
        </div>
        <div className="flex flex-col items-center gap-1">
          <h1 className="font-bold mt-5 text-xl">Servizio Clienti</h1>
          <div className="flex flex-col items-center p-1 w-full">
            <p>Lunedì-Venerdì</p>
            <p>8:30-18:00</p>
          </div>
          <div className="flex flex-col items-center w-full p-1">
            <p>Sabato</p>
            <p>8:30-14:00</p>
          </div>
          <div className="flex flex-col items-center w-full p-1">
            <p>Domenica</p>
            <p>Chiuso</p>
          </div>
        </div>
        <div className="mt-5 border-t p-3 w-full md:col-span-3">
          <p className="text-center">&copy; 2024 E20 - All Rights Reserved</p>
        </div>
      </div>
    </>
  );
};
