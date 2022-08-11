// @packages
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

// @scripts
import { config } from '../config';
import { createMockResponse, getMockParams } from '../../utils/mock';

// @enums
enum HttpCodes {
  success = 200,
  unauthorized = 401
}

type CustomObject = {
  [key: string]: any;
};

const mockedServices = {
  mockServiceSecurityLogin: (mockAdapter: MockAdapter) => {
    mockAdapter
      .onPost(config.services.security.login)
      .reply((call: unknown) => {
        const { email, password } = getMockParams(call);
        const { loginUserName, loginPassword } = config.settings.serviceMocker;
        const success = email === loginUserName && password === loginPassword;
        return createMockResponse({
          data: success ? config.mockData.security.user : null,
          httpCode: success ? HttpCodes.success : HttpCodes.unauthorized
        });
      });
  },
} as CustomObject;

export const initializeServiceMocker = (store: unknown) => {
  const mockAdapter = new MockAdapter(axios, {
    delayResponse: config.settings.serviceMocker.delayResponse
  });
  const serviceMocker = {
    replyWithMockData: () => {
      const include = config.settings.serviceMocker.include || [];
      Object.keys(mockedServices).forEach((name) => {
        if (include.some((item) => item === name)) {
          mockedServices[name](mockAdapter, store);
        }
      });
      mockAdapter.onAny().passThrough();
    },
    replyWithNetworkError: () => {
      mockAdapter.reset();
      mockAdapter.onAny().networkError();
    }
  };

  serviceMocker.replyWithMockData();
  return serviceMocker;
};
