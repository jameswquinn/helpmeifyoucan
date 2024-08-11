# Preact Webpack Jest Starter Pack

This is a comprehensive starter pack for Preact applications, featuring Webpack for bundling, Jest for testing, and additional configurations for CodeSandbox.io development and Vercel deployment. It includes a sample app with a responsive image, "Hello World" message, and click counter.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fjameswquinn%2Fpreact-webpack-jest-starter-pack)

## Features

- Preact for efficient rendering
- Webpack for bundling and build optimization
- Jest for unit testing
- GitHub Actions for CI/CD
- Vercel for deployment
- Responsive image loading
- One-click deployment with Vercel Deploy Button
- Sample app with "Hello World" message and click counter
- CodeSandbox.io development support

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.x or later)
- npm (v6.x or later)

## Installation

To install the project dependencies, run:

```bash
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

### `npm run start:codesandbox`

Runs the app in development mode, configured for CodeSandbox.io.

### `npm run build`

Builds the app for production to the `dist` folder.

### `npm test`

Launches the test runner.

### `npm run test:watch`

Launches the test runner in the interactive watch mode.

### `npm run test:coverage`

Generates a coverage report.

## Development on CodeSandbox.io

To develop this project on CodeSandbox.io:

1. Import the project into CodeSandbox.io.
2. In the terminal, run `npm run start:codesandbox`.
3. The app will be available in the preview browser within CodeSandbox.io.

## Project Structure

```
preact-webpack-jest-starter-pack/
├── public/
│   └── responsive-image.png
├── src/
│   ├── components/
│   │   ├── App.js
│   │   └── HelloWorld.js
│   ├── styles/
│   │   └── index.css
│   ├── __tests__/
│   │   └── HelloWorld.test.js
│   ├── index.js
│   └── index.html
├── .github/
│   └── workflows/
│       └── ci.yml
├── __mocks__/
│   └── fileMock.js
├── .babelrc
├── .browserslistrc
├── webpack.config.js
├── postcss.config.js
├── jest.config.js
├── package.json
└── vercel.json
```

## Deployment

### Option 1: One-Click Deployment

Click the "Deploy with Vercel" button at the top of this README to deploy your own copy of the app to Vercel.

### Option 2: Manual Deployment

Follow these steps for manual deployment:

1. Push your code to a GitHub repository.
2. Sign up for a Vercel account if you haven't already.
3. In the Vercel dashboard, click "New Project" and import your GitHub repository.
4. Vercel should automatically detect the project settings. If not, manually set:
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click "Deploy"

## Contributing

Contributions to this project are welcome. Please ensure your pull requests adhere to the following guidelines:

1. Fork the repository.
2. Create a new branch for each feature or improvement.
3. Send a pull request from each feature branch to the main branch.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

If you want to contact the maintainer, please open an issue in this repository.
