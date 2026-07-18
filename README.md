# ONE-HOME - Property Rental Platform

A modern web application that connects people to available houses across the country.

## Features

- 🏠 Browse and search properties with advanced filters
- 💰 Real-time pricing and availability
- 🗺️ Location-based property discovery
- 📅 Easy booking with date selection
- ⭐ User reviews and ratings
- 💬 In-app messaging between guests and hosts
- 🔒 Secure authentication
- 📱 Fully responsive design

## Tech Stack

- **Frontend:** Next.js 14, React 18, TypeScript
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **State Management:** Zustand
- **Date Handling:** date-fns

## Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd ONE-HOME
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Open in Browser
Navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/              # Next.js app router pages
│   ├── page.tsx      # Landing page
│   ├── browse/       # Browse properties
│   ├── property/     # Property detail pages
│   ├── signin/       # Authentication
│   ├── messages/     # Messaging
│   └── layout.tsx    # Root layout
├── components/       # Reusable React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── PropertyCard.tsx
│   ├── BookingCard.tsx
│   ├── FilterPanel.tsx
│   ├── ReviewCard.tsx
│   └── MessageBubble.tsx
├── styles/          # Global CSS
│   └── globals.css
└── public/          # Static assets
```

## Pages

### Public Pages
- `/` - Landing page with featured properties
- `/browse` - Search and filter properties
- `/property/[id]` - Property details with booking
- `/signin` - User login

### Authenticated Pages (To be implemented)
- `/dashboard` - User profile and bookings
- `/messages` - In-app messaging
- `/dashboard/profile` - Account settings

## Components

### PropertyCard
Displays property listings with carousel, price, and ratings.

### BookingCard
Sticky sidebar for date selection and price calculation.

### FilterPanel
Searching and filtering options for properties.

### ReviewCard
Individual review display with ratings and helpful votes.

### MessageBubble
Chat interface component for messaging.

## Design System

### Color Palette
- Primary: #007AFF (Blue)
- Accent: #FF6B35 (Orange)
- Success: #34C759 (Green)
- Danger: #FF3B30 (Red)

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: ≥ 1024px

## Future Enhancements

- [ ] Backend API integration
- [ ] Payment processing (Stripe)
- [ ] Real database (PostgreSQL)
- [ ] Email notifications
- [ ] Advanced search with geolocation
- [ ] Host property management
- [ ] Admin dashboard
- [ ] Mobile app (React Native)
- [ ] Push notifications
- [ ] AI recommendations

## Contributing

Feel free to open issues and submit pull requests!

## License

MIT License

## Support

For questions or feedback, reach out through our website.
