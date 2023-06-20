import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import List from "../screens/List";
import Item from "../screens/Item";
import { MaterialCommunityIcon } from '@expo/vector-icons';
import { Platform } from "react-native";

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{ 
            cardStyle: {backgroundColor: '#ffffff'}, 
            headerStyle: {
                height: 110,
                backgroundColor: '#95a5a6',
                boderBottomWidth: 5,
                boderBottomColor: '#34495e',
            },
            headerTitleStyle: { color: '#ffffff', fontSize: 24},
            headerTitleAlign: 'center',
            headerTitle: ({ style }) => (
                <MaterialCommunityIcon name="react" style={style} />
            ),
        }}
        >
            <Stack.Screen 
            name="Home" 
            component={Home} 
            options={{ headerShown: false }}/>
            <Stack.Screen 
            name="List" 
            component={List} 
            options={{ 
                headerTitle: 'List Screen', 
                headerBackTitleVisible: true,
                headerBackTitle: 'Prev',
                headerTitleStyle: {fontSize: 24},
                headerTintColor: '#74c3c',
                headerBackImage: ({ tintColor}) => {
                    const style = {
                        marginRight: 5,
                        marginLift: Platform.OS === 'ios' ? 11 : 0,
                    };
                    return (
                        <MaterialCommunityIcon
                        name="keyboard-backspace"
                        size={30}
                        color={tintColor}
                        style={style}
                        />
                    );
                },
            }}
            />
            <Stack.Screen name="Detail" component={Item} />
        </Stack.Navigator>
    );
};

export default StackNavigation;