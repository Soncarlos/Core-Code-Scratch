decodeMorse = function(morseCode){
    const pattern = /(?:\s|$)\s*/;
    const a= new Array();
    const words = morseCode.split(pattern);
    for(const i of words){
        a.push(MORSE_CODE[i]);
    }
    return  a.join(' ');
    }