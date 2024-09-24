# Weather App Project

The Weather App project is a web application built with Angular that uses the WeatherAPI.com API to provide real-time weather information.

## Features

- Display current weather conditions for a selected city
- 3-day weather forecast
- Search for weather conditions by city

## Technologies Used

- Angular for creating the user interface and managing HTTP requests
- WeatherAPI.com for weather information

## Configuration

- To use the application, replace the WeatherAPI.com API key in the `src/environments/environment.ts` file with a valid key.
- Make sure you have Node.js and Angular CLI installed on your system.

## Obtaining an API Key from WeatherAPI.com

To obtain an API Key from WeatherAPI.com, follow these steps:

1. Go to the WeatherAPI.com website and click on "Sign Up" to create an account.
2. Fill out the registration and verify yout email to activate your account.
3. Once your account is activated, an API Key is automatically generated

## Using the API Key

1. Create a new folder named `environments` in the `src` directory.
2. Inside the `environments` folder, create two new files: `environment.ts` and `environment.prod.ts`.
3. Copy the contents of the .env.example file into the newly created files.

## Running the Application

- Run `ng serve` in the project directory to start the application in development mode.
- Open your browser and navigate to `http://localhost:4200` to view the application.
