import  { useEffect, useState } from 'react'
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native'
import allProducts from '../Data/products.json'

const ItemsListCategory = ({ navigation, route }) => {
  const { category } = route.params
  const [products, setProducts] = useState([])

  useEffect(() => {
    const productsFilted = allProducts.filter((product) => product.category === category);
    setProducts(productsFilted);
  }, [category])

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={styles.productItem}
            onPress={() => {
              navigation.navigate('ItemDetail', { id: item.id });
            }}
          >
            <Text style={styles.productTitle}>{item.title}</Text>
          </Pressable>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEFAE0',  
  },
  productItem: {
    width:400,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderColor: 'black'
  },
  productTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

export default ItemsListCategory
