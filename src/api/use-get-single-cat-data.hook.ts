import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { client } from '../core/api';
import { QueryKeys } from '../core/query-keys';
import { GetSingleCatDto } from './dto/get-singe-cat.dto';

interface GetSingleCatParams {
  id: string;
}

interface UseSingleCatDataParams {
  id: string | null;
}

const getSingleCat = async ({ id }: GetSingleCatParams) => {
  const { data } = await client.get<GetSingleCatDto>(
    `https://api.thecatapi.com/v1/images/${id}`,
  );

  return data;
};

export const useGetSingleCatData = ({ id }: UseSingleCatDataParams) => {
  const { data, isLoading, isError, refetch } = useQuery(
    `${QueryKeys.GET_SINGLE_CAT}-${id}`,
    () => getSingleCat({ id: id || '' }),
    {
      enabled: !!id,
    },
  );

  useEffect(() => {
    if (id) {
      refetch();
    }
  }, [id]);

  return {
    data,
    isLoading,
    isError,
  };
};
