import { useColorModeValue } from "@chakra-ui/color-mode";
import { Center } from "@chakra-ui/react";
export default ({
  Icon,
  h = 12,
  w = 12,
  color,
  bg,
  iconSize = "6",
  rounded = "full",
}) => {
  const iconBagground = bg || useColorModeValue("gray.100", "gray.600");

  return (
    <Center h={h} w={w} bg={iconBagground} rounded={rounded}>
      <Icon boxSize={iconSize} />
    </Center>
  );
};
