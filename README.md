### Social Media Web app

## Getting Started

First, Clone the source files:
```bash
git clone https://github.com/AhmedElsayed200/social-media-app.git
```
Second, Install dependencies:
```bash
npm install
or
yarn install
```
Finally, Run the development server:
```bash
npm run dev
or
yarn run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
- [http://localhost:3000](http://localhost:3000) and [http://localhost:3000/posts](http://localhost:3000/posts) to view all posts.
- [http://localhost:3000/favorite-posts](http://localhost:3000/favorite-posts) to view only favorite posts.

## Documentation Highlights
- **Technology Stack**: The app is developed using Next.js framework and styled with SASS.
- **Code Quality**: ESLint and Prettier are set up to maintain consistent code quality and formatting standards.
- **Data Mocking**: Since no suitable APIs were available for testing, I mocked the data to meet the project's requirements.
- **Project Structure**: The project directory consists of the `public` folder containing images and SCSS files, and the `src` folder containing pages, components, and the fake data posts.
- **Persistent Data**: Local storage is utilized to ensure favorite posts remain saved even after refreshing or restarting the server.
- **Design Considerations**: While the design of the application is simple and not overly fancy, it is responsive and compatible with various screen sizes. The focus was on meeting the requirements of the task rather than elaborate visual aesthetics.
- **SOLID Principles**: The development process strictly adheres to the SOLID principles, ensuring code maintainability, extensibility, and overall software design quality.