<?php
// informations de connection

$user = '385214';
$pass = 'lescssEnForce2';

try {
  $db = new PDO ('mysql-projetwebb2024.alwaysdata.net', $user, $pass);
} catch (PDOException $e) {
  print "Erreur :" .$e->getMessage() . "</br>";
  die;
}


/*
$dbConn = array(
  'user' => '385214', // nom de l'utilisateur
  'pass' => 'lescssEnForce2', // MDP de connexion 
  'url' => 'mysql-projetwebb2024.alwaysdata.net'
  //'name' => 'projet-web2024_database', // nom de la base de données
  //'host' => 'localhost' // numéro de port. 
?>*/
