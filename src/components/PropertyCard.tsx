'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiHeart, FiStar } from 'react-icons/fi';

interface PropertyCardProps {
  id: string;
  name: string;
  address: string;
  price: number;
  rating: number;
  reviews: number;
  bedrooms: number;
  bathrooms: number;
  images: string[];
  isSaved?: boolean;
}

export default function PropertyCard({
  id,
  name,
  address,
  price,
  rating,
  reviews,
  bedrooms,
  bathrooms,
  images,
  isSaved = false,
}: PropertyCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [saved, setSaved] = useState(isSaved);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const toggleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    setSaved(!saved);
  };

  return (
    <Link href={`/property/${id}`}>
      <div className="card overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
        {/* Image Carousel */}
        <div className="relative w-full h-48 tablet:h-56 desktop:h-64 bg-gray-200 overflow-hidden group">
          <Image
            src={images[currentImageIndex] || '/placeholder.jpg'}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform"
          />

          {/* Image Counter */}
          <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
            {currentImageIndex + 1}/{images.length}
          </div>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <FiChevronLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <FiChevronRight size={20} />
              </button>
            </>
          )}

          {/* Save Button */}
          <button
            onClick={toggleSave}
            className="absolute top-3 left-3 bg-white/80 hover:bg-white p-2 rounded-full transition"
          >
            <FiHeart
              size={20}
              className={saved ? 'fill-danger text-danger' : 'text-neutral-900'}
            />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Title & Location */}
          <h3 className="font-semibold text-neutral-900 line-clamp-1">{name}</h3>
          <p className="text-xs text-neutral-500 line-clamp-1">{address}</p>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-2">
            <FiStar size={14} className="fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-semibold text-neutral-900">
              {rating.toFixed(1)}
            </span>
            <span className="text-xs text-neutral-500">({reviews} reviews)</span>
          </div>

          {/* Quick Info */}
          <div className="flex gap-2 my-3 text-xs text-neutral-600">
            <span>{bedrooms} bed</span>
            <span>•</span>
            <span>{bathrooms} bath</span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-1">
            <span className="text-lg font-bold text-neutral-900">${price}</span>
            <span className="text-xs text-neutral-500">per night</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
