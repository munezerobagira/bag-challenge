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
import Icon from "./Icon";
import { formatPopulation, objectToArray } from "../util/functions";

const ListItem = ({ label, details, ...restProps }) => {
  return (
    <div {...restProps}>
      <Text fontWeight="semibold">{label}:</Text>
      <Text>{details}</Text>
    </div>
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
        <Heading size="md" width="full">
          {name.common}
        </Heading>
        <ListItem
          label="Population"
          details={formatPopulation(population, "words")}
          className="w-full"
        />
        {/* <ListItem
          label="Currency"
          details={objectToArray(currencies, "values")
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
