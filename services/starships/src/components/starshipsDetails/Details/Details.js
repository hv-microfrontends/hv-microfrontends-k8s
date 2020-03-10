import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HvTypography from "@hv/uikit-react-core/dist/Typography";
import { fetchStarshipsDetails } from "../../../lib/api/starships";

const Details = ({ classes }) => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchStarshipsDetails(id);
      setData(data);
    };

    fetchData();
  }, []);

  return (
    data && (
      <HvTypography variant="mTitle" className={classes.title}>
        {data.name} - {data.model}
      </HvTypography>
    )
  );
};

export default Details;
