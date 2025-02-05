import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";

export type AppStackParams = {
    Home: undefined
}
const Stack = createNativeStackNavigator<AppStackParams>();

export default function Routes() {
    return (
        <Stack.Navigator
            id={undefined}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
            />
        </Stack.Navigator>
    )
};
