<?php
// create_catalog.php - Création d'un nouveau catalogue
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $description = $_POST['description'];
    $userAccountId = $_POST['userAccountId']; // ID de l'utilisateur

    $stmt = $pdo->prepare("INSERT INTO Catalog (userAccountId, name, description) VALUES (?, ?, ?)");
    $stmt->execute([$userAccountId, $name, $description]);
    echo "Catalogue créé avec succès.";
}
?>
