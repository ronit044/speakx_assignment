# Project Setup Guide

## Special Note

# 🚨 IMPORTANT: Fully Functional gRPC Server 🚨

I have a complete and fully functional gRPC server, which I was supposed to use for this project. However, due to the lack of community support for Windows, I was unable to resolve the `protoc` dependencies required to generate client stubs for React.

That said, I have implemented a fully functional **proxy** using **Docker** and **Envoy** to connect the backend services. For development and testing, we can ignore the gRPC implementation in favor of the current REST API setup.

---

## Project Structure

This project consists of three main folders:

1. **frontend**: Contains the frontend React app.
2. **backend (Node + Express)**: Contains the backend REST API using Node.js and Express.
3. **backend (Node + gRPC)**: Contains a fully functional gRPC server (which is not used in the current setup for Windows users).

## Prerequisites

- **Node.js** (v14 or later)
- **npm** (Node package manager)

## Steps to Start the Project

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd <project-directory>
```
2. Install Dependencies
For both the frontend and backend folders, you need to install dependencies. This is done using npm install.

Frontend (React):
```bash
cd frontend
npm install
Backend (Node + Express):
```
```bash

cd backend
npm install
```

3. Environment Setup
For development purposes, an .env file is included in the project for both the frontend and backend services, so you do not need to use your own environment variables.

You can skip setting up your own .env for development and testing.
Important: Ignore this .env file in production. When deploying to production, you must use your own environment variables to maintain security and scalability.

4. Starting the Project
Start the Frontend (React)
Navigate to the frontend folder and run the following command:
```bash
cd frontend
npm run dev
```
This will start the development server at http://localhost:3000 (by default).
Start the Backend (Node + Express)
Navigate to the backend folder and run the following command:
```bash
cd backend
node app.js
```
The backend server will be running on http://localhost:5000 (by default).

5. Access the Application
Once both the frontend and backend are running, you can access the application in your browser:

Frontend: http://localhost:5173
Backend: http://localhost:5000
6. Additional Notes
For Windows users: The Node + gRPC server setup may not work due to the unresolved protoc dependencies. You can choose to ignore it unless you're on a system where protoc dependencies are properly configured.
The REST API is fully functional and will work as expected without needing to interact with the gRPC service. The proxy setup is in place to handle backend communication.