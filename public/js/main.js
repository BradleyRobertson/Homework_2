(() => {
  const socket = io();

  let messageList = document.querSelector('ul'),
  chatForm = document.querySelector('form'),
  chatMessage = chatForm.querySelector('.message');

  function handleSendMessage(e) {
    e.preventDefault();
    debugger;
  }

  function appendMessage(msg) {
  //  debugger;
  let newMsg = `<li>${msg.message}</li>`;
  messageList.innerHTML += newMsg;
  }

  function appendDiscMessage(msg) {
    let newMsg = `<li>${msg}</li>`;
    messageList.innerHTML += newMsg;
  }


  chatForm.addEventListener('submit', handleSendMessage, false);
  socket.addEventListener('chat message', appendMessage, false);
  socket.addEventListener('disconnect message', appendDiscMessage, false);


})();
