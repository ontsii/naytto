const messages = [
  {
    sender: "LisaFan123",
    date: "2025-06-01",
    title: "Paras jakso?",
    content: "Mikä on teidän mielestä kaikkien aikojen paras jakso?"
  }
];

function addMessage(formData) {
  const date = new Date().toISOString().split("T")[0];
  const message = {
    sender: formData.sender,
    date,
    title: formData.title,
    content: formData.content
  };
  messages.push(message);
  renderMessages();
}

function renderMessages() {
  const container = document.getElementById("message-list");
  container.innerHTML = "";
  messages.forEach(msg => {
    container.innerHTML += `
      <div class="message">
        <h3>${msg.title}</h3>
        <p><strong>${msg.sender}</strong> – ${msg.date}</p>
        <p>${msg.content}</p>
      </div>
    `;
  });
}

document.addEventListener("DOMContentLoaded", renderMessages);

messages.push(
    {
        sender: "mr customer",
        date: "2010-05-10",
        title: "looking for someone",
        body: "Hi, I'm looking for someone I used to know in high school. I'm wondering if I could find him here?"
    },
    {
        sender: "Moe",
        date: "2010-05-10",
        title: "re: looking for someone",
        body: "Let's ask around. What's his name?"
    },
    {
        sender: "mr customer",
        date: "2010-05-10",
        title: "re: looking for someone",
        body: "Yeah, his name is Seymore Butz."
    },
    {
        sender: "Moe",
        date: "2010-05-10",
        title: "re: looking for someone",
        body: "Is there a Butz here? Everybody! I wanna Seymore Butz!"
    },
    {
        sender: "Barney",
        date: "2010-05-10",
        title: "re: looking for someone",
        body: "LOL"
    },
    {
        sender: "Moe",
        date: "2010-05-10",
        title: "re: looking for someone",
        body: "Oh, wait a minute. Listen you little scum-sucking pus bucket. When I get my hands on you, I'm gonna pull out your eyeballs with a corkscrew!"
    },
    {
        sender: "mr customer",
        date: "2010-05-10",
        title: "re: looking for someone",
        body: "😂😂😂😂😂😂😂😂😂😂😂"
    }
);
function renderMessages() {
  const container = document.getElementById('messages');
  container.innerHTML = '';
  messages.forEach(msg => {
    container.innerHTML += `
      <div class="message">
          <strong>${msg.sender}</strong> <em>${msg.date}</em><br>
          <b>${msg.title}</b><br>
          <div>${msg.body}</div>
      </div>
    `;
  });
}

  document.getElementById('newMsgBtn').onclick = () => {
    document.getElementById('dialogBg').style.display = 'flex';
};
  document.getElementById('cancelBtn').onclick = () => {
    document.getElementById('dialogBg').style.display = 'none';
    document.getElementById('sender').value = '';
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
  };
    document.getElementById('sendBtn').onclick = () => {
      const sender = document.getElementById('sender').value.trim();
      const title = document.getElementById('title').value.trim();
      const content = document.getElementById('content').value.trim();
      if(sender && title && content) {
        const today = new Date().toISOString().slice(0,10);
        messages.unshift({ sender, date: today, title, content });
        renderMessages();
        document.getElementById('dialogBg').style.display = 'none';
        document.getElementById('sender').value = '';
        document.getElementById('title').value = '';
        document.getElementById('content').value = '';
      }
  };

renderMessages();