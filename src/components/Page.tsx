import { ReactNode, useEffect } from 'react';
import { StatusBar, View, ViewStyle } from 'react-native';
import { useTheme } from 'styled-components';
import * as NavigationBar from 'expo-navigation-bar';

import Loading from './Loading';

interface PageProps {
	children: ReactNode;
	style?: ViewStyle;
	noPadding?: boolean;
}

export default function Page({ noPadding = false, ...props }: PageProps) {
	const theme = useTheme();

	useEffect(() => {
		NavigationBar.setBackgroundColorAsync(theme.colors.background.main);
		NavigationBar.setButtonStyleAsync('light');
	}, []);

	return (
		<View
			style={[
				{
					paddingHorizontal: !noPadding ? 15 : 0,
					flex: 1,
					gap: 16,
					backgroundColor: theme.colors.background.main,
				},
				props.style ? props.style : {},
			]}
		>
			<StatusBar
				backgroundColor={theme.colors.background.main}
				barStyle='light-content'
			/>
			<Loading />
			{props.children}
		</View>
	);
}
