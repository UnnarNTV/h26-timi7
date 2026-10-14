// ==============================
// Æfing 1 Data týpur og breytur
// ==============================

// 1. Búa til breytur fyrir nafnið okkar, aldur og
// hvort við eigum gæludýr og prenta það með console.log

const nafn = "Unnar Freyr Hlynsson";
let aldur = 41;
const gaeludyr = false;
console.log(nafn, aldur, gaeludyr);

// 2. Nota typeof til að prenta út týpuna fo breytunum okkar
console.log(typeof nafn); // string
console.log(typeof aldur); // number
console.log(typeof gaeludyr); //boolean

// 3. Búa til breytu faedingarar og reiknaðu aldurinn
// út frá árinu 2026

const faedingarar = 1985;
const reiknadurAldur = 2026 - faedingarar;
console.log("Reiknaður aldur:", reiknadurAldur);

// 4. Prenta "Ég heiti ___ og er ___ ára með
// bæði bakkommum og með ${} og með bara +

console.log("Ég heiti " + nafn + " og er " + aldur + " ára");
console.log(`Ég heiti ${nafn} og er ${aldur} ára`);

// 5. Prófa að breyta const, hvað gerist? í console? MUNA commenta línuna
// út annars mun æfing 2 ekki keyra

// nafn = "Jón";

// ========================
// Æfing 2 - if else og föll
// ========================

// 1. Skila true ef aldurinn er 18 eða meira, annars
// skila false
function erFullordin(aldur) {
  return aldur >= 18;
}

console.log(erFullordin(20));
console.log(erFullordin(3));
console.log(erFullordin(18));

// 2. SKila "Frábært" ef að einkunn er 90+, "gott" ef
// það er 70 - 89, "Staðið" ef að það er 50 - 69
// og fall ef það er undir 50

function einkunn(stig) {
  if (stig >= 90) {
    return "Frábært";
  } else if (stig >= 70) {
    return "Gott";
  } else if (stig >= 50) {
    return "Staðið";
  } else {
    return "Fall";
  }
}

console.log(einkunn(90));
console.log(einkunn(89));
console.log(einkunn(50));
console.log(einkunn(4));

// 3. SKila hvort að talan sé slétt tala eða oddatala
// Notuð % en ef það er einhver afgangur þá er það oddatala
function slettEdaOdda(tala) {
  if (tala % 2 === 0) {
    return "Slétt tala";
  } else {
    return "Oddatala";
  }
}

console.log(slettEdaOdda(6));
console.log(slettEdaOdda(3));

// 4. Reikna verð eftir afslátt
function verdEftirAfslatt(verd, afslattur) {
  return verd - (verd * afslattur) / 100;
}

console.log(verdEftirAfslatt(1000, 20));

// 5. Skila stærstu tölu af þremur
function staerst(tala1, tala2, tala3) {
  if (tala1 >= tala2 && tala1 >= tala3) {
    return tala1;
  } else if (tala2 >= tala3) {
    return tala2;
  } else {
    return tala3;
  }
}
console.log(staerst(3, 5, 9));
console.log(staerst(9, 3, 2));
