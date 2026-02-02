import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLorem } from "../actions/loremActions";
import "./Lorem.css";

const Lorem = () => {
  const dispatch = useDispatch();

  const { loading, data } = useSelector((state) => state.lorem);


  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }

  return (
    <div className="wrapper">
      <h1 className="main-title">A short Narration of Lorem Ipsum</h1>

      <p className="sub-title">
        Below contains a title and body gotten from a random API.
        <br />
        Please take your time to review
      </p>

      {Array.isArray(data) && data.length === 0 && (
        <p style={{ textAlign: "center" }}>No cards available</p>
      )}

      <div className="grid">
        {Array.isArray(data) &&
          data.map((item, index) => (
            <div className="card" key={index}>
              <p>
                <span className="label">Title:</span> {item.title}
              </p>

              <p>
                <span className="label">Body:</span> {item.body}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Lorem;
