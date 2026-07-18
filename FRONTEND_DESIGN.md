# ONE-HOME Frontend Layout Design

## Overview
A full-stack property rental platform connecting users to available houses across the country. The frontend uses a clean, modern design with intuitive navigation for both renters and property owners.

---

## Key Pages & Components

### 1. **Landing Page** (`/`)
**Purpose**: Introduce the platform, drive sign-ups

**Layout**:
```
Header
├── Logo (ONE-HOME)
├── Navigation Menu
│   ├── Browse
│   ├── How It Works
│   ├── About
│   └── Contact
├── Sign In / Sign Up buttons

Hero Section
├── Large Background Image (house/neighborhood)
├── Headline: "Find Your Next Home"
├── Subheadline: "Connect with available houses across the country"
├── Search Bar Preview
│   ├── Location Input
│   ├── Check-in / Check-out (Date Picker)
│   ├── Guests Dropdown
│   └── Search Button

Featured Listings Section
├── 6-8 Featured Properties
│   ├── Property Card
│   │   ├── Image Gallery (carousel)
│   │   ├── Address & Location Badge
│   │   ├── Price per night/month
│   │   ├── Star Rating & Review Count
│   │   ├── Quick Details (beds, baths, sqft)
│   │   └── Save to Wishlist (heart icon)
│   └── "View All" Button → Browse Page

How It Works Section
├── Step 1: Search → Icon + Description
├── Step 2: Book → Icon + Description
├── Step 3: Move In → Icon + Description
└── Step 4: Connect → Icon + Description

Call-to-Action Section
├── "Ready to find your home?"
├── "List your property" (for landlords)
└── Sign Up Button

Footer
├── Company Links (About, Blog, FAQ)
├── Support (Contact, Help Center)
├── Legal (Privacy, Terms)
├── Social Media Links
└── Copyright
```

---

### 2. **Browse/Search Page** (`/browse` or `/search`)
**Purpose**: Search and filter properties

**Layout**:
```
Header (Sticky)
├── Logo
├── Navigation
└── Mini Search Bar (refine search)

Two-Column Layout:

LEFT COLUMN (Filters - Collapsible on mobile)
├── Search Summary
│   ├── Location: [City/Area]
│   ├── Dates: [Check-in] to [Check-out]
│   └── Guests: [Number]
├── Price Range Slider
│   ├── Min: $
│   └── Max: $
├── Property Type (Checkboxes)
│   ├── ☐ Apartment
│   ├── ☐ House
│   ├── ☐ Villa
│   ├── ☐ Cottage
│   └── ☐ Room
├── Amenities (Expandable)
│   ├── ☐ WiFi
│   ├── ☐ Parking
│   ├── ☐ Pool
│   ├── ☐ Kitchen
│   ├── ☐ AC
│   └── Show More
├── Bedrooms
│   ├── Slider: 1-10+
├── Bathrooms
│   ├── Slider: 1-5+
├── Rating Filter
│   ├── ☐ 4.5+ ⭐
│   ├── ☐ 4.0+ ⭐
│   └── ☐ 3.5+ ⭐
├── Distance from Center
│   ├── Slider: 0-50 km
├── Sort Options (Dropdown)
│   ├── Most Relevant
│   ├── Lowest Price
│   ├── Highest Price
│   ├── Newest Listings
│   └── Highest Rated
└── Clear Filters Button

RIGHT COLUMN (Results)
├── Results Count: "Showing X properties"
├── View Toggle
│   ├── List View (selected)
│   └── Map View
├── Property Cards (Grid/List)
│   └── For Each Property:
│       ├── Image (hover: carousel)
│       ├── Address & Badge (New/Hot Deal)
│       ├── Distance from search location
│       ├── Price per night/month
│       ├── Rating (4.8 ⭐ from 32 reviews)
│       ├── Quick Details (2 bed, 1 bath, 1200 sqft)
│       ├── Top Amenities (WiFi, Pool, Parking)
│       ├── Save to Wishlist (heart)
│       └── View Details Button
├── Pagination / Load More
```

**Map View Toggle**:
```
LEFT: Filters (narrower)
RIGHT: Map
├── Google Maps Integration
├── Property Markers (clickable)
├── Marker Info Window
│   ├── Property Name
│   ├── Price
│   ├── Rating
│   └── View Details Link
├── Map Controls (Zoom, Center)
```

---

### 3. **Property Detail Page** (`/property/:id`)
**Purpose**: Show full property information

