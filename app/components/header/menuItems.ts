interface MenuI {
  name: string;
  link: string;
}

const MenuItems: MenuI[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  
  {
    name: "Blog",
    link: "/blog",
  },
];

export default MenuItems;
