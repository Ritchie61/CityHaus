import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';

export default function App() {
  const openWhatsApp = () => {
    Linking.openURL('https://wa.me/1234567890');
  };

  const openFacebook = () => {
    Linking.openURL('https://facebook.com');
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>🏠 CityHaus</Text>
      </View>

      {/* Search */}
      <View style={styles.searchBox}>
        <TextInput
          placeholder="Search houses, rooms, spaces..."
          style={styles.searchInput}
        />
      </View>

      {/* Hero Text */}
      <View style={styles.hero}>
        <Text style={styles.title}>Rent or list your space</Text>
        <Text style={styles.subtitle}>
          Find homes, rooms, or list your own space for rent
        </Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryText}>View Listings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryText}>List Your Space</Text>
        </TouchableOpacity>
      </View>

      {/* Featured Listings */}
      <Text style={styles.sectionTitle}>Featured Listings</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {sampleListings.map((item, index) => (
          <View key={index} style={styles.card}>
            <Image source={require('./assets/placeholder.jpg')} style={styles.image} />
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardLocation}>{item.location}</Text>
            <Text style={styles.cardPrice}>{item.price}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Contact Section */}
      <View style={styles.contact}>
        <Text style={styles.contactText}>
          Contact property owners via:
        </Text>

        <View style={styles.contactButtons}>
          <TouchableOpacity style={styles.whatsapp} onPress={openWhatsApp}>
            <Text style={styles.contactBtnText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.facebook} onPress={openFacebook}>
            <Text style={styles.contactBtnText}>Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const sampleListings = [
  {
    title: 'Modern Apartment',
    location: 'City Center',
    price: '$300 / month',
  },
  {
    title: 'Single Room',
    location: 'Suburb Area',
    price: '$120 / month',
  },
  {
    title: 'Family House',
    location: 'Quiet Neighborhood',
    price: '$500 / month',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchBox: {
    padding: 16,
  },
  searchInput: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    fontSize: 16,
  },
  hero: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 15,
    color: '#666',
    marginTop: 6,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  primaryButton: {
    backgroundColor: '#ff8c42',
    padding: 14,
    borderRadius: 10,
    width: '48%',
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: '#2ec4b6',
    padding: 14,
    borderRadius: 10,
    width: '48%',
    alignItems: 'center',
  },
  primaryText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  secondaryText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    width: 220,
    marginLeft: 16,
    borderRadius: 12,
    overflow: 'hidden',
    paddingBottom: 12,
  },
  image: {
    width: '100%',
    height: 120,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginTop: 6,
  },
  cardLocation: {
    paddingHorizontal: 10,
    color: '#777',
  },
  cardPrice: {
    paddingHorizontal: 10,
    fontWeight: 'bold',
    marginTop: 4,
  },
  contact: {
    marginTop: 30,
    padding: 16,
    backgroundColor: '#fff',
  },
  contactText: {
    fontSize: 16,
    marginBottom: 10,
  },
  contactButtons: {
    flexDirection: 'row',
  },
  whatsapp: {
    backgroundColor: '#25D366',
    padding: 12,
    borderRadius: 10,
    marginRight: 10,
  },
  facebook: {
    backgroundColor: '#1877F2',
    padding: 12,
    borderRadius: 10,
  },
  contactBtnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
