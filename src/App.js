import "./App.css";
import React from "react";
import { Card } from "./components/Card.js";
import { comments } from "./dataAssest/commentData";

function App() {
  const commentCard = comments.map((comment) => {
    return <Card commentObject={comment} />;
  });
  return (
    <div className="App">
      <header className="App-header">{commentCard}</header>
    </div>
  );
}

export default App;
