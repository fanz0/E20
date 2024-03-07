export const Contacts = () => {
  return (
    <div className="mt-20 mb-10">
      <h1 className="text-center text-2xl w-[80%] mx-auto">
        Compila il form per contattare il nostro Servizio Clienti
      </h1>
      <form
        action="/"
        className="flex flex-col w-[80%] max-w-96 md:max-w-[500px] mx-auto items-center gap-5 shadow-xl shadow-slate-700 mt-10 p-6"
      >
        <label htmlFor="name">Nome</label>
        <input
          name="name"
          type="text"
          className="text-black px-2 md:px-4 py-1 rounded-lg w-full max-w-72 focus:outline-blue-600/50"
          required
        />
        <label htmlFor="surname">Cognome</label>
        <input
          name="surname"
          type="text"
          className="text-black px-2 md:px-4 py-1 rounded-lg w-full max-w-72 focus:outline-blue-600/50"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          className="text-black px-2 md:px-4 py-1 rounded-lg w-full max-w-72 focus:outline-blue-600/50"
          required
        />
        <label htmlFor="description">Descrizione</label>
        <textarea
          name="description"
          rows="5"
          className="text-black px-2 md:px-4 py-1 rounded-lg w-full max-w-72 focus:outline-blue-600/50"
          required
        ></textarea>
        <button className="px-6 py-1 bg-zinc-800 rounded-lg hover:bg-zinc-500">
          Invia
        </button>
      </form>
    </div>
  );
};
