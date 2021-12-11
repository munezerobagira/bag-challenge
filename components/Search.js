import { Search2Icon } from "@chakra-ui/icons";
import Icon from "./Icon";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
export default function Search({ changeHandler }) {
  return (
    <InputGroup mr={4}>
      <InputLeftElement
        pointerEvents="none"
        children={<Search2Icon />}
        onChange={(e) => {
          changeHandler({ "common.name": e.target.value });
        }}
      />
      <Input
        type="text"
        placeholder="Search For a Country"
        className="bg-transparent w-64 text-gray"
      />{" "}
    </InputGroup>
  );
}
