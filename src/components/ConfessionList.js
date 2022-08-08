import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import "../assets/css/confessionList.css";
import { ref, onValue, database as db } from "../config/firebase";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
const ConfessionList = () => {
  const [confessList, setConfessList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const monthList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    onValue(ref(db, "confessions"), (snapshot) => {
      const _data = snapshot.val();
      let _confessionList = [];
      for (let key in _data) {
        _confessionList.push(_data[key]);
      }
      setConfessList(_confessionList);
      setIsLoading(false);
    });
  }, []);

  return (
    <center>
      <div className="confession-list">
        {isLoading ? (
          <div style={{ width: "70%", padding: "25px" }}>
            <ShimmerSimpleGallery
              card
              imageHeight={300}
              caption
              col={3}
              row={2}
            />
          </div>
        ) : confessList.length > 0 ? (
          confessList.map((confession, index) => {
            let _date = new Date(confession.createdAt);
            return (
              <div key={index} className="confession-card">
                {`${_date.getFullYear()} ${
                  monthList[_date.getMonth()]
                } ${_date.getDate()}`}
                <br />
                <br />
                <br />
                {confession.note}
                <div className="time-ago">
                  <Moment fromNow>{_date}</Moment>
                </div>
              </div>
            );
          })
        ) : (
          <div>No confession notes!!!</div>
        )}
      </div>
    </center>
  );
};

export default ConfessionList;
