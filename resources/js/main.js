let Navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  let scrolled = window.scrollY;
  if (scrolled > 30) {
    Navbar.classList.add("stick-top");
  } else {
    Navbar.classList.remove("stick-top");
  }
});

fetch("resources/js/Annunci.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
   
    function setCategory() {
      let uniqueCategories = [];
      data.forEach((element) => {
        if (!uniqueCategories.includes(element.category)) {
          uniqueCategories.push(element.category);
        }
      });
      console.log(uniqueCategories);
    }
    setCategory();
    let wrapper = document.querySelector(".wrapper");
    let alert = document.querySelector('.alert');

    function CreateCards(array) {
      wrapper.innerHTML = "";
      array.forEach((element) => {
        let div = document.createElement("div");
        div.classList.add("card", "col-3", "pt-2", "m-3");
        div.innerHTML = `<img src="./resources/media/Nike.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"> ${element.name}</h5>
      <p class="card-text">${element.price}€</p>
      <a href="#" class="btn-card">Add to cart</a>
    </div>`;

        wrapper.appendChild(div);
      });
      
      if (array.length == 0) {

        alert.classList.remove('d-none');
        alert.classList.add('d-block')
      } else if (array.length <= 2) {
        wrapper.classList.remove('justify-content-evenly');
      }
      else {
        wrapper.classList.add('justify-content-evenly');
      }
    }
    CreateCards(data);

    let btnAll = document.querySelector("#all");
    let btnMen = document.querySelector("#men");
    let btnWomen = document.querySelector("#women");
    let btnKids = document.querySelector("#kids");
    let btnShoes = document.querySelector("#shoes");
    let btnAccessories = document.querySelector("#accessories");

    function filterByCategory(category) {
      let filtered = data.filter((element) => element.category == category);

      console.log(filtered);
      CreateCards(filtered);
    }
    btnMen.addEventListener("click", () => {
      filterByCategory("Men");
    });

    btnAll.addEventListener("click", () => {
      CreateCards(data);
    });

    btnWomen.addEventListener("click", () => {
      filterByCategory("Women");
    });

    btnKids.addEventListener("click", () => {
      filterByCategory("Kids");
    });

    btnShoes.addEventListener("click", () => {
      filterByCategory("Shoes");
    });

    btnAccessories.addEventListener("click", () => {
      filterByCategory("Accessories");
    });

    let princeRange = document.querySelector("#range");
    let minRange = document.querySelector("#minimum");
    let currentRange = document.querySelector("#currentrage");


    function setPriceRage() {
      let prices = data.map(annuncio => Number(annuncio.price))
      let maxPrice = Math.max(...prices)
      let minPrice = Math.min(...prices)
      princeRange.min = minPrice
      princeRange.max = maxPrice
      princeRange.value = maxPrice
      minRange.innerHTML = `${minPrice}&euro;`
      currentRange.innerHTML = `${maxPrice}&euro;`
    }
    setPriceRage();

    function filterByPrice(number) {

      let filtered = data.filter(annuncio => Number(annuncio.price) <= Number(number))
      CreateCards(filtered)

    }

    princeRange.addEventListener("input", () => {
      filterByPrice(princeRange.value);
      currentRange.innerHTML = `${princeRange.value}&euro;`



    })
    let searchArticle = document.querySelector('#search');
    let searchButton = document.querySelector('#search-btn')

    function filterByName(word) {
      let filtered = data.filter(annuncio => annuncio.name.toLowerCase().includes(word.toLowerCase()));
      CreateCards(filtered)

    }

    searchButton.addEventListener('click', () => {
      filterByName(searchArticle.value);
      searchArticle.value = '';


    })
  });




