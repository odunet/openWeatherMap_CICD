# Weather Widget Project

This is a mini weather application built with **ReactJS**. The weather data was sourced from Open Weather API, see link here, [Link to API Reference Page](https://openweathermap.org/appid)
 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Installation
* Clone repository (main branch)
* Run command to install dependencies
  ```
    npm install
  ```
* Create a .env file in the root directory **See image below as sample**
  ```
    touch .env
  ```
  ![Location of .env](./public/envHint.JPG
  )
* Store a Token variable in .env file. (Ensure you use variable name 'REACT_APP_TOKEN')
  ```
    REACT_APP_TOKEN=
  ```
  * Run application locally. If application was previously running stop and start again, to ensure environment variable is discoverable
  ```
    npm start
  ```
* Run test file created for some of the components
  ```
    npm test
  ```
* Build application for deployment to production
  ```
    npm run build
  ```

## Expected View
[Good functioning application](./public/horizontalView.JPG)
[Good functioning application](./public/verticalView.JPG)

## Troubleshoot Hints
* If the loader image continuously rotates without rotates stopping *(see below)*. This is a result of a network error. The error will be logged in the browser console. The suspected culprit will be a wrong token. Check the token value provided and try again.
[Bad functioning application](./public/token_error.JPG)

## Project Tree

```
weatherwidget
├─ .env
├─ .gitignore
├─ DescriptionfoSolution.md
├─ README.md
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  └─ robots.txt
└─ src
   ├─ App.css
   ├─ App.js
   ├─ App.stlyle.js
   ├─ actions
   │  └─ index.js
   ├─ assets
   │  └─ images
   │     ├─ horizontalView.JPG
   │     ├─ loader.gif
   │     ├─ token_error.JPG
   │     └─ verticalView.JPG
   ├─ components
   │  ├─ control
   │  │  ├─ Control.js
   │  │  ├─ Control.style.js
   │  │  ├─ index.js
   │  │  ├─ temperature
   │  │  │  ├─ Temperature.js
   │  │  │  ├─ Temperature.style.js
   │  │  │  ├─ Temperature.test.js
   │  │  │  └─ index.js
   │  │  ├─ title
   │  │  │  ├─ Title.js
   │  │  │  ├─ Title.style.js
   │  │  │  ├─ Title.test.js
   │  │  │  └─ index.js
   │  │  └─ wind
   │  │     ├─ Wind.js
   │  │     ├─ Wind.style.js
   │  │     ├─ Wind.test.js
   │  │     └─ index.js
   │  └─ display
   │     ├─ Display.js
   │     ├─ Display.style.js
   │     ├─ Display.test.js
   │     └─ index.js
   ├─ helper
   │  └─ windSpeedFormater.js
   ├─ index.js
   ├─ reducers
   │  └─ index.js
   ├─ reportWebVitals.js
   ├─ services
   │  └─ api
   │     └─ weatherMap.js
   ├─ setupTests.js
   ├─ shared
   │  └─ styledComponents
   │     └─ index.js
   ├─ store
   │  └─ index.js
   └─ types
      └─ index.js

```

## Dependencies
* Node 14.16.1
*See package.json in folder root directly for project npm dependecies*

### Available Scripts
* Start development server locally: `npm start`
* Build application package: `npm run build`
* Run tests: `npm test`
```

## Miscellaneous 
Kindly see brief project description document in the root folder of this repository *DescriptionfoSolution*