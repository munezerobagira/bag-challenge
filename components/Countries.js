import { SimpleGrid } from "@chakra-ui/react";
import Card from "./Card";

export default function Countries({ countries }) {
  return (
    <SimpleGrid columns={[1, 4]} spacing={[10]} pt={10}>
      {countries.map((country) => {
        return <Card country={country} key={country.id} />;
      })}
    </SimpleGrid>
  );
}
