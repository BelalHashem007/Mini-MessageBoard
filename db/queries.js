const pool = require("./pool");

async function getMessages() {
  const result = await pool.query("SELECT * FROM messages");
  return result.rows;
}

async function getMessageById(id) {
    console.log(id)
  const result = await pool.query("SELECT * FROM messages WHERE id=$1", [id]);
  console.log(result)
  return result.rows;
}

async function addMessage(message) {
  await pool.query(
    "INSERT INTO messages (username,message,date) VALUES($1,$2,$3)",
    [message.username, message.message, message.date]
  );
}

module.exports = { getMessages, getMessageById, addMessage };
