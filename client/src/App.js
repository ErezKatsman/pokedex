import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import InputSection from "./components/InputSection";
import Card from "./components/Card";
import Types from "./components/Types";
import Collection from "./components/Collection";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/",
});

function App() {
  const [pokemon, setPokemon] = useState({});
  const [name, setName] = useState("");
  const [typeList, setTypeList] = useState([]);

  const isInitialMount = useRef(true);

  useEffect(async () => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      try {
        const { data } = await api.get(`/pokemon/${name}`);
        setPokemon(data.data);
      } catch (err) {
        console.log(err);
        setPokemon({});
      }
    }
  }, [name]);

  const getTypeList = async (e) => {
    const type = e.target.innerText;
    console.log("started");
    const res = await api.get(`/type/${type}`);
    console.log("finished");
    setTypeList(res.data);
  };

  return (
    <div className="App">
      <Header />
      <InputSection setPokemonName={setName} />
      <Card pokemon={pokemon} getTypeList={getTypeList} />
      <Types typeList={typeList} setName={setName} />
      <Collection />
    </div>
  );
}

export default App;
