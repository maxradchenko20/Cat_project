import { useQuery } from 'react-query';
import { client } from '../core/api';
import { QueryKeys } from '../core/query-keys';
import { GetRandomCatsDto } from './dto/get-random-cats.dto';

const getRandomCats = async () => {
  const { data } = await client.get<GetRandomCatsDto>(
    'https://api.thecatapi.com/v1/images/search?limit=10',
  );

  return data;
};

export const useGetRandomCatData = () => {
  const { data, isLoading, isError } = useQuery(
    QueryKeys.GET_RANDOM_CATS,
    getRandomCats,
  );

  return {
    data,
    isLoading,
    isError,
  };
};
