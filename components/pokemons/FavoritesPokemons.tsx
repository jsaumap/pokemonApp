import { Grid } from '@nextui-org/react';
import { NextPage } from 'next';
import React from 'react';
import { FavoritesPokemonsCard } from './';

interface Props {
  pokemons: number[];
}
export const FavoritesPokemons: NextPage<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {pokemons.map((id) => (
        <FavoritesPokemonsCard id={id} key={id} />
      ))}
    </Grid.Container>
  );
};
