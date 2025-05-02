<?php

  class Person {

    private int $identification;
    private string $name;
    private string $lastName;
    private string $birthday;

    public function getIdentification(){
        return $this -> identification;
    }

    public function setIdentification(int $identification){
        $this -> identification = $identification;
    }

    public function getName(){
        return $this -> name;
    }

    public function setName(string $name){
        $this -> name = $name;
    }

    public function getLastname(){
        return $this -> lastName;
    }

    public function setLastname(string $lastName){
        $this -> lastName = $lastName;
    }

    public function getBirthday(){
        return $this -> birthday;
    }

    public function setBirthday(string $birthday){
        $this -> birthday = $birthday;
    }

  }

?>
