// Modify the userIdGenerator function. Declare a function name 
// userIdGeneratedByUser. It doesn’t take any parameter but it takes two 
// inputs using prompt(). One of the input is the number of characters 
// and the second input is the number of ids which are supposed to be 
// generated.

// const c = parseInt(window.prompt("enter number of characters required"));
// const n = parseInt(window.prompt('enter number of IDs desired'));

// const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// function randChar(){
//     return characters.charAt(Math.floor(Math.random() *characters.length));
// }

// randID=""
// userIdGeneratedByUser=()=>{
//     for(var i=0;i<n;i++){
//         for(var j=0;j<c;j++){
//             randID+=randChar()
//         }
//         randID+='\n'
//     }
//     return randID;
// }

// console.log(userIdGeneratedByUser())

//-----------------------------------------------------------------//

// Write a function generateColors which can generate any number 
// of hexa or rgb colors.

function randChar(str){
        return str.charAt(Math.floor(Math.random() *str.length));
    }
    
const characters = 'abcdef0123456789';
function genHexa(){
    strhex = '#';
    for(var i=0;i<6;i++){
        strhex += randChar(characters);
    }
    return strhex;
}

function genRGB(){
    strrgb = 'rgb(';
    for(var i=0;i<3;i++){
        strrgb = strrgb + (Math.floor(Math.random()*256)).toString()
        if(i===2)
            strrgb+=")"
        else
            strrgb+=", "
    }
    return strrgb
}

type = window.prompt("1 for hexa, 2 for rgb")
quantity = window.prompt("number of colors required")

collist = []
generateColors=(type,quantity)=>{
    if(type==="1"){
        for(let i =0;i<quantity;i++){
            collist.push(genHexa());
        }
    }
    else if(type==="2"){
        for(let i =0;i<quantity;i++){
            collist.push(genRGB());
        }
    }
    return collist;
}

generateColors(type,quantity);
console.log(collist);