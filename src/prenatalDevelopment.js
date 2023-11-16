var forward = document.getElementById("forward");

var reverse = document.getElementById("reverse");

const embryonic = [
  "Induction: embryological interaction of cell",
  "Proliferation: controlled cellular growth that can be interstitial or appositional",
  "Differentiation: specialization of embryonic cells",
  "Morphogenesis: development of tissue and organs form",
  "Maturation: the process of reaching adult function and size",
];

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
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
      });
      reverse.disabled = true;
      $("#main-title").fadeIn();
      $("#main-body").fadeIn();
      break;

    case 1:
      $("#main-title").fadeOut("slow", () => {
        document.getElementById("main-title").innerHTML =
          "Preimplantation Period";
      });
      $("#main-body").fadeOut("slow", () => {
        document.getElementById("main-body").innerHTML =
          "The preimplantation period is the first distinct phase which is considered from conception to the first week of Pregnancy. The fertilized egg completes meiosis, the division of the gametes that halves the chromosomes from 46-23. Preimplantation takes 6 days, and by the end of the first week the blastocyst stops raveling and undergoes implantation Goes from a zygote to a blastocyst to a disc to an embryo to a fetus.";
      });

      reverse.disabled = false;
      $("#main-title").fadeIn();
      $("#main-body").fadeIn();
      break;

    case 2:
      $("#main-title").fadeOut("slow", () => {
        document.getElementById("main-title").innerHTML = "Embryonic Period";
      });
      $("#main-body").fadeOut("slow", () => {
        document.getElementById("main-body").innerHTML =
          "the embryonic period is the next distinct phase which takes place from week two to week eight setting up the body plan. During this stage, several developmental phenomena can occur, including:";
        var ul = document.createElement("ul");
        var li;
        document.getElementById("main-body").appendChild(ul);
        embryonic.forEach((item) => {
          li = document.createElement("li"); // create a new list item
          li.appendChild(document.createTextNode(item)); // append the text to the li
          ul.appendChild(li); // append the list item to the ul
        });
      });

      $("#main-title").fadeIn();
      $("#main-body").fadeIn();
      forward.disabled = false;
      break;

    case 3:
      $("#main-title").fadeOut("slow", () => {
        document.getElementById("main-title").innerHTML = "Fetal Period";
      });
      $("#main-body").fadeOut("slow", () => {
        document.getElementById("main-body").innerHTML =
          "The final distinct phase is from the last two trimesters to birth or the time of mature";
      });
      $("#main-title").fadeIn();
      $("#main-body").fadeIn();
      forward.disabled = true;
      break;
  }
}
