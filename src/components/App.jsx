import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [sub, showSub] = useState([]);

  function addNotes(fullNote) {
    showSub((prevNotes) => {
      return [...prevNotes, fullNote];
    });
  }

  function deleteNotes(id) {
    showSub((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea click={addNotes} />
      {sub.map((subs, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={subs.title}
            content={subs.content}
            onClicked={deleteNotes}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
