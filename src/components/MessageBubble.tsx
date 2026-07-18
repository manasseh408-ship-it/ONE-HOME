'use client';

import Image from 'next/image';
import { FiCheck, FiCheckCheck } from 'react-icons/fi';

interface MessageBubbleProps {
  id: string;
  text: string;
  sender: 'user' | 'other';
  timestamp: string;
  avatar?: string;
  senderName?: string;
  isRead?: boolean;
}

export default function MessageBubble({
  id,
  text,
  sender,
  timestamp,
  avatar,
  senderName,
  isRead = true,
}: MessageBubbleProps) {
  const isUser = sender === 'user';

  return (
    <div className={`flex gap-2 mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {/* Avatar (for other user) */}
      {!isUser && avatar && (
        <Image
          src={avatar}
          alt={senderName || 'User'}
          width={32}
          height={32}
          className="rounded-full"
        />
      )}

      {/* Message Bubble */}
      <div className={`max-w-xs ${isUser ? 'tablet:max-w-sm' : 'tablet:max-w-sm'}`}>
        {/* Sender Name (for other user) */}
        {!isUser && senderName && (
          <p className="text-xs font-semibold text-neutral-600 mb-1 px-3 pt-2">
            {senderName}
          </p>
        )}

        {/* Message */}
        <div
          className={`rounded-2xl px-4 py-2 break-words ${isUser ? 'bg-primary text-white rounded-br-none' : 'bg-gray-200 text-neutral-900 rounded-bl-none'}`}
        >
          <p className="text-sm">{text}</p>
        </div>

        {/* Timestamp & Read Status */}
        <div
          className={`flex items-center gap-1 mt-1 px-3 text-xs text-neutral-500 ${isUser ? 'justify-end' : 'justify-start'}`}
        >
          <span>{timestamp}</span>
          {isUser &&
            (isRead ? (
              <FiCheckCheck size={12} className="text-primary" />
            ) : (
              <FiCheck size={12} />
            ))}
        </div>
      </div>
    </div>
  );
}
