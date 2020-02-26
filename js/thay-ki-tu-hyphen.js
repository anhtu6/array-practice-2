let string = 'I am a cool-est person in-the-world and I code js';
let a = string.split('');
console.log(a);
for (i=0;i<a.length;i++) {
    if (a[i]==='-'){a[i]='_';}
    if (a[i]===',') {a.splice(i,1);}
}
document.write(a);


