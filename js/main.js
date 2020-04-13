const home = document.querySelector("#home");
const menu = document.getElementById("menu");
const links = menu.getElementsByClassName("link");
const menuSection = document.querySelector(".menu-m");
const menuToggle = menuSection.querySelector(".menu-toggle");

// Menu
let showMenu = false;

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

// Menu hamburguer
menuToggle.addEventListener("click", () => {
  document.body.style.overflow = showMenu ? "hidden" : "initial";

  menuSection.classList.toggle("on", showMenu);
  home.classList.toggle("clip", showMenu);

  showMenu = !showMenu;
});

// Scroll to top
const arrow = document.querySelector(".top");

window.onscroll = () => scrollFunction();

function scrollFunction() {
  arrow.style.transform =
    document.body.scrollTop > 100 || document.documentElement.scrollTop > 100
      ? "scale(1)"
      : "scale(0)";
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Send mail
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const tel = document.getElementById("tel").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const formatedMessage = `${message} / Nome: ${name}; Email: ${email}; Telefone: ${tel};`;

  window.location.href = `mailto:simple@startup.com?subject=${subject}&body=${formatedMessage}`;
});

// Typewriter effect
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
