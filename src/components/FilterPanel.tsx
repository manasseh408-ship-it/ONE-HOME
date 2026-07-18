'use client';

import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

interface FilterPanelProps {
  onFilterChange?: (filters: any) => void;
}

export default function FilterPanel({ onFilterChange }: FilterPanelProps) {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [propertyTypes, setPropertyTypes] = useState<string[]>([]);
  const [amenities, setAmenities] = useState<string[]>([]);
  const [expandedSections, setExpandedSections] = useState({
    propertyType: true,
    amenities: false,
    rating: true,
  });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const togglePropertyType = (type: string) => {
    const updated = propertyTypes.includes(type)
      ? propertyTypes.filter((t) => t !== type)
      : [...propertyTypes, type];
    setPropertyTypes(updated);
    onFilterChange?.({ propertyTypes: updated });
  };

  const toggleAmenity = (amenity: string) => {
    const updated = amenities.includes(amenity)
      ? amenities.filter((a) => a !== amenity)
      : [...amenities, amenity];
    setAmenities(updated);
    onFilterChange?.({ amenities: updated });
  };

  return (
    <div className="bg-white rounded-md shadow-sm p-6 space-y-6">
      {/* Price Range */}
      <div>
        <h3 className="font-semibold text-neutral-900 mb-3">Price Range</h3>
        <div className="space-y-2">
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="w-full"
          />
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Min"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
              className="input-field text-sm w-1/2"
            />
            <input
              type="number"
              placeholder="Max"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="input-field text-sm w-1/2"
            />
          </div>
        </div>
      </div>

      {/* Property Type */}
      <div className="border-t pt-6">
        <button
          onClick={() => toggleSection('propertyType')}
          className="flex items-center justify-between w-full mb-3"
        >
          <h3 className="font-semibold text-neutral-900">Property Type</h3>
          <FiChevronDown
            className={`transition-transform ${expandedSections.propertyType ? 'rotate-180' : ''}`}
          />
        </button>
        {expandedSections.propertyType && (
          <div className="space-y-2">
            {['Apartment', 'House', 'Villa', 'Cottage', 'Room'].map((type) => (
              <label key={type} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={propertyTypes.includes(type)}
                  onChange={() => togglePropertyType(type)}
                  className="w-4 h-4"
                />
                <span className="text-sm text-neutral-600">{type}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Amenities */}
      <div className="border-t pt-6">
        <button
          onClick={() => toggleSection('amenities')}
          className="flex items-center justify-between w-full mb-3"
        >
          <h3 className="font-semibold text-neutral-900">Amenities</h3>
          <FiChevronDown
            className={`transition-transform ${expandedSections.amenities ? 'rotate-180' : ''}`}
          />
        </button>
        {expandedSections.amenities && (
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {['WiFi', 'Parking', 'Pool', 'Kitchen', 'AC', 'TV', 'Washer/Dryer', 'Garden'].map(
              (amenity) => (
                <label key={amenity} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={amenities.includes(amenity)}
                    onChange={() => toggleAmenity(amenity)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-neutral-600">{amenity}</span>
                </label>
              )
            )}
          </div>
        )}
      </div>

      {/* Bedrooms */}
      <div className="border-t pt-6">
        <h3 className="font-semibold text-neutral-900 mb-3">Bedrooms</h3>
        <input type="range" min="0" max="10" defaultValue="1" className="w-full" />
      </div>

      {/* Bathrooms */}
      <div className="border-t pt-6">
        <h3 className="font-semibold text-neutral-900 mb-3">Bathrooms</h3>
        <input type="range" min="0" max="5" defaultValue="1" className="w-full" />
      </div>

      {/* Rating Filter */}
      <div className="border-t pt-6">
        <h3 className="font-semibold text-neutral-900 mb-3">Rating</h3>
        <div className="space-y-2">
          {['4.5+', '4.0+', '3.5+'].map((rating) => (
            <label key={rating} className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="rating" value={rating} className="w-4 h-4" />
              <span className="text-sm text-neutral-600">⭐ {rating}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      <button className="w-full py-2 border-2 border-neutral-300 rounded-md text-neutral-900 font-semibold hover:bg-gray-100 transition">
        Clear Filters
      </button>
    </div>
  );
}
