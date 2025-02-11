export default async function getData(endPoint: string, final?: () => void) {
	try {
		const response = await fetch(endPoint);
		if (response.ok) {
			const data = await response.json();
			const isGameArray = !endPoint.includes('/games/') ||
			endPoint.includes('/genres')
			return isGameArray
				? data.results
				: data;
		} else {
			throw new Error(
				`Erro na requisição: ${response.status} ${response.statusText}`,
			);
		}
	} catch (error) {
		console.error('Erro ao buscar dados:', error);
		return undefined;
	} finally {
		final && final();
	}
}
