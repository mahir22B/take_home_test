import React, { useState, useCallback } from "react";
import HeavyButton from "./HeavyButton";

export default function NewsletterSignupForm() {
  const [inputValue, setInputValue] = useState("");


  const onClickSignupButton = useCallback(() =>  console.log("you clicked the sign up button"), []) 


  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        type="email"
        value={inputValue}
      />
      <HeavyButton onClick={onClickSignupButton}>Submit</HeavyButton>
    </form>
  );
}
