import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Game from "../pages/Game";

export type AppStackParams = {
    Home: undefined;
    Game: {
        slug: string;
    };
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

            <Stack.Screen
                name="Game"
                component={Game}
            />
        </Stack.Navigator>
    )
};
