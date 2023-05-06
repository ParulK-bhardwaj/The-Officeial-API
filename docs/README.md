# The Officeial API

"The Officeial API" is a RESTful API that provides developers with access to an extensive library of characters and iconic quotes from the hit television series, "The Office." This API is a valuable resource for fans and enthusiasts who want to integrate the essence of the show into their applications, websites, or creative projects.

With "The Officeial API," developers can retrieve detailed profiles of the beloved characters that populate the series, including the quirky but endearing employees of Dunder Mifflin Paper Company, such as Michael Scott, Jim Halpert, and Dwight Schrute. Each character profile includes relevant details about the character, such as their job title, personality traits, and a memorable moment from the show.

In addition, the API offers a vast collection of quotes from the show, capturing the witty humor, awkward moments, and heartfelt conversations that make "The Office" so memorable. Developers can access quotes by specific characters, providing an abundance of material to add a touch of the show's charm to their applications or creative endeavors.

The "Officeial API" provides a user-friendly interface, with various endpoints to retrieve character profiles, search for specific quotes, or discover quotes based on character. The API documentation includes clear guidelines on how to make API calls, including necessary parameters and response formats, enabling developers to easily integrate the characters and quotes into their projects.

Whether you're creating a fan site, developing a game, or simply seeking to engage with "The Office" universe, the "Officeial API" is the perfect resource to bring the characters and quotes to life in your application, allowing users to immerse themselves in the world of Dunder Mifflin and its employees.

## Table of Contents

- [Features](#features)
- [API Documentation](#api-documentation)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)


## Features

- Retrieve quotes from "The Office"
- Authenticated users can perform CRUD operations (Create, Read, Update, and Destroy) on characters and their quotes
- Comprehensive API documentation
- Developed using a Test Driven Development Approach

## API Documentation

### Getting Started

These instructions will help you set up and run The Officeial API Calls on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v14.x or higher)
- npm (v6.x or higher)
- MongoDB
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ParulK-bhardwaj/The-Officeial-API.git
   ```

2. Install dependencies:
    ``` npm install ```

3. Create a `.env` file in the project root and add your MongoDB connection string: 

    ```MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING```

4. Run the development server:
    ```npm start```

### Usage

The API provides the following endpoints for retrieving characters and quotes:

### Authentication

#### Sign Up
- Endpoint: /auth/sign-up
- Method: POST
- Description: Creates a new user account.

Request Parameters
```json
{
  "username": "The username for the new account. Must be unique.",
  "password": "The password for the new account."
}
```

#### Login
- Endpoint: /auth/login
- Method: POST
- Description: Authenticates a user and generates an authentication token.

Request Parameters

```json
{
  "username": "The username to authenticate.",
  "password": "The password to authenticate."
}

```

#### Logout
- Endpoint: /auth/logout
- Method: GET
- Description: Logs out the currently authenticated user and invalidates the authentication token.

#### Accessing Protected Routes
To access protected routes, you need to include the nToken cookie in your requests. This cookie contains the authentication token generated during login.

Make sure to include the nToken cookie in the headers of each request that requires authentication. For example:

```
GET /protected-route
Cookie: nToken=<authentication_token>
```

If the authentication token is valid, you will be granted access to the protected route. Otherwise, you will receive a 401 Unauthorized response.

Please note that the authentication token has an expiration time. If the token expires, you will need to re-authenticate by logging in again.

### Quotes

- `GET /quotes`: Get all quotes.
- `GET /quotes/{quoteId}`: Get a specific quote by ID.
- `POST /quotes`: Add a new quote.
- `PUT /quotes/{quoteId}`: Update an existing quote.
- `DELETE /quotes/{quoteId}`: Delete a quote.

#### Add a new quote

To add a new quote, make a `POST` request to `/quotes` with the following request body:

```json
{
  "content": "The quote goes here",
  "characterID": "The ID of the associated character"
}

```

Ensure that you provide the required fields in the request body: content and characterID. Upon successful creation, the API will return the newly created quote.

#### Update a quote

To update an existing quote, make a PUT request to /quotes/{quoteId} with the following request body:

```json
{
  "content": "The updated quote goes here",
}
```

Provide the updated values for the fields you want to change: content. The API will return the updated quote upon successful update.

### Characters

- `GET /characters`: Get all characters.
- `GET /characters/{characterId}`: Get a specific character by ID.
- `POST /characters`: Add a new character.
- `PUT /characters/{characterId}`: Update an existing character.
- `DELETE /characters/{characterId}`: Delete a character.

#### Add a new character

To add a new character, make a POST request to /characters with the following request body:

```json
{
    "charactername": "The character name goes here",
    "jobTitle": "The job title of the character.",
    "description": "The description of the character.",
    "amemorablemoment": "The moment of the character.",
}
```

Ensure that you provide the required fields in the request body: charactername (required), jobtitle, description, amemorablemoment. The API will return the newly created character.

#### Update an existing character

To update an existing character, make a PUT request to /characters/{characterId} with the following request body:

```json
{
    "charactername": "The updated name of the character.",
    "jobTitle": "The updated job title of the character.",
    "description": "The updated description of the character.",
    "amemorablemoment": "The updated moment of the character.",
}
```

#### Delete an existing character
To delete an existing character, make a DELETE request to /characters/{characterId}. The API will delete the character from the database and return a success message upon successful deletion.
```json
{
  "charactername": "The character to be deleted name goes here"
}
```


Clone this repository, then run `npm install` to install all necessary packages.

## Endpoints:

#### Quotes (TODOs)

| Route | Method | Description |
| ----------- | ----------- | ----------- |
|http://localhost:3000/quotes |GET | Gets all quotess |
|http://localhost:3000/quotes/{quoteId} |GET | Get one quote by id|
|http://localhost:3000/quotes | POST | add a new quote |
|http://localhost:3000/quotes/{quoteId}| PUT | update an exisiting quote|
|http://localhost:3000/quotes/{quoteId} | DELETE | delete a quote |

{quoteId} = Route parameter = `:quoteId`
#### Characters

| Route | Method  | Description |
| ----------- | ----------- | ----------- |
|http://localhost:3000/characters/ | GET | get all characters |
|http://localhost:3000/characters/{characterId} |GET | Get one character by id|
|http://localhost:3000/characters | POST | add a new character to the database |
|http://localhost:3000/characters/{characterId}| PUT | update an exisiting character|
|http://localhost:3000/characters/{characterId} | DELETE | delete a character |

{characterId} = Route parameter = `:characterId`

### Conclusion
The Officeial API is a valuable resource for developers who want to incorporate characters and quotes from the hit television series "The Office" into their applications or creative projects. With a comprehensive documentation and user-friendly interface, developers can easily integrate the essence of the show into their projects, bringing the world of Dunder Mifflin and its employees to life.