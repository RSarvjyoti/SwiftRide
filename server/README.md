# User Registration API Documentation

## Endpoint

`POST /api/users/register`

---

## Description

Registers a new user by accepting their first name, last name (optional), email, and password. Returns a JWT token and the created user object upon successful registration.

---

## Request Body

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

### Field Requirements

- `fullname.firstname` (string, required): Minimum 3 characters.
- `fullname.lastname` (string, optional): Minimum 3 characters if provided.
- `email` (string, required): Must be a valid email address.
- `password` (string, required): Minimum 6 characters.

---

## Responses

### 201 Created

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

### 400 Bad Request

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

### 500 Internal Server Error

- **Description:** Unexpected server error.

---

## Example Request

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