import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./assets/profile.jpg')} 
          style={styles.profileImage}
        />
        <Text style={styles.name}>King Emmanuel Solidarios</Text>
        <Text style={styles.joined}>Online</Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.infoText}>solidarioskingemmanuel@gmail.com</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.infoText}>09999999223</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Bio:</Text>
          <Text style={styles.infoText}>0.0</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signOutButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    paddingTop: 50,
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#1F1F1F',
    width: '100%',
    paddingVertical: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#6200EE',
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFFFFF',
    marginTop: 10,
  },
  joined: {
    fontSize: 14,
    color: '#AAAAAA',
  },
  infoContainer: {
    width: '90%',
    backgroundColor: '#1F1F1F',
    borderRadius: 20,
    padding: 20,
    marginVertical: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#BBBBBB',
  },
  infoText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '300',
  },
  editButton: {
    backgroundColor: '#03DAC6',
    borderRadius: 10,
    width: '90%',
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  signOutButton: {
    backgroundColor: '#CF6679',
    borderRadius: 10,
    width: '90%',
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default ProfileScreen;
