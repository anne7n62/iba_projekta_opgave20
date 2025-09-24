let knapErstat = document.getElementById("knapErstat");

knapErstat.addEventListener("click", function () {
  //Hent referencer
  let tekstfeltInput = document.getElementById("textarea");
  let findInput = document.getElementById("find-tekst");
  let erstatInput = document.getElementById("erstat-tekst");
  let resultatTekst = document.querySelector("#result-text p");
  const statusBesked = document.querySelector(".statusbesked");

  // Hent string values
  let tekstfelt = tekstfeltInput.value;
  const findTekst = findInput.value;
  const erstatTekst = erstatInput.value;

  // // Tjek om søgeteksten kun er bogstaver (inkl. æøåÆØÅ)
  // const erOrd = /^[a-zA-ZæøåÆØÅ]+$/.test(findTekst);

  // // Byg regex med eller uden ordgrænser
  // const regex = erOrd
  //   ? new RegExp(`\\b${escapeRegex(findTekst)}\\b`, "gi")
  //   : new RegExp(escapeRegex(findTekst), "gi");

  // // Escape specialtegn
  // function escapeRegex(tekst) {
  //   return tekst.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  // }

  // Lav en RegExp baseret på søgeteksten.
  // (g = global, i = ignore case)

  const regex = new RegExp(`\\b${findTekst}\\b`, "gi");

  // Tæller matches - returnerer array
  const matches = tekstfelt.match(regex);
  console.log("matches:", matches);

  // Viser hvor mange udskiftninger, der er blevet foretaget
  // const antal = matches ? matches.length : 0;
  const antal = matches.length;
  console.log("antal matches:", antal);

  if (antal === 0) {
    statusBesked.textContent = "Nul matches – ingen ændringer foretaget";
  } else if (antal === 1) {
    statusBesked.textContent = `Teksten blev ændret 1 gang`;
  } else {
    statusBesked.textContent = `Teksten blev ændret ${antal} gange`;
  }

  // Erstatte matches med erstatningsteksten
  const nyTekst = tekstfelt.replaceAll(regex, erstatTekst);
  console.log("Ny tekst:", nyTekst);

  // Indsætter ny tekst i div
  resultatTekst.textContent = nyTekst;
});