**Layout**:
```
Header
├── Logo
├── Navigation
└── Back Button

Content Area:

Image Gallery Section
├── Large Main Image (carousel)
│   ├── Previous Arrow
│   ├── Next Arrow
│   └── Image Counter (1/12)
├── Thumbnail Strip Below
│   ├── Scrollable thumbnails
│   └── "View All Photos" button

Property Header
├── Title: "Beautiful 3-Bedroom House in Downtown"
├── Address: "123 Main St, Austin, TX 78701"
├── Location Badge: "Austin, TX"
├── Rating: 4.8 ⭐ (32 reviews)
├── Save to Wishlist (heart)
└── Share Button (social/email)

Two-Column Layout Below:

LEFT COLUMN (Main Info):
├── Quick Stats
│   ├── 3 Bedrooms
│   ├── 2 Bathrooms
│   ├── 1,500 sqft
│   └── 2 Parking Spots
├── Description
│   ├── Headline
│   ├── Full description text
│   └── "Read More" (expandable)
├── Amenities Section
│   ├── Grid of amenity icons with labels
│   ├── WiFi, Pool, Parking, Kitchen, AC, TV, Washer/Dryer, etc.
│   └── "Show All Amenities" button
├── House Rules Section
│   ├── Check-in time: 3 PM
│   ├── Check-out time: 11 AM
│   ├── No smoking
│   ├── No pets
│   └── "See All Rules" button
├── Location Map
│   ├── Embedded map showing property location
│   ├── Nearby landmarks
│   └── Distance to attractions
├── Availability Calendar
│   ├── Next 12 months
│   ├── Booked dates (grayed out)
│   ├── Available dates (clickable)
│   └── Select dates for pricing
├── Reviews Section
│   ├── Average Rating: 4.8 ⭐
│   ├── Breakdown (5⭐, 4⭐, 3⭐, 2⭐, 1⭐)
│   ├── Filter Reviews (Recent, Highest, Lowest)
│   ├── Individual Review Cards
│   │   ├── Reviewer Avatar & Name
│   │   ├── Rating & Date
│   │   ├── Review Text
│   │   ├── Helpful (Like/Dislike)
│   │   └── Reply from Owner (if any)
│   └── "Load More Reviews" button

RIGHT COLUMN (Booking Card - Sticky):
├── Price Display
│   ├── $150 per night
│   ├── Nightly rate shown
│   └── Total price breakdown
├── Check-in / Check-out Pickers
│   ├── Date inputs
│   ├── Auto-calculate nights
│   └── Show total price
├── Guests Dropdown
│   ├── Adults
│   ├── Children
│   └── Infants
├── Pricing Breakdown
│   ├── $150 × 5 nights = $750
│   ├── Cleaning Fee: +$50
│   ├── Service Fee: +$75
│   ├── Tax: +$97.50
│   └── **Total: $972.50**
├── Host Info Card
│   ├── Host Avatar & Name
│   ├── "Superhost" Badge (if applicable)
│   ├── Response rate: 95%
│   ├── Response time: Within 1 hour
│   ├── Member since: 2022
│   └── Contact Host Button
├── Book Now Button (prominent CTA)
├── Share Button
└── Report Listing Button

Footer
├── Copyright
├── Links
```

---

### 4. **Booking Confirmation Page** (`/booking/:id`)
**Purpose**: Confirm reservation details

**Layout**:
```
Header
├── Success Icon / Checkmark
├── "Booking Confirmed!"
└── Booking Reference: #ONEHOME123456

Main Content:

Booking Details Card
├── Property Image (small)
├── Property Name & Address
├── Host Name & Contact
├── Booking Dates
│   ├── Check-in: [Date & Time]
│   └── Check-out: [Date & Time]
├── Duration: 5 nights
├── Guests: 2 adults, 1 child
├── Total Amount Paid: $972.50
└── Payment Method: Visa ending in 4242

Important Information
├── Check-in Instructions
│   ├── Door Code / Keys
│   ├── WiFi Password
│   └── Emergency Contact
├── House Rules Reminder
├── Cancellation Policy
│   ├── "Free cancellation until [date]"
│   └── Link to full policy
└── Contact Host Button

Action Buttons
├── Download Booking Confirmation (PDF)
├── Add to Calendar
├── Share Booking
├── Get Directions
└── Review Property (appears after check-out)

Footer
├── FAQ Links
├── Contact Support
```

---

### 5. **User Dashboard** (`/dashboard`)
**Purpose**: User profile and bookings

