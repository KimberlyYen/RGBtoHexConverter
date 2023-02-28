// GOAL ➡️ 當我點 Convert 的時候進行，十六進制轉換
//  十六進制轉換 1. 拿到三個數字
//  十六進制轉換 2. 套用公式得到十六進制
//  十六進制轉換 3. 給到 大 BOX 顯示
let button = document.querySelector("button");
let color = document.querySelector(".text");

const colorR = document.querySelector("#r-color").value;
const colorG = document.querySelector("#g-color").value;
const colorB = document.querySelector("#b-color").value;
const hex = document.querySelector("#hex-color").value;

// 當我點 convert 的時候
button.addEventListener("click", (event) => {
  return rgbToHex(colorR, colorG, colorB);
});

function rgbToHex(R, G, B) {
  const hexDigit = [R, G, B]
    .map((item) => {
      return Number(item).toString(16).padStart(2, "0");
    })
    .join("");

  return console.log(hexDigit);
}

// let getRGB = color.addEventListener("click", () => {
//   return console.log("colorR, colorG, colorB");
// });
// // 印出來 RGB 的 input 陣列
// let array = [];
// function returnColor(value) {
//   if (array.length < 4) {
//     array.push(Number(value));
//   } else {
//     array.shift();
//     array.pop();
//   }

//   if ((array.length = 3)) {
//     console.log(array);
//     convert(array);
//   }
// }

// // 套用 RGB 轉換公式

// // 運用變數

// // 給予到右邊的顏色盒子

// // 結束
