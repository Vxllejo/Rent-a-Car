/* API
const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fde61b13c8msh2a9dc7511716ddbp1fd7e7jsnafc268a52041',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
} 
*/

export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'fde61b13c8msh2a9dc7511716ddbp1fd7e7jsnafc268a52041',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {headers:headers,
});
    const result = await response.json();
    return result;
}