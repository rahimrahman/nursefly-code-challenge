NurseFly Coding Challenge:
=========================

Your Mission
------------

Welcome, developer! Your mission, should you choose to accept it, is to carve out 2 hours and create a single page app using React and the Google books API.

> **Hey, this is important!** We hope you can spend about two hours on this project. If you can finish faster -- great! If not, limit yourself and don't spend much longer than 2 hours MAX.

Your Tasks
--------

We want to create an extremely simplified GoodReads! 
In other words, users should be able to:
1. search for books using titles, authors, or keywords
2. see those search results appear in "cards" with some basic book information (title, author, thumbnail of the cover if available)
3. add / remove books to a list of user favorites (stored locally in a redux store, NOT in the google api!)
4. view the list of favorites

Tips
----

- Do not worry about setting up user auth. We are assuming that was handled already. Assume you are logged in as a registered user.
- This project assumes you have familiarity with React, javascript, and some common libraries.
- We have provided a skeleton project to get you up and running fast. We encourage you to use it, as it is set up similarly to our projects and uses many of the same libraries, but if you would rather, free to "roll your own" solution if you're not comfortable with these libraries.
- Be creative with this. We want to see a functional site that uses the api. When in doubt, make an executive decision. Functionality is more important than the look and feel. If you finish early, feel free to polish it up.
- Feel free to reach out to your interviewer with questions.

To get up and running:
----------------------

1. clone the repo into a new project
2. make sure you have `yarn` installed
3. run `yarn` to download dependencies (a brief summary of the libraries used is listed below these instructions)
4. further commands for running the app are listed below
5. get google books api keys from interviewer.


A brief overview of the libraries that are included in this app:
- axios: makes http calls
- prettier: formats code consistently
- react-router-dom: router for navigating urls
- redux: state management
- redux-logger: debugging tool that displays state changes in your browser
- redux-thunk: allows you to make dispatch asynchronous actions to redux store

Google Books API is use is described here:
https://developers.google.com/books/docs/v1/getting_started


## Show me what you got!
![Show me what you got!](src/assets/show-me-what-you-got.gif "Show me what you got!")

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
