import { Switch } from "@chakra-ui/react";
import { useColorMode, Avatar } from "@chakra-ui/react";

function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <nav>
      <div className="container flex space-between p-2 items-center">
        <div className="flex-1">
          <h3>Title</h3>
        </div>
        <div className="flex flex-row items-center">
          <p>DARK MODE</p>
          <Switch
            size="sm"
            isChecked={colorMode === "dark"}
            mx={2}
            onChange={toggleColorMode}
          />
          <div className="notification">
            <img
              src="/icons/bell.svg"
              className="w-6  bg-gray-200 rounded-full p-1 "
              alt="Bell icon"
            />
          </div>
          <div className="user flex flex-row items-center">
            <p className="pl-12 pr-6">
              <span className="text-gray-600">Hey, </span>
              <span>Jane</span>
            </p>
            <div>
              <Avatar alt="User avatar" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
