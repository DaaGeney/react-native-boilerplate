/* eslint-disable @typescript-eslint/no-explicit-any */
// @packages
import _ from 'lodash';

export const copyObjInCamelCase = (source: any): Record<string, any> => {
  if (Array.isArray(source)) {
    return source.map((item) => copyObjInCamelCase(item));
  }
  if (source !== null && source.constructor === Object) {
    return Object.keys(source).reduce(
      (result, key) => ({
        ...result,
        [_.lowerFirst(key)]: copyObjInCamelCase(source[key])
      }),
      {}
    );
  }
  return source;
};

export const copyObjIncludingProps = (
  source: Record<string, string | number>,
  includedProperties: string[]
): Record<string, any> =>
  Object.keys(source).reduce((copy: Record<string, any>, propName) => {
    if (includedProperties.includes(propName)) {
      copy[propName] = source[propName];
    }
    return copy;
  }, {});
