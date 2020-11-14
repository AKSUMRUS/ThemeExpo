import React from 'react';
import {useTheme} from "../context/ThemeStore";
import {View, Switch} from "react-native";
import TextCustom from "../texts/TextCustom";

const MainScreen = () => {
    const {isDark, setDark, setLight, THEME_COLOR} = useTheme()
    const toggleSwitch = (value) => {
        if(value) {
            setDark();
        }
        else{
            setLight();
        }
    }

    return(
        <View style={{justifyContent: 'center', flex: 1, alignItems: 'center', backgroundColor: THEME_COLOR.MAIN_BG}}>
            <TextCustom type={'header1'}> How are you? </TextCustom>
            <TextCustom type={'header2'}> How are you? </TextCustom>
            <TextCustom type={'text1'}> How are you? </TextCustom>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isDark ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isDark}
            />
        </View>
    )
}

export default MainScreen;
