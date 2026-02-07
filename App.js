import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons'; // Hamburger icon

export default function App() {
  const [screen, setScreen] = useState('home');
  const [menuVisible, setMenuVisible] = useState(false); // Hamburger menu state

  // Form state
  const [form, setForm] = useState({
    name: '',
    whatsapp: '',
    facebook: '',
    type: '',
    location: '',
    price: '',
    description: '',
    photo: null,
  });

  const handleSubmit = () => {
    console.log('Listing submitted:', form);
    alert('Listing submitted successfully!');
    setScreen('home');
    setForm({
      name: '',
      whatsapp: '',
      facebook: '',
      type: '',
      location: '',
      price: '',
      description: '',
      photo: null,
    });
  };

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert('Permission to access gallery is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
    });

    if (!result.canceled) {
      setForm({ ...form, photo: result.assets[0].uri });
    }
  };

  const toggleMenu = () => setMenuVisible(!menuVisible);
  const handleMenuItemPress = (item) => {
    setMenuVisible(false);
    console.log('Selected menu item:', item);
  };

  // ================= HOME SCREEN =================
  if (screen === 'home') {
    return (
      <ScrollView style={styles.container}>
        <StatusBar style="dark" />

        <View style={styles.header}>
          <Text style={styles.logo}>🏠 CityHaus</Text>

          {/* Hamburger Menu */}
          <TouchableOpacity onPress={toggleMenu} style={styles.menuIcon}>
            <MaterialIcons name="menu" size={28} color="black" />
          </TouchableOpacity>

          {menuVisible && (
            <View style={styles.dropdown}>
              {['About Us', 'Become a Partner', 'Advertise with Us'].map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleMenuItemPress(item)}
                  style={styles.dropdownItem}
                >
                  <Text style={styles.dropdownText}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        <View style={styles.searchBox}>
          <TextInput
            placeholder="Search houses, rooms, spaces..."
            style={styles.searchInput}
          />
        </View>

        <View style={styles.hero}>
          <Text style={styles.title}>Rent or list your space</Text>
          <Text style={styles.subtitle}>
            Find homes, rooms, or list your own space for rent
          </Text>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryText}>View Listings</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => setScreen('list')}
          >
            <Text style={styles.secondaryText}>List Your Space</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Featured Listings</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {sampleListings.map((item, index) => (
            <View key={index} style={styles.card}>
              <View style={styles.imagePlaceholder}>
                <Text style={{ color: '#777' }}>Image</Text>
              </View>

              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardType}>{item.type}</Text>
              <Text style={styles.cardLocation}>{item.location}</Text>
              <Text style={styles.cardPrice}>{item.price}</Text>

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

  // ================= LIST SPACE SCREEN =================
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <Text style={styles.logo}>List Your Space</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          placeholder="Full Name"
          style={styles.input}
          value={form.name}
          onChangeText={(text) => setForm({ ...form, name: text })}
        />

        <TextInput
          placeholder="WhatsApp Number"
          style={styles.input}
          keyboardType="phone-pad"
          value={form.whatsapp}
          onChangeText={(text) => setForm({ ...form, whatsapp: `https://wa.me/${text}` })}
        />

        <TextInput
          placeholder="Facebook Profile Link"
          style={styles.input}
          value={form.facebook}
          onChangeText={(text) => setForm({ ...form, facebook: text })}
        />

        <TextInput
          placeholder="Type (Room / House / Space)"
          style={styles.input}
          value={form.type}
          onChangeText={(text) => setForm({ ...form, type: text })}
        />

        <TextInput
          placeholder="Location / Address"
          style={styles.input}
          value={form.location}
          onChangeText={(text) => setForm({ ...form, location: text })}
        />

        <TextInput
          placeholder="Price (e.g. $200 / month)"
          style={styles.input}
          value={form.price}
          onChangeText={(text) => setForm({ ...form, price: text })}
        />

        <TextInput
          placeholder="Description"
          style={[styles.input, { height: 100 }]}
          multiline
          value={form.description}
          onChangeText={(text) => setForm({ ...form, description: text })}
        />

        {/* Photo Picker */}
        <TouchableOpacity style={styles.photoButton} onPress={pickImage}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>
            {form.photo ? 'Change Photo' : 'Upload Photo'}
          </Text>
        </TouchableOpacity>
        {form.photo && (
          <Image
            source={{ uri: form.photo }}
            style={{ width: '100%', height: 200, marginTop: 10, borderRadius: 10 }}
          />
        )}

        <TouchableOpacity style={styles.primaryButton} onPress={handleSubmit}>
          <Text style={styles.primaryText}>Submit Listing</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ marginTop: 15, alignItems: 'center' }}
          onPress={() => setScreen('home')}
        >
          <Text style={{ color: '#555' }}>← Back to Home</Text>
        </TouchableOpacity>
      </View>
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
    facebook: 'https://facebook.com',
  },
  {
    title: 'Single Room',
    type: 'Room',
    location: 'Suburb Area',
    price: '$120 / month',
    whatsapp: 'https://wa.me/67571111111',
    facebook: 'https://facebook.com',
  },
];

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  header: { padding: 20, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  logo: { fontSize: 24, fontWeight: 'bold' },
  menuIcon: { padding: 8 },
  dropdown: {
    position: 'absolute',
    top: 60,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    zIndex: 100,
  },
  dropdownItem: { padding: 12, borderBottomWidth: 0.5, borderBottomColor: '#ccc' },
  dropdownText: { fontSize: 16 },
  searchBox: { padding: 16 },
  searchInput: { backgroundColor: '#fff', padding: 14, borderRadius: 10 },
  hero: { paddingHorizontal: 16, marginBottom: 16 },
  title: { fontSize: 26, fontWeight: 'bold' },
  subtitle: { fontSize: 15, color: '#666', marginTop: 6 },
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
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: '#2ec4b6',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    width: '48%',
  },
  primaryText: { color: '#fff', fontWeight: 'bold' },
  secondaryText: { color: '#fff', fontWeight: 'bold' },
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
    height: 120,
    backgroundColor: '#eaeaea',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  cardTitle: { fontWeight: 'bold', paddingHorizontal: 10, marginTop: 6 },
  cardType: { paddingHorizontal: 10, color: '#555' },
  cardLocation: { paddingHorizontal: 10, color: '#777' },
  cardPrice: { paddingHorizontal: 10, fontWeight: 'bold' },
  cardButtons: { flexDirection: 'row', paddingHorizontal: 10, marginTop: 10, gap: 8 },
  contactButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  whatsapp: { backgroundColor: '#25D366' },
  facebook: { backgroundColor: '#1877F2' },
  contactBtnText: { color: '#fff', fontWeight: 'bold' },
  form: { padding: 16 },
  input: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
  },
  photoButton: {
    backgroundColor: '#2ec4b6',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8,
  },
});
