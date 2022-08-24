// use querySelector to get our sliderWrapper element
const wrapper = document.querySelector(".sliderWrapper");

// usequerySelectorAll to get all menuItem classes
const menuItems = document.querySelectorAll(".menuItem");

// create array of product objects
const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

// assign product to chosen product varaible
let chosenProduct = products[0];

// use querySelector to get and change the product elements
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

// loop over each of the navigation menu items and apply css
// tranform functionality on the elements
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // apply a translate functinality using the index position on the page
    wrapper.style.transform = `translate(${-100 * index}vw)`;

    // change the chosen product
    chosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = chosenProduct.title;
    currentProductPrice.textContent = "$" + chosenProduct.price;
    currentProductImg.src = chosenProduct.colors[0].img;

    // assign new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = chosenProduct.colors[index].code;
    });
  });
});

// create a loop and callback to change the colors of the sneakers using colors element
currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = chosenProduct.colors[index].img;
  });
});

//  create a loop to change styling on show size button clicks
currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    // do this to make the styling unique for each button
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    // for selected size
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});
