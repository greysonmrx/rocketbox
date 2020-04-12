const menu = document.getElementById("menu");
const links = menu.getElementsByClassName("link");

let showMenu = false;

const home = document.querySelector("#home");
const menuSection = document.querySelector(".menu-m");
const menuToggle = menuSection.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
  document.body.style.overflow = showMenu ? "hidden" : "initial";

  menuSection.classList.toggle("on", showMenu);
  home.classList.toggle("clip", showMenu);

  showMenu = !showMenu;
});

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    document.body.style.overflow = "initial";

    menuSection.classList.remove("on");
    home.classList.remove("clip");

    showMenu = false;

    var current = document.getElementsByClassName("active");

    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

const strings = [
  {
    string: "Pronto",
    color: "#FFFFFF",
  },
  {
    string: "para",
    color: "#FFFFFF",
  },
  {
    string: "transformar",
    color: "#fed516",
  },
  {
    string: "o",
    color: "#FFFFFF",
  },
  {
    string: "mundo",
    color: "#fed516",
  },
  {
    string: "com",
    color: "#FFFFFF",
  },
  {
    string: "suas",
    color: "#FFFFFF",
  },
  {
    string: "ideias",
    color: "#fed516",
  },
];

function typing(array) {
  let pos = 0;

  array.map((item, index) => {
    const element = document.createElement("b");
    element.style.color = item.color;
    document.getElementById("text").appendChild(element);

    const string = item.string.split("");

    string.map((char) => {
      setTimeout(() => {
        element.innerHTML += char;

        if (index === array.length - 1) {
          document.getElementById("question").className = "fade";
        }
      }, 75 * pos);
      pos++;
    });

    if (index !== array.length) {
      element.innerHTML += " ";
    }
  });
}

typing(strings);
