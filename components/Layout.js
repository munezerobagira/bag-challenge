import NavBar from "./NavBar";
import SideBar from "./SideBar";

function Layout({ children }) {
  return (
    <div className="overflow-x-hidden relative flex">
      <div className="h-screen relative max-w-sm w-48 px-12 py-6 flex  ">
        <SideBar />
      </div>
      <div className="container overflow-y-scroll px-2">
        <NavBar /> {children}
      </div>
    </div>
  );
}

export default Layout;
