const Factorization__button = document.querySelector(".Factorization__button");

const output__left = document.querySelector(".output__left");
const divider = document.querySelector(".divider");
const dividend = document.querySelector(".dividend");
const steps = document.querySelectorAll(".step");

let tabDivider = [];
let tabDividend = [];

function clearTables() {
  tabDivider = [];
  tabDividend = [];
}

function displayRight() {
  let dividerContent = "";
  let dividendContent = "";
  for (let i = 0; i < tabDivider.length; i++) {
    dividerContent += tabDivider[i] + "<br>";
  }
  dividerContent += "1";
  for (let i = 0; i < tabDivider.length; i++) {
    dividendContent += tabDividend[i] + "<br>";
  }

  // console.log(dividerContent, dividendContent);
  divider.innerHTML = dividerContent;
  dividend.innerHTML = dividendContent;
}

function displayLeft1(x) {
  let dividendContent = "";
  for (let i = 0; i < tabDivider.length; i++) {
    if (i != tabDivider.length - 1) dividendContent += tabDividend[i] + " * ";
    else dividendContent += tabDividend[i];
  }
  dividendContent += ` = ${x}`;
  steps[0].innerHTML = dividendContent;
}

function deleteOne(x) {
  console.log(x);
  if (x != 1) return `<sup>${x}</sup>`;
  return "";
}

function displayLeft2(x) {
  let sortedTab = tabDividend.sort();
  let howMuch = [];
  for (let i = 0; i < sortedTab.length; i++) {
    if (howMuch[sortedTab[i]] == undefined) {
      howMuch[sortedTab[i]] = 1;
    } else howMuch[sortedTab[i]] += 1;
  }
  // console.log(howMuch);

  let dividendContent = "";
  for (let i = 0; i < howMuch.length; i++) {
    if (howMuch[i] != undefined) {
      if (i == howMuch.length - 1)
        dividendContent += `${i}${deleteOne(howMuch[i])}`;
      else dividendContent += `${i}${deleteOne(howMuch[i])} * `;
    }
  }
  dividendContent += ` = ${x}`;
  steps[1].innerHTML = dividendContent;
  clearTables();
}

function factorizationNumber(x) {
  pom = x;
  for (let i = 2; i <= pom; i++) {
    if (pom % i == 0) {
      tabDivider.push(pom);
      tabDividend.push(i);
      pom /= i;
      i = 1;
    }
  }
  displayRight();
  displayLeft1(x);
  displayLeft2(x);
}

function start() {
  const number = Number(document.querySelector(".Factorization__input").value);
  factorizationNumber(number);
}

Factorization__button.addEventListener("click", start);

//
