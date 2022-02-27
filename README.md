# Random Quiz Generator App

## Setup

---

1. Clone repo with `git clone https://github.com/mata0050/randomQuizGenerator.git`
2. Setup Env variables

> JWT_SECRET: generate a secret token with more than 32 characters.

> PG_ELEPHANT_URL: Create an elephantSQL account [www.elephantsql.com](https://www.elephantsql.com/) and an instance. Get the url and add it.

> NODE_ENV = development

> PORT = 3001

3. Run `npm install` in the root folder.
4. Change Directory to client `cd client`.
5. In the Client folder run `npm install`. In the client folder is where the frontend is.
6. Change Directory to root `cd ..`.
7. To run both the server and client at the same time `npm run dev`. This will run the server and client continuously and when you save you any changes, it will restart both the server and client with the new changes.

> If you want to run the server by itself `npm run server` and to run the client by itself `npm run client`

### Dependencies Backend

- Bcryptjs
- Dotenv
- Express
- Express-async-handler
- Gravatar (user profile icons)
- JsonWebToken
- PG
- Concurrently
- Nodemon

### Screenshots

![Screen Shot 2022-02-27 at 9 58 06 AM](https://user-images.githubusercontent.com/58061791/155887730-4a6e10da-a476-4c49-8320-7c2a1795a479.png)

![Screen Shot 2022-02-27 at 9 57 59 AM](https://user-images.githubusercontent.com/58061791/155887729-4ff27aff-844d-465c-a2d3-6a194834c93e.png)

![Screen Shot 2022-02-27 at 9 53 17 AM](https://user-images.githubusercontent.com/58061791/155887734-f6134b0f-1d80-4b21-87c5-59190a3d6752.png)

![Screen Shot 2022-02-27 at 9 53 35 AM](https://user-images.githubusercontent.com/58061791/155887732-6dfa25b0-eb46-46b9-b2d0-b1071417080b.png)

![Screen Shot 2022-02-27 at 9 53 41 AM](https://user-images.githubusercontent.com/58061791/155887731-bc27f72a-cad0-4a52-a45a-497a366f29b1.png)



![Screen Shot 2022-02-27 at 9 53 51 AM](https://user-images.githubusercontent.com/58061791/155887722-8917dccc-a1cf-4b8a-aa39-abccfe5f114e.png)

![Screen Shot 2022-02-27 at 9 53 56 AM](https://user-images.githubusercontent.com/58061791/155887724-0c4beecc-fe34-47f3-a2f6-2b1063af7188.png)

![Screen Shot 2022-02-27 at 9 54 42 AM](https://user-images.githubusercontent.com/58061791/155887726-8cdda630-399d-4d48-b9b2-cdcdccbd7f0f.png)

![Screen Shot 2022-02-27 at 9 57 47 AM](https://user-images.githubusercontent.com/58061791/155887727-3831d481-0678-4fef-abd4-5eb66cb4c321.png)

![Screen Shot 2022-02-27 at 9 57 53 AM](https://user-images.githubusercontent.com/58061791/155887728-a70da3ff-35ed-48a2-9f78-af3f7cdeb4be.png)





## ERD - Diagram

---

![Screen Shot 2022-02-11 at 4 28 38 PM](https://user-images.githubusercontent.com/58061791/153672804-f175ebf4-8c42-4217-b30b-55ff30707089.png)
