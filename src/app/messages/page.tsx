'use client';

import { useState } from 'react';
import Image from 'next/image';
import MessageBubble from '@/components/MessageBubble';
import { FiSearch, FiPaperclip, FiSmile, FiSend } from 'react-icons/fi';

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState<string | null>('1');
  const [messageText, setMessageText] = useState('');

  const conversations = [
    {
      id: '1',
      name: 'John Smith',
      lastMessage: 'Thanks for the update!',
      avatar: '/avatar1.jpg',
      timestamp: '2h ago',
      unread: 2,
      property: 'Downtown Apartment',
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      lastMessage: 'When will you be checking in?',
      avatar: '/avatar2.jpg',
      timestamp: '5h ago',
      unread: 0,
      property: 'Beach House',
    },
    {
      id: '3',
      name: 'Michael Chen',
      lastMessage: 'The property looks amazing!',
      avatar: '/avatar3.jpg',
      timestamp: '1d ago',
      unread: 0,
      property: 'Mountain Retreat',
    },
  ];

  const messages = [
    {
      id: '1',
      text: 'Hi! I am interested in your property for next weekend.',
      sender: 'other' as const,
      timestamp: '10:00 AM',
      avatar: '/avatar1.jpg',
      senderName: 'John Smith',
    },
    {
      id: '2',
      text: 'Great! Let me check availability for you.',
      sender: 'user' as const,
      timestamp: '10:15 AM',
      isRead: true,
    },
    {
      id: '3',
      text: 'Perfect! The property is available from Friday to Sunday.',
      sender: 'user' as const,
      timestamp: '10:20 AM',
      isRead: true,
    },
    {
      id: '4',
      text: 'Excellent! Thanks for the update!',
      sender: 'other' as const,
      timestamp: '10:30 AM',
      avatar: '/avatar1.jpg',
    },
  ];

  return (
    <div className="container-xl py-8">
      <div className="grid grid-cols-1 tablet:grid-cols-3 gap-6 h-[600px] tablet:h-[700px]">
        {/* Conversations List */}
        <div className="tablet:col-span-1 bg-white rounded-lg shadow-sm flex flex-col">
          <div className="p-4 border-b">
            <h2 className="text-lg font-bold text-neutral-900 mb-4">Messages</h2>
            <div className="relative">
              <FiSearch className="absolute left-3 top-3 text-neutral-500" size={18} />
              <input
                type="text"
                placeholder="Search conversations..."
                className="input-field pl-10"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {conversations.map((conversation) => (
              <button
                key={conversation.id}
                onClick={() => setSelectedConversation(conversation.id)}
                className={`w-full px-4 py-3 flex items-start gap-3 border-b hover:bg-gray-50 transition ${
                  selectedConversation === conversation.id ? 'bg-blue-50' : ''
                }`}
              >
                <div className="relative flex-shrink-0">
                  <Image
                    src={conversation.avatar}
                    alt={conversation.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  {conversation.unread > 0 && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center">
                      {conversation.unread}
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold text-neutral-900 truncate">
                      {conversation.name}
                    </h3>
                    <span className="text-xs text-neutral-500 ml-2">{conversation.timestamp}</span>
                  </div>
                  <p className="text-sm text-neutral-600 truncate">{conversation.property}</p>
                  <p className="text-xs text-neutral-500 truncate">{conversation.lastMessage}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        {selectedConversation && (
          <div className="tablet:col-span-2 bg-white rounded-lg shadow-sm flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-neutral-900">
                  {conversations.find((c) => c.id === selectedConversation)?.name}
                </h3>
                <p className="text-xs text-neutral-500">
                  {conversations.find((c) => c.id === selectedConversation)?.property}
                </p>
              </div>
              <button className="text-neutral-600 hover:text-neutral-900">View Property</button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <MessageBubble key={message.id} {...message} />
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t">
              <div className="flex items-center gap-2">
                <button className="p-2 text-neutral-600 hover:bg-gray-100 rounded">
                  <FiPaperclip size={20} />
                </button>
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="p-2 text-neutral-600 hover:bg-gray-100 rounded">
                  <FiSmile size={20} />
                </button>
                <button className="p-2 bg-primary text-white hover:bg-blue-600 rounded-full">
                  <FiSend size={20} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
