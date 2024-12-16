# WeekThree-NonShared

## Application Documentation

### Setup Instructions

To run this application, you need to configure a `.env` file in the root directory with the following secrets:

- `MY_SECRET_KEY`: The secret key for your application.
- `NODE_ENV`: The environment the app is running in (e.g., `development`, `production`).
- `DATABASE_URL`: The URL for your database.

#### Steps to Configure:

1. Clone the repository.
2. Create a `.env` file in the root directory with the following content:

   ```env
   MY_SECRET_KEY=your_secret_key_here
   NODE_ENV=production
   DATABASE_URL=your_database_url_here

3. Run the application with `node app.js`


## What Happens if .env is Missing?
If the `.env` file is missing or does not contain the required secrets, the application will fail and display the following error message:

`Error: Missing environment variables. Please provide a .env file.`


## Why Use a .env File?

The purpose of having a . (dot) at the beginning of the .env file is to mark it as a hidden file in UNIX-based systems. This is to prevent sensitive files like .env from being accidentally exposed or listed in the directory when performing common file operations, such as ls in the terminal. It helps keep sensitive configuration files secure and hidden from casual viewing.
