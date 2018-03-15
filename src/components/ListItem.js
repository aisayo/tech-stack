import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';
import { CardItem } from './common';

 
class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }
    
    renderDescription() {
        const { item, expanded } = this.props;
 
        if (expanded) {
            return (
                <CardItem>
                    <Text style={{ flex:1 }}>
                        {item.description}
                    </Text>
                </CardItem>
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

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.item.id
    return { expanded };
}
 
export default connect(mapStateToProps, actions)(ListItem);