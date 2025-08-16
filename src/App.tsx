
import './App.css'
import FeaturedPoducts from './components/FeaturedPoducts'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import OurProducts from './components/OurProducts'
import Patners from './components/Patners'
import RecentlyAdded from './components/RecentlyAdded'
import Testimonials from './components/Testimonials'
import TopCategories from './components/TopCategories'

function App() {

  return (
   <div className='bg-white min-h-screen text-black'>
      <div>
        <Navbar />
      </div>

      <div>
        <Hero />
      </div>
    
      <div>
        <Patners />
      </div>

      <div>
        <FeaturedPoducts />
      </div>

      <div>
        <TopCategories />
      </div>

      <div>
        <OurProducts />
      </div>

      <div>
        <Testimonials />
      </div>

      <div>
        <RecentlyAdded />
      </div>

      <div>
        <Footer />
      </div>
   </div>
  )
}

export default App
