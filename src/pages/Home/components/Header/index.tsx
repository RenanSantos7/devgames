import { FlatList, Image, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { FlexLine } from '../../../../components/layout/FlexLine';
import { Container, FavoritesBtn, Input, SearchBtn } from './styles';
import { useTheme } from 'styled-components';
import Pill from '../../../../components/layout/Pill';

interface HeaderProps { }

const categories = ['Arcade', 'Ação', 'Esportes', 'Competitivo', 'Estratégia', 'Indie', 'Corrida', 'Luta']


export default function Header(props: HeaderProps) {
    const theme = useTheme()

	return (
		<Container>
		    <FlexLine justifyContent='space-between'>
    			<Image
    				source={require('../../../../assets/logo.png')}
    				height={48}
    			/>
    
    			<FavoritesBtn activeOpacity={0.75}>
    				<Ionicons name='bookmarks' color='#fff' size={24} />
    			</FavoritesBtn>
            </FlexLine>
            
            <FlexLine>
                <Input
                    placeholder='Procurando um jogo?'
                    placeholderTextColor={theme.colors.text.main}
                />

                <SearchBtn>
                    <Ionicons
                        name='search'
                        color={theme.colors.secondary.main}
                        size={36}
                    />
                </SearchBtn>
            </FlexLine>

            <FlatList
                data={categories}
                renderItem={({ item }) => <Pill text={item} />}
                ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
                horizontal
            />
		</Container>
	);
}
