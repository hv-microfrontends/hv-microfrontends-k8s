import React from "react";
import withLayout from "../../lib/hocs/withLayout";
import List from "../../components/starships/List";

const Starships = ({ classes }) => {
  return <List />;
};

export default withLayout(Starships);
