import Link from "next/link";
import React from "react";
import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Image,
  Center,
  Heading,
  Text,
  VStack,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { formatPopulation, objectToArray } from "../util/functions";

const ListItem = ({ label, details, ...restProps }) => {
  return (
    <div {...restProps}>
      <Text fontWeight="semibold">{label}:</Text>
      <Text>{details}</Text>
    </div>
  );
};
const Icon = ({
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
const Card = ({
  country: { id, name, population, capital, currencies, flags },
}) => {
  return (
    <Box bg={useColorModeValue("gray.50", "gray.700")} rounded="lg" shadow="sm">
      <Link href="dashboard/country/[id]" as={"dashboard/country/" + id}>
        <a>
          <Image src={flags.png} alt={name.common} rounded="lg" />
        </a>
      </Link>
      <VStack w="full" p="4">
        <ListItem
          label="Population"
          deatils={formatPopulation(population, "words")}
          className="w-full"
        />
        {/* <ListItem
          label="Currency"
          deatils={objectToArray(currencies, "values")
            .map((currency) => currency.name)
            .join(", ")}
          className="w-full"
        /> */}
        <ListItem label="Capital" details={capital} className="w-full" />
        <HStack w="full" justifyContent="end">
          <Icon Icon={CheckIcon} />
          <Icon Icon={DeleteIcon} />
        </HStack>
      </VStack>
    </Box>
  );
};
export default Card;
