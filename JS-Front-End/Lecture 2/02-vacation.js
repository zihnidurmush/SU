function vacation(groupOfPeople, typeOfTheGroup, dayOfTheWeek) {
    
    const isFriday = dayOfTheWeek === 'Friday';
    const isSaturday = dayOfTheWeek === 'Saturday';
    const isSunday = dayOfTheWeek === 'Sunday';
    
    const isStudentsGroup = typeOfTheGroup === 'Students';
    const isBusinessGroup = typeOfTheGroup === 'Business';
    const isRegularGroup = typeOfTheGroup === 'Regular';
    
    let priceForSinglePerson = 0;
    
    if (isFriday) {
        if (isStudentsGroup) {
            priceForSinglePerson += 8.45;
        } else if (isBusinessGroup) {
            priceForSinglePerson += 10.9;
        } else if (isRegularGroup) {
            priceForSinglePerson += 15;
        }
    } else if (isSaturday) {
        if (isStudentsGroup) {
            priceForSinglePerson += 9.8;
        } else if (isBusinessGroup) {
            priceForSinglePerson += 15.6;
        } else if (isRegularGroup) {
            priceForSinglePerson += 20;
        }
    } else if (isSunday) {
        if (isStudentsGroup) {
            priceForSinglePerson += 10.46;
        } else if (isBusinessGroup) {
            priceForSinglePerson += 16;
        } else if (isRegularGroup) {
            priceForSinglePerson += 22.5;
        }
    }
    
    const totalSumWithoutDiscount = groupOfPeople * priceForSinglePerson;
    const totalSumWithDiscount = 
        isStudentsGroup && groupOfPeople >= 30 
            ? totalSumWithoutDiscount * 0.85 
            : isBusinessGroup && groupOfPeople >= 100 
            ? (groupOfPeople - 10) * priceForSinglePerson 
            : isRegularGroup && groupOfPeople >= 10 && groupOfPeople <= 20 
            ? totalSumWithoutDiscount * 0.95 
            : totalSumWithoutDiscount;
    
    console.log(`Total price: ${totalSumWithDiscount.toFixed(2)}`);
}

vacation(40,
    "Regular",
    "Saturday"
    )

// function solve(groupOfPeople, typeOfTheGroup, dayOfTheWeek) {
//     let price;
//     let totalPrice;
//     switch (typeOfTheGroup) {
//         case 'Students':
//         switch (dayOfTheWeek) {
//             case 'Friday':
//             price = 8.45;
//             if (groupOfPeople >= 30) {
//                 price = price * 0.85;
//             }
//             break;
//             case 'Saturday':
//             price = 9.80;
//             if (groupOfPeople >= 30) {
//                 price = price * 0.85;
//             }
//             break;
//             case 'Sunday':
//             price = 10.46;
//             if (groupOfPeople >= 30) {
//                 price = price * 0.85;
//             }
//             break;
//         }
//         break;
//         case 'Business':
//         switch (dayOfTheWeek) {
//             case 'Friday':
//             price = 10.90;
//             if (groupOfPeople >= 100) {
//                 groupOfPeople = groupOfPeople - 10;
//             }
//             break;
//             case 'Saturday':
//             price = 15.60;
//             if (groupOfPeople >= 100) {
//                 groupOfPeople = groupOfPeople - 10;
//             }
//             break;
//             case 'Sunday':
//             price = 16;
//             if (groupOfPeople >= 100) {
//                 groupOfPeople = groupOfPeople - 10;
//             }
//             break;
//         }
//         break;
//         case 'Regular':
//         switch (dayOfTheWeek) {
//             case 'Friday':
//             price = 15;
//             if (groupOfPeople >= 10 && groupOfPeople <= 20) {
//                 price = price * 0.95;
//             }
//             break;
//             case 'Saturday':
//             price = 20;
//             if (groupOfPeople >= 10 && groupOfPeople <= 20) {
//                 price = price * 0.95;
//             }
//             break;
//             case 'Sunday':
//             price = 22.50;
//             if (groupOfPeople >= 10 && groupOfPeople <= 20) {
//                 price = price * 0.95;
//             }
//             break;
//         }
//         break;
//     }
//     totalPrice = price * groupOfPeople;
//     console.log(`Total price: ${totalPrice.toFixed(2)}`);
// }

// solve(30,
//     "Students",
//     "Sunday"
// )