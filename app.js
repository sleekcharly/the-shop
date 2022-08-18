// use querySelector to get our sliderWrapper element
const wrapper = document.querySelector(".sliderWrapper");

// usequerySelectorAll to get all menuItem classes
const menuItems = document.querySelectorAll(".menuItem");

// loop over each of the navigation menu items and apply css
// tranform functionality on the elements
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // apply a translate functinality using the index position on the page
    wrapper.style.transform = `translate(${-100 * index}vw)`;
  });
});
