import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import { studentsListData } from '../actions';

class StudentsList extends Component {
    componentWillMount(){
        this.props.studentsListData();
     
        }
        componentWillReceiveProps(nextProps){
            const ds = new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.datasource = ds.cloneWithRows(nextProps.studentsArray);
    }
    
    render() {
        console.log(this.props.studentsArray);
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
const mapStateTopProps = ({ studentsDataResponse }) => {
     const studentsArray = _.map(studentsDataResponse.data, (val, uid) => {
  return { ...val, uid }; // { isim: 'Ayşe', syoisim: 'asda', sube: 'asube', uid: 'kq9aasdfdf' }
     });
     return { studentsArray };
}

export default connect( mapStateTopProps, { studentsListData })(StudentsList);