import React, { useState } from "react";

function CreateArea(props) {
  const [fullNote, addNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    addNote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }
  function handleSubmit(event) {
    props.click(fullNote);
    addNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={fullNote.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          value={fullNote.content}
          rows="3"
        />
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;