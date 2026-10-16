// =============================================
// TÍMAVERKEFNI · Hitastigsbreytir
// =============================================

// ---------------------------------------------
// HLUTI 1
// ---------------------------------------------
function convert() {
  console.log("convert keyrir");

  // 1. Ná í textann úr input "celsius"
  const hitiText = document.getElementById("celsius").value;

  const vindur = Number(document.getElementById("wind").value);
  const adgerd = document.getElementById("convert-method").value;

  // 2. Ef hann er tómur → sýna "Sláðu inn hitastig!" í output og return
  //    ATH: 0°C er gilt hitastig, svo athugaðu hvort textinn sé "" (ekki hvort talan sé 0)
  if (hitiText === "") {
    return (document.getElementById("output").innerText =
      "Sláðu inn hitastig!");
  }

  let celcius = 0;
  let fahrenheit = 0;

  if (adgerd === "cToF") {
    // 3. Breyta í Number
    celcius = Number(hitiText);

    // 4. Reikna Fahrenheit: c * 1.8 + 32
    fahrenheit = celcius * 1.8 + 32;
  } else if (adgerd === "fToC") {
    fahrenheit = Number(hitiText);

    // Reikna celcius
    celcius = (fahrenheit - 32) / 1.8;
  }

  if (celcius < 5 && vindur > 10) {
    return (document.getElementById("output").innerText =
      "Brjálað veður, vertu heima!");
  }

  // 5. Nota if / else til að velja skilaboð:
  //    undir 0°C          → "Frost! Húfa og vettlingar"
  //    0 til 10°C         → "Kalt, úlpuveður"
  //    yfir 10 upp í 20°C → "Fínt veður, taktu peysu"
  //    yfir 20°C          → "Stuttbuxnaveður!"
  let message = "";
  if (celcius < 0) {
    message = "Frost! Húfa og vettlingar";
  } else if (celcius <= 10) {
    message = "Kalt, úlpuveður";
  } else if (celcius <= 20) {
    message = "Fínt veður, taktu peysu";
  } else {
    message = "Stuttbuxnaveður";
  }

  if (adgerd === "cToF") {
    // 6. Sýna niðurstöðuna í output, t.d. "12°C = 53.6°F - Fínt veður, taktu peysu"
    return (document.getElementById("output").innerText =
      `${celcius}°C = ${fahrenheit}°F - ${message}`);
  } else if (adgerd === "fToC") {
    return (document.getElementById("output").innerText =
      `${fahrenheit}°F = ${celcius}°C - ${message}`);
  }
}

// ---------------------------------------------
// HLUTI 2 · Ef þú klárar snemma (í hvaða röð sem er)
// ---------------------------------------------
// A · Vindur: Bættu við input fyrir vind (m/s).
//     Ef hiti er undir 5 OG vindur yfir 10 → "Brjálað veður, vertu heima!"
//
// B · Öfug átt: Bættu við select með "°C → °F" og "°F → °C".
//     Formúlan til baka: (F - 32) / 1.8
//     Skilaboðin eiga alltaf að miðast við hitann í °C.
//
// C · Nafn: Bættu við input fyrir nafn → "Kinga, taktu peysu!"
//     Sýndu villu ef nafnið vantar.
//
// D · Snyrta: Námundaðu í einn aukastaf með toFixed(1)
//     og gefðu síðunni smá CSS.
