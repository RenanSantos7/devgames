import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Game from "../pages/Game";
import Favorites from "../pages/Favorites";

export type AppStackParams = {
    Home: undefined;
    Game: {
        slug: string;
    };
    Favorites: undefined;
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

            <Stack.Screen
                name="Favorites"
                component={Favorites}
            />
        </Stack.Navigator>
    )
};
