export const createClassName = (options: string[] | any[]) => {
  return options && options.filter(Boolean).join(' ');
};
