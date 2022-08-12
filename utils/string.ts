export const format = (str: string, ...args: string[]): string => {
  let formatedStr = str;
  args.forEach((value, index) => {
    while (formatedStr.indexOf(`{${index}}`) >= 0) {
      formatedStr = formatedStr.replace(`{${index}}`, value);
    }
  });
  return formatedStr;
};
