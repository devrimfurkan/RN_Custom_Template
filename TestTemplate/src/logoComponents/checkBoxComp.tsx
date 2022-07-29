import React from 'react';
import { ScrollView, View ,Text,StyleSheet} from 'react-native';
import {LogoCheckBox ,CheckBoxGroup} from '@logo-rn/logo-check-box';
import { LogoLabel } from '@logo-rn/logo-label';
const CHECKBOX_OPTIONS = [
    {
     id: "1",
     value: "item1",
     checked: false,
     disabled: false
    },
    {
     id: "2",
     value: "item2",
     checked: true,
     disabled: false
    },
    {
     id: "3",
     value: "item3",
     checked: true,
     disabled: true
    },
    ]
const CheckboxScreenComp = ({ navigation, lang }: any) => {

    

    const checkboxSet = (
        <View>
            <LogoLabel  style={styles.title}>CheckBoxUsage</LogoLabel>
            <View style={styles.column}>
                <View style={styles.row}>
                    <LogoCheckBox checked={false} key={"1"} setChecked={() => { }} />
                    <LogoCheckBox checked={true} key={"2"} setChecked={() => { }} />
                    <LogoCheckBox checked={true} indeterminate={true} key={"3"} setChecked={() => { }} />
                    <LogoCheckBox checked={false} disabled={true} key={"4"} setChecked={() => { }} />
                    <LogoCheckBox checked={true} disabled={true} key={"5"} setChecked={() => { }} />
                    <LogoCheckBox checked={true} indeterminate={true} disabled={true} key={"6"} setChecked={() => { }} />
                </View>
                <LogoCheckBox title={"checked"} checked={true} setChecked={() => { }} />
                <LogoCheckBox title={"disabled"} desc={"description"} checked={false} setChecked={() => { }} />
                <CheckBoxGroup options={CHECKBOX_OPTIONS} title={"CheckBoxGroup"} />
                <CheckBoxGroup options={CHECKBOX_OPTIONS} title={"CheckBoxGroup2"} isRow={true} />
            </View>
        </View>
    )

    return (
        <View style={styles.page}>
            <ScrollView>
                {checkboxSet}
            </ScrollView>
        </View>
    )
}

export default CheckboxScreenComp;


const styles = StyleSheet.create({
    page: {
        flex: 1,
        height: "80%",
        backgroundColor: "white",
        paddingBottom: "5%"
    },
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        width: "96%",
        marginHorizontal: "3%",
        marginVertical: 24,
    },
    column: {
        display: "flex",
        width: "90%",
        marginHorizontal: "5%",
        marginVertical: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    title: {
        fontSize: 36,
        fontWeight: "500",
        margin:24,
        lineHeight:38,
    },
    desc: {
        fontSize: 18,
        fontWeight: "800",
        marginVertical: 4,
        fontFamily: "Inter",
        marginTop: 24,
        marginLeft: 20,
        color: "#969696"
    }
});

