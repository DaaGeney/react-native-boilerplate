/* global JSX */
// packages
import React from 'react';
import Dashboard from '../../screens/dashboard';
import Settings from '../../screens/settings';

// scripts
export type RouteConfig = {
  path: string;
  element: JSX.Element;
  routes?: RouteConfig[];
};

export type RouteConfigComponentProps = Pick<RouteConfig, 'routes'>;

export const routes: Record<string, RouteConfig> = {
  dashboard: {
    path: '/',
    element: <Dashboard />
  },
  settings: {
    path: '/settings',
    element: <Settings />
  }
};
