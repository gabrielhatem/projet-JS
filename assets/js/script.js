const myList = document.querySelector('div.produits');

const myRequest = new Request('data.json');
fetch(myRequest)
  .then(response => response.json())
  .then(data => 
    {
      function filtre(value){
        const all =data.products;
        const pcDeJeux = data.products.filter(d => d.categorie === 'PC de jeux');
        const pcPortables = data.products.filter(d => d.categorie === 'PC Portable');
        const pcProfessionnels = data.products.filter(d => d.categorie === 'Ordinateur Professionnel');
        const accessoires = data.products.filter(d => d.categorie === 'Accessoire');
         if(value=="allProducts"){
          arr=all;
         }
         else 
         if(value=="pcPortable"){ 
          arr=pcPortables;
         }
         else 
         if(value=="pcGaming"){
          arr=pcDeJeux;
         }
        else if(value=="pcProfessionnel"){
          arr=pcProfessionnels;
           
         }
        else if(value=="accessoire")
         {
          arr=accessoires;
         }
         return arr;
      }
       filtres=document.querySelectorAll("li .filter-button");
       
      filtres.forEach(elt => {
      elt.addEventListener("click" ,function(){
        
             
        elt.classList.add("active");
      var value=elt.getAttribute("data-filter");
      var arr= filtre(value);
      for (const product of arr) {
      let listItem = document.createElement('div');
      listItem.classList = "col-lg-3 col-md-4 col-sm-6 mb-3 d-flex align-items-stretch";
      listItem.innerHTML = `<div class="card h-100 shadow-sm"> <img
      src="assets/img/${product.image}"
      class="card-img-top img-fluid mx-auto" alt="...">
      <div class="card-body">
      <h5 class="text-center fs-3 shadow-sm  card-title">${product.name} </h5>
      <div class="card-text">
      <ul>
          <li>${product.description.ligne1}</li>
          <li>${product.description.ligne2}</li>
          <li>${product.description.ligne3}</li>
          <li>${product.description.ligne4}</li>
          <li>${product.description.ligne5}</li>
          <li>${product.description.ligne6}</li>
      </ul>
  </div>
      <div class="clearfix mb-3 prix text-center"> <span
              class=" badge rounded-pill bg-primary">${product.price}</span> </div>
      <div class="d-grid gap-2 my-4" > <a href="#" id="ajout-panier" class="btn btn-warning fs-4">Ajouter au panier</a>
      </div>
  </div>
</div>`;


myList.appendChild(listItem);


 }  
 

});
});

});

 // ************************************************
// Shopping Cart 
// ****************************************
var shoppingCart = (function() {


  function Item(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
  }
  // Add item
  fetch(myRequest)
  .then(response => response.json())
  .then(data => {
var bntAjout=document.getElementById("ajout-panier");
bntAjout.addEventListener("click", function(event) {
  event.preventDefault();
  var name = data.products.name;
  var price = data.products.name;
  shoppingCart.addItemToCart(name, price, 1);
  displayCart();
});
function displayCart() {
  var cartArray = shoppingCart.listCart();
  var item = document.querySelector(".modal thead");
  var bntAjout=document.getElementById("ajout-panier");
  bntAjout.addEventListener("click", function(event) {
  for (const product of data.products) {
    let output= document.createElement('tr');
    output.classList="donnees"
    output.innerHTML = `
      <td>${product.image}</td>
      <td>${product.name}</td>
      <td>${product.price}</td>
      <td>${product.description.ligne2}</td>`
      output.appendChild(item);
    }

  });
}


});
}); 

