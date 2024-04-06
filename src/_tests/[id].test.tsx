import PokemonPage from "@/pages/pokemon/[id]";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";

describe("testing render of searchbar", () => {
  afterEach(() => {
    cleanup();
  });

  test("renders pokemonPage", async () => {
    render(<PokemonPage pokemonInfo={mockPokemonInfo} />);

    expect(await screen.findByText(/charmander/i)).toBeInTheDocument();
    expect(await screen.findByText(/fire/i)).toBeInTheDocument();
    expect(await screen.findByText(/0.6 m/i)).toBeInTheDocument();
    expect(await screen.findByText(/8.5 kg/i)).toBeInTheDocument();
  });
});

const mockPokemonInfo = {
  abilities: [
    {
      ability: { name: "ability1", url: "https://pokeapi.co/ability/1/" },
      is_hidden: false,
      slot: 1,
    },
    {
      ability: { name: "ability2", url: "https://pokeapi.co/ability/2/" },
      is_hidden: true,
      slot: 3,
    },
  ],
  base_experience: 247,
  cries: {
    latest:
      "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/4.ogg",
    legacy:
      "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/4.ogg",
  },
  forms: [
    {
      name: "charmander",
      url: "https://pokeapi.co/api/v2/pokemon-form/4/",
    },
  ],
  game_indices: [
    {
      game_index: 180,
      version: { name: "version1", url: "https://pokeapi.co/version/1/" },
    },
    {
      game_index: 180,
      version: { name: "version2", url: "https://pokeapi.co/version/2/" },
    },
  ],
  height: 6,
  held_items: [],
  id: 4,
  is_default: true,
  location_area_encounters: "https://pokeapi.co/api/v2/pokemon/4/encounters",
  moves: [
    {
      move: { name: "move1", url: "https://pokeapi.co/move/1/" },
      version_group_details: [
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "method1",
            url: "https://pokeapi.co/move-learn-method/1/",
          },
          version_group: {
            name: "group1",
            url: "https://pokeapi.co/version-group/1/",
          },
        },
      ],
    },
  ],
  name: "charmander",
  order: 7,
  past_abilities: [],
  past_types: [],
  species: {
    name: "charmander",
    url: "https://pokeapi.co/api/v2/pokemon-species/4/",
  },
  sprites: {
    back_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
    back_female: null,
    back_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/4.png",
    back_shiny_female: null,
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    front_female: null,
    front_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png",
    front_shiny_female: null,
    other: {
      dream_world: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        front_female: null,
      },
      home: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        front_female: null,
      },
      "official-artwork": {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      showdown: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
    },
    versions: {
      "generation-i": {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        front_female: null,
      },
      "generation-ii": {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        front_female: null,
      },
      "generation-iii": {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        front_female: null,
      },
      "generation-iv": {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        front_female: null,
      },
      "generation-v": {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        front_female: null,
      },
      "generation-vi": {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        front_female: null,
      },
      "generation-vii": {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        front_female: null,
      },
      "generation-viii": {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        front_female: null,
      },
    },
  },
  stats: [
    {
      base_stat: 78,
      effort: 0,
      stat: { name: "hp", url: "https://pokeapi.co/stat/1/" },
    },
    {
      base_stat: 84,
      effort: 0,
      stat: { name: "attack", url: "https://pokeapi.co/stat/2/" },
    },
  ],
  types: [
    { slot: 1, type: { name: "fire", url: "https://pokeapi.co/type/1/" } },
  ],
  weight: 85,
};
