function getPerson(person) {
    try {
      if (!person || typeof person !== 'object' || !('name' in person) || !('age' in person)) {
        throw new Error("Invalid parameter type");
      }
      return `Name: ${person.name}, Age: ${person.age}`;
    } catch (error) {
      return error.message;
    }
  }
  console.log(getPerson({name:'mithun',age:20}))
  console.log(getPerson({name:'mithun'}))
  console.log(getPerson(['name','mithun']))