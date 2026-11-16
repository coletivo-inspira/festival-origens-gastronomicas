import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SchedulePage from './pages/SchedulePage';
import ExhibitorsPage from './pages/ExhibitorsPage';
import EditionsPage from './pages/EditionsPage';
import EditionPage from './pages/EditionPage';
import BecomeExhibitor from './pages/BecomeExhibitor';
import BioLink from './pages/BioLink';
import PrivacyPage from './pages/PrivacyPage';
import NotFound from './pages/NotFound';

// Importações diretas (sem lazy): as páginas são pequenas e o HTML pré-gerado precisa hidratar sem piscar.
const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/programacao" element={<SchedulePage />} />
    <Route path="/expositores" element={<ExhibitorsPage />} />
    <Route path="/edicoes" element={<EditionsPage />} />
    <Route path="/edicoes/:id" element={<EditionPage />} />
    <Route path="/seja-expositor" element={<BecomeExhibitor />} />
    <Route path="/privacidade" element={<PrivacyPage />} />
    <Route path="/links" element={<BioLink />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
