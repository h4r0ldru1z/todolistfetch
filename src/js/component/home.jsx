import React, { useState } from "react";

//create your first component
const Home = () => {
  const [toDo, setToDo] = useState([]);
  const [tarea, setTarea] = useState("");

  const [mouseover, setMouseover] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setToDo((prev) => [...prev, tarea]);
    setTarea("");
  };
  console.log(toDo);
  const elementDelete = (dIndex) => {
    setToDo(toDo.filter((e, i) => i != dIndex));
  };

  return (
    <div className="container">
      <div>
        <h1 className="text-center">Tareas</h1>
        <form onSubmit={onSubmit}>
          <div className="input-group d-flex justify-content-center">
            <input
              type="text"
              placeholder="¿Qué hay pa' hacer?"
              value={tarea}
              onChange={(e) => setTarea(e.target.value)}
            />
          </div>
          <div>
            {toDo.map((element, dIndex) => {
              return (
                <div className="d-flex justify-content-between my-3 col-4 mx-auto">
                  <p>{element}</p>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={() => elementDelete(dIndex)}
                  >
                    {" "}
                  </button>
                </div>
              );
            })}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
