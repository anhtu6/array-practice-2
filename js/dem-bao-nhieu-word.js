let a = [2,6,'a','g',99,'5a',6];
let count=0;
text ='';

for ( let i in a) {
    if (typeof a[i] == 'string') {
        count++;
        text+=a[i]+', ';
    }
}
document.write('mang co '+count+' phan tu la string, do la '+text);
