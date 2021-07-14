import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
   button:{
     height:40,
     width:"50%",
     backgroundColor:"black",
     borderRadius:20,
     alignItems:'center',
     justifyContent:"center",
   },
   text:{
     fontSize:20,
     fontWeight:'500',
     color:"white",
     textTransform:'uppercase'
   },
   container:{
     width:"100%",
     paddingLeft:10,
     paddingTop:10,
     alignItems:'center',
     justifyContent:"center"
   },
});

export default styles;