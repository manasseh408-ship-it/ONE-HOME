'use client';

import { useState } from 'react';
import PropertyCard from '@/components/PropertyCard';
import FilterPanel from '@/components/FilterPanel';
import { FiLayout, FiMap } from 'react-icons/fi';

export default function BrowsePage() {
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');

  const properties = [
    {
      id: '1',
      name: 'Beautiful Downtown Apartment',
      address: '123 Main St, Austin, TX',
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
      address: '456 Ocean Ave, Miami, FL',
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
      address: '789 5th Ave, New York, NY',
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
      address: '321 Mountain Rd, Denver, CO',
      price: 180,
      rating: 4.8,
      reviews: 29,
      bedrooms: 4,
      bathrooms: 3,
      images: ['/property7.jpg', '/property8.jpg'],
    },
    {
      id: '5',
      name: 'Luxury Penthouse',
      address: '654 Sunset Blvd, Los Angeles, CA',
      price: 350,
      rating: 5.0,
      reviews: 18,
      bedrooms: 3,
      bathrooms: 2,
      images: ['/property9.jpg', '/property10.jpg'],
    },
    {
      id: '6',
      name: 'Charming Historic Home',
      address: '987 Oak Street, Boston, MA',
      price: 120,
      rating: 4.6,
      reviews: 44,
      bedrooms: 2,
      bathrooms: 1,
      images: ['/property11.jpg', '/property12.jpg'],
    },
  ];

  return (
    <div className="container-xl py-8">
      <div className="grid grid-cols-1 tablet:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <div className="tablet:col-span-1 mobile:hidden">
          <FilterPanel />
        </div>

        {/* Main Content */}
        <div className="tablet:col-span-3 space-y-6">
          {/* Results Header */}
          <div className="flex flex-col tablet:flex-row items-start tablet:items-center justify-between gap-4">
            <div>
              <p className="text-neutral-600">
                Showing <span className="font-bold">{properties.length}</span> properties
              </p>
            </div>

            <div className="flex items-center gap-4 w-full tablet:w-auto">
              {/* View Toggle */}
              <div className="flex items-center bg-white rounded-md border border-gray-300 p-1">
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-primary text-white' : 'text-neutral-600'}`}
                >
                  <FiLayout size={18} />
                </button>
                <button
                  onClick={() => setViewMode('map')}
                  className={`p-2 rounded ${viewMode === 'map' ? 'bg-primary text-white' : 'text-neutral-600'}`}
                >
                  <FiMap size={18} />
                </button>
              </div>

              {/* Sort Dropdown */}
              <select className="input-field text-sm flex-1 tablet:flex-none">
                <option>Most Relevant</option>
                <option>Lowest Price</option>
                <option>Highest Price</option>
                <option>Newest Listings</option>
                <option>Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Properties Grid */}
          {viewMode === 'list' ? (
            <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-6">
              {properties.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>
          ) : (
            <div className="w-full h-96 tablet:h-screen bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-neutral-500">Map view coming soon</p>
            </div>
          )}

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-8">
            <button className="px-3 py-2 border border-gray-300 rounded text-neutral-900 hover:bg-gray-100">
              Previous
            </button>
            <button className="px-3 py-2 bg-primary text-white rounded">1</button>
            <button className="px-3 py-2 border border-gray-300 rounded text-neutral-900 hover:bg-gray-100">
              2
            </button>
            <button className="px-3 py-2 border border-gray-300 rounded text-neutral-900 hover:bg-gray-100">
              3
            </button>
            <button className="px-3 py-2 border border-gray-300 rounded text-neutral-900 hover:bg-gray-100">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
