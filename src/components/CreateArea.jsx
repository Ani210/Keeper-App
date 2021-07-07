import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [isExpanded,setExpand] = useState(false);

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
  function expand(){
    setExpand(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (<input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={fullNote.title}
        />)}
        <textarea
          onChange={handleChange}
          onClick={expand}
          name="content"
          placeholder="Take a note..."
          value={fullNote.content}
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={handleSubmit}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;