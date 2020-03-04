import React, { useState, useEffect } from "react";
import { service } from "@hv/utils";

const Service = ({ host, history }) => {
  const [serviceId, setServiceId] = useState(null);

  useEffect(() => {
    let serviceId = null;

    (async () => {
      const { serviceId, serviceSrc } = await service.load(host);

      setServiceId(serviceId);

      service.render(serviceId, serviceSrc, history);
    })();

    return () => service.unmount(serviceId);
  }, []);

  return <main id={serviceId} />;
};

export default Service;
