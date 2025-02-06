import styled from 'styled-components/native';
import { FlexLine } from '../../components/layout/FlexLine';

export const FlexLineBt = styled(FlexLine)`
  position: absolute;
  justify-content: space-between;
  top: 28px;
  left: 15px;
  right: 15px;
  z-index: 10;
`;

export const TopButton = styled.Pressable`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.background.main};
  justify-content: center;
  align-items: center;
`;

export const Carroussel = styled.View`
	height: 300px;
    overflow: hidden;
`;

export const CarrousselImage = styled.Image`
	width: 300px;
	height: 300px;
`;

export const Section = styled.View`
  padding-inline: 15px;
  gap: 8px;
`;

export const Rating = styled.Text`
	color: ${({ theme }) => theme.colors.text.main};
	font-size: 16px;
`;

export const Title1 = styled.Text`
	font-size: 24px;
	color: ${({ theme }) => theme.colors.text.main};
	font-weight: bold;
`;

export const Title2 = styled.Text`
  font-size: 20px;
	color: ${({ theme }) => theme.colors.text.main};
	font-weight: bold;
`;

export const SimpleText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text.dark};
  line-height: 20px;
`;

export const MoreBtn = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary.main};
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
  margin-top: 8px;
`;

export const MoreBtnTxt = styled.Text`
  color: ${({ theme }) => theme.colors.text.main};
`;