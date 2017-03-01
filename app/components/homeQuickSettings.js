import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Dimensions, TouchableHighlight} from 'react-native';
import Settings from './settings';
import Store from './store';

export default class HomeQuickSettings extends Component {

    constructor(){
        super();
        this.state = {
            settings : Settings.settings
        }


        Store.get('settings').then(v => this.setState({settings: v}));

    }
    updateSetting(category){
        Settings.getNext(category);
        this.setState({settings: Settings.settings});
    }
    render() {
        return (
            <View style={styles.setPosition}>

                <TouchableHighlight onPress={this.updateSetting.bind(this, 'mealTime')}>
                    <View style={styles.miniSettingButton}>
                        <Text style={styles.text}>{this.state.settings.mealTime.current} min</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.updateSetting.bind(this, 'mealCategory')}>
                    <View style={styles.miniSettingButton}>
                        <Text style={styles.text}>{this.state.settings.mealCategory.current}</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.updateSetting.bind(this, 'distance')}>
                    <View style={styles.miniSettingButton}>
                        <Text style={styles.text}>{this.state.settings.distance.current} mi</Text>
                    </View>
                </TouchableHighlight>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    setPosition: {
        position: 'absolute',
        padding: 10,
        bottom: 20,
        left: 10,
        right: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    miniSettingButton: {
        backgroundColor: '#d35400',
        width: 75,
        height: 75,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10000,
        shadowRadius: 2,
        shadowColor: '#222',
        shadowOpacity: 0.4,
        shadowOffset: {
            width: 2,
            height: 2
        }
    },
    text: {
        color: 'white'
    }
})
AppRegistry.registerComponent('HomeQuickSettings', () => HomeQuickSettings);