import sideBarStyles from "../styles/sideBar.module.css";
import Link from "next/link";
function SideBar() {
  return (
    <div className=" w-full border-r-8 fixed">
      <div className="container">
        <div className="logo py-4 w-auto text-left">
          <Link href="/">
            <a className="w-full text-left font-bold text-xl">BAG</a>
          </Link>
        </div>
        <div className="text-sm text-left flex flex-col">
          <Link href="/">
            <a className="py-1">MY LIST</a>
          </Link>
          <Link href="/visited">
            <a className="py-1">VISTED</a>
          </Link>
          <Link href="/tovisit">
            <a className="py-1">TO VISIT</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
