export default function Specialties() {
  return (
    <>
      <section className="section-padding bg-[#fffaf0]">
        <div className="container mx-auto px-5">
          <h2 className="section-title text-4xl font-bold text-center text-[#800000]">
            Our Specialties
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Discover our signature dishes that keep our customers coming back for
            more
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden card-hover">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80')] bg-cover bg-center relative">
                <div className="menu-tag">Popular</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#800000] mb-2">
                  Gourmet Burgers
                </h3>
                <p className="text-gray-600 mb-4">
                  Juicy beef patties with fresh vegetables and special sauce
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-[#800000]">45 MAD</span>
                  <button className="text-[#d4af37] hover:text-[#800000] transition duration-300">
                    <i className="fas fa-plus-circle text-xl" />
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden card-hover">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80')] bg-cover bg-center relative">
                <div className="menu-tag">Chef's Choice</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#800000] mb-2">
                  Wood-Fired Pizza
                </h3>
                <p className="text-gray-600 mb-4">
                  Thin crust pizza with premium toppings and melted cheese
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-[#800000]">65 MAD</span>
                  <button className="text-[#d4af37] hover:text-[#800000] transition duration-300">
                    <i className="fas fa-plus-circle text-xl" />
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden card-hover">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=500&q=80')] bg-cover bg-center relative">
                <div className="menu-tag">Traditional</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#800000] mb-2">
                  Moroccan Tagine
                </h3>
                <p className="text-gray-600 mb-4">
                  Slow-cooked traditional dish with tender meat and vegetables
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-[#800000]">75 MAD</span>
                  <button className="text-[#d4af37] hover:text-[#800000] transition duration-300">
                    <i className="fas fa-plus-circle text-xl" />
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden card-hover">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=500&q=80')] bg-cover bg-center relative">
                <div className="menu-tag">Refreshing</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#800000] mb-2">
                  Fresh Juices
                </h3>
                <p className="text-gray-600 mb-4">
                  Natural fruit juices made from seasonal fresh fruits
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-[#800000]">20 MAD</span>
                  <button className="text-[#d4af37] hover:text-[#800000] transition duration-300">
                    <i className="fas fa-plus-circle text-xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="/menu" className="btn-primary text-lg py-4 px-8">
              View Full Menu <i className="fas fa-arrow-right ml-2" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}