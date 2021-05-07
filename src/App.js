import React from "react";
import { RepositoryList } from "./components/Repository/RepositoryList";
import Header from "./components/Layout/Header";
import "./styles/global.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <RepositoryList />
    </div>
  );
}

export default App;
