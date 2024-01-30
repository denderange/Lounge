export const getRandomDate = (start: any, end: any) => {
	return new Date(start.getTime()
		+ Math.random() * (end.getTime() - start.getTime()));
}

// usage example:

// getRandomDate(new Date(2023, 0, 1), new Date())
// .toLocaleString('default', { month: 'long' })

// getRandomDate(new Date(2023, 0, 1), new Date()).getDate()