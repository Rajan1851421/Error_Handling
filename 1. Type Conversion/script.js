function convertToNumber(string) {
    try {
      const num = Number(string);
      if (isNaN(num)) {
        throw new Error("Invalid number");
      }
      return num;
    } catch (error) {
      return error.message;
    }
  }
  const num1 = convertToNumber("123");
  console.log(num1); 
  
  const num2 = convertToNumber("ABC");
  console.log(num2); 
    