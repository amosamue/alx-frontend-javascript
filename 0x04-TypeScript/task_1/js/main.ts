// Task 1: Teacher interface
interface Teacher {
  readonly firstName: string;      // Only set at initialization
  readonly lastName: string;       // Only set at initialization
  fullTimeEmployee: boolean;       // Always defined
  yearsOfExperience?: number;      // Optional
  location: string;                // Always defined
  [key: string]: any;              // Allow any other properties
}

// Example Teacher object
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,                 // Extra property
};

console.log(teacher3);

// Task 2: Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;         // Required attribute for Directors
}

// Example Director object
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
