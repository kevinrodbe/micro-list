export const rickAndMortiMap = {
  toDomain: (res) => {
    const { results, info } = res;

    return {
      records: results.map((r) => ({
        gender: r.gender,
        id: r.id,
        img: r.image,
        name: r.name,
      })),
      pagination: {
        page: info.prev === null ? 1 : info.prev + 1,
        pageSize: results.length,
        totalRecords: info.count,
        totalPages: info.pages,
      },
    };
  },
};

export const harryPotter = {
  toDomain: (res) => {
    return {
      records: res.map((r) => ({
        gender: r.gender,
        id: r.id,
        img: r.image,
        name: r.name,
      })),
    };
  },
};
