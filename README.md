# CityHaus
CityHaus is a mobile-first app for PNG that connects guests with hosts offering rooms or spaces for transit, overnight stays, or long-term rentals. The app supports homes, lodges, inns, and apartments, making it easy for travelers to find affordable accommodations and for space owners to earn money.
Features (v1)
For Guests:
Browse available spaces in the city
Filter by price, area, type (Home / Lodge / Apartment / Other)
View listing details (photos, amenities, host info)
Call or WhatsApp host directly
For Hosts:
List a space (home, lodge, apartment, temporary space)
Upload photos and set price, capacity, and amenities
Manage availability of listings
Simple offline-friendly setup (payments offline for v1)
Tech Stack
Frontend: Expo / React Native (mobile-only)
Navigation: React Navigation (Bottom Tabs + Stack)
Data: Fake data for v1 (Supabase backend integration planned for later)
Storage / Auth: Future integration with Supabase (phone OTP login, image storage)
Icons / UI: Expo Vector Icons, React Native components
Project Structure
Copy code

app/
├── App.js                 # Entry point
├── navigation/
│   └── TabNavigator.js    # Bottom tabs for Guest / Host
├── screens/
│   ├── HomeScreen.js
│   ├── ListingDetailScreen.js
│   ├── AddSpaceScreen.js
│   └── ProfileScreen.js
├── components/
│   ├── ListingCard.js
│   └── ButtonPrimary.js
└── constants/
    └── theme.js           # Colors, font sizes
Getting Started (Mobile-Only)
Install Expo Go on your Android/iOS device
Clone the repo:
Copy code
Bash
git clone https://github.com/<your-username>/CityHaus.git
cd CityHaus
Install dependencies:
Copy code
Bash
npm install
Start the app:
Copy code
Bash
npx expo start
Open the project in Expo Go on your phone via QR code
Note: v1 uses fake data. Backend integration with Supabase will be added later.
Future Plans
Supabase backend: auth, database, image storage
Role-based dynamic tabs (Guest / Host)
RAG-powered AI search & recommendations
Offline caching & low-data mode
Monetization for hosts (featured listings, subscriptions)
Contributing
Fork the repo
Create a feature branch
Make your changes
Submit a pull request
Please ensure changes are mobile-friendly and maintain the simple UX for PNG users.

License
MIT License
