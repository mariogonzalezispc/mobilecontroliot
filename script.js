

function menu() {
    const navMenu = document.querySelector(".nav_menu");
    const newRightValue = navMenu.style.right == "-10px" ? "-800px" : "-10px";
    setTimeout(() => {
      navMenu.style.right = newRightValue;
      console.log('abrir menu')
      if (newRightValue === "-800px") {
        console.log('cerrar el menu')
      }
    }, 250);
  }