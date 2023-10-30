### React Notes App 📝
A simple and intuitive notes-taking application built with React and Express.js, powered by Prisma for database interactions.

## Made with freecodecamp tutorial
https://www.freecodecamp.org/news/full-stack-project-tutorial-create-a-notes-app-using-react-and-node-js/

## Key Learnings

### React Basics:
- **Components**: The building blocks of a React application. They're reusable, self-contained units that allow for modularized development, making the codebase more maintainable and testable. Through components, complex user interfaces are broken down into smaller, manageable pieces.
  
- **Hooks**: A revolutionary feature in React that allows functional components to harness features previously exclusive to class components. With hooks, I managed state (`useState`), lifecycle events (`useEffect`), and more without needing class-based logic.
  
- **Props**: Short for "properties," they provide a way to pass data from parent to child components. With props, React promotes a unidirectional data flow, enhancing the predictability and consistency of the application.

### Express.js with Prisma:
- **CRUD Operations**: With Prisma as an ORM, I was able to seamlessly perform Create, Read, Update, and Delete operations on the database. It abstracts complex database queries, making data handling more intuitive and efficient.

- **Middleware**: In Express.js, middleware functions are units that have access to request and response objects, and the next middleware function in the application’s request-response cycle. They're pivotal in error handling, request parsing, setting headers, and more.

- **Error Handling**: Building resilient applications requires foreseeing and managing errors. Through Express middleware and Prisma's error handling, I learned to anticipate, catch, and manage errors, ensuring a graceful degradation of the application in unexpected scenarios.

### Full-Stack Integration:
- **Frontend-Backend Connection**: Establishing a bridge between the frontend and backend is crucial for any full-stack app. Through this app, I've gained experience in setting up API endpoints in Express and calling them from the React frontend, achieving a seamless data flow.

- **State Management**: As applications scale, managing state becomes complex. I delved into local component state management in React, understanding how state changes trigger re-renders and how to update state efficiently to build responsive UIs.
