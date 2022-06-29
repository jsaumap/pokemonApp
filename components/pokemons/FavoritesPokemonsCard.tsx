import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { Card, Grid } from '@nextui-org/react';

interface Props {
  id: number;
}

export const FavoritesPokemonsCard: NextPage<Props> = ({ id }) => {
  const router = useRouter();

  const onFavoritesClicked = () => {
    router.push(`/pokemon/${id}`);
  };
  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id} onClick={onFavoritesClicked}>
      <Card isHoverable isPressable css={{ padding: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width={'100%'}
          height={140}
        ></Card.Image>
      </Card>
    </Grid>
  );
};
