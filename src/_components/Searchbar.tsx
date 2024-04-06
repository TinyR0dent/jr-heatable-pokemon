"use client";

import { PokemonListItem } from "@/_types/pokemon.d";
import { useState } from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import Link from "next/link";

type SearchbarProps = {
  pokemonListItems: PokemonListItem[];
};

const Searchbar = ({ pokemonListItems }: SearchbarProps) => {
  const [inputVal, setInputVal] = useState<string>("");
  const [filteredSearch, setFilteredSearch] =
    useState<Array<PokemonListItem>>(pokemonListItems);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInputVal(inputValue);

    const filteredItems = pokemonListItems.filter((item) =>
      item.name.startsWith(inputValue)
    );

    setFilteredSearch(filteredItems);
  };

  return (
    <div className="flex flex-col">
      <input
        type="search"
        placeholder="Search for a pokemon"
        className="w-[250px] shadow-[0_2px_10px] shadow-blackA4  rounded-lg px-2 h-10 text-xl"
        value={inputVal}
        onChange={handleInputChange}
      />
      {inputVal && (
        <ScrollArea.Root className="w-[250px] mt-1 h-fit max-h-[500px] transition-all ease-in-out px-2 rounded overflow-hidden shadow-[0_2px_10px] shadow-blackA4 bg-white">
          <ScrollArea.Viewport className="w-full h-full rounded">
            {filteredSearch.map((pokemon) => {
              const urlParts = pokemon.url.split("/");
              const pokemonNumber = parseInt(urlParts[urlParts.length - 2]);

              return (
                <Link
                  href={`/pokemon/${pokemonNumber}`}
                  key={pokemon.name}
                  className="text-xl my-2 flex flex-col"
                  passHref
                >
                  {pokemon.name}
                </Link>
              );
            })}
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar
            className="flex select-none touch-none p-0.5 bg-blackA3 transition-colors duration-[160ms] ease-out hover:bg-blackA5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
            orientation="vertical"
          >
            <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
          </ScrollArea.Scrollbar>
          <ScrollArea.Scrollbar
            className="flex select-none touch-none p-0.5 bg-blackA3 transition-colors duration-[160ms] ease-out hover:bg-blackA5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
            orientation="horizontal"
          >
            <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
          </ScrollArea.Scrollbar>
          <ScrollArea.Corner className="bg-blackA5" />
        </ScrollArea.Root>
      )}
    </div>
  );
};

export default Searchbar;
