export const objectToArray = (obj) => {
  if (!obj || Object.keys(obj).length === 0) {
    return [];
  }
  const list = [];
  Object.keys(obj).map((key)=> {
    list.push(obj[key])
  });
  return list;
};