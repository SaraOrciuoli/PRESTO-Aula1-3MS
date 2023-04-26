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
    let wrapper = document.querySelector(".wrapper");
    
    function CreateCards(array) {
      wrapper.innerHTML="";
      array.forEach(element => {
      let div = document.createElement('div');
        div.classList.add('card', 'col-3', 'pt-2', 'm-3');
        div.innerHTML =
          `<img src="./resources/media/Nike.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"> ${element.name}</h5>
      <p class="card-text">${element.price}€</p>
      <a href="#" class="btn-card">Add to cart</a>
    </div>`;

        wrapper.appendChild(div);
      })

    }
    CreateCards(data);

    let btnAll=document.querySelector("#all");
    let btnMen=document.querySelector('#men');
    let btnWomen=document.querySelector('#women');
    let btnKids=document.querySelector('#kids');
    let btnShoes=document.querySelector('#shoes');
    let btnAccessories=document.querySelector('#accessories');
  

  function filterByCategory(category) {
  let filtered=data.filter(element=> element.category==category );

  console.log(filtered);
  CreateCards(filtered);
}
 btnMen.addEventListener('click',()=>{
  filterByCategory("Men");
 })

 btnAll.addEventListener('click',()=> {
  CreateCards(data);
 })

 btnWomen.addEventListener('click',()=>{
  filterByCategory("Women");
 })

 btnKids.addEventListener('click',()=>{
  filterByCategory("Kids");
 })

 btnShoes.addEventListener('click',()=>{
  filterByCategory("Shoes");
 })

 btnAccessories.addEventListener('click',()=>{
  filterByCategory("Accessories");
 })
 
  })








