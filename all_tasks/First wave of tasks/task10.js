

function calculateAgeFromDob(birthDate) {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
        age--;
    }

    return age;

}

// Test cases
console.log(calculateAgeFromDob("1990-05-15")); // 36
console.log(calculateAgeFromDob("2000-12-01")); // 25
console.log(calculateAgeFromDob("1985-08-2")); // 41
console.log(calculateAgeFromDob("2020-08-06")); //  5

