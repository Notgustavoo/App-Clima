import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { EXAMPLE_CITIES } from '../utils/exampleCities';

/**
 * Componente de sugerencias de ciudades
 */
export const CitySuggestions = ({ onCitySelect, visible = true }) => {
  if (!visible) {
    return null;
  }

  // Mostrar solo las primeras 6 ciudades como sugerencias
  const suggestedCities = EXAMPLE_CITIES.slice(0, 6);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>💡 Ciudades sugeridas:</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        {suggestedCities.map((city, index) => (
          <TouchableOpacity
            key={index}
            style={styles.cityButton}
            onPress={() => onCitySelect(city)}
          >
            <Text style={styles.cityText}>{city}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  scrollView: {
    flexDirection: 'row',
  },
  cityButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  cityText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
});
