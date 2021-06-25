import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./Schema";
import cors from "cors";
import { createConnection } from "typeorm";
import { Marque } from "./Entities/Marque";
import { Model } from "./Entities/Model";

const main = async () => {
  const PORT = 8000;
  const HOST = "0.0.0.0";

  await createConnection({
    type: "postgres",
    host: "postgres",
    port: 5432,
    database: "postgres",
    username: "postgres",
    password: "postgrespassword",
    logging: true,
    synchronize: false,
    entities: [Marque, Model],
  });

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );

  app.listen(PORT, HOST);
};

main().catch((err) => {
  console.log(err);
});