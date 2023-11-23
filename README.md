# MongoDB Database Application with Mongoose

## Contents

- [Description](#description)
- [Base URL](#base-url)
- [Endpoints](#endpoints)
- [Validations](#validations)
- [Webpage](#web-page)
- [Author](#author)

## Description

This program connects to Mongo DB using express with mongoose. A new database and collection were created for this project. The collection contains the dog breeds' ideal weights for both sex.

```sh
Database:   dog_breeds
Collection: dog_weights
```

To seed the database collection, postData.js was executed.

```js
node postData.js
```

<p>&nbsp</p>

## Base URL

The base URL is:

```js
http://localhost:3000/
```

![Landing page screenshot](/public/landing.png)
A template viewer was used as guide to users.

<p>&nbsp</p>

### Endpoints

```js
http://localhost:3000/dogs
```

Returns all dog breeds from the database collection. A template viewer was utilized to organize the data. Clicking one of the list will redirect to the next endpoint.

<p>&nbsp</p>

```js
http://localhost:3000/dogs/id
```

This will show the field values of a particular dog breed using the ID. From this page, users can either edit the document, which will trigger the PUT method, or delete the document which will trigger the DELETE method.

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

## Validation

Validations were included in the schema definition. Here is a sample schema in 'dogsSchema.js'.

```js
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
    maleWtKg: {
    type: String,
    required: true,
    match: /\d.*-\d.*/,
  }
```

## Web Page

### Base URL Screenshot

A template viewer was used to organize the database collection documents. There are links and buttons provided for a more intuitive user interface.
![Base URL screenshot](/public/webpage.png)

## Author

Christian Samson
