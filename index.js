// GOAL ➡️ 當我點 Convert 的時候進行，十六進制轉換

//  十六進制轉換 1. 拿到三個數字
//  十六進制轉換 2. 套用公式得到十六進制
//  十六進制轉換 3. 給到 大 BOX 顯示


let button = document.querySelector("button");

// 當我點 Convert 的時候
button.addEventListener("click", () => {
  const colorR = document.querySelector("#r-color").value;
  const colorG = document.querySelector("#g-color").value;
  const colorB = document.querySelector("#b-color").value;

  //  十六進制轉換 1. 拿到三個數字
  // console.log(colorR, colorG, colorB)
  rgbToHex(colorR, colorG, colorB);
  hex = 333333
  
});


function rgbToHex(R, G, B) {
  const hexDigit = [R, G, B]
  .map((item) => {
    return Number(item).toString(16).padStart(2, "0");
  })
  .join("");
  
  //  十六進制轉換 2. 套用公式得到十六進制
  console.log("#" + `${hexDigit}`)
}

// //  十六進制轉換 3. 給到 HEX CSS 變數 顯示於畫面
// const newBgColor = rgbToHex();
// console.log(newBgColor)
// // const box = document.querySelector(".hex");
// // box.style.setProperty("background-color", newBgColor);

// // return "#" + `${hexDigit}`

