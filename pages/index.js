import { useState, useEffect } from "react";

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count changed to ${count}`);
  }, [count]);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

function DataDisplay() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.jma.go.jp/bosai/forecast/data/forecast/270000.json"
    );
    const json = await response.json();
    console.log(json);
    setData(json);
  };

  fetchData();

  return (
    <ul>
      {data[0].area.weathers.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function Modal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.backgroundColor = "red";
    } else {
      document.body.style.backgroundColor = "white";
    }
  }, [showModal]);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <div>
      <button onClick={toggleModal}>Show Modal</button>
      {showModal && (
        <div className="modal">
          <p>This is the modal window.</p>
          <button onClick={toggleModal}>Close</button>
        </div>
      )}
    </div>
  );
}

function ChangeColor() {
  const [color, setColor] = useState("white");

  const changeColor = () => {
    if (color === "white") {
      setColor("red");
    } else {
      setColor("white");
    }
    document.body.style.backgroundColor = color;
  };

  return (
    <div>
      <button onClick={changeColor}>ChangeColor</button>
    </div>
  );
}

export default function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];
  const [likes, setLikes] = useState(0);
  function handleClick() {
    setLikes(likes + 1);
  }
  return (
    <div>
      <Header title="React 💙" />
      <Header title="A new title" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Like({likes})</button>
      <ChangeColor />
      <DataDisplay />
    </div>
  );
}
