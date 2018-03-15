import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';
import { CardItem } from './common';

 
class ListItem extends Component {
    
    renderDescription() {
        const { item, selectedLibraryId } = this.props;
 
        if (item.id === selectedLibraryId) {
            return (
                <Text>{item.description}</Text>
            );
        }
    }

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
                {this.renderDescription()}
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

const mapStateToProps = state => {
    return { selectedLibraryId: state.selectedLibraryId}
}
 
export default connect(mapStateToProps, actions)(ListItem);