# Random Quiz Generator App

## Setup
***

1. Clone repo with `git clone https://github.com/mata0050/randomQuizGenerator.git`
2. Setup Env variables
   > JWT_SECRET: l have slacked the code

> PG_ELEPHANT_URL: l have slacked the code. This string will allow us to connect to an Elephant Instance l created, so have are all connected to the same database at all times.

3. Run `npm install` in the root folder.
4. Change Directory to client `cd client`.
5. In the Client folder run `npm install`. In the client folder is where the frontend is.
6. Change Directory to root `cd ..`.
7. To run both the server and client at the same time `npm run dev`. This will run the server and client continuously and when you save you any changes, it will restart both the server and client with the new changes.

> If you want to run the server by itself `npm run server` and to run the client by itself `npm run client`


### Dependencies Backend
* Bcryptjs
* Dotenv
* Express
* Express-async-handler
* Gravatar (user profile icons)
* JsonWebToken
* PG