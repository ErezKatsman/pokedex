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
  const [collection, setCollection] = useState([]);

  const isInitialMount = useRef(true);

  useEffect(async () => {
    if (isInitialMount.current) {
      await fetchCollection();
      isInitialMount.current = false;
    } else {
      try {
        await fetchPokemon();
      } catch (err) {
        console.log(err);
        setPokemon({});
      }
    }
  }, [name]);

  const fetchCollection = async () => {
    const { data } = await api.get("/collection/");
    setCollection(data);
    console.log(collection);
  };

  const fetchPokemon = async () => {
    const { data } = await api.get(`/pokemon/${name}`);
    setPokemon(data.data);
  };

  const getTypeList = async (e) => {
    const type = e.target.innerText;
    console.log("started");
    const res = await api.get(`/type/${type}`);
    console.log("finished");
    setTypeList(res.data);
  };

  const addToCollection = async (pokemon) => {
    await api.post("/collection/catch", pokemon);
    await fetchCollection();
  };

  const deleteFromCollection = async (id) => {
    await api.delete(`/collection/release/${id}`);
    await fetchCollection();
  };

  const addOrDelete = async (word, pokemon) => {
    if (word === "Add") await addToCollection(pokemon);
    else await deleteFromCollection(pokemon.id);
  };

  return (
    <div className="App">
      <Header typeList={typeList} setTypeList={setTypeList} />
      <InputSection setPokemonName={setName} />
      <Card
        pokemon={pokemon}
        getTypeList={getTypeList}
        collection={collection}
        addOrDelete={addOrDelete}
      />
      {typeList.length !== 0 ? (
        <Types typeList={typeList} setName={setName} />
      ) : (
        <Collection
          collection={collection}
          getTypeList={getTypeList}
          addOrDelete={addOrDelete}
        />
      )}
    </div>
  );
}

export default App;
