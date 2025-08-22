import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

/**
 * Componente de loading
 */
export const LoadingIndicator = ({ message = 'Cargando...' }) => {
  return (
    <View style={styles.container}>
      <View style={styles.loadingCard}>
        <ActivityIndicator size="large" color="#4A90E2" />
        <Text style={styles.loadingText}>{message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  loadingCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 30,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  loadingText: {
    marginTop: 15,
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});
