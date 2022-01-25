import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import InputSection from "./components/InputSection";
import Card from "./components/Card";
import Types from "./components/Types";
import Collection from "./components/Collection";
import axios from "axios";

const api = axios.create({
  baseURL: "",
});

function App() {
  const [pokemon, setPokemon] = useState({});
  const [name, setName] = useState("");
  const [typeList, setTypeList] = useState([]);
  const [collection, setCollection] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const isInitialMount = useRef(true);
  console.log(collection);

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

  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 10000);
  }, [error]);

  const fetchCollection = async () => {
    try {
      setIsLoading(true);
      const { data } = await api.get("/collection/");
      setCollection(data);
      setIsLoading(false);
    } catch (err) {
      console.log(`Error: ${err.message}`);
      setIsLoading(false);
      setError("Error occurrd");
    }
  };

  const fetchPokemon = async () => {
    try {
      setIsLoading(true);
      const { data } = await api.get(`/pokemon/${name}`);
      setPokemon(data.data);
      setIsLoading(false);
    } catch (err) {
      console.log(`Error: ${err.message}`);
      setIsLoading(false);
      setError("Error occurrd");
    }
  };

  const getTypeList = async (e) => {
    try {
      const type = e.target.innerText;
      console.log("started");
      setIsLoading(true);
      const res = await api.get(`/type/${type}`);
      console.log("finished");
      setTypeList(res.data);
      setIsLoading(false);
    } catch (err) {
      console.log(`Error: ${err.message}`);
      setIsLoading(false);
      setError("Error occurrd");
    }
  };

  const addToCollection = async (pokemon) => {
    try {
      setIsLoading(true);
      await api.post("/collection/catch", pokemon);
      await fetchCollection();
      setIsLoading(false);
    } catch (err) {
      console.log(`Error: ${err.message}`);
      setIsLoading(false);
      setError("Error occurrd");
    }
  };

  const deleteFromCollection = async (id) => {
    try {
      setIsLoading(true);
      await api.delete(`/collection/release/${id}`);
      await fetchCollection();
      setIsLoading(false);
    } catch (err) {
      console.log(`Error: ${err.message}`);
      setIsLoading(false);
      setError("Error occurrd");
    }
  };

  const addOrDelete = async (word, pokemon) => {
    console.log(pokemon);
    if (word === "Add") await addToCollection(pokemon);
    else await deleteFromCollection(pokemon.id);
  };

  return (
    <div className={`app ${isLoading && "no-click"}`}>
      {error.length !== 0 && <div className="error">{error}</div>}
      {isLoading && <div className="loader"></div>}
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
