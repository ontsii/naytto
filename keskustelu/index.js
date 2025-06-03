// Esimerkkiviestit
const messages = [
  {
    sender: "LisaFan123",
    date: "2025-06-01",
    title: "Paras jakso?",
    content: "Mikä on teidän mielestä kaikkien aikojen paras jakso?"
  }
];

// Lisää uusi viesti
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

// Tulostetaan viestit
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
