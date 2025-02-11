import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Game from "../pages/Game";
import Favorites from "../pages/Favorites";
import Search from "../pages/Search";
import Genre from "../pages/Genre";
import { IGenre } from "../@types";

export type AppStackParams = {
    Home: undefined;
    Game: {
        slug: string;
    };
    Favorites: undefined;
    Search: {
        query: string;
    };
    Genre: {
        genre: IGenre;
    }
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

            <Stack.Screen
                name="Search"
                component={Search}
            />

            <Stack.Screen
                name="Genre"
                component={Genre}
            />
        </Stack.Navigator>
    )
};
