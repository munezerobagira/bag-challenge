import { useRouter } from "next/router";
import React from "react";
import { baseAPI } from "../../../config";
import { objectToArray, formatPopulation } from "../../../util/functions";

const Country = ({
  name,
  population,
  region,
  subRegion,
  capital,
  topLevelDomain,
  currency,
  languages,
  flags,
  borders,
}) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="flex flex-row py-10">
      <div className="flex-1 px-4">
        <img src={flags.png} alt={name.common} className="w-full" />
      </div>
      <div className="flex-1 flex flex-col px-3">
        <div>
          <h4 className="font-bold text-lg my-2">{name.common}</h4>
        </div>
        <div className="flex flex-row">
          <div className="flex-1">
            <ul>
              <li>
                <span className="font-semibold text-base">Native Name: </span>{" "}
                {objectToArray(name.nativeName, "values")[0].common}
              </li>
              <li>
                <span className="font-semibold text-base">Population: </span>{" "}
                {formatPopulation(population, "commas")}
              </li>
              <li>
                <span className="font-semibold text-base">Region: </span>{" "}
                {region}
              </li>
              <li>
                <span className="font-semibold text-base">Sub Region: </span>{" "}
                {subRegion}
              </li>
              <li>
                <span className="font-semibold text-base">Capital: </span>{" "}
                {capital[0]}
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <ul>
              <li>
                <span className="font-semibold text-base">
                  Top Level Domain:{" "}
                </span>{" "}
                {/* {topLevelDomain} */}
              </li>
              <li>
                <span className="font-semibold text-base">Currencies: </span>{" "}
                {currency}
              </li>
              <li>
                <span className="font-semibold text-base">Languages: </span>{" "}
                {objectToArray(languages, "values").join(",")}
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center">
          <h4 className="font-semibold">Border countries:</h4>
          <ul className="flex flex-1">
            {borders &&
              borders.map((border) => {
                return (
                  <li className="px-2 mx-1 border py-1" key={border}>
                    {border}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export const getServerSideProps = async ({ params }) => {
  let res = await fetch(`${baseAPI}/out.json`);
  const data = await res.json();
  let country = data.find((element) => element.id == params.id);
  return { props: { ...country } };
};
export default Country;
