import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import { lazy, Suspense } from 'react';
import Spinner from './components/Spinner';

// Lazy load the pages to improve performance
const IndexPage = lazy(() => import('./views/IndexPage'));
const FavoritePage = lazy(() => import('./views/FavoritePage'));
const GenerateAIPage = lazy(() => import('./views/GenerateAIPage'));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<IndexPage />} />
            <Route path="/favorites" element={<FavoritePage />} />
            <Route path="/AI" element={<GenerateAIPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
