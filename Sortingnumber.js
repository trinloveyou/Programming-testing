const inputList = [2, 3, 4, 4, 34, 6, 7, 2, 3, 7, 8, 8, 8, 7, 9, 10, 41, 8];

function Sortingnumber(inputList) {
  // สร้างตัวแปรเพื่อเก็บตัวแปร
  let uniqueNumbers = []; // ตัวเลขไม่ซ้ำ
  let repeatedNumbers = []; // ตัวเลขซ้ำ
  let counts = {}; // นับจำนวนแต่ละตัวเลข

  // นับจำนวนแต่ละตัว
  for (let number of inputList) {
    if (counts[number]) {
      counts[number]++;
    } else {
      counts[number] = 1;
    }
  }

  // แยกตัวเลขไม่ซ้ำและตัวเลขซ้ำออกจากกัน
  for (let number in counts) {
    if (counts[number] === 1) {
      uniqueNumbers.push(parseInt(number));
    } else {
      for (let i = 0; i < counts[number]; i++) {
        repeatedNumbers.push(parseInt(number));
      }
    }
  }

  // เรียงลำดับตัวเลขไม่ซ้ำ
  uniqueNumbers.sort((a, b) => a - b);

  // เอาตัวเลขที่ไม่ซ้ำมาต่อกับตัวเลขที่ซ้ำ
  return uniqueNumbers.concat(repeatedNumbers);
}
console.log(Sortingnumber(inputList));
