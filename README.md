# API Testing Challenges

Clone this repository, then run `npm install` to install all necessary packages.

Complete all TODOs in `src/routes/quote.js` and `src/test/quote.js`. Then, run your tests to ensure that they pass.

Submit your code using [Gradescope](https://gradescope.com).

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