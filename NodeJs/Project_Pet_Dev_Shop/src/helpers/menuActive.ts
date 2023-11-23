type menuType = "" | "dog" | "cat" | "all" | "fish";

const menuActive = (activeMenu: menuType) => {
  let returnMenuActive: any = {
    all: false,
    dog: false,
    cat: false,
    fish: false,
  };
  if (activeMenu.trim() != "") {
    returnMenuActive[activeMenu] = true;
  }
  return returnMenuActive;
};

export default menuActive;
