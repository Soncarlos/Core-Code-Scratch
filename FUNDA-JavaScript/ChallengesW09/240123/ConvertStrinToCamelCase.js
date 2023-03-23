const str1 = "the-stealth-warrior";// gets converted to "theStealthWarrior"
const str2 = "The_Stealth_Warrior";// gets converted to "TheStealthWarrior"
const str3 = "carlos-jose";
const str = "";
function toCamelCase(str) {
  let result = str[0];
  for (let i = 1; i < str.length; i++) {
    if (str[i] === '-' || str[i] == '_') {
      result += str[i + 1].toUpperCase();
      i++;
    }
    else {
      result += str[i];
    }
  }
  return result;
}
console.log(toCamelCase(str3))

