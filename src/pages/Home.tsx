import FeaturedPoducts from "../components/home/FeaturedPoducts"
import Footer from "../components/Footer"
import Hero from "../components/home/Hero"
import Navbar from "../components/Navbar"
import OurProducts from "../components/home/OurProducts"
import Patners from "../components/home/Patners"
import RecentlyAdded from "../components/home/RecentlyAdded"
import Testimonials from "../components/home/Testimonials"
import TopCategories from "../components/home/TopCategories"

const Home = () => {
  return (
   <div className='bg-white min-h-screen text text-black'>
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

export default Home