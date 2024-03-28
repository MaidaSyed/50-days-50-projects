const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
];

const types = ["info", "error", "success"];

button.addEventListener("click", () => createNotifiation());

function createNotifiation(message = null, type = null) {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.classList.add(type ? type : randomType());

  notif.innerText = message ? message : randomMessage();

  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 2000);
}

function randomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function randomType() {
  return types[Math.floor(Math.random() * types.length)];
}
