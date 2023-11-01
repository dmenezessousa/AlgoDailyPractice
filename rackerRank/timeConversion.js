// Returns

// string: the time in  hour format
// Input Format

// A single string  that represents a time in -hour clock format (i.e.:  or ).

// Constraints

// All input times are valid
// Sample Input

// 07:05:45PM
// Sample Output

// 19:05:45

function timeConversion(s) {
  // Write your code here
  let hours  = parseInt(s.substring(0,2));
  const minutes = s.substring(3,5);
  const seconds = s.substring(6,8);
  const morningOrNight = s.substring(8,10);


if(morningOrNight === "PM" && hours !== 12){
  hours += 12;
}else if(morningOrNight === "AM" && hours === 12){
  hours = 0
}

if(hours < 10){
  hours = "0" + hours
}

  // console.log(`${hours}:${minutes}:${seconds}`)
  return(`${hours}:${minutes}:${seconds}`)
}

timeConversion("07:05:45PM")