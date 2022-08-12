// @packages
import _ from 'lodash';

// @scripts
import { copyObjInCamelCase } from './object';

export const getMockParams = (call: any) => {
  const params = copyObjInCamelCase(
    call.params || JSON.parse(call.data).params || JSON.parse(call.data)
  ) as any;
  if (params.sortKey) {
    params.sortKey = _.lowerFirst(params.sortKey);
  }
  return params;
};

type MockResponseParams = {
  data?: any;
  httpCode?: number;
};
export const createMockResponse = ({
  data = null,
  httpCode = 200
}: MockResponseParams) => [httpCode, data];
