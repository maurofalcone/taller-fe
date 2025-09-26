import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { useQuery } from "@apollo/client/react";
import { LIST_COUNTRIES } from "~/queries/countries";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

type CountryQueryResponse = {
  countries: {
    name: string;
    code: string;
  }[];
};

export default function Home() {
  const { data, loading, error } =
    useQuery<CountryQueryResponse>(LIST_COUNTRIES);
  const [country, setCountry] = useState("US");

  if (loading || error) {
    return <p>{error ? error.message : "Loading..."}</p>;
  }

  if (data) {
    return (
      <select
        value={country}
        onChange={(event) => setCountry(event.target.value)}
      >
        {data.countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
    );
  }
  return <Welcome />;
}
