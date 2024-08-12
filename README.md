# OKRA

OKRA-FE-ASSESSMENT is a single web page designed to help users submit a simple contact form

### Prerequisites

- Node.js (version 20.8.1 and above)

### Steps

1. Clone the repository:
   ```
   git clone https://github.com/princeemeka965/okra-fe-assessment.git
   ```
2. Navigate to the project directory:
   ```
   cd project-name
   ```
3. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```
4. Start the development server:
   ```
   npm start
   ```
   or
   ```
   yarn start
   ```

The application will be accessible at `http://localhost:3000`.

### Building for Production

To build the project for production, run:

```
npm run build
```

### Project structure

- **public/**: Contains the static assets of the project.
- **src/**: Contains the source code of the application.
  - **components/**: Reusable React components like Input, Textarea, e.t.c.
  - **modules/**: Different sections of the single web page.
  - **context/**: State logic is defined using useContext hook.
  - **hooks/**: Custom validation hook for our form
  - **App.js**: The home page or first page.
  - **index.js**: Entry point of the application.
