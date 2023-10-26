import React from "react";
import classes from './PromptBox.module.css'

const CustomPromptBox = ({ promptText, promptValue, handleCancel }) => {
    const handleOk = () => {
      
    }
    const handleChange = () => {
      
    }
    return (
    <div className={classes.customPromptBox}>
      <h3>{promptText}</h3>
      <input
        type="text"
        value={promptValue}
        onChange={handleChange}
      />
      <button onClick={handleOk}>OK</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default CustomPromptBox;
