import { json } from '@sveltejs/kit';
import fetch from 'node-fetch'; // Use node-fetch for making API requests

export async function GET({ url }) {
	const city = url.searchParams.get('city'); // Get the city name from the query parameters
	const apiKey = process.env.OPEN_WEATHER; // Fetch API key from environment variables

	// Check if city is provided
	if (!city) {
		return json({ error: 'Please provide a city.' }, { status: 400 });
	}

	// Construct API URL
	const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

	console.log('API URL:', apiUrl); // Log the URL to debug

	try {
		// Fetch the weather data from OpenWeather API
		const response = await fetch(apiUrl);

		// Log response status and data for debugging
		console.log('Response Status:', response.status);
		const data = await response.json();
		console.log('Response Data:', data);

		if (data.cod === '404') {
			return json({ error: 'City not found. Please try again.' }, { status: 404 });
		}

		// Return weather data if successful
		return json({
			description: data.weather[0].description,
			temp: data.main.temp,
			humidity: data.main.humidity,
			wind: data.wind.speed,
			name: data.name
		});
	} catch (error) {
		// Log the error for debugging
		console.error('Error fetching weather data:', error);
		return json({ error: 'An error occurred while fetching the weather.' }, { status: 500 });
	}
}
