import { Container } from './styles';
import { Title1 } from '../typography';
import BackBtn from '../BackBtn';

interface PageHeaderProps {
    title: string;
}

export default function PageHeader({title}: PageHeaderProps) {
	return (
		<Container>
			<BackBtn />

			<Title1>{title}</Title1>
		</Container>
	);
}
