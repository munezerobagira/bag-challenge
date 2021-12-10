import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
export default function CountryFilters({ label, clickHandler, options }) {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {label}
      </MenuButton>
      <MenuList>
        {options.map((item) => (
          <MenuItem onClick={() => clickHandler({ region: item })} key={item}>
            {item}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
