import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';


class LibraryList extends Component {
    componentWillMount() {
        const ds = new ListView.DataSource({ 
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.DataSource = ds.cloneWithRows(this.props.libraries);
    }

    renderRow() {
        
    }

    render() {
        return(
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
//we call connect(), that returns a function with the Library List
//conect forges a connection between react and redux part of app
