
import React from 'react';
// Using namespace import and destructuring with any to fix "no exported member" errors
import * as ReactRouterDOM from 'react-router-dom';
import { MainLayout } from './components/MainLayout';
import { Home } from './pages/Home';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ProjectsPage } from './pages/ProjectsPage';

const { HashRouter, Routes, Route } = ReactRouterDOM as any;

const App: React.FC = () => {
  return (
    <HashRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </MainLayout>
    </HashRouter>
  );
};

export default App;
