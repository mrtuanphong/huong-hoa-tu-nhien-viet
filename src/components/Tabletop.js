import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";
//https://docs.google.com/spreadsheets/d/11CpJjLgagbHFmyi96oOWu6sAdN0Wfhdig2dsEhQMh6U/edit#gid=0

export default () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: "11CpJjLgagbHFmyi96oOWu6sAdN0Wfhdig2dsEhQMh6U",
      simpleSheet: true
    })
      .then((data) => setData(data))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <>
      <h3>data from google sheets</h3>
      <div>
        {data.map((item, i) => (
          <Fragment key={i}>
            <ul>
              <li>URL -- {item.URL}</li>
              <li>Email - {item.email}</li>
              <li>Token - {item.token}</li>
            </ul>
          </Fragment>
        ))}
      </div>
    </>
  );
}