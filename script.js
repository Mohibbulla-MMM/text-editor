// text decoration container ---------------
const bold = document.getElementById("bold-id");
// console.log(bold);
const italic = document.getElementById("italic-id");
// console.log(italic);
const underline = document.getElementById("underline-id");
// console.log(underline);
const highlight = document.getElementById("highlight-id");
// console.log(highlight);

// text align container ---------------
const leftAlign = document.getElementById("left-id");
// console.log(leftAlign);
const centerAlign = document.getElementById("center-id");
// console.log(centerAlign);
const rightAlign = document.getElementById("right-id");
// console.log(rightAlign);
const justifyAlign = document.getElementById("justify-id");
// console.log(justifyAlign);

// font decoration container ---------------
const fontSize = document.getElementById("font-size-id");
// console.log(fontSize);
const fontCase = document.getElementById("case-id");
// console.log(fontCase);
const fontColor = document.getElementById("color-id");
// console.log(fontColor);

// text area container -----------
const textarea = document.getElementById("text-area-id");
// console.log(textarea);

/*------------------------------------------------------------------------------------------
 ----------------------------text decoratin function part ---------------------------------
------------------------------------------------------------------------------------------*/
let boldCounter = 0;
bold.addEventListener("click", function (e) {
  boldCounter += 1;
  if (boldCounter % 2 !== 0) {
    textarea.style.fontWeight = "bold";
  } else {
    textarea.style.fontWeight = "normal";
  }
  console.log(textarea.value);
}); //bold end--------------
let italicCounter = 0;
italic.addEventListener("click", function () {
  italicCounter += 1;
  if (italicCounter % 2 !== 0) {
    textarea.style.fontStyle = "italic";
  } else {
    textarea.style.fontStyle = "normal";
  }
}); //italic end----
let underlineCounter = 0;
underline.addEventListener("click", function () {
  underlineCounter += 1;
  if (underlineCounter % 2 !== 0) {
    textarea.style.textDecoration = "underline 2px";
  } else {
    textarea.style.textDecoration = "";
  }
  //   console.log(textarea.value);
}); //underline end ----------

let backgroundCounter = 0;
highlight.addEventListener("click", function () {
  backgroundCounter += 1;
  if (backgroundCounter % 2 !== 0) {
    textarea.style.backgroundColor = "tomato";
  } else {
    textarea.style.backgroundColor = "";
  }
}); //background color end ----------

/*------------------------------------------------------------------------------------------
 ----------------------------text align function part ---------------------------------
------------------------------------------------------------------------------------------*/
let leftAlignCounter = 0;
leftAlign.addEventListener("click", function () {
  leftAlignCounter += 1;
  if (leftAlignCounter % 2 !== 0) {
    textarea.style.textAlign = "left";
  } else {
    textarea.style.textAlign = "";
  }
}); //text align left end ---
let centerAlignCounter = 0;
centerAlign.addEventListener("click", function () {
  centerAlignCounter += 1;
  if (centerAlignCounter % 2 !== 0) {
    textarea.style.textAlign = "center";
  } else {
    textarea.style.textAlign = "";
  }
}); //text align center end ---
let rightAlignCounter = 0;
rightAlign.addEventListener("click", function () {
  rightAlignCounter += 1;
  if (rightAlignCounter % 2 !== 0) {
    textarea.style.textAlign = "right";
  } else {
    textarea.style.textAlign = "";
  }
}); //text align right end ---
let justifyAlignCounter = 0;
justifyAlign.addEventListener("click", function () {
  justifyAlignCounter += 1;
  if (justifyAlignCounter % 2 !== 0) {
    textarea.style.textAlign = "justify";
  } else {
    textarea.style.textAlign = "";
  }
}); //text align justify end ---

/*------------------------------------------------------------------------------------------
 ----------------------------font size , color, case  function part ---------------------------------
------------------------------------------------------------------------------------------*/

fontSize.addEventListener("keyup", function () {
  let inputFontVaue = fontSize.value;
  textarea.style.fontSize = inputFontVaue + "px";
  //   console.log(fontSize.value);
}); //text size one ---------
fontSize.addEventListener("click", function () {
  let inputFontVaue = fontSize.value;
  textarea.style.fontSize = inputFontVaue + "px";
  //   console.log(fontSize.value);
}); //text size two  ---------
let fontCaseCounter = 0;
fontCase.addEventListener("click", function () {
  fontCaseCounter += 1;
  if (fontCaseCounter % 3 == 0) {
    textarea.style.textTransform = "lowercase";
  } else if (fontCaseCounter % 2 !== 0) {
    textarea.style.textTransform = "capitalize";
  } else if (fontCaseCounter % 2 === 0) {
    textarea.style.textTransform = "uppercase";
  } else {
    textarea.style.textTransform = "";
  }
}); //text case end ----------

fontColor.addEventListener("change", function () {
  let inputFontVaueColor = fontColor.value;
  textarea.style.color = inputFontVaueColor;
  console.log(inputFontVaueColor);
}); // text color end ------

/*------------------------------------------------------------------------------------------
 ----------------------------text-area-container function part ---------------------------------
------------------------------------------------------------------------------------------*/
let textAreaCounter = 0;
textarea.addEventListener("keyup", function (e) {
  textAreaCounter += 1;

  if (e.key === "Enter") {
    let newtextarea = document.createElement("textarea");
    newtextarea.setAttribute("class", `new-item${textAreaCounter}`);
    // newtextarea.style.border = "1px solid blck";
    // newtextarea.classList.add("border-2", "border-black");
    textarea.appendChild(newtextarea);
    console.log(textarea);
  }
});
