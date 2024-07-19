
// function isValidDate(date) {

//     let data=date.split('/')
//     if ( data[0] > 31 || data[1] >12 || data[2] >9999 || data[2]<1000 ) {
//         return false
//     }
//     else {
//         return true
//     }

// }

function reversed (date) {

    let cutted= date.split('')
    let reverse =[]
    
    for (let index = cutted.length; index >= 0; index--) {
        const element = cutted[index];
        reverse.push(element) // ici.tu_mets(ça)  
    }
    
    rev = reverse.join('')
    return rev
}

function isPalindrome(date) {
    
    first = date.replace(/\//g,'')
    second= reversed(date).replace(/\//g,'')
    if (first == second) {
        return true 
    }
    else {
        return false
    }
    
}




let test = new Date( "01/01/2011")//mois,jour,année [print j-1]
let newtest = new Date('2011','00','01') 
// let test2 = new Date("2011, 02, 17")
// console.log(test2.toLocaleDateString("en-GB"))

// let now = new Date()
// let today = [now.getDate(),now.getMonth()+1,now.getFullYear()]
// console.log(today)
// // console.log(today.toLocaleDateString("en-GB"))

// comparable = today.join().replace(/,/g,'')
// console.log(comparable)

// let newdate = new Date(test.valueOf())
// newdate.setDate(test.getDate() + 31 )

// console.log(newtest.getMonth())
// console.log(test)
// console.log(newtest.toLocaleDateString("en-GB"))


// console.log (newdate)
// console.log(newdate.toLocaleDateString("en-GB"))

// let now = new Date()
// let today = now.toLocaleDateString("en-GB")
// console.log(now.toLocaleDateString("en-GB"))
// now.setDate(now.getDate() + 1 )
// console.log(now.toLocaleDateString("en-GB"))

// let now = new Date("01/31/2020");
// let today = now.toLocaleDateString("en-GB");

// let parse = Date.parse("31/01/2020")
// console.log(parse)
// let parsed = parse.toLocaleDateString("en-GB")
// console.log(parsed)


function GoodForm (date) {
    let element = date.split("/")
   let newform = element[1]+"/"+element[0]+"/"+element[2]
    let CpDate = new Date(newform)
    return CpDate.toLocaleDateString("en-GB")
}

function MakeItDate (string) {

}

function getNextPalindrome(x) {
    let now = new Date();
    let today = now.toLocaleDateString("en-GB");
    let count = 1

    do 
    
        if (isPalindrome(today) == true) {
            console.log(today);
            now.setDate(now.getDate() + 1 );
            today = now.toLocaleDateString("en-GB") 
            count ++
           
        }
        else  {
            now.setDate(now.getDate() + 1 );
            today = now.toLocaleDateString("en-GB") 

            //prendre la section jour dans mon objet date "now" et lui ajouter 1 , ajouter ce changement dans mon objet date "now"

        }

    while(count != x)

        
 }
 
 getNextPalindrome(12)
 

//  let now = new Date("01/31/2020");
//  console.log(now)
//  let today = now.toLocaleDateString("en-GB");
//  console.log(today)
//  now.setDate(now.getDate() + 1 )
//  console.log(now)
//  today = now.toLocaleDateString("en-GB")
//  console.log(today)

