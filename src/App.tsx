import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import './index.css';

function ExternalRedirect({ url }: { url: string }) {
  if (typeof window !== 'undefined') {
    window.location.replace(url);
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#07070A]">
      <div className="text-center p-8">
        <div className="animate-spin w-8 h-8 border-2 border-[#FFD700] border-t-transparent rounded-full mx-auto mb-4"></div>
        <h1 className="text-2xl font-bold mb-4 text-white">Redirecting...</h1>
        <p className="text-gray-400">Taking you to {url}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#07070A]">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* External redirects */}
            <Route path="/token" element={<ExternalRedirect url="https://migaprotocol.xyz" />} />
            <Route path="/protocol" element={<ExternalRedirect url="https://migaprotocol.xyz" />} />
            <Route path="/buy" element={<ExternalRedirect url="https://migaprotocol.xyz" />} />
            <Route path="/mint" element={<ExternalRedirect url="https://migaprotocol.xyz" />} />

            {/* Catch-all redirects to home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
