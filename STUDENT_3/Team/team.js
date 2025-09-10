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
