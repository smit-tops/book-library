type BookApiResponse = {
  docs: IBookData[];
  numFound: number;
  numFoundExact: boolean;
  num_found: number;
  offset: number;
  q: string;
  start: number;
};

interface IBookData {
  id: string;
  title: string;
  author_name: string[];
  first_publish_year: number;
  isbn: string[];
  number_of_pages_median: number;
}
