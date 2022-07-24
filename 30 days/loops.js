console.log('loops')


// for(var i=1;i<8;i++)
//     console.log('#'.repeat(i))


// for(var i=0;i<11;i++)
//     console.log(`${(i+"   ").substr(0,4)} ${(i**2+"   ").substr(0,4)} ${(i**3+"   ").substr(0,4)}`)


// Develop a small script which generate array of 5 random numbers and the numbers must be unique

// findRandom = ()=>{
//     return Math.floor(Math.random()*100)
// }
// addRandom = (nlist) =>{
//     let r = findRandom();
//     if(!nlist.includes(r))
//         nlist.push(r);
//     else{
//         addRandom(nlist);
//     }
// }
// nlist=[]
// for (var i = 0; i<5; i++){
//     addRandom(nlist)
// }

// for (var i = 0; i<5; i++){
//     console.log(nlist[i]);
// }


countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
// for(a in countries){
//     console.log(countries[a].toLowerCase())
// }
// for(a of countries){
//     console.log(a.toLowerCase())
// }
countries2 =[]
for(a in countries){
    countries2.push([countries[a],countries[a].substr(0,3),countries[a].length  ])
}
countries2.reverse()
for (var i = 0; i<11; i++){
        console.log(countries2[i]);
    }
