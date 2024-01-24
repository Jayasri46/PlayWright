class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    displayInfo() {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
  }
  class Student extends Person {
    constructor(name, age, grade) {
      super(name, age);
      this.grade = grade;
    }
    displayInfo() {
      super.displayInfo();
      console.log(`Grade: ${this.grade}`);
    }
  }

  class Teacher extends Person {
    constructor(name, age, salary, subject) {
      super(name, age);
      this.salary = salary;
      this.subject = subject;
    }
  
    displayInfo() {
      super.displayInfo();
      console.log(`Salary: ${this.salary}, Subject: ${this.subject}`);
    }
  }
  
  class CollegeStudent extends Student {
    constructor(name, age, grade, year, major) {
      super(name, age, grade);
      this.year = year;
      this.major = major;
    }
  
    displayInfo() {
      super.displayInfo();
      console.log(`Year: ${this.year}, Major: ${this.major}`);
    }
  }
  

  const student = new Student("Jayasri", 18, 12);
  const teacher = new Teacher("Neeraja", 35, 50000, "Maths");
  const collegeStudent = new CollegeStudent("Sai", 20, 2, "Third", "Physics");
  
  student.displayInfo();
  teacher.displayInfo();
  collegeStudent.displayInfo();
  