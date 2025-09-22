let actionButton = document.getElementById("actionButton");

// Tilføjer eventlistener
actionButton.addEventListener("click", function () {
  //Hent referencer
  let textareaInput = document.getElementById("textarea");
  let findInput = document.getElementById("find-tekst");
  let erstatInput = document.getElementById("erstat-tekst");
  let resultatTekst = document.querySelector("#result-text p");
  const counterTekst = document.querySelector(".countertekst");

  // Hent teksten fra de forskellige input
  let hentTekst = textareaInput.value;
  const findTekst = findInput.value;
  const erstatTekst = erstatInput.value;

  // Lav en RegExp baseret på søgeteksten.
  // (g = global, i = ignore case)
  const regex = new RegExp(findTekst, "gi");

  // TODO 5: Tæl hvor mange matches der findes i teksten
  //   Hint: tekst.match(regex) → giver array af matches (eller null hvis ingen)
  const matches = hentTekst.match(regex);

  // TODO 6: Erstat alle matches med erstatningsteksten
  //   Hint: tekst.replace(regex, erstatning)
  const nyTekst = hentTekst.replaceAll(regex, erstatTekst);
  console.log("Ny tekst:", nyTekst);

  // Opdater textarea eller et separat <div> med den nye tekst
  // opdater textarea eller et andet element

  resultatTekst.textContent = nyTekst;

  // Vis også brugeren hvor mange udskiftninger der blev foretaget
  const count = matches ? matches.length : 0;
  if (count === 0) {
    counterTekst.textContent = "Nul matches – ingen ændringer foretaget";
  } else if (count === 1) {
    counterTekst.textContent = `Teksten blev ændret ${count} gang`;
  } else {
    counterTekst.textContent = `Teksten blev ændret ${count} gange`;
  }

  // Stort bogstav efter .!? bonus
});
