<!-- This template was created following The Markdown Guide - https://www.markdownguide.org/ -->

<!-- If you are editing this README.md on VS Code, please highlight and replace the following keywords enclosed in backticks (``) using:
* MacOS: CMD + Shift + L
* Windows: CRTL + Shift + L

GitHub Username: `richardguarnieri`
GitHub Repository: `weather-dashboard`
Your Name: `Richard Guarnieri`
Email: `richard.gm@outlook.com`
LinkedIn Username: `rguarnieri`
Twitter Username: `ric_guarnieri`
Project Title: `Weather Dashboard`
Project Description: `A simple weather dashboard and forecast!`
-->

<!-- Please also update the following links -->
[logo]: ./img/logo.png
[application-image]: ./img/app-image.png
[application-url]: https://richardguarnieri.github.io/weather-dashboard/

<div id="home"><div> 

<!-- Badges / Shields -->
<!-- These were created using https://shields.io/ - feel free to replace / create yours by modifying links below: -->

<div align="center">
    <a href="https://github.com/richardguarnieri/weather-dashboard/graphs/contributors">
        <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/richardguarnieri/weather-dashboard?style=for-the-badge">
    <a>
     <a href="https://github.com/richardguarnieri/weather-dashboard/network/members">
        <img alt="GitHub forks" src="https://img.shields.io/github/forks/richardguarnieri/weather-dashboard?style=for-the-badge">
    <a>
     <a href="https://github.com/richardguarnieri/weather-dashboard/stargazers">
        <img alt="GitHub stars" src="https://img.shields.io/github/stars/richardguarnieri/weather-dashboard?style=for-the-badge">
    <a>
     <a href="https://github.com/richardguarnieri/weather-dashboard/issues">
        <img alt="GitHub issues" src="https://img.shields.io/github/issues/richardguarnieri/weather-dashboard?style=for-the-badge">
    <a>
     <a href="https://github.com/richardguarnieri/weather-dashboard/blob/main/LICENSE">
        <img alt="GitHub license" src="https://img.shields.io/github/license/richardguarnieri/weather-dashboard?label=license&style=for-the-badge">
    <a>
     <a href="https://github.com/richardguarnieri/weather-dashboard/commits/main">
        <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/richardguarnieri/weather-dashboard?style=for-the-badge">
    <a>
    <a href="https://www.linkedin.com/in/rguarnieri/">
        <img alt="LinkedIn shield" src="https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555">
    <a>
</div>
<br>


<!-- Header -->

<div align="center">
    <a href="https://github.com/richardguarnieri/weather-dashboard">
        <img src="./img/logo.png" alt="Logo" width="300" height="auto">
    </a>
    <h1 align="center">Weather Dashboard</h1>
    <div>
        A simple weather dashboard and forecast!
        <br>
        <a href="https://github.com/richardguarnieri/weather-dashboard">
            <strong>Explore Documentation</strong>
        </a>
        <br>
        <br>
        <a href="https://github.com/richardguarnieri/weather-dashboard">View Demo</a>
        ·
        <a href="https://github.com/richardguarnieri/weather-dashboard/issues">Report Bug / Request Feature</a>
    </div>
</div>
<br>


<!-- Table of Contents -->
## Table of Contents

* [The Project](#the-project)
    * [Technology Stack](#technology-stack)
* [How to Use](#how-to-use)
    * [Prerequisites](#prerequisites)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#handshake-contact)
* [Miscellaneous](#miscellaneous)
    * [User Story](#user-story)
    * [Pseudocode](#pseudocode)
<br>


<!-- The Project -->
## The Project

[![Application Image][application-image]][application-url]

In this deployed responsive application you will find a simple weather dashboard that allows the user to use the OpenWeather APIs to retrieve weather data for cities of their choice.

The application runs in the browser and feature dynamically updated HTML and Tailwind CSS powered by **native** JavaScript.

<p align="right"> - <a href="#home">Return to Home</a></p>

### Technology Stack

* [HTML](https://html.spec.whatwg.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [JavaScript](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- How to Use -->
## How to Use

This application shows a weather dashboard that displays weather information such as temperature, wind speed, humidity and UV index of cities of the user's choice.

The application contains an input area allowing users to enter the name of the city of their choice. As soon as the "Search" button is clicked, the weather information will populate the rest of the dashboard.

Each time a search is made, its value is saved in the local storage. The application will keep track of the search history and create additional search buttons allowing users to quickly extract weather information from previously searched cities.

As the data is saved on the local storage, it remains there throughout sessions or until user clears the data.

_For more examples, please refer to the [Documentation][documentation-url]._

<p align="right"> - <a href="#home">Return to Home</a></p>

### Prerequisites

Only a web brower is required to run the application.

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- Contribuiting -->
## Contributing

Contributions are much welcomed! If you have suggestions to make this application better, please fork the repo and create a pull request. 

You can also open an issue [here][github-issues-url] and tag it with the **"enhancement"** label.

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- License -->
## License

This project is licensed under the terms of the MIT license. 

See `LICENSE` for more information.

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- Contact -->
## Contact

Richard Guarnieri: richard.gm@outlook.com · LinkedIn: [rguarnieri][linkedin-url] · Twitter: [@ric_guarnieri][twitter-url]

Application URL: [https://richardguarnieri.github.io/weather-dashboard/][application-url]

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- Miscellaneous -->
## Miscellaneous
### User Story
```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```
### Acceptance Criteria
```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- References, Links and Images -->
<!-- Badges / Shields Styles -->
[github-contributors-shield]: https://img.shields.io/github/contributors/richardguarnieri/weather-dashboard?style=for-the-badge
[github-forks-shield]: https://img.shields.io/github/forks/richardguarnieri/weather-dashboard?style=for-the-badge
[github-stars-shield]: https://img.shields.io/github/stars/richardguarnieri/weather-dashboard?style=for-the-badge
[github-issues-shield]: https://img.shields.io/github/issues/richardguarnieri/weather-dashboard?style=for-the-badge
[github-license-shield]: https://img.shields.io/github/license/richardguarnieri/weather-dashboard?style=for-the-badge
[github-last-commit-shield]: https://img.shields.io/github/last-commit/richardguarnieri/weather-dashboard?style=for-the-badge
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555

<!-- Badges / Shields URL -->
[github-contributors-url]: https://github.com/richardguarnieri/weather-dashboard/graphs/contributors
[github-forks-url]: https://github.com/richardguarnieri/weather-dashboard/network/members
[github-stars-url]: https://github.com/richardguarnieri/weather-dashboard/stargazers
[github-issues-url]: https://github.com/richardguarnieri/weather-dashboard/issues
[github-license-url]: https://github.com/richardguarnieri/weather-dashboard/blob/main/LICENSE
[linkedin-url]: https://linkedin.com/in/rguarnieri

<!-- Non Badge / Shield Reference Links -->
[documentation-url]: https://github.com/richardguarnieri/weather-dashboard
[twitter-url]: https://twitter.com/ric_guarnieri