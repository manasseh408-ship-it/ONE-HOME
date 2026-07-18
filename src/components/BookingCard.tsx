'use client';

import { useState } from 'react';
import { FiUsers, FiMinus, FiPlus } from 'react-icons/fi';

interface BookingCardProps {
  pricePerNight: number;
  propertyId: string;
}

export default function BookingCard({ pricePerNight, propertyId }: BookingCardProps) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);

  const nights = checkIn && checkOut ? Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24)) : 0;
  const cleaningFee = 50;
  const serviceFee = Math.round(pricePerNight * nights * 0.1);
  const subtotal = pricePerNight * nights;
  const tax = Math.round(subtotal * 0.13);
  const total = subtotal + cleaningFee + serviceFee + tax;

  return (
    <div className="sticky top-24 bg-white rounded-md shadow-lg p-6 space-y-4">
      {/* Price Display */}
      <div>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold text-neutral-900">${pricePerNight}</span>
          <span className="text-neutral-600">per night</span>
        </div>
      </div>

      {/* Date Pickers */}
      <div className="space-y-3">
        <div>
          <label className="block text-xs font-semibold text-neutral-600 mb-1">
            Check-in
          </label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="input-field text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-neutral-600 mb-1">
            Check-out
          </label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="input-field text-sm"
          />
        </div>
      </div>

      {/* Guests Selector */}
      <div>
        <label className="block text-xs font-semibold text-neutral-600 mb-2">
          Guests
        </label>
        <div className="flex items-center justify-between border border-gray-300 rounded-md p-2">
          <FiUsers size={18} className="text-neutral-600" />
          <div className="flex items-center gap-3">
            <button
              onClick={() => setGuests(Math.max(1, guests - 1))}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <FiMinus size={16} />
            </button>
            <span className="font-semibold w-6 text-center">{guests}</span>
            <button
              onClick={() => setGuests(guests + 1)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <FiPlus size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Price Breakdown */}
      {nights > 0 && (
        <div className="border-t pt-4 space-y-2 text-sm">
          <div className="flex justify-between text-neutral-600">
            <span>${pricePerNight} × {nights} nights</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between text-neutral-600">
            <span>Cleaning fee</span>
            <span>${cleaningFee}</span>
          </div>
          <div className="flex justify-between text-neutral-600">
            <span>Service fee</span>
            <span>${serviceFee}</span>
          </div>
          <div className="flex justify-between text-neutral-600">
            <span>Tax (13%)</span>
            <span>${tax}</span>
          </div>
          <div className="border-t pt-2 flex justify-between font-bold text-neutral-900">
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>
      )}

      {/* Book Button */}
      <button className="btn-primary w-full py-3">
        {nights > 0 ? 'Book Now' : 'Select Dates'}
      </button>

      {/* Additional Actions */}
      <button className="btn-outline w-full py-2 text-sm">
        Contact Host
      </button>
      <button className="w-full py-2 text-center text-primary text-sm hover:underline">
        Report Listing
      </button>
    </div>
  );
}
