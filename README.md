# ABB-Bid-application
This is a full-stack online auction application built using the MERN stack (MongoDB, Express, React, Node.js). The application is connected to a MongoDB Atlas database, which is hosted in the cloud. 
> ### **Note** : 
> Please email me on `pragya21offc@gmail.com` if you have any further queries or if you face issue in setting up the project on your local environment.

## In this application Users can :
- Sign up, 
- Log In/Log Out, 
- View auction items, 
- View Auction Item Details like description, Auction End Time, Maximum Bid Aount, Current Bid Amount etc.
- Place bids. 
- View Bid History

## Table of Contents
- Project Setup
- Environment Variables
- Running the Backend
- Running the Frontend
- Connecting to the MongoDB Atlas Database


# Project Setup

### Prerequisites
Before running the project, ensure that you have the following software installed on your machine:

  - Node.js (version 12 or higher): Download Node.js
  - Git: Download Git

### Cloning the Repository

 Clone the repository using the following command:

 ` git clone https://github.com/pragya-codes/ABB-Bid-application.git `

 Navigate into the project folder:

 `cd ABB-Bid-application`

### Environment Variables
This project requires environment variables for the backend to connect to the MongoDB Atlas database. You will need to create a `.env` file in the backend directory.
1. Create a `.env` File
In the backend folder, create a file named `.env` and include the following:
```
MONGODB_URI="mongodb+srv://<db_username>:<db_password>@abb.nn9tt.mongodb.net/?retryWrites=true&w=majority&appName=ABB"

PORT=5000

ACCESS_SECRET_TOKEN=your_jwt_secret_key
```
- Key Points:
   - MONGODB_URI: This is the connection string to MongoDB Atlas (the database you will use).
   - PORT: The port the backend server will run on (default is 5000).
   - ACCESS_SECRET_TOKEN: A secret key used for JSON Web Token authentication. You can generate any random string for this.

2. Provide the MongoDB Connection String
To connect to my database, I have already set up access. Here are the details:

Connection String: In the .env file you created, replace `<db-username>, <db-password>, and <database>` with the following values:

```
MONGODB_URI="mongodb+srv://<db_username>:<db_password>@abb.nn9tt.mongodb.net/?retryWrites=true&w=majority&appName=<database>"
```
- Username: `<db-username>` : interviewUser
- Password: `<db-password>` : interviewPassword123
- Database: `<database>` : ABB

This will connect you to my MongoDB Atlas database where I've seeded the initial auction data.

### Running the Backend
- Navigate to the backend directory: `cd BACKEND`
- Install the backend dependencies: `npm install`
- Start the backend server: `npm run dev`

The server will start on http://localhost:5000. You should see the message "Connected to MongoDB Atlas" in your terminal if the connection is successful.

### Running the Frontend
- Navigate to the frontend directory: `cd FRONTEND`
- Install the frontend dependencies: `npm install`
- Start the frontend server: `npm run dev`

The frontend will run on http://localhost:5137. The backend server and frontend server will communicate through this port.

### API End Points
- For Documentation and quick API Endpoint request checks, I have used REST Client VS Code Extension.
- Install the REST Client Extension. Below are details:
```
Name: REST Client
Id: humao.rest-client
Description: REST Client for Visual Studio Code
Version: 0.25.1
Publisher: Huachao Mao
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=humao.rest-client
```
- Below are the endpoints :

| Request Type | End Point | Description |
|-----------------|-----------------|-----------------|
| `POST`   | `/api/auth/register`   | Sign Up for new User   |
| `POST`    | `/api/auth/login `     | Login existing User   |
| `GET`    | `/api/auth/users`      | Fetches list of existing Users  |
| `GET`   | `/api/auction/ `  | GET all the auction items    |
| `POST`   | `/api/auction/create`   | Create New Auction items    |
| `GET`   | `/api/auction/:id ` | Fetches Auction item's details and Bid History  |
| `POST`   | `/api/auction/:auctionId/bid`  | User places Bid   |

- I have added the request.rest file in the Backend Folder. To Use this extension, please replace the `<enter your jwt token in plain text here...>`  comment with your ACCESS_SECRET_TOKEN that you created in `.env` file.

## Summary
- After installing all prequisities, Clone the project repository and navigate to the project folder.

- Create a `.env` file in the backend directory and add the necessary database connection details and other environment variables ike ACCESS_SECRET_TOKEN and PORT of your choice (default is 5000).

- Navigate to the `BACKEND` folder of my code, install dependencies, and start the backend server.

- Navigate to the `FRONTEND` folder of my code, install dependencies, and start the frontend server.

- Ensure the environment file contains the correct MongoDB connection string.

- Open a web browser and navigate to the application's URL to test its functionality.

- (Optional) Use the REST Client extension to check the API End Points.

> ### Thank You!

