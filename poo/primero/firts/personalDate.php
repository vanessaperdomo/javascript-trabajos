<?php

include ('libreria/firts/person.php');
include ('libreria/firts/apprentice.php');
include ('libreria/firts/teacher.php');

$apprentice = new Apprentice();
$apprentice->setName('laura Perez');
$apprentice->setTelephoneContact(678290);
$apprentice->setBirthday('16-04-2006');
$teacher = new Teacher();
$teacher->setTeacher('Andres Moreno');
$teacher->setTitle('Ing. System');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        echo "apprentice date";
        echo "<br/>";
        echo "names: ".$apprentice->getName();
        echo "<br/>";
        echo "telephone: ".$apprentice->getTelephoneContact();
        echo "<br/>";
        echo "birthday: " .$apprentice->getBirthday();
        echo "<br/>";
        echo "teacher date";
        echo "<br/>";
        echo "teacher: " .$teacher->getTeacher();
        echo "<br/>";
        echo "title: " .$teacher->getTitle();
        
    ?>
</body>
</html>

