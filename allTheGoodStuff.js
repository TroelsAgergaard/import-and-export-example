//named export
export const printIcecream = () => {
  console.log("🍦");
};

//named export
export const printCupcake = () => {
  console.log("🧁");
};

//named export
export const printLollipop = () => {
  console.log("🍭");
};

//default export
const printAllTheGoodStuff = () => {
  printCupcake();
  printIcecream();
  printLollipop();
};

export default printAllTheGoodStuff;
