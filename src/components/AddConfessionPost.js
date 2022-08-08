import React, { useState } from "react";
import "../assets/css/addConfessionPost.css";
import { FaLock } from "react-icons/fa";
import { set, ref, database as db, onValue } from "../config/firebase";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toast";

const AddConfessionPost = () => {
  const [note, setNote] = useState("");

  const addConfess = () => {
    // uuid usages
    // React toast for success or error messages

    if (note) {
      set(ref(db, "confessions/" + uuidv4()), {
        note: note,
        createdAt: Date.now(),
      }).then((err) => {
        if (!err) {
          setNote("");
          toast.success("Confession Added!!!");
          onValue(ref(db, "confessions"), (snapshot) => {
            let _data = snapshot.val();
            for (let key in _data) {
              let createdAt = new Date(_data[key].createdAt);
              createdAt.setDate(createdAt.getDate() + 1); // 24 hours
              if (new Date() >= createdAt) {
                console.log("Exceeded 24hours, it has to be delete from db.");
                set(ref(db, "confessions/" + key), null);
              }
            }
          });
        } else {
          toast.error("Could not add confession!!!");
        }
      });
    }
  };
  return (
    <center>
      <ToastContainer position="top-right" delay="4000" />
      <div className="add-confession-post">
        <textarea
          rows="8"
          cols="85"
          placeholder="Write your confession here .."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        ></textarea>
        <br />
        <button className="confess-btn" onClick={() => addConfess()}>
          Confess
        </button>
      </div>
      <FaLock size="8" />
      <small>Confess note will remain for 24 hours</small>
    </center>
  );
};

export default AddConfessionPost;
