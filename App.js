import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';

export default function App() {
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

            {/* Image Placeholder */}
            <View style={styles.imagePlaceholder}>
              <Text style={{ color: '#777' }}>Image</Text>
            </View>

            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardType}>{item.type}</Text>
            <Text style={styles.cardLocation}>{item.location}</Text>
            <Text style={styles.cardPrice}>{item.price}</Text>

            {/* Contact Buttons */}
            <View style={styles.cardButtons}>
              <TouchableOpacity
                style={[styles.contactButton, styles.whatsapp]}
                onPress={() => Linking.openURL(item.whatsapp)}
              >
                <Text style={styles.contactBtnText}>WhatsApp</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.contactButton, styles.facebook]}
                onPress={() => Linking.openURL(item.facebook)}
              >
                <Text style={styles.contactBtnText}>Facebook</Text>
              </TouchableOpacity>
            </View>

          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const sampleListings = [
  {
    title: 'Modern Apartment',
    type: 'Apartment',
    location: 'City Center',
    price: '$300 / month',
    whatsapp: 'https://wa.me/67570000000',
    facebook: 'https://facebook.com/profile.php?id=100000000',
  },
  {
    title: 'Single Room',
    type: 'Room',
    location: 'Suburb Area',
    price: '$120 / month',
    whatsapp: 'https://wa.me/67571111111',
    facebook: 'https://facebook.com/profile.php?id=100000001',
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
    width: 230,
    marginLeft: 16,
    borderRadius: 12,
    paddingBottom: 12,
  },
  imagePlaceholder: {
    width: '100%',
    height: 120,
    backgroundColor: '#eaeaea',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginTop: 8,
  },
  cardType: {
    paddingHorizontal: 10,
    color: '#555',
    fontSize: 13,
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
  cardButtons: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 10,
    gap: 8,
  },
  contactButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  whatsapp: {
    backgroundColor: '#25D366',
  },
  facebook: {
    backgroundColor: '#1877F2',
  },
  contactBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },
});
