import { StyleSheet, Text, View } from 'react-native';

export default function EmptyList() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Component</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
    },
    text: {
        fontSize: 18,
        
    }
});

