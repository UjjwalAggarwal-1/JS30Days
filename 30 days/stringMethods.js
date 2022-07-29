//length
console.log("length".length);

//accessing characters
console.log("characters"[0]);

//toUpperCase()
console.log("toUpperCase".toUpperCase());

//toLowerCase()
console.log("toLowerCase".toLowerCase());

//substr()
//start index, number of characters
console.log("substr()".substr(1,))
console.log("substr()".substr(1))
console.log("substr()".substr(1,3))

//substring()
//start,end
//excludes last
console.log('substring()'.substring(2,))
console.log('substring()'.substring(2))
console.log('substring()'.substring(2,5))

//split()
console.log('split()'.split())
//nothing by default, unlike python where default is " "
console.log('split()'.split('l'))
console.log('this is the string to be split at spaces'.split())
console.log('this is the string to be split at spaces'.split(''))
    //correct
console.log('this is the string to be split at spaces'.split(' '))

//trim()
console.log('    JavaScript8?    ')
console.log('    JavaScript8?    '.trim())
console.log('    JavaScript8?    '.trim(''))
console.log('    JavaScript8?    '.trim(' '))
console.log('    JavaScript8?    '.trim('  '))
console.log('    JavaScript8?    '.trim('   '))
console.log('    JavaScript8?    '.trim('    '))
console.log('    JavaScript8?    '.trim('     '))

//includes()
console.log('ujjwal'.includes('u'))
console.log('ujjwal'.includes('u '))
console.log('ujjwal'.includes(' u'))
console.log('ujjwal'.includes(' u '))

//replace()
console.log('ujjwal'.replace('ujj','aggar'))
console.log('ujjwal'.replace('Ujj','aggar'))

//charAt()
console.log('ujjwal'.charAt(3))
console.log('ujjwal'.charAt(13))

// charCodeAt()
console.log('ujjwal'.charCodeAt(3))
console.log('ujjwal'.charCodeAt(13))

//indexOf()
console.log('ujjwal'.indexOf('ujjwal'))
console.log('ujjwal'.indexOf('ujwal'))
console.log('ujjwal'.indexOf('wal'))
console.log('ujjwal'.indexOf('l'))
console.log('ujjwal'.indexOf('j'))

//lastIndexOf()
console.log('ujjwal'.lastIndexOf('j'))
console.log('ujjwal'.lastIndexOf('x'))

//concat()
console.log('ujjwal'.concat('aggarwal'))
console.log(''.concat('ujjwal',' ','aggarwal'))

//startsWith()
console.log('javascript'.startsWith('jav'))

//endsWith()
console.log('javascript'.endsWith('ript'))

//repeat()
console.log('10'.repeat(5))

//match()
var text = "The rain in SPAIN stays mainly in the plain";
console.log(text.match("ain"));
console.log(text.match(/ain/));
//these both are same
console.log(text.match(/ain/g));
//g - all text > all occurences
console.log(text.match(/ain/i));
//i - case insensitive
console.log(text.match(/ain/gi));
console.log(text.match(/ain/ig));
// these both are same, whole text + all occurences

//search()
//returns first index if occurence
var text = "Mr. Blue has a blue house";
console.log(text.search("Blue"));
console.log(text.search("blue"));
console.log(text.search(/Blue/));
console.log(text.search(/blue/));
console.log(text.search(/blue/i));
console.log(text.search(/blue/gi));