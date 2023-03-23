function generateHashtag(str) {
    const hash = "#";
    let words = "";
    if (str.length === 0) return false;
    words = str.split(' ');
    words = words.map((word) => word.charAt(0).toUpperCase().concat(word.slice(1)));
    words.unshift(hash);
    if (words.length > 140) return false;
    return words.join("");
}

const str1 = "Hello there thanks for trying my Kata";
const str2 = "Do We have A Hashtag";
const str3 = "Codewars";
console.log(generateHashtag(str1))