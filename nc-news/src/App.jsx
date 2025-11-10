import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Filter from "./Components/Filter";
import DataGrid from "./Components/Data Grid";


function App() {
  return (
    <>
      <Header />
      <Filter />
      <DataGrid />
    </>
  );
}

export default App;