**Layout**:
```
Header
├── Logo
├── Navigation
├── User Avatar (Dropdown Menu)
│   ├── My Profile
│   ├── My Wishlist
│   ├── My Bookings
│   ├── Messages
│   ├── Settings
│   └── Logout
└── Notification Bell (if messages/alerts)

Sidebar (Left - Collapsible)
├── Dashboard Menu
│   ├── Overview
│   ├── My Bookings
│   ├── My Wishlists
│   ├── Messages
│   ├── My Properties (if host)
│   ├── Profile Settings
│   ├── Account Settings
│   ├── Payment Methods
│   ├── Help & Support
│   └── Logout

Main Content Area:

**Overview Tab** (Default):
├── Welcome Message: "Welcome back, John!"
├── Upcoming Bookings Section
│   └── Booking Cards (next 3)
│       ├── Property image
│       ├── Property name
│       ├── Dates
│       ├── Status badge (Confirmed/Pending)
│       └── View Details / Cancel buttons
├── Saved Listings (Wishlist)
│   ├── Carousel of saved properties
│   └── View All Wishlist link
├── Recent Messages
│   ├── Message preview cards
│   ├── Sender avatar, name, last message, time
│   └── View All Messages link

**My Bookings Tab**:
├── Filter Options
│   ├── All / Upcoming / Past / Cancelled
├── Booking List
│   └── For Each Booking:
│       ├── Property image (left)
│       ├── Property details (center)
│       │   ├── Name
│       │   ├── Dates
│       │   ├── Total paid
│       │   └── Status
│       ├── Actions (right)
│       │   ├── View Details
│       │   ├── Contact Host
│       │   ├── Cancel (if eligible)
│       │   └── Review (if past)

**My Wishlists Tab**:
├── Wishlist Collections
│   ├── "Default Wishlist" (X properties)
│   ├── "Weekend Getaways" (Y properties)
│   └── Create New Wishlist Button
├── Properties in Selected Wishlist
│   └── Property Cards (same as browse page)
│   ├── Remove from Wishlist
│   └── Move to Another Wishlist

**Profile Tab**:
├── Profile Picture
│   ├── Upload new photo
│   └── Remove photo
├── Personal Information
│   ├── First Name: [Input]
│   ├── Last Name: [Input]
│   ├── Email: [Display, change option]
│   ├── Phone: [Input]
│   ├── Date of Birth: [Date picker]
│   └── Language: [Dropdown]
├── Address
│   ├── Street Address
│   ├── City
│   ├── State/Province
│   ├── Postal Code
│   └── Country
├── Bio / About Me
│   ├── Text area
│   └── "Tell other guests about yourself"
├── Verification Status
│   ├── ✓ Email verified
│   ├── ✓ Phone verified
│   ├── ☐ ID verified (button to verify)
│   └── ☐ Address verified (button to verify)
├── Save Changes Button

**Settings Tab**:
├── Notifications
│   ├── ☑ Email for bookings
│   ├── ☑ Email for messages
│   ├── ☑ Email for reminders
│   └── ☑ Marketing emails
├── Privacy
│   ├── Profile visibility (Public/Private)
│   ├── Show online status
│   └── Allow message requests
├── Payment Methods
│   ├── Add New Payment Method Button
│   ├── Saved Cards
│   │   ├── Visa ending in 4242 (default)
│   │   ├── MasterCard ending in 5555
│   │   └── Delete options
│   └── Bank Account (for hosts)
├── Password
│   ├── Current Password: [Input]
│   ├── New Password: [Input]
│   ├── Confirm Password: [Input]
│   └── Change Password Button
├── Two-Factor Authentication
│   ├── ☑ Enable 2FA
│   └── Setup options
├── Deactivate Account
│   ├── Warning message
│   └── Deactivate Button
```

---

### 6. **Messages Page** (`/messages`)
**Purpose**: In-app communication with hosts/guests

**Layout**:
```
Header
├── "Messages"
├── Search Conversations

Two-Column Layout:

LEFT COLUMN (Conversations List):
├── Conversation List
│   └── For Each Conversation:
│       ├── Avatar (host/guest picture)
│       ├── Name & Location (property)
│       ├── Last Message Preview
│       ├── Timestamp (2h ago)
│       ├── Unread indicator (dot/badge)
│       └── (Click to select)
├── Pagination/Scroll

RIGHT COLUMN (Chat):
├── Conversation Header
│   ├── User Avatar & Name
│   ├── Property Name (if booking-related)
│   └── View Profile / View Property buttons
├── Message Thread (Scrollable)
│   ├── Messages (grouped by sender)
│   │   ├── Avatar (once per sender group)
│   │   ├── Message bubble(s)
│   │   ├── Timestamp
│   │   └── Read status (checkmark)
│   └── System messages (booking confirmed, etc.)
├── Message Compose Area (Bottom)
│   ├── Text input field
│   ├── Attachment button (photos)
│   ├── Emoji picker
│   └── Send Button
└── Quick Actions (if booking-related)
    ├── "View Property"
    ├── "Cancel Booking"
    └── "Leave Review"
```

