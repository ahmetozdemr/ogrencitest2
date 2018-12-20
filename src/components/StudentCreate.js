import React, { Component } from 'react';
import { View, Text, TextInput} from 'react-native';
import { Button, Card, CardSection } from '../ortak';

class StudentCreate extends Component {
    
    clickSave(){

    }
    render() {
        const { inputStyle } = styles;
        return (
            <View>
            <CardSection>
            <TextInput
                placeholder = "İsim"
                style = {inputStyle}
                value={this.props.isim}
                onChangeText={isim => this.props.studentChanged(isim)}
           />              
            </CardSection>

            <CardSection>
                <TextInput
                placeholder="soyisim"
                style={inputStyle}
                value={this.props.soyisim}
                onChangeText = {soyisim => this.props.studentChanged(soyisim)}
            />   
                        
            </CardSection>

            <CardSection>
                <TextInput
                placeholder="Öğrenci numarası"
                style={inputStyle}
                value={this.props.ogrencinumara}
                onChangeText = {ogrencinumara => this.props.studentChanged(ogrencinumara)}
            />               
            </CardSection>

            <CardSection>
            <Button onPress={this.clickSave.bind(this)}> GİRİŞ </Button>
            </CardSection>
           
            </View> 
        );
    }
}

const styles = {

    inputStyle: {  
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        flex: 1
    },
  };

export default StudentCreate;
