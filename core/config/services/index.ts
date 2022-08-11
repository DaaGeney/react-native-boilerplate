// @json
import services from './services.json';

// @types

export const getServices = (servicesPlaceholders: Record<string, string>) => {
  const servicesString = JSON.stringify(services);

  const parsedServices = Object.entries(servicesPlaceholders).reduce(
    (servicesStrings, [serviceName, serviceUrl]) =>
      servicesStrings.replace(new RegExp(`{${serviceName}}`, 'g'), serviceUrl),
    servicesString
  );

  return JSON.parse(parsedServices);
};
