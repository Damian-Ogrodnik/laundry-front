export const getPages = (array, currentPage) => {
  const [indexDown, indexUp] =
    currentPage <= 3
      ? [0, 5]
      : currentPage > 3 && currentPage < array.length - 4
      ? [currentPage - 2, currentPage + 3]
      : [array.length - 5, array.length];

  return array.slice(indexDown, indexUp);
};
