# App Architecture & Design Documentation

## ONE-HOME - Rental Property Connector

### Overview
ONE-HOME is a Flutter mobile application designed to connect property renters and owners through an intuitive location-based search interface and real-time messaging system.

---

## Architecture Overview

### Layered Architecture

```
┌─────────────────────────────────────┐
│  Presentation Layer                 │
│  (UI/Pages/Widgets)                 │
├─────────────────────────────────────┤
│  Domain Layer                       │
│  (Entities/Use Cases/Repositories)  │
├─────────────────────────────────────┤
│  Data Layer                         │
│  (Models/Data Sources)              │
├─────────────────────────────────────┤
│  External Services                  │
│  (Firebase/Maps/APIs)               │
└─────────────────────────────────────┘
```

### Feature-Based Structure

Each feature (Auth, Property, Messages, Profile) follows a Clean Architecture pattern:

```
feature/
├── data/
│   ├── models/          # Data models with JSON serialization
│   ├── datasources/     # API and local data sources
│   └── repositories/    # Repository implementation
├── domain/
│   ├── entities/        # Business entities
│   ├── repositories/    # Repository interfaces
│   └── usecases/        # Business logic
└── presentation/
    ├── pages/           # Full page widgets
    ├── widgets/         # Reusable components
    └── providers/       # State management
```

---

## Core Modules

### 1. **Authentication Module** (`features/auth/`)
**Purpose**: User registration, login, and profile management

**Key Components**:
- `AuthPage` - Login/Register interface
- `User` model - User data structure
- Firebase Authentication integration

**Flow**:
```
User Input → Validation → Firebase Auth → Save to Firestore → Navigate to Home
```

### 2. **Property Module** (`features/property/`)
**Purpose**: Property listing, search, and details display

**Key Components**:
- `PropertySearchPage` - Search and filter properties
- `PropertyDetailPage` - View individual property details
- `Property` model - Property data structure
- Location-based filtering
- Google Maps integration

**Search Filters**:
- Location (latitude/longitude radius)
- Price range
- Bedrooms/bathrooms count
- Area size
- Date posted

### 3. **Messaging Module** (`features/messages/`)
**Purpose**: Real-time communication between users

**Key Components**:
- `MessagesPage` - Message list and chat interface
- `Message` model - Message data structure
- Firebase Realtime Database for real-time updates
- Push notifications via Firebase Messaging

**Features**:
- Real-time message sync
- Read receipts
- Typing indicators (future)
- Message history

### 4. **Profile Module** (`features/profile/`)
**Purpose**: User profile management

**Key Components**:
- `ProfilePage` - User profile display and editing
- Saved properties management
- My listings (for sellers)
- Account settings

### 5. **Home Module** (`features/home/`)
**Purpose**: Main landing page with property feed

**Key Components**:
- `HomePage` - Featured properties and recent listings
- Quick access to search and messages
- Navigation hub

---

## Data Flow

### Property Search Flow

```
User Input (Location, Filters)
    ↓
PropertySearchProvider (State Management)
    ↓
PropertyRepository.searchProperties()
    ↓
Firestore Query (with geohashing for location)
    ↓
Parse Results
    ↓
Update UI with Results
```

### Messaging Flow

```
User Types Message
    ↓
Local State Update
    ↓
Send to Firebase Realtime Database
    ↓
Real-time Listener Updates UI for Receiver
    ↓
Push Notification to Receiver (optional)
    ↓
Read Receipt Sent Back
```

---

## Database Design

### Firestore Collections

#### `users/`
```json
{
  "userId": {
    "name": "string",
    "email": "string",
    "phoneNumber": "string",
    "profileImage": "string (URL)",
    "bio": "string",
    "userType": "buyer|seller",
    "createdAt": "timestamp",
    "savedProperties": ["propertyId1", "propertyId2"]
  }
}
```

#### `properties/`
```json
{
  "propertyId": {
    "title": "string",
    "description": "string",
    "price": "number",
    "latitude": "number",
    "longitude": "number",
    "address": "string",
    "imageUrls": ["url1", "url2"],
    "ownerId": "userId",
    "ownerName": "string",
    "bedrooms": "number",
    "bathrooms": "number",
    "area": "number",
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  }
}
```

#### `messages/`
```json
{
  "conversationId": {
    "messageId": {
      "senderId": "userId",
      "receiverId": "userId",
      "content": "string",
      "timestamp": "timestamp",
      "isRead": "boolean"
    }
  }
}
```

