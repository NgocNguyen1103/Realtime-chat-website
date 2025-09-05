

const socket = io("https://31b19d1565fd.ngrok-free.app")

const id_room = document.getElementById("id_room");
const id_mess = document.getElementById("id_message");
const name = document.getElementById("name");
const list_messages = document.getElementById("list_messages")
function joinRoom() {
    const room = id_room.value;
    const myName = name.value;
    socket.emit("join_room", room, myName);
}

function sendMessage() {
    const mess = id_mess.value;
    socket.emit("send_message", mess)
}

socket.on("room_message", (name, mess) => {
    const li = document.createElement("li");
    li.textContent = `${name} : ${mess}`;
    list_messages.appendChild(li);
})