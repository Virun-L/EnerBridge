 // Search functionality for team members
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search team members...";
  searchInput.style.margin = "20px auto";
  searchInput.style.display = "block";
  searchInput.style.padding = "10px";
  searchInput.style.width = "80%";
  
  const teamContainer = document.querySelector(".team-container");
  teamContainer.parentNode.insertBefore(searchInput, teamContainer);

  searchInput.addEventListener("keyup", () => {
    const query = searchInput.value.toLowerCase();
    document.querySelectorAll(".team-card, .team-card2").forEach(card => {
      const name = card.querySelector("h3").textContent.toLowerCase();
      card.style.display = name.includes(query) ? "block" : "none";
    });
  });
});
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "🌙 Toggle Dark Mode";
toggleBtn.style.margin = "20px auto";
toggleBtn.style.display = "block";
toggleBtn.style.padding = "10px 15px";
toggleBtn.style.cursor = "pointer";
document.body.prepend(toggleBtn);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Dark mode styles
const style = document.createElement("style");
style.innerHTML = `
  .dark-mode {
    background-color: #121212;
    color: #f4f4f4;
  }
  .dark-mode .team-card, 
  .dark-mode .team-card2 {
    background-color: #1e1e1e;
    color: white;
  }
  .dark-mode footer {
    background-color: #111;
    color: #eee;
  }
`;
document.head.appendChild(style);
const funFacts = {
  "Kithsara Witharana": "Loves football and is a huge fan of FC Barcelona ⚽",
  "Aakash Wijesekara": "Enjoys playing hockey and organizing events 🏑",
  "Shaginthiya Mahendran": "Passionate about photography 📸",
  "Virun Liyanage": "Gaming enthusiast and loves exploring new tech 🎮"
};

document.querySelectorAll(".team-card, .team-card2").forEach(card => {
  card.addEventListener("click", () => {
    const name = card.querySelector("h3").textContent;
    alert(`${name}: ${funFacts[name] || "No fun fact available yet!"}`);
  });
});
const cards = document.querySelectorAll(".team-card, .team-card2");

const revealCards = () => {
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < window.innerHeight - 100) {
      card.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealCards);

// Add reveal CSS
const scrollStyle = document.createElement("style");
scrollStyle.innerHTML = `
  .team-card, .team-card2 {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.6s ease-out;
  }
  .team-card.show, .team-card2.show {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(scrollStyle);
document.querySelectorAll(".team-card, .team-card2").forEach(card => {
  const tasks = card.querySelectorAll("ul li").length;
  const counter = document.createElement("p");
  counter.textContent = `✅ Contributions: ${tasks}`;
  counter.style.fontWeight = "bold";
  counter.style.color = "#00796b";
  card.querySelector(".team-info, .team-info2").appendChild(counter);
});
