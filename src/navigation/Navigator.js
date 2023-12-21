import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../Components/Header'
import Home from '../Screen/Home'
import ItemsListCategory from '../Screen/ItemsListCategory'
import ItemDetail from '../Screen/ItemDetail'


const Stack = createNativeStackNavigator()

const Navigator = () => {
  return (
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='Home'
                    screenOptions={
                        ({route})=>{
                            return {
                            header: ()=>{
                                return <Header title={
                                                        route.name ==="Home" ? "Categorias" :
                                                        route.name === "ItemsListCategory" ? route.params.category :
                                                        "Detalle Producto"
                                                        }/>
                            }
                            }
                        }
                    } 
                >
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="ItemsListCategory" component={ItemsListCategory} />
                    <Stack.Screen name="ItemDetail" component={ItemDetail} />
                </Stack.Navigator>
        </NavigationContainer>
  )
}

export default Navigator
