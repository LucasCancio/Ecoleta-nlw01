import path from "path";

module.exports = {
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "src", "database", "database.sqlite"),
  },
  //Migrations -> histórico do banco de dados
  migrations: {
    directory: path.resolve(__dirname, "src", "database", "migrations"),
  },
  //Seeds -> popular a base da dados, com dados padrões
  seeds: {
    directory: path.resolve(__dirname, "src", "database", "seeds"),
  },
  useNullAsDefault: true,
};
