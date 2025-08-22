import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';

/**
 * Componente de búsqueda de ciudad
 */
export const SearchInput = ({ onSearch, isLoading }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (!city.trim()) {
      Alert.alert('Error', 'Por favor ingresa el nombre de una ciudad');
      return;
    }

    onSearch(city.trim());
  };

  const handleKeyPress = (e) => {
    if (e.nativeEvent.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ingresa el nombre de una ciudad..."
          placeholderTextColor="#999"
          value={city}
          onChangeText={setCity}
          onSubmitEditing={handleSearch}
          returnKeyType="search"
          editable={!isLoading}
          autoCapitalize="words"
          autoCorrect={false}
        />
        <TouchableOpacity
          style={[styles.button, isLoading && styles.buttonDisabled]}
          onPress={handleSearch}
          disabled={isLoading}
        >
          <Text style={styles.buttonText}>
            {isLoading ? 'Buscando...' : 'Buscar'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#4A90E2',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 25,
    marginRight: 5,
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
