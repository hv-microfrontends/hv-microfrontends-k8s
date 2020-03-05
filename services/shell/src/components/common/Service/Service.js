import React, { useState, useEffect } from "react";
import { service } from "@hv/utils";
import withLayout from "../../../lib/hocs/withLayout";

const Service = ({ host, history }) => {
  const [container, setContainer] = useState(null);

  useEffect(() => {
    let idx;

    (async () => {
      const { id, container } = await service.registry(host);

      idx = id;

      setContainer(container);

      service.render(id, history);
    })();

    return () => service.unmount(idx);
  }, []);

  return <main id={container} />;
};

export default withLayout(Service);
