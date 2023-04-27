class Person {
    constructor(name = 'Unknown', age = 0) {
      this.name = name;
      this.age = age;
    }
  
    getDetails() {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }
  
  
  const person1 = new Person('mithun', 30);
  
 
  console.log(person1.getDetails()); // Output: "Name: mithun, Age: 30"
  
  // Instantiating another instance of the Person class with default parameters
  const person2 = new Person();
  
  // Calling the getDetails method
  console.log(person2.getDetails()); // Output: "Name: Unknown, Age: 0"
  