export const normalizeName = (str: string) =>
  str
    .split('-')
    .map(toCamelCase)
    .join(' ');

export const toCamelCase = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);
