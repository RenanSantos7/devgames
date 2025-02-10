import { Dispatch, SetStateAction } from 'react';
import { Modal } from 'react-native';
import FontAwesomeIcon from '@expo/vector-icons/FontAwesome6';

import {
	Background,
	CloseButton,
	Container,
	Header,
	StyledText,
	TextContainer,
	Title,
	TitleContainer,
} from './styles';

interface DescriptionProps {
	visibility: boolean;
	setVisibility: Dispatch<SetStateAction<boolean>>;
	text: string;
}

export default function Description(props: DescriptionProps) {
	return (
		<Modal visible={props.visibility} animationType='slide' transparent>
			<Background>
				<Container>
					<Header>
						<CloseButton onPress={() => props.setVisibility(false)}>
							<FontAwesomeIcon
								name='arrow-left'
								color='#fff'
								size={24}
							/>
						</CloseButton>

						<TitleContainer>
							<Title>Descrição</Title>
						</TitleContainer>
					</Header>
					<TextContainer>
						<StyledText selectable>{props.text}</StyledText>
					</TextContainer>
				</Container>
			</Background>
		</Modal>
	);
}
