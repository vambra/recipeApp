import React from 'react';
import {
    SafeAreaView,
    FlatList,
    StyleSheet
} from 'react-native';
import categoryData from '../../../categoryData.json';
import CategoryButton from '../../components/CategoryButton';

function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.view}>
            <FlatList
                data={categoryData}
                renderItem={({ item }) => (
                    <CategoryButton
                        category={item}
                        event={() => { navigation.navigate('CategoryHome', item) }}
                    />
                )}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap'
    }
});

export default HomeScreen;