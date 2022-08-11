// packages
import {
  Route, Routes, Navigate
} from 'react-router-native';

// scripts
import { routes } from '../routes/config';

const Main = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/">
        {Object.values(routes).map((route, index) => (
          <Route key={route.path} index={!index} path={route.path} element={route.element}>
            {!!route.routes
              && route.routes.map((subRoute, subIndex) => (
                <Route
                  key={subRoute.path}
                  index={!subIndex}
                  path={subRoute.path}
                  element={subRoute.element}
                />
              ))}
          </Route>
        ))}
        </Route>
      </Routes>
  );
}

export default Main;
