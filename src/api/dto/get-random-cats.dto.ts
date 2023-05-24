export type GetRandomCatsDto = Cats[];

export interface Cats {
  id: string;
  width: number;
  height: number;
  url: string;
  breeds?: CatsBreeds[];
}
export interface CatsBreedsWeight {
  imperial: string;
  metric: string;
}
export interface CatsBreeds {
  weight: CatsBreedsWeight;
  id: string;
  name: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  life_span: string;
  wikipedia_url: string;
}
