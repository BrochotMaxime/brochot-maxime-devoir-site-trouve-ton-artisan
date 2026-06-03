import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '../src/components/Layout';
import ScrollToTop from './components/common/ScrollToTop';

import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import SearchPage from './pages/SearchPage';
import ArtisanDetailPage from './pages/ArtisanDetailPage';
import ConstructionPage from './pages/ConstructionPage';
import LegalPage from './pages/LegalPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
        return (
                <BrowserRouter>
                        <ScrollToTop />
                        <Routes>
                                <Route element={<Layout />}>
                                        <Route path="/" element={<HomePage />} />
                                        <Route path="/categorie/:id" element={<CategoryPage />} />
                                        <Route path="/recherche" element={<SearchPage />} />
                                        <Route path="/artisan/:id" element={<ArtisanDetailPage />} />
                                        <Route path="/mentions-legales" element={<ConstructionPage title="Mentions légales" />} />
                                        <Route path="/donnees-personnelles" element={<ConstructionPage title="Données personnelles" />} />
                                        <Route path="/accessibilite" element={<ConstructionPage title="Accessibilité" />} />
                                        <Route path="/cookies" element={<ConstructionPage title="Cookies" />} />
                                        <Route path="*" element={<NotFoundPage />} />
                                </Route>
                        </Routes>
                </BrowserRouter>
        );
}

export default App;