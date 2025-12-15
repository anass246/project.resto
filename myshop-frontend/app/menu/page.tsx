import Header from '../components/Header';
import Footer from '../components/Footer';
import Filters from '../components/menu/Filters';
import Shop from '../components/menu/Shop';
import MenuList from '../components/menu/Menu';
import Hero from '../components/menu/Hero';

export default function MenuPage() {
    return (
        <main className="bg-[#fffaf0]">
            <Header />
            <Hero /> {/* (اختياري) */}

            <div className="container mx-auto px-5 py-20">

                {/* 1. الفلاتر (جات الفوق دابا) */}
                <div className="mb-10 flex justify-center">
                    <Filters />
                </div>

                {/* 2. السلة والماكلة (تحت الفلاتر) */}
                <div className="w-full">
                    <Shop />
                    <MenuList />
                </div>

            </div>

            <Footer />
        </main>
    );
}