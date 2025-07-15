// script.js

const items = [
  { name: "Cappuccino", price: "$3.99", description: "Rich espresso with steamed milk foam.", image: "cappuccino.jpg" },
  { name: "Caramel Macchiato", price: "$4.49", description: "Espresso, milk, and caramel drizzle.", image: "caramel_macchiato.jpg" },
  { name: "Frappuccino", price: "$5.29", description: "Blended iced coffee with flavor.", image: "frappuccino.jpg" },
  { name: "Cold Brew", price: "$4.10", description: "Slow-steeped cold coffee.", image: "cold_brew.jpg" },
  { name: "Iced Americano", price: "$3.79", description: "Espresso shots with cold water and ice.", image: "iced_americano.jpg" },
  { name: "Chocolate Croissant", price: "$2.99", description: "Buttery croissant with chocolate.", image: "chocolate_croissant.jpg" },
  { name: "Blueberry Muffin", price: "$2.49", description: "Soft muffin with real blueberries.", image: "blueberry_muffin.jpg" },
  { name: "Strawberry Refresher", price: "$3.99", description: "Cold drink with strawberries and acai.", image: "strawberry_refresher.jpg" },
  { name: "Green Tea Latte", price: "$4.69", description: "Matcha with steamed milk.", image: "green_tea_latte.jpg" },
  { name: "Pumpkin Spice Latte", price: "$5.49", description: "Fall favorite with pumpkin & spices.", image: "pumpkin_spice_latte.jpg" }
];

const row1 = document.getElementById("menu-row-1");
const row2 = document.getElementById("menu-row-2");

items.forEach((item, index) => {
  const card = document.createElement("div");
  card.className = "card text-black bg-light shadow menu-card";
  card.innerHTML = `
    <img src="${item.image}" class="card-img-top" alt="${item.name}">
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <p class="card-text">${item.description}</p>
      <h6 class="text-success">${item.price}</h6>
    </div>
  `;
  if (index % 2 === 0) {
    row1.appendChild(card);
  } else {
    row2.appendChild(card);
  }
});
