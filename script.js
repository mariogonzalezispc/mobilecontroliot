function menu() {
    const navMenu = document.querySelector(".nav_menu");
    const newRightValue = navMenu.style.right == "-10px" ? "-800px" : "-10px";
    setTimeout(() => {
      navMenu.style.right = newRightValue;
      if (newRightValue === "-800px") {
        console.log('cerrar el menu')
      }else{
        console.log('abrir menu')
      }
    }, 250);
  }

  function productos_menu() {
    const navMenu = document.querySelector(".produc");
    const newRightValue = navMenu.style.left == "-10px" ? "-800px" : "-10px";
    setTimeout(() => {
      navMenu.style.right = newRightValue;
      if (newRightValue === "-800px") {
        console.log('cerrar el productos menu')
      }else{
        console.log('abrir productos menu')
      }
    }, 250);
  }

  function interfaces_menu() {
    const navMenu = document.querySelector(".submenu_interfaces");
    const newRightValue = navMenu.style.right == "-10px" ? "-800px" : "-10px";
    setTimeout(() => {
      navMenu.style.right = newRightValue;
      if (newRightValue === "-800px") {
        console.log('cerrar el interface menu')
      }else{
        console.log('abrir interfaces menu')       
      }
    }, 250);
  }