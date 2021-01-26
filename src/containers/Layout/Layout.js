import React from 'react';
import { Spinner } from 'components/Spinner';

const HomePage = React.lazy(() => import('containers/HomePage'));

const Layout = () => (
  <main>
    <React.Suspense fallback={<Spinner page />}>
      <HomePage />
    </React.Suspense>
  </main>
);

export default Layout;
