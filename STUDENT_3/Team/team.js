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
