import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Dispatch, SetStateAction, useState } from 'react';
import { useTheme } from 'styled-components';
import Ionicons from '@expo/vector-icons/Ionicons';

import { AppStackParams } from '../../routes/app.routes';
import { FlexLine } from '../layout/FlexLine';
import { Input, SearchBtn } from './styles';

interface SearchBarProps {
    searchQuery: string;
    setSearchQuery: Dispatch<SetStateAction<string>>;
    handleSearch: () => void;
}

export default function SearchBar(props: SearchBarProps) {
	const theme = useTheme();

	return (
		<FlexLine>
			<Input
				value={props.searchQuery}
				onChangeText={text => props.setSearchQuery(text)}
				placeholder='Procurando um jogo?'
				placeholderTextColor={theme.colors.text.main}
			/>

			<SearchBtn onPress={props.handleSearch}>
				<Ionicons
					name='search'
					color={theme.colors.secondary.main}
					size={36}
				/>
			</SearchBtn>
		</FlexLine>
	);
}
