export const About = () => {
  return (
    <div className="flex flex-col items-center mt-20 w-[80%] mx-auto gap-16 p-6 border-y bg-gradient-to-r from-zinc-700 to-blue-900/40 rounded-lg">
      <h1 className="text-3xl">Chi siamo?</h1>
      <p className="text-lg font-mono">
        Siamo una startup nata nel 2024 che cerca di connettere il territorio
        con i suoi cittadini. Il nostro nome è abbastanza esplicativo, ci
        occupiamo di eventi, eventi di ogni tipo. <br /> <br />{" "}
        <strong>
          Hai in mente qualcosa per l'inaugurazione del tuo nuovo locale? Vuoi
          pubblicizzare la tua festa a tema? Cerchi pubblico per il tuo evento
          sportivo? I quadri della tua mostra hanno bisogno di più attenzioni?
        </strong>{" "}
        <br /> <br /> È qui che entriamo in gioco noi! <br /> <br />
        Attraverso la nostra piattaforma puoi pubblicare il tuo evento
        gratuitamente, così da renderlo visibile a tutti i visitatori del sito.
        In caso di qualunque dubbio, è possibile contattare il nostro servizio
        clienti.
      </p>
    </div>
  );
};
