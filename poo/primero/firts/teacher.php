<?php

  class Teacher extends Person {
      
    private ?string $title;

    private ?string $teacher;


    public function getTitle(): string{
        return $this->title;
    }

    public function setTitle(?string $title){
        $this->title = $title;
    }

    public function getTeacher(): string{
        return $this->teacher;
    }

    public function setTeacher(?string $teacher){
        $this-> teacher = $teacher;
    }
  }

?>