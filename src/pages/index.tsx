import Searchbar from "@/_components/Searchbar";
import { PokemonListItem } from "@/_types/pokemon.d";

export const getServerSideProps = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");

  const responseBody = await res.json();

  const pokemonList = responseBody.results;

  return { props: { pokemonList } };
};

type HomeProps = {
  pokemonList: PokemonListItem[];
};

const Home = (props: HomeProps) => {
  return (
    <div className="bg-[url('/pokeball-icon.png')] bg-center bg-no-repeat items-center w-full flex flex-col gap-y-5 h-screen overflow-y-hidden pt-14">
      <span className="text-black text-3xl font-bold"> Pokedex </span>
      <Searchbar pokemonListItems={props.pokemonList} />
    </div>
  );
};

export default Home;
