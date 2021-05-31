const words = ['mom','civiC',new Date ('11-11-11'),67.909,'poopy','youi','qqq',{id:101,name:'anna'},new Date('09-09-09')];

const arr = [];
let str = words.slice(0);
console.log(str)
let pal = str.toString().toLowerCase().split('').reverse().join('').split(',');
console.log(pal)


for (let index = 0; index < words.length; index++) {
  for (let k = 0; k < pal.length; k++) {
    if (words[index] == pal[k]) {
      arr.push(words[index])
    }
  }
}
console.log(arr);
