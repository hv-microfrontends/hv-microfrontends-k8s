import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const List = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://swapi.co/api/people");
      const data = await res.json();
      setData(data.results);
    };

    fetchData();
  }, []);

  return (
    <ul>
      {data.map(elem => {
        const id = elem.url.split("/").reverse()[1];

        return (
          <Link key={id} to={`/people/${id}`}>
            <li>{elem.name}</li>
          </Link>
        );
      })}
    </ul>
  );
};

export default List;
