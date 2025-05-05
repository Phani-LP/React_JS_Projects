# React JS Projects

This repository contains a collection of React-based projects, each showcasing different functionalities and concepts in React development. Below is a structured overview of the projects, setup instructions, and usage details.

## Table of Contents

- [Projects Overview](#projects-overview)
- [Getting Started](#getting-started)
- [Project Descriptions](#project-descriptions)
  - [HelloWorld](#helloworld)
  - [CounterAPP](#counterapp)
  - [SimpleForms](#simpleforms)
  - [ToDoListApp](#todolistapp)
  - [RandomQuoteGeneratorApp](#randomquotegeneratorapp)
  - [SimpleCalculator](#simplecalculator)
  - [WeatherApp](#weatherapp)
  - [RockPaperScissors](#rockpaperscissors)
- [Styling](#styling)
- [Running the Projects](#running-the-projects)

---

## Projects Overview

This repository includes the following React projects, each designed to demonstrate specific React concepts and features:

1. **HelloWorld**: A basic "Hello World" component to introduce React rendering.
2. **CounterAPP**: A counter application with increment and decrement functionality.
3. **SimpleForms**: A form to collect and display user input (name, email, message).
4. **ToDoListApp**: A to-do list application for adding and removing tasks.
5. **RandomQuoteGeneratorApp**: A random quote generator using the Quotable API.
6. **SimpleCalculator**: A basic calculator with keyboard input support.
7. **WeatherApp**: A weather display app using the OpenWeatherMap API.
8. **RockPaperScissors**: A Rock-Paper-Scissors game against the computer.

---

## Getting Started

Follow these steps to set up the repository locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/react-js-projects.git
   cd react-js-projects
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open the application**:
   Navigate to `http://localhost:5173` in your browser.

---

## Project Descriptions

### HelloWorld
- **File**: `src/HelloWorld.jsx`
- **Description**: A simple React component that displays "Hello World".
- **Usage**: Uncomment the `HelloWorld` component in `src/main.jsx` to render it.

### CounterAPP
- **File**: `src/App1.jsx`
- **Description**: A counter application with buttons to increment and decrement a count.
- **Usage**: Uncomment the `CounterAPP` component in `src/main.jsx` to render it.

### SimpleForms
- **File**: `src/SimpleForms.jsx`
- **Description**: A form to collect user input (name, email, message) and display the submitted data.
- **Usage**: Uncomment the `SimpleForms` component in `src/main.jsx` to render it.

### ToDoListApp
- **File**: `src/ToDoList.jsx`
- **Description**: A to-do list application for adding and removing tasks.
- **Usage**: Uncomment the `ToDoListApp` component in `src/main.jsx` to render it.

### RandomQuoteGeneratorApp
- **File**: `src/randomQuoteGeneratorApp.jsx`
- **Description**: Fetches and displays random quotes from the Quotable API.
- **Usage**: Uncomment the `RandomQuoteGeneratorApp` component in `src/main.jsx` to render it.

### SimpleCalculator
- **File**: `src/simplecalculator.jsx`
- **Description**: A basic calculator supporting addition, subtraction, multiplication, and division with keyboard input.
- **Usage**: Uncomment the `SimpleCalculator` component in `src/main.jsx` to render it.

### WeatherApp
- **File**: `src/weatherApp.jsx`
- **Description**: Displays weather data for a specified location using the OpenWeatherMap API.
- **Usage**: 
  - Uncomment the `DisplayWeather` component in `src/main.jsx` to render it.
  - Replace `API_KEY` in the file with your OpenWeatherMap API key.

### RockPaperScissors
- **File**: `src/Game.jsx`
- **Description**: A Rock-Paper-Scissors game where the user competes against the computer.
- **Usage**: Uncomment the `RockPaperScissors` component in `src/main.jsx` to render it.

---

## Styling

The projects use the following CSS files for consistent and responsive styling:

- **Global Styles**: `src/index.css`
- **Calculator Styles**: `src/calculatorstyle.css`
- **Game Styles**: `src/game.css`

Additionally, **Bootstrap** is integrated for uniform styling across components.

---

## Running the Projects

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Access the application**:
   Open `http://localhost:5173` in your browser.

3. **Switch between projects**:
   - Navigate to `src/main.jsx`.
   - Uncomment the desired project component and comment out others to render it.

---

**Note**: Ensure you have an active internet connection for projects that rely on external APIs (e.g., WeatherApp, RandomQuoteGeneratorApp).
