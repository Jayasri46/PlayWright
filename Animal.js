class Animal {
    eat() {
      console.log("Animal can eat");
    }
    sleep() {
      console.log("Animal can sleep");
    }
  }
  
  class Bird extends Animal {
    eat() {
      console.log("Bird can eat");
    }
    sleep() {
      console.log("Bird can sleep");
    }
    fly() {
      console.log("Bird can fly");
    }
  }
  
const a = new Animal();
a.eat(); 
a.sleep(); 
  
const myBird = new Bird();
  myBird.eat(); 
  myBird.sleep(); 
  myBird.fly(); 
  