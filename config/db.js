const { Pool, Client } = require('pg');

// Getting db from environment
require('dotenv').config();

const connectionString = process.env.PG_URL;
const connectionELEPHANT_SHARED_DEV = process.env.PG_ELEPHANT_URL;

const poolPROD = new Pool({
  connectionString,
  // enable before launch --- research
  ssl: {
    rejectUnauthorized: false,
    // ca: fs.readFileSync(CA_CERT).toString(),
  },
});

//Connection to Elephant SQL db
const clientSharedDEV = new Client(connectionELEPHANT_SHARED_DEV);

// Check if in production mode
const pool = process.env.NPM_CONFIG_PRODUCTION ? poolPROD : clientSharedDEV;

pool
  .connect()
  .then(() => {
    process.env.NPM_CONFIG_PRODUCTION
    ? console.log('👉We have Connected DB Successfully PRODUCTION ENV😀😀')
    : console.log(
        'We have Connected DB Successfully DEVELOPMENT ENV😈👿👹👺 '
      );
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = pool;
