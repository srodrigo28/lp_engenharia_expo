import React from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import {useNavigation} from '@react-navigation/native';

export default function DiarioObra(){

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.TopoView}>
                <Text style={styles.TituloPage}>Diário de Obra</Text>
            </View>

            <TextInput
                placeholder="Item 1"
                style={styles.inputForm}
                autoCorrect={false}
                onChangeText={ () => {} }
            />
            <TextInput
                placeholder="Item 2"
                style={styles.inputForm}
                autoCorrect={false}
                onChangeText={ () => {} }
            />
            <TextInput
                placeholder="Item 3"
                style={styles.inputForm}
                autoCorrect={false}
                onChangeText={ () => {} }
            />
            <TextInput
                placeholder="Item 4"
                style={styles.inputForm}
                autoCorrect={false}
                onChangeText={ () => {} }
            />
            <TextInput
                placeholder="Imagens"
                style={styles.inputForm}
                autoCorrect={false}
                onChangeText={ () => {} }
            />
            <TouchableOpacity style={styles.btnSubmitForm}>
                <Text 
                    style={styles.txtSubmitForm}
                    // onPress={() => {navigation.navigate('Menu')}}
                >
                Foto
                </Text>
            </TouchableOpacity>
            

            <TouchableOpacity style={styles.btnSubmitForm}>
                <Text 
                    style={styles.txtSubmitForm}
                    onPress={() => {navigation.navigate('Menu')}
                }>
                Salvar
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center",
        backgroundColor: '#fff'
    },
    TopoView:{
        width: "100%",
        marginTop: -10,
        backgroundColor: "red",
        flex: 2,
        flexDirection: 'row',
        alignContent: "center",
        justifyContent: "center",

    },
    TituloPage: {
        fontSize: 30,
        color: "white",
        fontWeight: "bold",
        marginTop: 100,
    },
    imgLogo: { 
        width: 80,
        height: 80,
    },
    inputForm:{
        backgroundColor: "#f7f8fc",
        width: "90%",
        marginBottom: 15,
        height: 50,
        borderRadius: 6,
        color:'#BD3804',
        fontSize: 18,
        padding: 10,
    },
    btnSubmitForm:{
        backgroundColor: '#BD3804',
        width: '90%',
        marginBottom: 10,
        height: 50,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtSubmitForm:{
        color: '#fff',
        fontSize: 22
    },
    linkNewUser:{
        marginTop: 25,
        fontSize: 18,
        color: '#BD3804',
    }
})