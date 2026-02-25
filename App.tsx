import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

// Placeholder pages for now
const Services = () => <div className="pt-32 pb-20 px-4 text-center"><h1>صفحة الخدمات</h1><p className="mt-4 text-white/60">(يتم رفع المحتوى من قبل ممثلي الشركة)</p></div>;
const About = () => <div className="pt-32 pb-20 px-4 text-center"><h1>عن روفانا</h1><p className="mt-4 text-white/60">(يتم رفع المحتوى من قبل ممثلي الشركة)</p></div>;
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          {/* Admin Routes - No Header/Footer */}
          <Route path="/rovana-admin-secure" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          
          {/* Public Routes */}
          <Route
            path="*"
            element={
              <>
                <Header />
                <main className="flex-grow">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </main>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
