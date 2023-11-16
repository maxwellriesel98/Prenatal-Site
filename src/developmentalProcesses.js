var forward = document.getElementById("forward");

var reverse = document.getElementById("reverse");


var section = 0; //tells dom which content should be displayed

forward.addEventListener("click", () => {
  section++; //move forward in section
  changeMain(section);
});

reverse.addEventListener("click", () => {
  section--; //move backward in section
  changeMain(section);
});

function changeMain(key) {
  switch (key) {
    case 0:
      $("#main-title").fadeOut("slow", () => {
        document.getElementById("main-title").innerHTML = "Developmental processes in the embryo ";
      });
      $("#main-body").fadeOut("slow", () => {
        document.getElementById("main-body").innerHTML =
          "You are back at the beginning, click next to continue forward.";
      });
      reverse.disabled = true;
      $("#main-title").fadeIn();
      $("#main-body").fadeIn();
      break;

    case 1:
      $("#main-title").fadeOut("slow", () => {
        document.getElementById("main-title").innerHTML =
          "Induction";
      });
      $("#main-body").fadeOut("slow", () => {
        document.getElementById("main-body").innerHTML =
          " Action of a group of cells on another group of cells that leads to the establishment of the developmental pathway in responding tissue. ";
      });

      reverse.disabled = false;
      $("#main-title").fadeIn();
      $("#main-body").fadeIn();
      break;

    case 2:
      $("#main-title").fadeOut("slow", () => {
        document.getElementById("main-title").innerHTML = "Proliferation";
      });
      $("#main-body").fadeOut("slow", () => {
        document.getElementById("main-body").innerHTML =
          "Controlled cellular growth.";
      });

      $("#main-title").fadeIn();
      $("#main-body").fadeIn();
   
      break;

    case 3:
      $("#main-title").fadeOut("slow", () => {
        document.getElementById("main-title").innerHTML = "Differentiation";
      });
      $("#main-body").fadeOut("slow", () => {
        document.getElementById("main-body").innerHTML =
          "Change in identical embryonic cells to become distinct structurally and functionally";
      });
      $("#main-title").fadeIn();
      $("#main-body").fadeIn();
      
      break;

      case 4:
      $("#main-title").fadeOut("slow", () => {
        document.getElementById("main-title").innerHTML = "Morphogenesis";
      });
      $("#main-body").fadeOut("slow", () => {
        document.getElementById("main-body").innerHTML =
          " Development of specific tissue structure or differing form due to embryonic cell migration and inductive interactions.";
      });
      $("#main-title").fadeIn();
      $("#main-body").fadeIn();
      forward.disabled = false;
      break;

      case 5:
      $("#main-title").fadeOut("slow", () => {
        document.getElementById("main-title").innerHTML = "Maturations";
      });
      $("#main-body").fadeOut("slow", () => {
        document.getElementById("main-body").innerHTML =
          " The attainment of adult functions and size due to proliferation, differentiation, and morphogenesis.";
      });
      $("#main-title").fadeIn();
      $("#main-body").fadeIn();
      forward.disabled = true;
      break;
  }
}
