# MongoDB Database Application with Mongoose

## Contents

- [Description](#description)
- [Base URL](#base-url)
- [Endpoints](#endpoints)
- [Basic Operations](#basic-operations)
- [Demo](#demo)
  - [Example](#example)
  - [Response](#response)
- [Validations](#validations)
- [Webpage](#web-page)
- [Author](#author)

## Description

This program connects to Mongo DB using express with mongoose. A new database and collection were created for this project.

```sh
Database:   dog_breeds
Collection: dog_weights
```

## Base URL

The base URL for all API requests is:

```js
http://localhost:3000/
```

### Endpoints

```js
http://localhost:3000/dogs
```

Returns all dog breeds from the database collection. A template viewer was utilized to organize the data. Clicking one of the list will redirect to the next endpoint.

<p>&nbsp</p>

```js
http://localhost:3000/dogs/id
```

This will show the field values of a particular dog breed using the ID.

<p>&nbsp</p>

```js
http://localhost:3000/dogs/id/edit
```

This handles the PUT request method. It allows users to edit the field values.

<p>&nbsp</p>

```js
http://localhost:3000/dogs/new
```

This handles the POST request method. It allows users to create a new document.

## Demo

### Example

Request:

```sh
GET /http://localhost:3000/songs?limit-1
```

### Response

```json
{
  "song": [
    {
      "id": "015E7B62",
      "rank": 1,
      "title": "Blinding Lights",
      "releaseDate": "29 November 2019",
      "artist": "The Weeknd"
    }
  ]
}
```

## Web Page

### Base URL Screenshot

![Base URL screenshot](/public/webpage.png)

## Author

Christian Samson
