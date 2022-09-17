import React, { useState, useEffect } from "react";

//create your first component
const Home = () => {
  const [toDo, setToDo] = useState([]);
  const [tarea, setTarea] = useState([]);

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

  const getTareas =()=>{
    fetch("https://assets.breatheco.de/apis/fake/todos/user/haroldoruiz")
    .then((response)=>response.json())
    .then((data)=>setToDo(data))
    }
  useEffect(()=>{
    getTareas()//los paréntesis son para llamar la función
  },[])
  
console.log(toDo)

const newTask =()=>{
  fetch('https://assets.breatheco.de/apis/fake/todos/user/haroldoruiz', 
  {
      method: "PUT",
      body: JSON.stringify(tarea),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        console.log(resp.ok); // will be true if the response is successfull
        console.log(resp.status); // the status code = 200 or code = 400 etc.
        console.log(resp.text()); // will try return the exact result as string
        return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
        //here is were your code should start after the fetch finishes
        console.log(data); //this will print on the console the exact object received from the server
    })
    .catch(error => {
        //error handling
        console.log(error);
    });
}
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
                  <p>{element.label}</p>
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
