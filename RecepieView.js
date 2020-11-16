import React, {Component} from 'react';
import {View, Text, StyleSheet,Button,TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';

class RecepieView extends Component {
    
    render(){
          const color= this.props.route.params.color;
        return(
            
            <View style={styles.screen}> 
            <TouchableOpacity style={{height:35,backgroundColor:color,justifyContent:'center'}}>
            <Text style={styles.titleRe}>Box color ={color}</Text>
            </TouchableOpacity>
                
            </View> 
        );
    }
}
const styles = StyleSheet.create({
    screen: {
        flex:1,
        backgroundColor:'black',
    },
   
});
export default RecepieView;