var goForth = document.getElementById("goForth");

var goBack = document.getElementById("goBack");

var textBlock = 0; //tells dom which content should be displayed

goForth.addEventListener("click", () => {
  textBlock++; //move goForth in textBlock
  changeMain_3(textBlock);
});

goBack.addEventListener("click", () => {
  textBlock--; //move backward in textBlock
  changeMain_3(textBlock);
});

function changeMain_3(termNumber) {
  switch (termNumber) {
    case 0:
      $("#tertiary-body").fadeOut("slow", () => {
        document.getElementById("tertiary-body").innerHTML =
          "You are back at the beginning, click next to continue.";
      });
      goBack.disabled = true;
      $("#tertiary-body").fadeIn();
      break;

    case 1:
      $("#tertiary-body").fadeOut("slow", () => {
        document.getElementById("tertiary-body").innerHTML =
          "The tooth bud develops as early as the 5th-6th week.";
      });
      goBack.disabled = false;
      $("#tertiary-body").fadeIn();
      break;

    case 2:
      $("#tertiary-body").fadeOut("slow", () => {
        document.getElementById("tertiary-body").innerHTML =
          "Lips develop during the 4th-7th week.";
      });
      $("#tertiary-body").fadeIn();
      break;

    case 3:
      $("#tertiary-body").fadeOut("slow", () => {
        document.getElementById("tertiary-body").innerHTML =
          "Palate forms 8th-12th week.";
      });
      $("#tertiary-body").fadeIn();
      break;

    case 4:
      $("#tertiary-body").fadeOut("slow", () => {
        document.getElementById("tertiary-body").innerHTML =
          "The only clinical consideration is a cleft lip that appears by the 8th week due to the failure of fusion of the maxillary process with the medial nasal process.";
      });
      $("#tertiary-body").fadeIn();
      break;

    case 5:
      $("#tertiary-body").fadeOut("slow", () => {
        document.getElementById("tertiary-body").innerHTML =
          "Birth to 6 months is the eruptions of the first tooth and patterns of eruption.";
      });
      $("#tertiary-body").fadeIn();
      goForth.disabled = false;
      break;

    case 6:
      $("#tertiary-body").fadeOut("slow", () => {
        document.getElementById("tertiary-body").innerHTML =
          "Primitive teeth are vulnerable to tooth decay so getting your child in when the first tooth eruptions or at 6 months is Crucial to preventing restorative and emergency room visits. ";
      });
      $("#tertiary-body").fadeIn();
      goForth.disabled = true;
      break;
  }
}
