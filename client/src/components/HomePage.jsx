import main_event from "../../images/poster_main_event.png";

export const HomePage = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="rounded-lg flex flex-col items-center w-full gap-5 p-5 bg-zinc-800/40 shadow-lg shadow-blue-200/20">
        <h1 className="font-mono text-3xl font-bold text-center bg-blue-600/50 p-2 rounded-lg">
          Evento in Primo Piano
        </h1>
        <h2 className="font-serif italic text-5xl text-center">Fun Lights</h2>
        <div className="flex flex-col items-center mt-5 md:flex-row w-full md:justify-center ">
          <img src={main_event} className="w-[80%] h-full max-w-80 " />
          <div className="flex flex-col items-center ">
            <p className="w-[80%] text-lg p-4 max-w-[700px]">
              Unisciti a noi per il <strong>Fun Lights</strong> nel cuore della
              città! <br /> La serata sarà decorata con un'installazione di luci
              ipnotiche, musica dal vivo e un ricco buffet. <br /> La festa
              partirà al tramonto, transformando la città in uno spettacolo a
              cielo aperto. <br />
              Non andar via prima di mezzanotte se non vuoi perderti
              spettacolari fuochi d'artificio che illumineranno la notte. <br />
              Questo non è solo un evento, ma un'esperienza indimenticabile.
            </p>

            <div className="w-[80%] flex flex-col items-start gap-7 lg:flex-row md:justify-start p-4">
              <div className="flex justify-center gap-2">
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
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <p>Via dei Sogni 12</p>
              </div>
              <div className="flex justify-center md:gap-2">
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
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
                <p>+39 1234567891</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
