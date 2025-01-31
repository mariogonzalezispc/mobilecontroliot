function menu() {
  const navMenu = document.querySelector(".nav_menu");
  const subProductos = document.querySelector(".sub_productos");
  const navMenuRight = getComputedStyle(navMenu).right;
  const newRightValue = navMenuRight === "0px" ? "-800px" : "0px";
  setTimeout(() => {
    navMenu.style.right = newRightValue;
    if (newRightValue === "-800px") {
      console.log('Cierro el menu principal');
    } else {
      console.log('Abro el menu principal');
    }
  }, 250);
  if (getComputedStyle(subProductos).right === "0px") {
    subProductos.style.right = "-800px";
    console.log('Cierro el submenú de productos');
  }
}

function sub_productos() {
  const navMenu = document.querySelector(".nav_menu");
  const subProductos = document.querySelector(".sub_productos");
  menu();
  const subProductosRight = getComputedStyle(subProductos).right;
  const newRightValue = subProductosRight === "0px" ? "-800px" : "0px";
  setTimeout(() => {
    subProductos.style.right = newRightValue;
    if (newRightValue === "-800px") {
      console.log('Cierro el submenú de productos');
    } else {
      console.log('Abro el submenú de productos');
    }
  }, 250);
}
