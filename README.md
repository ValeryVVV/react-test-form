# React react-test template

This project was created with
[Create React App](https://github.com/facebook/create-react-app). To get
acquainted and configure additional features
[refer to documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To start the project:
1. Install the dependency package: npm install
2. Project launch: npm start

## About Project 

This project was created from a layout (https://www.figma.com/file/p0oIJwZVrDwz6jcljSZWBb/React-test?type=design&node-id=15-424&mode=design&t=XwcJVEs1IzlfDJFo-0)

Task:
- You must set up the page shown here with the following conditions;
- City field - which values are obtained by calling the API;
- Attached API guide - GET_CITES;
- The user can choose from the list or type the first letters and the control will show him the appropriate options;
- An email field will only contain a valid email address;
- A phone field will only contain numbers in Israeli format;
- A 10-digit number starting with the digit 0;

Clarifications: 
- All fields are mandatory - if the user sends an empty field, we will show him the note: "This is a mandatory field";
- If one of the fields does not meet the requirement, the following message must be displayed: "The format is incorrect";
- The above form must be sent to the end point in the attached API guide  POST_FORM;
- After receiving the answer for the transmission of the form, the message displayed on the thank you page must be displayed;

### Preparing for coding

1. Make sure you have an LTS version of Node.js installed on your computer.
   [Download and install](https://nodejs.org/en/) if needed.
2. Install the project's base dependencies with the `npm install` command.
3. Start development mode by running the `npm start` command.
4. Go to [http://localhost:3000](http://localhost:3000) in your browser. This
   page will automatically reload after saving changes to the project files.

#### Routing

If your application uses the `react-router-dom` library for routing, you must
additionally configure the `<BrowserRouter>` component by passing the exact name
of your repository in the `basename` prop. Slashes at the beginning and end of
the line are required.

```jsx
<BrowserRouter basename="/your_repo_name/">
  <App />
</BrowserRouter>
```

