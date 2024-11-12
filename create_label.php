<?php
// create_label.php - Ajout d'une étiquette
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $catalogId = $_POST['catalogId'];
    $imageId = $_POST['imageId'];
    $name = $_POST['name'];
    $description = $_POST['description'];
    $points = $_POST['points']; // Coordonnées du polygone
    $html = $_POST['html']; // Texte HTML

    $stmt = $pdo->prepare("INSERT INTO Label (catalogId, imageId, name, description, points, html) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->execute([$catalogId, $imageId, $name, $description, $points, $html]);
    echo "Étiquette ajoutée avec succès.";
}
?>
