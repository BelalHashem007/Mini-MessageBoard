const { Client } = require("pg");
const createTable = `CREATE TABLE IF NOT EXISTS messages(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(255),
    message VARCHAR(255),
    date TEXT    
);`;
const insertData = `
INSERT INTO messages (username,message,date) 
VALUES
    ('Amando','Hi there!',$1),
    ('Charles','Hello, World!',$1),
    ('Belal','test123',$1);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.argv[2],
  });
  await client.connect();
  await client.query(createTable);
  await client.query(insertData, [new Date().toUTCString()]);
  await client.end();
  console.log("done");
}
main();
