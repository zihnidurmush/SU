function solve(grade) {
    
    let result = '';
    
    if(grade < 3) {
        result = 'Fail';
        grade = 2;
    } else if (grade < 3.5) {
        result = "Poor";
    } else if (grade < 4.5) {
        result = "Good";
    } else if (grade < 5.5) {
        result = "Very good";
    } else if (grade <= 6) {
        result = "Excellent";
    }
    
    console.log(`${result} (${grade < 3 ? 2 : grade.toFixed(2)})`);

    // if (grade < 3) {
    //     console.log(`${result} (${grade})`);
    // } else {
    //     console.log(`${result} (${grade.toFixed(2)})`);
    // }
}



solve(3.33); // Poor (3.33)
solve(4.50); // Very good (4.50)
solve(2.99); // Fail (2)

	
	
	
