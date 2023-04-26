let Navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  let scrolled = window.scrollY;
  if (scrolled > 30) {
    Navbar.classList.add("stick-top");
  } else {
    Navbar.classList.remove("stick-top");
  }
});

fetch('resources/js/Annunci.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);

    function setCategory() {
      let uniqueCategories = [];
      data.forEach(element => {
        
        if (!uniqueCategories.includes(element.category)) {
          uniqueCategories.push(element.category);

        }

      });
      console.log(uniqueCategories);

    }
    setCategory();
  })

  
