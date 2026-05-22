import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/layout';

import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import SearchPage from './pages/SearchPage';
import ArtisanDetailPage from './pages/ArtisanDetailPage';
import LegalPage from './pages/LegalPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
        return (
                <BrowserRouter>
                        <Routes>
                                <Route element={<Layout />}>
                                        <Route path="/" element={<HomePage />} />
                                        <Route path="/categorie/:id" element={<CategoryPage />} />
                                        <Route path="/recherche" element={<SearchPage />} />
                                        <Route path="/artisan/:id" element={<ArtisanDetailPage />} />
                                        <Route path="/mentions-legales" element={<LegalPage />} />
                                        <Route path="/donnees-personnelles" element={<LegalPage />} />
                                        <Route path="/accessibilite" element={<LegalPage />} />
                                        <Route path="/cookies" element={<LegalPage />} />
                                        <Route path="*" element={<NotFoundPage />} />
                                </Route>
                        </Routes>
                </BrowserRouter>
        );
}

export default App;