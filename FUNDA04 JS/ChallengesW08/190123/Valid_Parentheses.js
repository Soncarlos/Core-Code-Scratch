function validParentheses(parens) {
  const pat = /\(\)/;
  while (pat.test(parens))
    parens = parens.replace(pat, "");
  return !parens;

}
const str1 = "()" // true
const str2 = ")(()))"//  false
const str3 = "("   // false//
const str4 = "(())((()())())"// true
const str5 = "";
console.log(validParentheses(str3));
