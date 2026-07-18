import Link from 'next/link';
import PropertyCard from '@/components/PropertyCard';
import { FiSearch, FiHome, FiHeart, FiUsers } from 'react-icons/fi';

export default function Home() {
  const featuredProperties = [
    {
      id: '1',
      name: 'Beautiful Downtown Apartment',
      address: 'Austin, TX',
      price: 150,
      rating: 4.8,
      reviews: 32,
      bedrooms: 2,
      bathrooms: 1,
      images: ['/property1.jpg', '/property2.jpg'],
    },
    {
      id: '2',
      name: 'Cozy Beach House',
      address: 'Miami, FL',
      price: 200,
      rating: 4.9,
      reviews: 48,
      bedrooms: 3,
      bathrooms: 2,
      images: ['/property3.jpg', '/property4.jpg'],
    },
    {
      id: '3',
      name: 'Modern City Loft',
      address: 'New York, NY',
      price: 250,
      rating: 4.7,
      reviews: 61,
      bedrooms: 1,
      bathrooms: 1,
      images: ['/property5.jpg', '/property6.jpg'],
    },
    {
      id: '4',
      name: 'Mountain Retreat Villa',
      address: 'Denver, CO',
      price: 180,
      rating: 4.8,
      reviews: 29,
      bedrooms: 4,
      bathrooms: 3,
      images: ['/property7.jpg', '/property8.jpg'],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-96 tablet:h-[500px] desktop:h-screen bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20" />

        <div className="relative z-10 container-xl text-white text-center space-y-8">
          <div>
            <h1 className="text-h3 tablet:text-4xl desktop:text-5xl font-bold mb-4">
              Find Your Next Home
            </h1>
            <p className="text-lg tablet:text-xl desktop:text-2xl text-blue-100">
              Connect with available houses across the country
            </p>
          </div>

          {/* Search Bar */}
          <div className="bg-white rounded-lg shadow-lg p-4 max-w-3xl mx-auto">
            <form className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-4">
              <div>
                <label className="text-xs text-neutral-600 font-semibold block mb-1">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="City or address"
                  className="input-field text-sm"
                />
              </div>
              <div>
                <label className="text-xs text-neutral-600 font-semibold block mb-1">
                  Check-in
                </label>
                <input type="date" className="input-field text-sm" />
              </div>
              <div>
                <label className="text-xs text-neutral-600 font-semibold block mb-1">
                  Check-out
                </label>
                <input type="date" className="input-field text-sm" />
              </div>
              <button type="submit" className="btn-primary flex items-center justify-center gap-2 self-end">
                <FiSearch size={18} />
                Search
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="container-xl py-16">
        <div className="mb-12">
          <h2 className="section-title">Featured Properties</h2>
          <p className="text-neutral-600">
            Discover amazing places to stay from verified hosts
          </p>
        </div>

        <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-6 mb-8">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/browse" className="btn-primary">
            View All Properties
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-neutral-50 py-16">
        <div className="container-xl">
          <h2 className="section-title text-center">How It Works</h2>

          <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-8">
            {[
              {
                icon: FiSearch,
                title: 'Search',
                description: 'Find the perfect property in your desired location',
              },
              {
                icon: FiHome,
                title: 'Book',
                description: 'Reserve your stay with just a few clicks',
              },
              {
                icon: FiHeart,
                title: 'Move In',
                description: 'Check in and enjoy your new temporary home',
              },
              {
                icon: FiUsers,
                title: 'Connect',
                description: 'Rate your experience and connect with the community',
              },
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <Icon size={32} className="text-white" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-neutral-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-xl text-center space-y-6">
          <h2 className="text-h2">Ready to Find Your Home?</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Join thousands of users who have found their perfect stay on ONE-HOME
          </p>
          <div className="flex flex-col tablet:flex-row gap-4 justify-center">
            <Link href="/browse" className="btn-secondary">
              Browse Properties
            </Link>
            <Link href="/host/create" className="btn-outline text-white border-white hover:bg-white hover:text-primary">
              List Your Property
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
