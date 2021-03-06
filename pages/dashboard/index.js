import Countries from "../../components/Countries";
import Search from "../../components/Search";
import { filter } from "../../util/functions";
import { baseAPI } from "../../config";
import { useState } from "react";
import CountryFilter from "../../components/CountryFilter";
import { Flex } from "@chakra-ui/react";

const Home = ({ countries }) => {
  const [countriesData, setContriesData] = useState(countries);
  const [searchValue, setSearchValue] = useState();
  const [selectedRegion, setSectedRegion] = useState();
  const filterCountries = filter(countries, setContriesData);
  const options = [
    "Africa",
    "Europe",
    "Oceania",
    "Asia",
    "Americas",
    "Antarctic",
  ];
  return (
    <div className="p-2">
      <Flex>
        <Search className="flex-1" changeHandler={filterCountries} />
        <CountryFilter
          label="Filter by region"
          options={options}
          clickHandler={filterCountries}
        />
      </Flex>

      <Countries countries={countriesData} />
    </div>
  );
};
Home.getInitialProps = async () => {
  let res = await fetch(`${baseAPI}/out.json`);
  const data = await res.json();
  return { countries: data };
};
export default Home;
