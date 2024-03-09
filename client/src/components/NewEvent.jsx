import { useNavigate } from "react-router-dom";

export const NewEvent = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    fetch("http://localhost:3000/api/events", {
      method: "post",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col items-center mt-20 gap-10 mb-10">
      <div className="p-7 bg-gradient-to-b from-slate-400 to-blue-500 rounded-full">
        <h1 className="text-center text-2xl font-bold">
          Aggiungi il tuo evento!
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-10 animate-bounce mx-auto mt-3"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-5 w-full"
      >
        <label htmlFor="name">Titolo</label>
        <input
          type="text"
          className="px-4 rounded-lg text-black focus:outline-blue-500 py-1 w-full max-w-72"
          name="name"
        />
        <label htmlFor="URLposter">Locandina (URL della foto)</label>
        <input
          type="text"
          className="px-4 rounded-lg text-black focus:outline-blue-500 py-1 w-full max-w-72"
          name="URLposter"
        />
        <label htmlFor="description">Descrizione</label>
        <textarea
          name="description"
          rows="5"
          className="px-4 rounded-lg text-black focus:outline-blue-500 py-1 w-full max-w-72"
        ></textarea>
        <button
          type="submit"
          className="px-4 bg-zinc-700 rounded-lg hover:bg-zinc-600 mt-5"
        >
          Aggiungi
        </button>
      </form>
    </div>
  );
};
