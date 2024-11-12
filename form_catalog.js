// form_catalog.js

// Validation simple pour vérifier que le nom du catalogue est renseigné
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        const name = document.getElementById("name").value.trim();
        
        // Vérification que le champ "Nom du catalogue" n'est pas vide
        if (name === "") {
            alert("Le nom du catalogue est requis.");
            event.preventDefault(); // Empêche l'envoi du formulaire
        } else {
            alert("Le catalogue a été créé avec succès !"); // Message de confirmation
        }
    });
});
