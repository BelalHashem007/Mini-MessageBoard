const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date().toUTCString(),
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: new Date().toUTCString(),
  },
];

async function getMessages() {
  return messages;
}
async function getMessageById(id) {
  return messages.find((msg) => msg.id === id);
}
function postMessage(message) {
  messages.push({  id: messages.length + 1 ,...message});
}

module.exports = { getMessages, getMessageById,postMessage };
