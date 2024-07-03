// Fonction pour gérer le clic sur "Ajouter une console"
function handleClickAddConsole() {
  const modal = document.getElementById("modal");
  modal.style.display = "block";
}

// Attachez la fonction handleClickAddConsole à l'événement click du bouton "Ajouter une console"
const addConsoleBtn = document.getElementById("ajouter_console_btn");
addConsoleBtn.addEventListener("click", handleClickAddConsole);

// Gérer la fermeture de la modal lorsque l'utilisateur clique sur × (close)
const closeModalBtn = document.getElementsByClassName("close")[0];
closeModalBtn.onclick = function() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
};

// Gérer la fermeture de la modal lorsque l'utilisateur clique en dehors de celle-ci
window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }

};
