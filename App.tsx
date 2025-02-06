import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';

import DataProvider from './src/contexts/dataContext';
import Routes from './src/routes/app.routes';
import theme from './src/styles/theme';

export default function App() {
	return (
		<NavigationContainer>
			<ThemeProvider theme={theme}>
				<DataProvider>
					<Routes />
				</DataProvider>
			</ThemeProvider>
		</NavigationContainer>
	);
}
