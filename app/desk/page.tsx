import Image from "next/image";
import Footer from "../components/footer";
import Navigation from "../components/navigation";

const featuredProducts = [
  {
    id: 1,
    name: "Modern Desk Setup",
    price: 1299.99,
    description: "Complete ergonomic workspace solution with adjustable height",
    image: "/desk-setup-1.jpg"
  },
  {
    id: 2,
    name: "Premium Office Chair",
    price: 599.99,
    description: "Ergonomic design with premium leather and lumbar support",
    image: "/office-chair-1.jpg"
  },
  {
    id: 3,
    name: "Smart Desk Lamp",
    price: 129.99,
    description: "Adjustable LED lamp with wireless charging base",
    image: "/desk-lamp-1.jpg"
  },
  // Adding more products to demonstrate scroll
  {
    id: 4,
    name: "Wireless Keyboard",
    price: 199.99,
    description: "Mechanical keyboard with customizable RGB lighting",
    image: "/desk-setup-1.jpg"
  },
  {
    id: 5,
    name: "Ergonomic Mouse",
    price: 89.99,
    description: "Vertical mouse design for reduced wrist strain",
    image: "/office-chair-1.jpg"
  },
  {
    id: 6,
    name: "Monitor Stand",
    price: 149.99,
    description: "Adjustable dual monitor stand with cable management",
    image: "/desk-lamp-1.jpg"
  }
];

export default function Desk() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation textColor="black" />
      
      <main className="flex-1 max-w-7xl mx-auto px-8 mt-28">  {/* Added margin-top for spacing below fixed nav */}
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
            Premium Desk Setups
          </h1>
          <p className="text-xl text-gray-600">
            Elevate your workspace with our curated collection
          </p>
        </div>

        {/* Featured Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProducts.map((product) => (
            <div 
              key={product.id}
              className="rounded-xl overflow-hidden shadow border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{product.name}</h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                  <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      
      </main>
      
      <div className="mt-auto mb-8">
        <Footer textColor="black" />
      </div>
    </div>
  );
}
