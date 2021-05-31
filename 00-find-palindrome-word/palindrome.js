var words = ['mom','civiC',new Date ('11-11-11'),67.909,'poopy','youi','qqq',{id:101,name:'anna'},new Date('09-09-09')];

var arr = [];
var str = words.slice(0);
console.log(str)
var pal = str.toString().toLowerCase().split('').reverse().join('').split(',');
console.log(pal)


for (let i = 0; i < words.length; i++) {
  for (let k = 0; k < pal.length; k++) {
    if (words[i] == pal[k]) {
      arr.push(words[i])
    }
  }
}
console.log(arr);