import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import { lazy, Suspense } from 'react';


// Lazy load the pages to improve performance
const IndexPage = lazy(() => import('./views/IndexPage'));
const FavoritePage = lazy(() => import('./views/FavoritePage'));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<IndexPage />} />
            <Route path="/favorites" element={<FavoritePage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