---

### 7. **Authentication Pages**

#### Sign Up Page (`/signup`)
```
Header
├── ONE-HOME Logo
└── "Already have an account? Sign In"

Main Form:
├── "Create Your Account"
├── First Name: [Input]
├── Last Name: [Input]
├── Email: [Input]
├── Password: [Input with strength indicator]
├── Confirm Password: [Input]
├── Terms & Privacy Checkbox
│   └── "I agree to Terms of Service and Privacy Policy"
├── Sign Up Button
├── Social Sign Up Options
│   ├── "Sign up with Google"
│   ├── "Sign up with Facebook"
│   └── "Sign up with Apple"
└── Error/Success Messages (above form)
```

#### Sign In Page (`/signin`)
```
Header
├── ONE-HOME Logo
└── "Don't have an account? Sign Up"

Main Form:
├── "Welcome Back"
├── Email: [Input]
├── Password: [Input]
├── "Forgot Password?" Link
├── Sign In Button
├── Remember Me: ☐ Checkbox
├── Social Sign In Options
│   ├── "Sign in with Google"
│   ├── "Sign in with Facebook"
│   └── "Sign in with Apple"
└── Error Messages (if login fails)
```

#### Forgot Password Page (`/forgot-password`)
```
Header
├── ONE-HOME Logo
└── Back Link

Main Form:
├── "Forgot Your Password?"
├── Email: [Input]
├── "We'll send you a link to reset it"
├── Send Link Button
└── Success Message (after submit)
```

---

### 8. **Host/Property Management Page** (`/host/properties`)
**Purpose**: For property owners to manage listings

**Layout**:
```
Header
├── "My Properties"
├── Create New Listing Button (primary CTA)

Properties List:
├── Filter/Sort Options
│   ├── Status: All / Active / Inactive / Draft
│   └── Sort: Newest / Most Booked / Earnings

Property Cards:
├── For Each Property:
│   ├── Image (left)
│   ├── Property Details (center)
│   │   ├── Name & Address
│   │   ├── Status badge
│   │   ├── Rating & Reviews count
│   │   ├── Quick stats (beds, baths, sqft)
│   │   └── Monthly earnings (if active)
│   ├── Quick Stats (right)
│   │   ├── Booked: X days this month
│   │   ├── Upcoming bookings: X
│   │   └── Messages: X unread
│   └── Action Buttons
│       ├── Edit
│       ├── View Live Listing
│       ├── Bookings
│       ├── Calendar
│       ├── Analytics
│       └── More (•••) → Delete/Archive
```

---

## Component Library

### Reusable Components

**Property Card**
- Image carousel
- Price display
- Rating
- Quick info (beds, baths)
- Save to wishlist button
- Responsive design

**Booking Card** (sidebar on property detail)
- Date pickers
- Guest selector
- Price breakdown
- Book button
- Sticky on scroll

**Header / Navigation**
- Logo
- Menu items
- User avatar dropdown
- Mobile hamburger menu

**Footer**
- Links
- Social media
- Copyright

**Filters Panel**
- Collapsible on mobile
- Checkboxes
- Sliders
- Search input

**Review Card**
- Star rating
- Reviewer info
- Comment text
- Helpful buttons

**Message Bubble**
- Sent/received styling
- Timestamp
- Avatar
- Read status

---

## Mobile Responsiveness

**Breakpoints**:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

**Mobile Adjustments**:
- Single-column layouts
- Filters slide in from side / bottom sheet
- Full-width buttons
- Larger touch targets
- Stacked cards
- Collapsible navigation

---

## Design System

**Color Palette**:
- Primary: #007AFF (Blue)
- Accent: #FF6B35 (Orange)
- Success: #34C759 (Green)
- Danger: #FF3B30 (Red)
- Neutral: #F2F2F7, #FFFFFF, #8E8E93, #000000

**Typography**:
- Headlines: 24px - 32px (bold)
- Body: 14px - 16px (regular)
- Small: 12px (medium)

**Spacing**: 8px grid system (8, 16, 24, 32, 48px)

**Border Radius**: 8px - 12px

---

## User Flow Summary

1. **Guest Flow**: Landing → Browse/Search → Property Detail → Booking → Confirmation → Dashboard
2. **Host Flow**: Sign Up → Create Listing → Dashboard → Manage Properties → View Bookings
3. **Messaging**: Access from Dashboard/Property Detail → Open Conversations → Chat with User
