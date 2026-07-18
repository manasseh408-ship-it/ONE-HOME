'use client';

import { useState } from 'react';
import Image from 'next/image';
import BookingCard from '@/components/BookingCard';
import ReviewCard from '@/components/ReviewCard';
import { FiChevronLeft, FiChevronRight, FiMapPin, FiHeart, FiStar, FiWifi, FiParkingCircle, FiSwimmer2, FiUtensilsCrossed } from 'react-icons/fi';

export default function PropertyPage({ params }: { params: { id: string } }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [saved, setSaved] = useState(false);

  const images = ['/property1.jpg', '/property2.jpg', '/property3.jpg', '/property4.jpg'];
  const amenities = [
    { icon: FiWifi, label: 'WiFi' },
    { icon: FiParkingCircle, label: 'Parking' },
    { icon: FiSwimmer2, label: 'Pool' },
    { icon: FiUtensilsCrossed, label: 'Kitchen' },
  ];

  const reviews = [
    {
      id: '1',
      reviewerName: 'Sarah Johnson',
      reviewerAvatar: '/avatar1.jpg',
      rating: 5,
      date: '2 weeks ago',
      text: 'Amazing property! The host was very responsive and the location is perfect. Would definitely stay here again.',
      helpfulCount: 12,
      ownerReply: {
        text: 'Thank you so much for your kind words! We hope to see you again soon!',
        date: '1 week ago',
      },
    },
    {
      id: '2',
      reviewerName: 'Michael Chen',
      reviewerAvatar: '/avatar2.jpg',
      rating: 4,
      date: '1 month ago',
      text: 'Great property with good amenities. Only minor issue was the wifi speed, but overall very satisfied.',
      helpfulCount: 8,
    },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="container-xl py-8">
      <div className="grid grid-cols-1 desktop:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="desktop:col-span-2 space-y-8">
          {/* Image Gallery */}
          <div className="relative w-full h-96 tablet:h-96 desktop:h-96 bg-gray-200 rounded-lg overflow-hidden group">
            <Image
              src={images[currentImageIndex]}
              alt="Property"
              fill
              className="object-cover"
            />

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full"
            >
              <FiChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full"
            >
              <FiChevronRight size={24} />
            </button>

            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
              {currentImageIndex + 1}/{images.length}
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="flex gap-2 overflow-x-auto">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0 ${idx === currentImageIndex ? 'ring-2 ring-primary' : ''}`}
              >
                <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>

          {/* Property Header */}
          <div className="border-b pb-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-h2 text-neutral-900 mb-2">
                  Beautiful 3-Bedroom Downtown House
                </h1>
                <div className="flex items-center gap-2 text-neutral-600">
                  <FiMapPin size={16} />
                  <span>123 Main Street, Austin, TX 78701</span>
                </div>
              </div>
              <button
                onClick={() => setSaved(!saved)}
                className="p-3 rounded-full hover:bg-gray-100"
              >
                <FiHeart
                  size={24}
                  className={saved ? 'fill-danger text-danger' : 'text-neutral-600'}
                />
              </button>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <FiStar size={18} className="fill-yellow-400 text-yellow-400" />
                <span className="font-bold text-neutral-900">4.8</span>
                <span className="text-neutral-600">(32 reviews)</span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 tablet:grid-cols-4 gap-4">
            {[
              { label: 'Bedrooms', value: '3' },
              { label: 'Bathrooms', value: '2' },
              { label: 'Square Feet', value: '1,500' },
              { label: 'Guests', value: '6' },
            ].map((stat) => (
              <div key={stat.label} className="p-4 bg-gray-50 rounded-md">
                <p className="text-xs text-neutral-600 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-neutral-900">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="space-y-4">
            <h2 className="text-h3 text-neutral-900">About This Property</h2>
            <p className="text-neutral-700 leading-relaxed">
              Welcome to our beautifully renovated downtown house! This spacious property features
              modern amenities, a fully equipped kitchen, and comfortable bedrooms. Perfect for
              families or groups looking for a home away from home in the heart of Austin.
            </p>
            <button className="text-primary font-semibold hover:underline">Read More</button>
          </div>

          {/* Amenities */}
          <div className="space-y-4">
            <h2 className="text-h3 text-neutral-900">Amenities</h2>
            <div className="grid grid-cols-2 tablet:grid-cols-4 gap-4">
              {amenities.map((amenity) => {
                const Icon = amenity.icon;
                return (
                  <div key={amenity.label} className="flex items-center gap-2 p-3 bg-gray-50 rounded-md">
                    <Icon size={20} className="text-primary" />
                    <span className="text-sm font-semibold text-neutral-900">{amenity.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Location Map */}
          <div className="space-y-4">
            <h2 className="text-h3 text-neutral-900">Location</h2>
            <div className="w-full h-64 bg-gray-200 rounded-md flex items-center justify-center">
              <p className="text-neutral-500">Map integration coming soon</p>
            </div>
          </div>

          {/* Reviews */}
          <div className="space-y-6">
            <div>
              <h2 className="text-h3 text-neutral-900 mb-4">Reviews</h2>
              <div className="flex items-center gap-8 mb-6 pb-6 border-b">
                <div>
                  <p className="text-4xl font-bold text-neutral-900">4.8</p>
                  <p className="text-sm text-neutral-600">from 32 reviews</p>
                </div>
                <div className="space-y-1 text-sm">
                  {[5, 4, 3, 2, 1].map((stars) => (
                    <div key={stars} className="flex items-center gap-2">
                      <span className="w-6">{stars}★</span>
                      <div className="w-32 h-2 bg-gray-200 rounded">
                        <div
                          className="h-full bg-yellow-400 rounded"
                          style={{ width: `${stars * 20}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {reviews.map((review) => (
              <ReviewCard key={review.id} {...review} />
            ))}
          </div>
        </div>

        {/* Sidebar - Booking Card */}
        <div className="desktop:col-span-1">
          <BookingCard pricePerNight={150} propertyId={params.id} />
        </div>
      </div>
    </div>
  );
}
