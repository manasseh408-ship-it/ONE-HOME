'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FiThumbsUp, FiThumbsDown, FiStar } from 'react-icons/fi';

interface ReviewCardProps {
  id: string;
  reviewerName: string;
  reviewerAvatar: string;
  rating: number;
  date: string;
  text: string;
  helpfulCount?: number;
  ownerReply?: {
    text: string;
    date: string;
  };
}

export default function ReviewCard({
  id,
  reviewerName,
  reviewerAvatar,
  rating,
  date,
  text,
  helpfulCount = 0,
  ownerReply,
}: ReviewCardProps) {
  const [isHelpful, setIsHelpful] = useState(false);
  const [helpful, setHelpful] = useState(helpfulCount);

  const handleHelpful = () => {
    if (!isHelpful) {
      setIsHelpful(true);
      setHelpful(helpful + 1);
    }
  };

  return (
    <div className="border-b pb-6 mb-6 last:border-b-0">
      {/* Reviewer Info */}
      <div className="flex items-start gap-3 mb-3">
        <Image
          src={reviewerAvatar}
          alt={reviewerName}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-neutral-900">{reviewerName}</h4>
              <p className="text-xs text-neutral-500">{date}</p>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <FiStar
                  key={i}
                  size={14}
                  className={i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Review Text */}
      <p className="text-sm text-neutral-700 mb-3 leading-relaxed">{text}</p>

      {/* Helpful Buttons */}
      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={handleHelpful}
          className="flex items-center gap-1 text-xs text-neutral-600 hover:text-primary transition"
        >
          <FiThumbsUp size={14} />
          Helpful ({helpful})
        </button>
        <button className="flex items-center gap-1 text-xs text-neutral-600 hover:text-danger transition">
          <FiThumbsDown size={14} />
          Not helpful
        </button>
      </div>

      {/* Owner Reply */}
      {ownerReply && (
        <div className="bg-gray-50 p-4 rounded-md border-l-4 border-primary mt-4">
          <p className="text-xs font-semibold text-primary mb-2">Response from owner</p>
          <p className="text-sm text-neutral-700">{ownerReply.text}</p>
          <p className="text-xs text-neutral-500 mt-2">{ownerReply.date}</p>
        </div>
      )}
    </div>
  );
}
