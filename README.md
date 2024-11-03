# Quizzly AI

Quizzly AI is an interactive web-based quiz application that allows users to test their knowledge with real-time feedback. The app fetches trivia questions from an external API and provides an engaging, dynamic quiz experience. It is built with React, styled with Tailwind CSS, and supports integration with Telegram WebApps for seamless use within the Telegram ecosystem.

## Features

- **Dynamic Question Generation**: Fetches questions from an external trivia API to offer a wide variety of quizzes.
- **Real-Time Feedback**: Provides immediate feedback after an answer is submitted, displaying whether the response was correct or incorrect.
- **Loading Progress Bar**: A progress bar is shown while questions are being fetched, indicating the loading state.
- **Rate Limiting Alerts**: Notifies users if they exceed the API's request limit, ensuring a user-friendly experience.
- **Responsive Design**: Built with Tailwind CSS for a modern and adaptable UI.
- **Interactive Buttons**: Utilizes Shadcn UI components for enhanced user interaction.
- **User Feedback Color Coding**: Displays correct answers in green and incorrect ones in red.
- **Telegram WebApp Integration**: The app is optimized for use within Telegram WebApps, making it easy for users to access the quiz through Telegram.
- **Deployment with Netlify**: The app is deployed using Netlify, with configuration managed through YAML and TOML files for streamlined builds and deployments.

## Installation and Usage

To run the Quizzly AI project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/kulembetov/quizzly-ai.git
   cd quizzly-ai
   ```

2. **Install dependencies**:
   Ensure Node.js and Yarn are installed, then run:

   ```bash
   yarn install
   ```

3. **Run the development server**:

   ```bash
   yarn dev
   ```

4. **Open the project**:
   Navigate to `http://localhost:5173` in your web browser to view the app.

## Deployment

The project is set up for deployment using Netlify, including:

- **Netlify configuration**: The deployment is configured using `netlify.toml` for custom build commands and redirects.
- **CI/CD integration**: Ensures automated deployments on each commit to the main branch.

## Technologies Used

- **React**: For building the user interface.
- **Zustand**: A state management library for managing the application state.
- **Tailwind CSS**: A utility-first CSS framework for responsive and modern styling.
- **Shadcn/UI**: Custom UI components for consistent design and behavior.
- **Axios**: For making HTTP requests to fetch trivia questions.
- **DOMPurify**: To sanitize user-generated content.
- **Lodash**: For utilities like debouncing function calls.
- **Netlify**: For hosting and deployment.

## Telegram WebApp Integration

### [Link to the Bot in Telegram (clickable)](https://t.me/quizzlyaibot)

Quizzly AI is optimized for use in Telegram WebApps:

- Users can easily start the quiz within Telegram for a seamless experience.
- The integration allows for easy sharing and access among Telegram users.

## Configuration Files

- **`netlify.toml`**: Custom build settings for Netlify.
- **`deploy.yaml`**: Ensures proper deployment and build pipeline setup.

## Contact

For feedback, feature requests, or questions, please contact:

- **Email**: [artur_kulembetov@outlook.com](mailto:artur_kulembetov@outlook.com)
- **GitHub**: [kulembetov](https://github.com/kulembetov)

Feel free to contribute to the project by opening pull requests or reporting issues on GitHub!
