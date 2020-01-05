import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://swapi.co/api/people/${id}`);
      const data = await res.json();
      setData(data);
    };

    fetchData();
  }, []);

  return data ? (
    <h1>
      {data.name} --- {data.birth_year}
    </h1>
  ) : (
    ""
  );
};

export default Details;
