const contohArray = [1, 'syifa', 21, 2, 'sasa', 21, 3, 'ale', 21];
// console.log(arr);
// console.log(arr[0]);

// console.log(`ini index kedua dari array arr yaitu ${arr[1]}`);

// for (let i = 0; i < contohArray.length; i++) {
//   console.log(`ini index ke ${i} dari contoh array yaitu: ${contohArray[i]}`);
// }

// 2. contoh dari mainan object
const contohObj = {
  id: 1,
  name: 'syifa',
  age: 28,
};

// for (const key in contohObj) {
//   console.log(`ini merupakan key ${key} dengan value ${contohObj[key]}`);
// }

// 1 :
// print contohObj dengan key name ambil dari index 2 contohArr
// print contohObj dengan key age ambil dari index 3 contohArr
// print contohObj dengan key id ambil dari index 1 contohArr

contohObj.id = contohArray[0];
contohObj.name = contohArray[1];
contohObj.age = contohArray[2];
console.log(contohObj);
console.log('====');

// 2 :
// - kalian tambah data kalian di arr + 1 temen kalian juga
// - menggunakan looping, di dalam nya check condisi pake if utk print contohObj key id yang value nya dari index 0,3,6

for (let i = 0; i < contohArray.length; i++) {
  if (i == 0 || i == 3 || i == 6) {
    contohObj.id = contohArray[i];
    console.log(`index ${[i]} berisikan id: ${contohObj.id}`);
  }
}
console.log('====');

// 3
// masukkan data object dengan arr.push (Nirwana)
// tapi hanya masukkan data yang bernama imam, hafizh, syifa (pake IF dari hafizh no 2) ke dalam array kosong
// dari array kosong yang udah di masukkan data diatas, tapi cuman print yang age nya dibawah 28 dan id nya  (loping dan if2
let data = [];

const obj1 = { name: 'Imam', age: 28, id: 1 };
const obj2 = { name: 'Hafizh', age: 20, id: 2 };
const obj4 = { name: 'Ale', age: 22, id: 3 };
const obj5 = { name: 'Dimas', age: 23, id: 4 };
const obj6 = { name: 'Adella', age: 25, id: 5 };
const obj7 = { name: 'Syifa', age: 21, id: 6 };

// arr of object
// arr = [{ name: 'Imam', age: 28, id: 1 }]

data.push(obj1, obj2, obj4, obj5, obj6, obj7);

data.filter((item) => {
  if (item.name == 'Hafizh' || item.name == 'Syifa' || item.name == 'Imam') {
    if (item.age < 28) {
      console.log(typeof item);
    }
  }
});
