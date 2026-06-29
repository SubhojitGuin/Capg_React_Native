import { View, Text,TextInput,Button,FlatList,StyleSheet,TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
 
 
const products = [
  {
      id:1,
      name:'Iphone 14',
      price:1000
  },
  {
      id:2,
      name:'Iphone 13',
      price:800
  },
  {
      id:3,
      name:'Iphone 12',
      price:600
  }
]
export default function App() {
    const [cart,setCart]=React.useState([])
 
    useEffect(()=>{
        loadCart()
    },[])

    async function loadCart() {
        const existingProducts = await AsyncStorage.getItem('cart');
        if(existingProducts !== null) {
            setCart(JSON.parse(existingProducts))
        }
    }

    async function addToCart(item){
        const existingProduct=cart.find(product=>product.id===item.id)
        let updatedCart;
        if (existingProduct){
            {
                updatedCart=cart.map(product=>{
                    if(product.id===item.id){
                        return {...product,quantity:product.quantity+1}
                    }
                    return product
                })
            }
        } else {
            updatedCart=[...cart,{...item,quantity:1}]
        }
        setCart(updatedCart)
        await AsyncStorage.setItem('cart',JSON.stringify(updatedCart))
    }

    function removeFromCart(item){
        const updatedCart=cart.filter(product=>product.id!==item.id)
        setCart(updatedCart)
        AsyncStorage.setItem('cart',JSON.stringify(updatedCart))
    }

    function updateQuantity(item,quantity){
        const updatedCart=cart.map(product=>{
            if(product.id===item.id){
              return {...product,quantity:quantity}
            }
            return product
        })
        setCart(updatedCart)
        AsyncStorage.setItem('cart',JSON.stringify(updatedCart))
    }

  return (
    <View style={styles.container}>
      <Text>Shopping Cart</Text>
        <Text style={{fontSize:20,fontWeight:'bold',marginTop:20}}>Products</Text>
        <FlatList
          data={products}
          renderItem={({item})=>(
              <View style={styles.productCard}>
                  <Text>{item.name}</Text>
                  <Text>${item.price}</Text>
                  <Button title='Add to Cart' onPress={()=>addToCart(item)}/>
              </View>)}
          keyExtractor={(item)=>item.id.toString()}
        />
        <Text style={styles.title}>Cart</Text>
        <FlatList
            data={cart}
            renderItem={({item})=>(
                <View style={styles.cartItem}>  
                    <Text>{item.name} x {item.quantity}</Text>
                    <Text>${item.price*item.quantity}</Text>
                    <Button title='Remove' onPress={()=>removeFromCart(item)}/>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text>Quantity:</Text>
                        <TextInput
                            style={{borderWidth:1,borderColor:'#ccc',padding:5,width:50,marginLeft:10}}
                            keyboardType='numeric'
                            value={item.quantity.toString()}
                            onChangeText={(text)=>updateQuantity(item,parseInt(text))}
                        />
                    </View>
                </View>
              )}
            keyExtractor={(item)=>item.id.toString()}
        />
    </View>
  )
}
 
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:'#fff'
    },
    productCard:{
        padding:10,
        borderWidth:1,
        borderColor:'#ccc',
        borderRadius:5,
        marginBottom:10
    },
    cartItem:{
        padding:10,
        borderWidth:1,
        borderColor:'#ccc',
        borderRadius:5,
        marginBottom:10
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:20
    }
})