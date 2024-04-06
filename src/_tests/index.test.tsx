import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { expect, test, describe, afterEach } from "vitest";
import Home from "@/pages";
import { PokemonListItem } from "@/_types/pokemon.d";
import Searchbar from "@/_components/Searchbar";

describe("testing render of searchbar", () => {
  afterEach(() => {
    cleanup();
  });

  test("renders searchbar with placeholder", async () => {
    render(<Home pokemonList={[]} />);

    expect(
      await screen.findByPlaceholderText("Search for a pokemon")
    ).toBeInTheDocument();
  });

  test("renders filtered Pokémon list when input is entered", () => {
    const pokemonList: PokemonListItem[] = [
      { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
      { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
      { name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/7/" },
    ];

    render(<Searchbar pokemonListItems={pokemonList} />);

    const searchInput = screen.getByPlaceholderText("Search for a pokemon");
    fireEvent.change(searchInput, { target: { value: "c" } });

    expect(screen.getByText("charmander")).toBeInTheDocument();
    expect(screen.queryByText("bulbasaur")).not.toBeInTheDocument();
    expect(screen.queryByText("squirtle")).not.toBeInTheDocument();
  });

  test("redirects to pokemon url when link is clicked", async () => {
    const pokemonList = [
      { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
      { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
      { name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/7/" },
    ];

    render(<Searchbar pokemonListItems={pokemonList} />);

    const searchInput = screen.getByPlaceholderText("Search for a pokemon");

    fireEvent.change(searchInput, { target: { value: "c" } });

    const linkElement = await screen.findByText("charmander");

    fireEvent.click(linkElement);

    expect(linkElement).toHaveAttribute("href", "/pokemon/4");
  });
});
