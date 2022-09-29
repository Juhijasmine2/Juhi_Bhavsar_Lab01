import React, { useState } from "react";
import { Button, Text, View, StyleSheet, TextInput,Image,ScrollView,StatusBar,Linking } from "react-native";





const Plant = (props) => {
  const [isHungry, setIsHungry] = useState(true);
  const [hungryTime, setHungryTime] = useState(3000);

  return (
    
   <View>

 
 <Text style={styles.textLabel}>

   I am {props.name} , and I am {isHungry ? "hungry" : "full"}!

 </Text>

 <Text style={styles.textDescription}>

  Description: {props.description}

  
 </Text>

 <Text style={styles.textLink}>
 Link:
 </Text>

 <Text onPress={()=>{Linking.openURL(props.URL)}} style={{color:'blue'}}>

  {props.URL}
 </Text>
 
  
   
 <Button
   onPress={() => {
     setIsHungry(false);
     setTimeout(
       () => {
         setIsHungry(true)
       }, hungryTime
     );
   }}
   disabled={!isHungry}
   title={isHungry ? "Pour me some water, please!" : "Thank you!"}
 />
 <TextInput
   style = {{height: 40 ,color:'green'}}
   placeholder = 'set a hungry time'
   onChangeText = { inputValue => setHungryTime(inputValue) }
   value = { hungryTime }
 />

</View>
    
    
    
    
  );
}

const plants = [
  {
    id:1,
    name:'Jasmine',
    description: 'The main reason jasmine is so famous is its strong fragrance. People adore the flower for its strong, sweet smell. ',
    URL: "https://sites.google.com/site/flowers2thailand/_/rsrc/1317555721523/home/mali.jpg"
  },
  {
    id:2,
    name:'Bamboo',
    description: 'It is used in cooking as well',
    URL: 'https://www.fnp.com/assets/images/custom/articles/21-07-2018/3-layer-lucky-bamboo-plant.jpg'
  },
  {
    id:3,
    name:'Daisy',
    description:'This happy face flower with radiating white petals around a yellow center disk',
    URL: 'https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGFpc2llc3xlbnwwfHwwfHw%3D&w=1000&q=80'
  },
  {
    id:4,
    name:'tulip',
    description:'Flowers are usually large,showy,bright coloured in red,pink,yellow,white colour',
    URL: 'https://gardenerspath.com/wp-content/uploads/2020/09/Types-of-Tulip-Flowers-FB.jpg'
  },
  {
    id:5,
    name:'Sunflower',
    description:'Sunflower are often grown as ornamental plants due to their large attractive flower head',
    URL: 'https://scx2.b-cdn.net/gfx/news/2021/sunflowers.jpg'
  },
  {
    id:6,
    name:'Snake Plant',
    description:'Its an air filter indoor plant also boosts mental health and is low maintenance and easy to care',
    URL: 'https://hips.hearstapps.com/hmg-prod/images/how-to-care-for-a-snake-plant-1591205050.jpg?crop=0.670xw:1.00xh;0.330xw,0&resize=640:*'
  },
  {
    id:7,
    name:'Aster',
    description:'It is a very beautiful plant and pollinator for bees and butterflies.',
    URL: 'https://www.allaboutgardening.com/wp-content/uploads/2022/04/Aster-alpinus.jpeg'

  }
  
];

const Plants = () => {
  return plants.map(
    (plant) => {
      return (
        
              <Plant key={plant.id} name={plant.name} description= {plant.description} URL={plant.URL}/>
       
        
         


      );
    }
  );
}

const App = () => {
  return (
    <ScrollView style={styles.scrollView}>
<View style={styles.container}>
      {Plants()}
    </View>
    </ScrollView>
    
  );
}


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
      backgroundColor: 'lightgrey',
      marginHorizontal: 20,
    },
    textLabel: {
      color:'orange',
      backgroundColor: 'white',
       alignSelf: 'flex-start',
       fontWeight:'bold',
       fontSize:'20pt'},

       textDescription:{
        color:'green',
        textDecorationStyle:"solid",
        backgroundColor: 'lightblue', 
        alignSelf: 'flex-start',
        fontWeight:'bold' },

        textLink:{
          color:'black',
        fontWeight:'bold'}

       

    
  });
  


export default App;