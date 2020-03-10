const { resolve } = require("path");
const dotenv = require("dotenv");
const shortid = require("shortid");

const BASE_PATH = resolve(__dirname, "../..");

// generate unique id for the service
const SERVICE_ID = shortid.generate();

// merge concatenated dotenv vars and generated service id
const env = Object.assign(dotenv.config().parsed, { SERVICE_ID });

// reduce it to a nice object, the same as before
const ENV_KEYS = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = { BASE_PATH, ENV_KEYS, SERVICE_ID };
