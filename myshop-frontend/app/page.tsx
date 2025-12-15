import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Specialties from './components/Specialties';
import Booking from './components/Booking';
import BookaTable from './components/BookaTable';
import Comments from './components/Comments';
import Contact from './components/ContactUs';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <Specialties />
      <Booking />
      <BookaTable />
      <Comments />
      <ContactUs />
      <Footer />
    </main>
  );
}