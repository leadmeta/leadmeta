import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import MarketingAgency from './pages/MarketingAgency'
import BlogNetwork from './pages/BlogNetwork'
import ScrollToTop from './components/ScrollToTop'

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <ScrollToTop />
            <Navbar />
            <main className="flex-1">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/services/marketing-agency" element={<MarketingAgency />} />
                    <Route path="/services/blog-network" element={<BlogNetwork />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/privacy" element={<Privacy />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App
