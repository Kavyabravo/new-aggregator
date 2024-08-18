# Node.js Express API with User Authentication and News Preferences

This project is a RESTful API built with Node.js and Express.js, implementing user registration and login using bcrypt for password hashing and JWT for token-based authentication. The API allows users to manage their news preferences and fetch news articles based on these preferences.

## Features

- **User Registration**: Securely register a new user with bcrypt-hashed passwords.
- **User Login**: Authenticate users and provide JWT tokens for session management.
- **Manage Preferences**: Users can retrieve and update their news preferences.
- **Fetch News**: Fetch news articles based on the logged-in user's preferences using external news APIs.
- **In-Memory Data Store**: User data and preferences are stored in an in-memory array for simplicity.
- **Validation & Error Handling**: Input validation for user registration and preference updates, with proper error handling.

## Postman Collection
[News Aggregator APIs](https://documenter.getpostman.com/view/10389495/2sA3s9CTmX)

## Setup and Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ````

2. **Install dependencies**:
   ```bash
   npm install
   ```
   
3. **add.env**:
   ```env
   JWT_SECRET=your_jwt_secret
   ```
   
5. **Run the server**:
   ```bash
   npm run start
   ```
   
## Endpoints

### 1. **Register User**

**Endpoint**: `POST users/signup`

**Payload**:
```json
{
  "name": "Clark Kent",
  "email": "clark@superman.com",
  "password": "Krypt()n8",
  "preferences": ["movies", "comics"]
}
```

**Endpoint**: `POST users/login`

**Payload**:
```json
{
  "email": "clark@superman.com",
  "password": "Krypt()n8"
}
```

**Endpoint**: `GET users/preferences`

**Headers**:
```plaintext
Authorization: Bearer <your_jwt_token>
```

**Endpoint**: `GET users/preferences`

**Headers**:
```plaintext
Authorization: Bearer <your_jwt_token>
```

**Payload**:
```json
{
  "preferences": ["movies", "comics", "games"]
}
```

**Endpoint**: `GET /news`

**Headers**:
```plaintext
Authorization: Bearer <your_jwt_token>
```

