export type RickAndMortiResponse = {
  records: Array<{ gender: string; id: number; img: string; name: string }>;
  pagination: {
    page: number;
    pageSize: number;
    totalPages: number;
    totalRecords: number;
  };
};

export type HarryPotterResponse = {
  records: Array<{ gender: string; id: number; img: string; name: string }>;
};
