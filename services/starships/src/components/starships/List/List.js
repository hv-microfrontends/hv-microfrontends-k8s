import React, { useState, useEffect } from "react";
import HvList from "@hv/uikit-react-core/dist/List";
import { fetchStarships } from "../../../lib/api/starships";

const parseData = data =>
  data.map(elem => {
    const id = elem.url.split("/").reverse()[1];

    return {
      label: elem.name,
      path: `/starships/${id}`
    };
  });

const List = ({ classes }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchStarships();
      const listData = parseData(data.results);
      setData(listData);
    };

    fetchData();
  }, []);

  return (
    <div className={classes.root}>
      <HvList
        values={data}
        selectable={false}
        condensed
        selectable={false}
        useRouter
      />
    </div>
  );
};

export default List;
