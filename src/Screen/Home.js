import { View, Text, FlatList, Pressable } from "react-native"
import categories from "../Data/categories.json"

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Pressable
            style={styles.categoryItem}
            onPress={() => {
              navigation.navigate("ItemsListCategory", { category: item });
            }}
          >
            <Text style={styles.categoryText}>{item}</Text>
          </Pressable>
        )}
      />
    </View>
  )
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#FEFAE0"
  },
  categoryItem: {
    width:400,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderColor: 'black',
  },
  categoryText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
}

export default Home