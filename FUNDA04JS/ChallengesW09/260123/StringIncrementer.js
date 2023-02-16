function incrementString(strng) {

    const expReg = /\d*$/;
    //let arr = expReg.match(strng);
    let arr2 = strng.match(expReg);
    if (arr2 === 0) {
        return strng = strng.replace(arr2, "").concat(1);
    }
    else {
        let resp = eval(`${Number(arr2)} + ${1}`);
        console.log(resp);
        strng = strng.replace(arr2, "").concat(resp);
    }
    return strng;
}
const str = "foo99";
const str1 = "foobar23" //-> foobar24
const str2 = "foo0042" // -> foo0043
const str3 = "foo9" // -> foo10
const str4 = "foo099" //-> foo100
const str5 = "foobar000"
console.log(incrementString(str5))