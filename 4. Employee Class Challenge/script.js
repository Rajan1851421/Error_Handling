

class Employee {
    constructor(name, position, salary) {
      this.name = name;
      this.position = position;
      this.salary = salary;
    }
  
    getSalary() {
      return this.salary;
    }
  }
  const employee1 = new Employee('Rajan ', 'Devloper', 50000);


  

  console.log(employee1.getSalary());
  