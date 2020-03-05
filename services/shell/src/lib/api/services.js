const services = {
  data: [
    {
      name: "starships",
      host: "localhost:3001"
    }
  ]
};

const fetchServices = async () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(services), 500);
  });
};

export { fetchServices };
