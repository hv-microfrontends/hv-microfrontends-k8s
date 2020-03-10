/**
 * Copyright (c) 2020 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

import React, { useState, useEffect } from "react";
import HvTable from "@hv/uikit-react-core/dist/Table";
import { fetchStarships } from "../../../lib/api/starships";

const getColumns = () => [
  {
    headerText: "Name",
    accessor: "name",
    cellType: "link",
    fixed: "left"
  },
  {
    headerText: "Model",
    accessor: "model",
    cellType: "alpha-numeric"
  },
  {
    headerText: "Manufacturer",
    accessor: "manufacturer",
    cellType: "alpha-numeric"
  },
  {
    headerText: "Passengers",
    accessor: "passengers",
    cellType: "alpha-numeric"
  },
  {
    headerText: "Cargo capacity",
    accessor: "cargo_capacity",
    cellType: "alpha-numeric"
  },
  {
    headerText: "Class",
    accessor: "starship_class",
    cellType: "alpha-numeric"
  }
];

const parseData = data =>
  data.map(elem => {
    console.log("elem: ", elem);
    const id = elem.url.split("/").reverse()[1];

    return {
      ...elem,
      link: { displayText: elem.name, url: `/starships/${id}` }
    };
  });

const Table = () => {
  const [pageSize, setPageSize] = useState(10);
  const [data, setData] = useState([]);

  const onPageSizeChange = newPageSize => setPageSize(newPageSize);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchStarships();
      const data = parseData(res.results);
      setData(data);
    };

    fetchData();
  }, []);

  return (
    data && (
      <HvTable
        data={data}
        columns={getColumns()}
        defaultPageSize={10}
        pageSize={pageSize}
        resizable={false}
        labels={{}}
        onPageSizeChange={onPageSizeChange}
      />
    )
  );
};

export default Table;
