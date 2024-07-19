                                    // liste des variables // 

const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

const morseToLatin = {
    '-': "T",
    '--': "M",
    '---': "O",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.': "N",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..': "D",
    '-..-': "X",
    '-...': "B",
    '.': "E",
    '.-': "A",
    '.--': "W",
    '.---': "J",
    '.--.': "P",
    '.-.': "R",
    '.-..': "L",
    '..': "I",
    '..-': "U",
    '..-.': "F",
    '...': "S",
    '...-': "V",
    '....': "H"
  }

  let boutontxt = document.querySelector("#boutontxt");

  

                                        //liste de fonction mis en place // 

function getLatinCharacterList (text) {
    let splited= text.split('')
    console.log(splited)
}

function translateLatinCharacter (cara) {
    console.log (latinToMorse[cara])
}

function encode (text) {  //fonction cle d'encodage
    let splited= text.split('')
    console.log(splited)
        for (let i = 0; i < splited.length; i++) {
            translateLatinCharacter (splited[i])
        }
}

function getMorseCharacterList(morse) {
    let morsed= morse.split(' ')
    console.log(morsed)
}

function translateMorseCharacter (cara) {
    console.log (morseToLatin[cara])
}

function decode (morse) { // fonction cle de décodage 
    let morsed= morse.split(' ')
        for (let i = 0 ; i < morsed.length ; i++) {
            translateMorseCharacter (morsed[i])
        }

}




                                    // appelle de fonction // 
boutontxt.addEventListener("click", function () {
    encode (prompt("entre ton texte"))
})