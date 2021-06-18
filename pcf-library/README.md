# PCF Library Exercise

Welcome to the PCF dummy library API! This is a scaffold based on an existing API project. The model is a very
naive implementation of a Library. Each User is given an account. Books are tracked against Locations, and can
be checked out to a User. The API is in an early development state, and only Users & Locations currently exist,
along with a partial implementation of the desired behaviour.

You will need to perform the tasks listed below.

The initial focus is to get the tests running properly and implement some missing behaviour. Once that's done,
a new model will need to be created for the Books. You don't need to add any routes or behaviour for the Book,
just the model and types.

## Project Structure

All of the code is in the `src` folder, and is written in TypeScript. The `lib` folder contains helper scripts,
types etc. The `middleware` folder holds any express middlewares. The `routes` folder is the meat of the app, and
contains all of the models, routes & tests for the routes. The `tests` folder contains test setup scripts & any
tests that aren't route-specific.

## Tasks

  - Implement the users/create route (see the create.test.ts for expected behaviour)
  - Fill in missing tests for users/authenticate, locations/create and locations/update
  - Add a default Location to the database seeding script
  - Create a model describing a Book. No behaviour implementation is needed. A Book should have the following
    - Title, Author and ISBN (all strings)
    - Checked-out flag (boolean)
    - a referenced Location
    - a referenced User (if checked out)
  - Create the relevant Typescript interfaces for a Book
  - Add a default Book to the database seeding script

## Expected Results

  - The users/create route works according to the spec
  - All tests are green & well implemented
  - A Book model exists according to the spec
  - The db is seeded with a User, Location & Book
  - All code is properly formatted & linted

## Time Management

You shouldn't spend more than 3-4 hours on this exercise. If you aren't finished during that time, please commit the 
latest version of your work, along with a short note explaining how far you got and what your next steps would be.