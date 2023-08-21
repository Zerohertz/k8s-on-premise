export const deletePropertyInObject = (obj: object, _key: string | number | symbol) => {
  return Object.entries(obj)
    .filter(([key]) => key !== _key)
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
};
