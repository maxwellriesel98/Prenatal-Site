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
        document.getElementById("main-title").innerHTML = "Press Next";
      });
      $("#main-body").fadeOut("slow", () => {
        document.getElementById("main-body").innerHTML =
          "Content begins on Next page";
      });
      reverse.disabled = true;
      $("#main-title").fadeIn();
      $("#main-body").fadeIn();
      break;

    case 1:
      $("#main-title").fadeOut("slow", () => {
        document.getElementById("main-title").innerHTML =
          "During the first trimester/ Early stages of pregnancy the embryo is highly susceptible to injury malformations and mortality ";
      });
      $("#main-body").fadeOut("slow", () => {
        document.getElementById("main-body").innerHTML =
          "Known teratons involved in congenital malformations in the next sections";
      });

      reverse.disabled = false;
      $("#main-title").fadeIn();
      $("#main-body").fadeIn();
      break;

    case 2:
      $("#main-title").fadeOut("slow", () => {
        document.getElementById("main-title").innerHTML = "Drugs";
      });
      $("#main-body").fadeOut("slow", () => {
        document.getElementById("main-body").innerHTML =
          "Such as ethanol, tetracycline, progesterone, and aminopterin.";
      });

      $("#main-title").fadeIn();
      $("#main-body").fadeIn();
      break;

    case 3:
      $("#main-title").fadeOut("slow", () => {
        document.getElementById("main-title").innerHTML = "Chemicals";
      });
      $("#main-body").fadeOut("slow", () => {
        document.getElementById("main-body").innerHTML =
          "Such as methylmercury, polychlorinated biphenyls ";
      });
      $("#main-title").fadeIn();
      $("#main-body").fadeIn();
      break;

    case 4:
      $("#main-title").fadeOut("slow", () => {
        document.getElementById("main-title").innerHTML = "Infections";
      });
      $("#main-body").fadeOut("slow", () => {
        document.getElementById("main-body").innerHTML =
          "such as rubella virus, syphilis spirochete, herpes simplex virus ";
      });
      $("#main-title").fadeIn();
      $("#main-body").fadeIn();
      forward.disabled = false;
      break;

    case 5:
      $("#main-title").fadeOut("slow", () => {
        document.getElementById("main-title").innerHTML = "Radiation";
      });
      $("#main-body").fadeOut("slow", () => {
        document.getElementById("main-body").innerHTML =
          "Specifically high levels of ionizing type ";
      });
      $("#main-title").fadeIn();
      $("#main-body").fadeIn();
      forward.disabled = true;
      break;
  }
}
