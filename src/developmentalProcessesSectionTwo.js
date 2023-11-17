var proceed = document.getElementById("proceed");

var recede = document.getElementById("recede");


var term = 0; //tells dom which content should be displayed

proceed.addEventListener("click", () => {
  term++; //move proceed in term
  changeMain_2(term);
});

recede.addEventListener("click", () => {
  term--; //move backward in term
  changeMain_2(term);
});

function changeMain_2(termNumber) {
  switch (termNumber) {
    case 0:
      $("#secondary-title").fadeOut("slow", () => {
        document.getElementById("secondary-title").innerHTML = "Development of embryonic cell layers";
      });
      $("#secondary-body").fadeOut("slow", () => {
        document.getElementById("secondary-body").innerHTML =
          "You are back at the beginning, click next to continue proceed.";
      });
      recede.disabled = true;
      $("#secondary-title").fadeIn();
      $("#secondary-body").fadeIn();
      break;

    case 1:
      $("#secondary-title").fadeOut("slow", () => {
        document.getElementById("secondary-title").innerHTML =
          "Ectoderm";
      });
      $("#secondary-body").fadeOut("slow", () => {
        document.getElementById("secondary-body").innerHTML =
          "Originates from the epiblast layer. ";
      });

      recede.disabled = false;
      $("#secondary-title").fadeIn();
      $("#secondary-body").fadeIn();
      break;

    case 2:
      $("#secondary-title").fadeOut("slow", () => {
        document.getElementById("secondary-title").innerHTML = "Mesoderm";
      });
      $("#secondary-body").fadeOut("slow", () => {
        document.getElementById("secondary-body").innerHTML =
          "originates from migrating cells from the epiblast layer.";
      });

      $("#secondary-title").fadeIn();
      $("#secondary-body").fadeIn();
   
      break;

    case 3:
      $("#secondary-title").fadeOut("slow", () => {
        document.getElementById("secondary-title").innerHTML = "Endoderm";
      });
      $("#secondary-body").fadeOut("slow", () => {
        document.getElementById("secondary-body").innerHTML =
          "Originates from hypoblast. ";
      });
      if($("#image1").attr("src") === "../public/images/NeuralCrestCells.PNG"){
        $("#image1").fadeOut("slow", () => {
          $("#image1").attr("src", "../public/images/embryonic-skin-development.png")
        });
      }
      $("#secondary-title").fadeIn();
      $("#secondary-body").fadeIn();
      $("#image1").fadeIn();
      proceed.disabled = false;
      break;

      case 4:
      $("#secondary-title").fadeOut("slow", () => {
        document.getElementById("secondary-title").innerHTML = "Neural crest cells";
      });
      $("#image1").fadeOut("slow", () => {
        $("#image1").attr("src", "../public/images/NeuralCrestCells.PNG")
      });
      $("#secondary-body").fadeOut("slow", () => {
        document.getElementById("secondary-body").innerHTML =
          "Originates from migrating neurectoderm.";
      });
      $("#secondary-title").fadeIn();
      $("#secondary-body").fadeIn();
      $("#image1").fadeIn();
      proceed.disabled = true;
      break;
  }
}