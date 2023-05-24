import { FC } from 'react';
import { Button } from 'components/button.component';
import { CatCard } from 'components/cat-card.component';
import { useGetRandomCatData } from '../api/use-get-random-cat-data.hook';

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = ({}) => {
  const { data, isLoading, isError } = useGetRandomCatData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isLoading) {
    return <div>Ooops, something wrong happened</div>;
  }
  console.log('data', data);
  return (
    <div className="p-8">
      <div className="flex flex-wrap gap-8 justify-center mb-8">
        {data?.map((item) => (
          <CatCard
            key={item.id}
            image={item.url}
            name={item.breeds?.map((b) => b.name).join(',') || 'Cute cats'}
            catId={item.id}
          />
        ))}
      </div>
      <div className="text-center">
        <Button isLoading={false} onClick={() => {}}>
          Load more
        </Button>
      </div>
    </div>
  );
};
