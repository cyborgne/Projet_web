// etiquetage.js

// Initialisation du canvas et du contexte 2D pour le dessin
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const points = []; // Stocke les points cliqués

// Fonction de dessin de point lors d'un clic sur le canvas
canvas.addEventListener('click', (e) => {
    const x = e.offsetX;
    const y = e.offsetY;
    
    // Ajout du point aux coordonnées dans le tableau
    points.push({ x, y });

    // Dessin d'un petit rectangle pour chaque point
    ctx.fillRect(x - 2, y - 2, 4, 4);

    // Si c'est le premier point, on commence un nouveau chemin
    if (points.length === 1) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        // Trace une ligne vers le dernier point ajouté
        ctx.lineTo(x, y);
        ctx.stroke();
    }
});

// Fonction pour envoyer les coordonnées du polygone au serveur
function submitLabel() {
    if (points.length < 3) {
        alert("Veuillez définir au moins 3 points pour former un polygone.");
        return;
    }

    // Format des points sous forme de chaîne de caractères
    const pointsStr = points.map(point => `${point.x},${point.y}`).join(':');
    
    // Envoi des points au serveur
    document.getElementById('points').value = pointsStr;
    document.getElementById('labelForm').submit(); // Soumission du formulaire
}
