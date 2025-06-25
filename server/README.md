# User Registration & Login API Documentation

## Endpoints

- `POST /api/users/register` — Register a new user
- `POST /api/users/login` — Login with email and password
- `GET /api/users/logout` — Logout the current user
- `GET /api/users/profile` — Get the authenticated user's profile

---

## Register

### Description

Registers a new user by accepting their first name, last name (optional), email, and password. Returns a JWT token and the created user object upon successful registration.

### Request Body

Send a JSON object in the following format:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

#### Field Requirements

- `fullname.firstname` (string, required): Minimum 3 characters.
- `fullname.lastname` (string, optional): Minimum 3 characters if provided.
- `email` (string, required): Must be a valid email address.
- `password` (string, required): Minimum 6 characters.

---

### Responses

#### 201 Created

- **Description:** Registration successful.
- **Body Example:**
  ```json
  {
    "token": "<jwt_token>",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "createdAt": "2024-06-25T12:00:00.000Z",
      "updatedAt": "2024-06-25T12:00:00.000Z"
    }
  }
  ```

#### 400 Bad Request

- **Description:** Validation failed (e.g., missing or invalid fields).
- **Body Example:**
  ```json
  {
    "errors": [
      {
        "msg": "First name must be at least 3 characters long",
        "param": "fullname.firstname",
        "location": "body"
      }
    ]
  }
  ```

#### 500 Internal Server Error

- **Description:** Unexpected server error.

---

### Example Request

```http
POST /api/users/register
Content-Type: application/json

{
  "fullname": {
    "firstname": "Alice",
    "lastname": "Smith"
  },
  "email": "alice.smith@example.com",
  "password": "securepassword"
}
```

---

## Login

### Description

Authenticates a user using their email and password. Returns a JWT token and the user object upon successful login.

### Request Body

Send a JSON object in the following format:

```json
{
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

#### Field Requirements

- `email` (string, required): Must be a valid email address.
- `password` (string, required): Minimum 6 characters.

---

### Responses

#### 200 OK

- **Description:** Login successful.
- **Body Example:**
  ```json
  {
    "token": "<jwt_token>",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "createdAt": "2024-06-25T12:00:00.000Z",
      "updatedAt": "2024-06-25T12:00:00.000Z"
    }
  }
  ```

#### 400 Bad Request

- **Description:** Validation failed (e.g., missing or invalid fields).
- **Body Example:**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      }
    ]
  }
  ```

#### 401 Unauthorized

- **Description:** Invalid email or password.
- **Body Example:**
  ```json
  {
    "message": "invalid email or password"
  }
  ```

#### 500 Internal Server Error

- **Description:** Unexpected server error.

---

### Example Request

```http
POST /api/users/login
Content-Type: application/json

{
  "email": "alice.smith@example.com",
  "password": "securepassword"
}
```

---

## Logout

### Description

Logs out the currently authenticated user by blacklisting their JWT token. Requires the `Authorization` header with a valid Bearer token.

### Request

- **Method:** `GET`
- **Endpoint:** `/api/users/logout`
- **Headers:**
  - `Authorization: Bearer <jwt_token>`

### Responses

#### 200 OK

- **Description:** Logout successful.
- **Body Example:**
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

#### 401 Unauthorized

- **Description:** No token provided, invalid token, or token is blacklisted.
- **Body Example:**
  ```json
  {
    "message": "Unauthorized - No token provided"
  }
  ```

#### 500 Internal Server Error

- **Description:** Unexpected server error.

---

### Example Request

```http
GET /api/users/logout
Authorization: Bearer <jwt_token>
```

---

## Profile

### Description

Returns the authenticated user's profile information. Requires the `Authorization` header with a valid Bearer token.

### Request

- **Method:** `GET`
- **Endpoint:** `/api/users/profile`
- **Headers:**
  - `Authorization: Bearer <jwt_token>`

### Responses

#### 200 OK

- **Description:** Returns the user's profile.
- **Body Example:**
  ```json
  {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "createdAt": "2024-06-25T12:00:00.000Z",
    "updatedAt": "2024-06-25T12:00:00.000Z"
  }
  ```

#### 401 Unauthorized

- **Description:** No token provided, invalid token, or token is blacklisted.
- **Body Example:**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

#### 500 Internal Server Error

- **Description:** Unexpected server error.

---

### Example Request

```http
GET /api/users/profile
Authorization: Bearer <jwt_token>
```