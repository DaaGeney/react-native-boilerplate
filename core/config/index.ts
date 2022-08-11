// @scripts
import language from './text';
import masterData from './master-data';
import mockData from './mock-data';
import settings from './settings';
import { getServices } from './services';

const getConfiguration = () => {
  const servicesPlaceholders = settings.services;
  const services = getServices(servicesPlaceholders);

  return {
    masterData,
    mockData,
    services,
    settings,
    text: language.en
  };
};

export const config = getConfiguration();
