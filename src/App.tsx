import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StoreProvider } from './lib/store';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Designers from './pages/Designers';
import CustomOrder from './pages/CustomOrder';
import ServiceDetail from './pages/ServiceDetail';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import Admin from './pages/Admin';

export default function App() {
  return (
    <StoreProvider>
      <Router>
        <div className="app-container">
          <Header />
          <main className="flex-grow pt-[80px]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/designers" element={<Designers />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/custom-order" element={<CustomOrder />} />
              <Route path="/login" element={<Login />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </StoreProvider>
  );
}
