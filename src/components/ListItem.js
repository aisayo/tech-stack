import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';
import { CardItem } from './common';

 
class ListItem extends Component {
  render() {

    const { titleStyle } = styles;
    const { id, title } = this.props.item
    return (
        <TouchableWithoutFeedback
            onPress={() => this.props.selectLibrary(id)}>
            <View>
                <CardItem>
                    <Text 
                        style={titleStyle}>
                        {title}
                    </Text>
                </CardItem>
            </View>
        </TouchableWithoutFeedback>
    );
  }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}
 
export default connect(null, actions)(ListItem);