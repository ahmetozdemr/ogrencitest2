import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { studentsListData } from '../actions';

class StudentsList extends Component {
    componentWillMount(){
        this.props.studentsListData();
    }
    render() {
        return (
            <View>
                <Text> Öğrenci Listesi </Text>
                <Text> Öğrenci Listesi </Text>
                <Text> Öğrenci Listesi </Text>
                <Text> Öğrenci Listesi </Text>
            </View>
        );
    }
}

export default connect(null, { studentsListData })(StudentsList);