import { json } from '@sveltejs/kit';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

export async function GET({ url }) {
	const city = url.searchParams.get('city');
	const apiKey = process.env.OPEN_WEATHER;

	if (!city) {
		return json({ error: 'Please provide a city.' }, { status: 400 });
	}

	const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

	try {
		const response = await fetch(apiUrl);

		if (!response.ok) {
			console.error('Error fetching weather data:', response.status);
			return json({ error: 'An error occurred while fetching the weather.' }, { status: 500 });
		}

		const data = await response.json();

		if (data.cod === '404') {
			return json({ error: 'City not found. Please try again.' }, { status: 404 });
		}

		return json({
			description: data.weather[0].description,
			temp: data.main.temp,
			humidity: data.main.humidity,
			wind: data.wind.speed,
			name: data.name,
			main: data.weather[0].main
		});
	} catch (error) {
		return json({ error: error }, { status: 500 });
	}
}
