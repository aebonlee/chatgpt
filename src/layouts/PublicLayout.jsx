import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Home = lazy(() => import('../pages/Home'));
const ChatGPTBasics = lazy(() => import('../pages/chatgpt-basics/ChatGPTBasics'));
const PromptEngineering = lazy(() => import('../pages/prompt-engineering/PromptEngineering'));
const GPTsStore = lazy(() => import('../pages/gpts-store/GPTsStore'));
const APIUsage = lazy(() => import('../pages/api-usage/APIUsage'));
const AdvancedFeatures = lazy(() => import('../pages/advanced-features/AdvancedFeatures'));
const ModelComparison = lazy(() => import('../pages/model-comparison/ModelComparison'));
const NotFound = lazy(() => import('../pages/NotFound'));

function LoadingFallback() {
  return (
    <div className="loading-page">
      <div className="loading-spinner" />
    </div>
  );
}

export default function PublicLayout() {
  return (
    <div className="site-wrapper">
      <Navbar />
      <main className="site-main">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chatgpt-basics" element={<ChatGPTBasics />} />
            <Route path="/prompt-engineering" element={<PromptEngineering />} />
            <Route path="/gpts-store" element={<GPTsStore />} />
            <Route path="/api-usage" element={<APIUsage />} />
            <Route path="/advanced-features" element={<AdvancedFeatures />} />
            <Route path="/model-comparison" element={<ModelComparison />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
