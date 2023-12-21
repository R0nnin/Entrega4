import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import allProducts from '../Data/products.json';

const ItemDetail = ({ route }) => {
  const { id } = route.params;
  const [product, setProduct] = useState({});

  useEffect(() => {
    const productFind = allProducts.find((product) => product.id === id);
    setProduct(productFind);
  }, [id]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: product.thumbnail }}
        resizeMode='cover'
      />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>{`$${product.price}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor:"#FEFAE0"
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    fontFamily: 'sans-serif',
  },
  description: {
    fontSize: 20,
    marginBottom: 8,
    fontStyle: 'italic'
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    borderWidth:3,
    borderRadius: 7,
    borderColor: 'black',
    width:100,
    textAlign: 'center',
    paddingTop:5,
    backgroundColor:"white",
    textDecorationLine: 'underline',
  },
});

export default ItemDetail;