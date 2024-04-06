import { PokemonInfo } from "@/_types/pokemon.d";
import { ArrowBigLeft, ArrowBigRight, X } from "lucide-react";
import { GetServerSideProps } from "next";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.id}`);

  const pokemonInfo = await res.json();

  return { props: { pokemonInfo } };
};

type PokemonPageProps = {
  pokemonInfo: PokemonInfo;
};

const PokemonTypeColours: { [key: string]: string } = {
  normal: "rgba(168, 167, 122, 1)",
  fire: "rgba(238, 129, 48, 1)",
  water: "rgba(99, 144, 240, 1)",
  electric: "rgba(247, 208, 44, 1)",
  grass: "rgba(122, 199, 76, 1)",
  ice: "rgba(150, 217, 214, 1)",
  fighting: "rgba(194, 46, 40, 1)",
  poison: "rgba(163, 62, 161, 1)",
  ground: "rgba(226, 191, 101, 1)",
  flying: "rgba(169, 143, 243, 1)",
  psychic: "rgba(249, 85, 135, 1)",
  bug: "rgba(166, 185, 26, 1)",
  rock: "rgba(182, 161, 54, 1)",
  ghost: "rgba(115, 87, 151, 1)",
  dragon: "rgba(111, 53, 252, 1)",
  dark: "rgba(112, 87, 70, 1)",
  steel: "rgba(183, 183, 206, 1)",
  fairy: "rgba(214, 133, 173, 1)",
};

function addOpacity(rgbString: string, opacity: number) {
  return rgbString.split(", 1)")[0] + "," + opacity + ")";
}

const PokemonPage = (props: PokemonPageProps) => {
  const pokemonInfo = props.pokemonInfo;

  const bgColour = PokemonTypeColours[pokemonInfo.types[0].type.name];

  const typeColours: { [key: string]: string } = {};
  pokemonInfo.types.forEach((type) => {
    typeColours[type.type.name] = PokemonTypeColours[type.type.name];
  });

  const styles = {
    tableRow: {
      padding: 2,
    },
  };

  return (
    <div
      className="w-full h-full min-h-screen flex justify-center"
      style={{
        backgroundColor: addOpacity(bgColour, 0.8),
      }}
    >
      <div className="m-8 p-4 w-full flex flex-col h-fit min-h-[650px] gap-4 max-w-[600px] rounded-lg shadow-xl  bg-[#ebeced]">
        <div className="flex justify-between">
          <p className="justify-center flex flex-col text-[40px] font-bold capitalize w-fit ">
            {pokemonInfo.name} #{pokemonInfo.id.toString().padStart(3, "0")}
            <span
              className="h-1 w-full rounded-md"
              style={{
                backgroundColor: bgColour,
              }}
            />
          </p>
          <Link href={"/"}>
            <X className="bg-[#ebeced] hover:shadow-lg hover:rotate-90 transition-all duration-200 rounded-full hover:bg-[#d3d3d3] text-black w-8 h-8" />
          </Link>
        </div>
        <div className="flex flex-row gap-2 text-lg ">
          <span className="font-bold">Types:</span>
          {pokemonInfo.types.map((type) => {
            return (
              <div
                key={type.type.name}
                className="px-2 rounded-lg "
                style={{ backgroundColor: typeColours[type.type.name] }}
              >
                {type.type.name}
              </div>
            );
          })}
        </div>
        <div className="flex flex-row gap-2 sm:justify-start justify-center">
          <img
            src={pokemonInfo.sprites.front_default}
            alt="front"
            className="aspect-square h-[150px]"
          />
          {pokemonInfo.sprites.front_shiny && (
            <img
              src={pokemonInfo.sprites.front_shiny}
              alt="front"
              className="aspect-square h-[150px]"
            />
          )}
        </div>
        <span
          className="h-[1px] w-full rounded-md"
          style={{
            backgroundColor: bgColour,
          }}
        />

        <div className="flex flex-wrap gap-5 justify-center">
          <table
            className={`w-[250px] border border-collapse rounded-xl`}
            style={{
              backgroundColor: addOpacity(bgColour, 0.6),
            }}
          >
            <thead>
              <tr>
                <th style={styles.tableRow}>Stat</th>
                <th style={styles.tableRow}>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td style={styles.tableRow}>Height</td>
                <td style={styles.tableRow} className="w-[100px]">
                  {pokemonInfo.height / 10} m
                </td>
              </tr>
              <tr className="text-center">
                <td style={styles.tableRow}>Weight</td>
                <td style={styles.tableRow}>{pokemonInfo.weight / 10} kg</td>
              </tr>
              {pokemonInfo.stats.map((stat) => {
                return (
                  <tr key={stat.stat.name} className="text-center">
                    <td style={styles.tableRow}>{stat.stat.name}</td>
                    <td style={styles.tableRow}>{stat.base_stat}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <table
            className={`w-[250px] h-fit border border-collapse rounded-xl`}
            style={{
              backgroundColor: addOpacity(bgColour, 0.6),
            }}
          >
            <thead className="w-2/3">
              <tr>
                <th style={styles.tableRow}>Abilities</th>
              </tr>
            </thead>
            <tbody>
              {pokemonInfo.abilities.map((ability) => {
                return (
                  <tr key={ability.ability.name} className=" text-center">
                    <td style={styles.tableRow}>{ability.ability.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="flex flex-row justify-between">
          <Link
            href={`/pokemon/${pokemonInfo.id - 1}`}
            className="text-xl my-2 flex flex-row items-center"
          >
            <ArrowBigLeft fill={bgColour} />
            Previous Pokemon
          </Link>
          <Link
            href={`/pokemon/${pokemonInfo.id + 1}`}
            className="text-xl my-2 flex flex-row items-center"
          >
            Next Pokemon
            <ArrowBigRight fill={bgColour} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PokemonPage;
