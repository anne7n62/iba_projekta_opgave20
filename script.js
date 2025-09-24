const knapErstat = document.getElementById("knapErstat");

knapErstat.addEventListener("click", function () {
  //Hent html elementer
  const tekstfeltInput = document.getElementById("textarea");
  const findInput = document.getElementById("find-tekst");
  const erstatInput = document.getElementById("erstat-tekst");
  const resultatTekst = document.querySelector("#result-text p");
  const statusBesked = document.getElementByID("statusbesked");

  // Hent tekst
  const tekstfelt = tekstfeltInput.value;
  const findTekst = findInput.value;
  const erstatTekst = erstatInput.value;

  // Regex baseret på inputtekst
  const regex = new RegExp(`\\b${findTekst}\\b`, "gi");
  console.log("regex:", regex);

  // Tæller matches
  const matches = tekstfelt.match(regex);
  const antal = matches ? matches.length : 0;

  console.log("matches:", matches);
  console.log("antal matches:", antal);

  if (antal === 0) {
    statusBesked.textContent = "Nul matches – ingen ændringer foretaget";
  } else if (antal === 1) {
    statusBesked.textContent = "Teksten blev ændret 1 gang";
  } else {
    statusBesked.textContent = `Teksten blev ændret ${antal} gange`;
  }

  // Erstatte regex tekst med input tekst
  const nyTekst = tekstfelt.replaceAll(regex, erstatTekst);
  console.log("Ny tekst:", nyTekst);

  // Indsætter ny tekst i div
  resultatTekst.textContent = nyTekst;
});
