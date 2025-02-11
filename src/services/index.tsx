export default async function getData(endPoint: string, final?: () => void) {
	try {
		const response = await fetch(endPoint);
		if (response.ok) {
			const data = await response.json();
			return endPoint.includes('/games/')
				? data
				: data.results;
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
