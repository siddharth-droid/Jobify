# Jobify

#### Track Your Job Search

Project in Action - [Jobify](https://www.jobify.live/)

#### Run The App Locally

- npm run install-dependencies
- rename .env.temp to .env
- setup values for - MONGO_URL, JWT_SECRET, JWT_LIFETIME
- visit url http://localhost:3000/

#### Setup React App

- Create client folder
- Open terminal, cd terminal
- npx create-react-app .
- npm start

#### Boilerplate cleaning

- in src remove
- App.css
- App.test.js
- logo.svg
- reportWebVitals.js
- setupTests.js
- fix App.js and index.js

#### Title and favicon

- navigate to public/index.html
- look for title in head element
- changed it to jobify
- in src/images
- take the favicon.ico and replace with public/favicon.ico
- can create your own at [https://favicon.io]

#### Normalize.css and Global Styles

- CSS in JS (styled-components)
- saves times on the setup
- less lines of css
- speeds up the development
- normalize.css
- It is a small CSS file that provides cross-browser consistency in the default styling of HTML elements.
- [normalize docs](https://necolas.github.io/normalize.css/)
- npm install normalize.css
- import 'normalize.css' in index.js
- place it before 'index.css'
- because in our global styles we will be relying on the normalized one
- for global styles we just want to replace the content of index.css
- drag, dropped, replaced index.css file from assets/css folder
- contains all basic css, can be used in any project

#### Styled Component

- npm install styled-components
- CSS in JS
- Styled components
- have logic and styles in same component
- no name collisions
