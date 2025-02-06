import { ReactNode } from 'react';
import { SafeAreaView, StatusBar, ViewStyle } from 'react-native';
import { useTheme } from 'styled-components';

import Loading from './Loading';

interface PageProps {
	children: ReactNode;
	style: ViewStyle;
	noPadding?: boolean;
}

export default function Page({ noPadding = false, ...props }: PageProps) {
	const theme = useTheme();
	return (
		<SafeAreaView
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
		</SafeAreaView>
	);
}
