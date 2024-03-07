import errorsvg from "../../images/errorSVG.svg";

export const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center mt-20 gap-10 mb-10">
      <img src={errorsvg} className="w-[100%] max-w-[550px]" />
      <h1 className="text-7xl w-[80%] text-center">Error 404</h1>
      <p className="text-xl w-[80%] text-center">
        Mi spiace ma questa pagina non esiste! <br />
        Torna alla home.
      </p>
    </div>
  );
};
