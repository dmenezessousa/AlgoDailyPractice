// Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
// The first word within the output should be capitalized only if the original word was capitalized(known as Upper Camel Case, also often referred to as Pascal case).
// The next words should be always capitalized.

// Examples:
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"


function toCamelCase(str) {
  const newModefiedString = str.split(/-|_/)
  return newModefiedString.map((str,idx) => {
    return idx === 0 ? str : str.chartAt(0).toUpperCase() + str.slice(1)
  }).join('')
}

console.log(toCamelCase("the-stealth-warrior"))
console.log(toCamelCase("The_Stealth_Warrior"))
console.log(toCamelCase("The_Stealth-Warrior"))