### Realtime Database
```
/chats/
  /conversationId/
    /messages/
      messageId: {
        senderId, receiverId, content, timestamp
      }
```

---

## State Management Strategy

### Using Riverpod (Recommended for scalability)

```dart
// Example Provider
final propertyProvider = FutureProvider<List<Property>>((ref) async {
  final repository = ref.watch(propertyRepositoryProvider);
  return repository.getProperties();
});

final searchFiltersProvider = StateProvider<SearchFilters>((ref) {
  return SearchFilters();
});
```

### Alternative: Provider Package

```dart
class PropertyNotifier extends ChangeNotifier {
  List<Property> _properties = [];
  
  void searchProperties(SearchFilters filters) {
    // Fetch and update
    notifyListeners();
  }
}
```

---

## UI/UX Design System

### Color Palette
- **Primary**: `#6366F1` (Indigo)
- **Secondary**: `#0EA5E9` (Sky Blue)
- **Accent**: `#EC4899` (Pink)
- **Success**: `#22C55E` (Green)
- **Error**: `#EF4444` (Red)
- **Warning**: `#F59E0B` (Amber)

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Display**: 32px Bold
- **Heading**: 18px Semi-bold
- **Body Large**: 16px Regular
- **Body Medium**: 14px Regular

### Component Design
- **Border Radius**: 12px for inputs and buttons
- **Spacing**: 8px, 16px, 24px units
- **Elevation**: Subtle shadows for depth
- **Dark Mode**: Full support with Material 3

---

## API Integration

### Firebase Services

1. **Authentication**
   - Email/Password signup & login
   - Session management

2. **Cloud Firestore**
   - CRUD operations for users, properties
   - Complex queries with filters
   - Real-time listeners

3. **Realtime Database**
   - Message synchronization
   - Presence indicators

4. **Storage**
   - Property images
   - User profile pictures

5. **Messaging**
   - Push notifications
   - Message delivery tracking

### Google Maps API
- Location-based property search
- Map display with markers
- Geocoding for address conversion

---

## Navigation Architecture

### GoRouter Implementation

```
/auth          → AuthPage
/home          → HomePage
/search        → PropertySearchPage
/property/:id  → PropertyDetailPage
/messages      → MessagesPage
/messages/:userId → Chat interface
/profile       → ProfilePage
```

### Bottom Navigation
- Home (Home page)
- Search (Property search)
- Messages (Messaging)
- Profile (User profile)

---

## Security Considerations

1. **Authentication**
   - Firebase Security Rules for data access
   - Token-based authentication

2. **Data Validation**
   - Input validation before submission
   - Server-side validation in Firebase

3. **Privacy**
   - User data encryption in transit (HTTPS/Firebase)
   - User consent for data collection

4. **API Keys**
   - Store API keys securely
   - Restrict API key usage to specific APIs

---

## Performance Optimization

1. **Image Optimization**
   - Cached network images
   - Lazy loading for lists
   - Image compression

2. **Database**
   - Pagination for lists
   - Geohashing for location queries
   - Indexing for frequent queries

3. **UI**
   - Lazy widget building
   - Efficient rebuilds with Provider
   - Code splitting

---

## Testing Strategy

### Unit Tests
- Model serialization/deserialization
- Business logic (filters, calculations)

### Widget Tests
- Individual component behavior
- Navigation flows

### Integration Tests
- End-to-end user flows
- Firebase integration

---

## Deployment Pipeline

1. **Development** → Feature branches
2. **Testing** → Run test suites
3. **Staging** → Firebase staging project
4. **Production** → Google Play Store & App Store

---

## Future Enhancements

- [ ] AI-powered property recommendations
- [ ] Video property tours
- [ ] Payment integration
- [ ] Booking system
- [ ] User ratings and reviews
- [ ] Social features (sharing, ratings)
- [ ] Offline mode with sync
- [ ] Advanced analytics

---

## Dependencies Summary

| Category | Package | Purpose |
|----------|---------|---------|
| State Management | provider, riverpod | Manage app state |
| Navigation | go_router | Handle routing |
| Database | firebase_firestore, firebase_database | Store and sync data |
| Auth | firebase_auth | User authentication |
| Maps | google_maps_flutter | Display locations |
| Location | geolocator, geocoding | GPS and address services |
| UI | google_fonts, flutter_svg | Design system |
| Storage | shared_preferences, hive | Local data persistence |

---

This architecture provides scalability, maintainability, and a clear separation of concerns for the ONE-HOME application.
