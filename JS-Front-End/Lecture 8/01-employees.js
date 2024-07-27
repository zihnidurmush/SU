function fanciestSolve(employeeNames) {
    const result = employeeNames
    .map(name => ({name, personalNumber: name.length}))
    .forEach(employee => console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`))
};

// function fancySolve(employeeNames) {
//     const employees = [];

//     for (const name of employeeNames) {
//         const employee = {
//             name,
//             personalNumber: name.length,
//         };
//         employees.push(employee);
//     }

//     for (const employee of employees) {
//         console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`);
//     }
// }

// function solve(employeeNames) {
//     // Associative array
//     const employees = {};

//     for (const name of employeeNames) {
//         employees[name] = name.length;
//     }

//     for (const employee in employees) {
//         console.log(`Name: ${employee} -- Personal Number: ${employees[employee]}`);
//     }
// }


// function solve(input) {
//     let employees = input;

//     for (const [key] in employees) {  
//         const employeeName = employees[key];
//         const personalNumber = employees[key].length;
//         console.log(`Name: ${employeeName} -- Personal Number: ${personalNumber}`);
//     }
// }

// function solve(input) {
//     const employees = input;

//     for (let i = 0; i < employees.length; i++) {
//         const employeeName = employees[i];
//         const personalNumber = employeeName.length;

//         console.log(`Name: ${employeeName} -- Personal Number: ${personalNumber}`);
//     }
// }


fanciestSolve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);

// Name: Silas Butler -- Personal Number: 12
// Name: Adnaan Buckley -- Personal Number: 14
// Name: Juan Peterson -- Personal Number: 13
// Name: Brendan Villarreal -- Personal Number: 18

// solve([
//     'Samuel Jackson',
//     'Will Smith',
//     'Bruce Willis',
//     'Tom Holland'
// ]);
// Name: Samuel Jackson -- Personal Number: 14
// Name: Will Smith -- Personal Number: 10
// Name: Bruce Willis -- Personal Number: 12
// Name: Tom Holland -- Personal Number: 11
