function generatePoem(event) {
    event.preventDefault();
  
    new Typewriter("#poem", {
      strings: "roses are red, violets are blue, sugar is sweet and so are you",
      autoStart: true,
      delay: 1,
      cursor: "",
    });
  }

  
  let poemFormElement = document.querySelector("#poem-generator-form");
  poemFormElement.addEventListener("submit", generatePoem);