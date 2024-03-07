import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../stores/UserContext";

export const EventsList = () => {
  const [events, setEvents] = useState([]);

  const { isLoggedIn } = useContext(UserContext);

  useEffect(() => {
    fetchEvents();
  }, []);

  function fetchEvents() {
    fetch("http://localhost:3000/api/events")
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
        setEvents(data);
      });
  }

  return (
    <>
      <h1 className="text-center mt-20 font-mono text-3xl font-bold bg-emerald-700 px-2 rounded-lg w-fit mx-auto">
        Altri Eventi
      </h1>
      <div className="p-5 w-[80%] grid grid-cols-1 mx-auto mt-10 gap-16 md:grid-cols-2 md:max-w-full justify-items-center relative">
        {events &&
          events.map((event) => (
            <div
              key={event._id}
              className="w-full relative max-w-[600px] flex flex-col -0 items-center p-2 shadow-lg shadow-slate-500 rounded-lg hover:scale-105 transition-all duration-500 gap-5"
            >
              <h3 className="font-mono text-2xl text-center">{event.name}</h3>
              <img
                title={`{title.name}-image`}
                src={event.URLposter}
                className="w-full max-w-80 max-h-56 rounded-md"
              />
              <p className="w-full max-w-80 text-center">{event.description}</p>
            </div>
          ))}
      </div>
      <div className="flex flex-col items-center gap-5 mt-10 w-[80%] mx-auto">
        <p className="text-center text-red-500">
          Vuoi aggiungere un tuo evento?
        </p>
        <Link to="/addevent">
          <button
            className="px-5 py-1 bg-zinc-700 rounded-lg hover:bg-zinc-500 disabled:opacity-20"
            disabled={!isLoggedIn}
          >
            Aggiungi Evento
          </button>
        </Link>
      </div>
    </>
  );
};
