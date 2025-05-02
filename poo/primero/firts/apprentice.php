<?php
 
  class Apprentice extends Person{
     private ?string $birthday;
 
     private int $telephoneContact;
    

    public function getBirthday(): string|null{
     return $this->birthday;
    }

    public function setBirthday(?string $birthday):void{
        $this->birthday = $birthday;
    }
  
    public function getTelephoneContact(): int{
        return $this->telephoneContact;
    }
   
    public function setTelephoneContact(int $telephoneContact):void{
        $this->telephoneContact = $telephoneContact;
    }

}

?>