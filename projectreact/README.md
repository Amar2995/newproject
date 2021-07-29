# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



===========================================================

React Fiber -> Fiber was rewrite of React's rendering algorithm that was sort of magical in its execution. It was full rewrite of React's internals that changed barely anything about public API. It was a way of making React more modern and performant without affecting its users.

React Hooks -> It's a new way adding and sharing stateful logic accross components.

Suspense -> A way to optimize asynchronous rendering with React.
===========================================================

What is React ? 
React is A Javascript library for building user interfaces

The ReactJS library is useful for handling the relationship between Views, State and Changes in state.

Views are what the user sees rendered in the browser.
State refers to the data stored by the different views that typically rely on who the user is or what the user is doing. For example, When user sign into a websites it may show user's profile (view) with user's name (state). 

The state data may change user to user but the view remains the same.

Views are created inside of components. There are two types of component: class and function.

Props -> We can pass data or function down into components through props.
===========================================================
JSX ->
    JSX looks like an HTML templating language but is more powerful. JSX can embed data into a view using curly brackets. It looks very similar to HTML but has many differences. A few are:

     * passing custom props as attribute on an element tag.
     * Instead of assigning CSS classes with class=, 
       JSX  uses className=. Camel casing is used for 
       event listners as well (i.e. onClick, onHover).
     * JSX tags can be self-closing <div className="hi" />

Side Effects ->
    Side effects occure when a function goes outside of its scope or it is affected by something outside of the function body. Making an HTTP request and saving the result to the components state is a side effect.
===========================================================

LifeCycle Methods -> 
In React, components have methods that are executed during the different phases of the components. These methods are called Lifecycle methods.

It takes practice to figure out where and how certain lifecycle methods should be used.
Regardless, the most important for HTTPS requests is componentDidMount with class components and useEffect with functional components.