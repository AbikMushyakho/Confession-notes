import React from "react";
import  '../assets/css/aboutus.css'
import useTitle from "../hooks/useTitle";

const Aboutus = () => {
  useTitle('About us | Confess note')
  return (
    <div className="aboutus">
      <h3>About us</h3>
      <p>
        Think of someone you'd like to give thanks to—perhaps a relative, a
        friend, a mentor, or a loved one. Write a letter to this person
        expressing your gratitude, how you feel, and how important he or she is
        (or was) in your life. Think of someone who makes you angry. Write a
        letter to this person expressing how you feel.
      </p>
    </div>
  );
};

export default Aboutus;
