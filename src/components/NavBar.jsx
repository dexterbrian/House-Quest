import Search from "./Search";
import AppName from "./AppName";

function NavBar() {
  return (
    <div className="nav-bar">
      <AppName />
      <Search />
      {/* <a href="#">Contact Us</a> */}
    </div>
  );
}

export default NavBar;
