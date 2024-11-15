const str = "J'utilise les expressions regulière pour retrouver des schémas de text au sein d'une chaine de caractères."

const exp = /\w/g
console.log(str.match(exp).length)
