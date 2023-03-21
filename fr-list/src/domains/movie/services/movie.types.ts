export type RickAndMortiResponse<T> = {
  records: Array<T>;
  pagination: {
    page: number;
    pageSize: number;
    totalPages: number;
    totalRecords: number;
  };
};
