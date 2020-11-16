import React, {Component} from 'react';
import {Button, View, StyleSheet,TextInput} from 'react-native';
class HomePage extends Component {
    constructor(){
        super();
        this.state ={
            color:'',
        };
    }
    colorValue = (text)=>{
        this.setState({
            color:text,
        });
    };
    render(){
        return( 
            <View style={styles.mainContainer}>
                <View style= {styles.buttonContainer}>
                <Button
                title = "Open new screen"
                color = "#6AE96D"
                onPress={()=>this.props.navigation.navigate('Recepie',{
                    color:this.state.color,
                })}
                />
                <TextInput
                style={styles.formInput} 
                placeholder="Insert color"
                value={this.state.color}
                onChangeText={this.colorValue}
                />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
    },
    buttonContainer:{
    flex: 1,
    margin: 15,
    height: 50,
    justifyContent: 'space-evenly',
    borderRadius: 100,
    },
    image:{
    flex: 1,
    },
});
export default HomePage;