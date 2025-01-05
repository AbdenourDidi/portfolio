import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import PageContainer from './components/PageContainer';

const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const Project = lazy(() => import('./pages/Project'));
const Skills = lazy(() => import('./pages/Skills'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <PageContainer>
      <Navbar />
      <Suspense fallback={<div className="container">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/" element={<Projects />} />
          <Route path="/project/:slug" element={<Project />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </PageContainer>
  );
}

export default App;
