# PCF OpenLibrary CLI Exercise

Welcome to the PCF Open Library CLI exercise! This exercise is to write a small console application. There is no need to
demonstrate web server behaviour, db connectivity etc here. Feel free to use either JavaScript or TypeScript,
with appropriate entries in the package.json.

You'll need to provide suitable tests to demo your application, using your choice of test framework (if any!),
and handle any errors that crop up.

This exercise is provided as an alternative to the `pcf-recipe` exercise.

## Task Spec

You are to use the Open Library API (https://openlibrary.org/developers/api) to create a node.js console application that 
takes a list of authors, and displays 20 books, along with a thumbnail URL for the books cover.

You will need to output a list to the console displaying the author name, book title, book URL, and the thumbnail URL. Each 
book displayed must have all 3 pieces of data, and you must display 20 recipes. At the end of the results, a list of all
authors in the displayed recipes needs to be shown. There should be no duplicates. Note that a book may have more than one
author, despite your search only including one of them.

For example, when given the command `node example.js pratchett`, a list of 20 books should be shown, along with a separate
line showing the authors `Terry Pratchett, Neil Gaiman, Martin Jarvis, Full Cast, Mark Heap, Peter Serafinowicz`.

You should only need to use the search & cover sections of the API to achieve the desired output.

Don't spend too much time on creating the output layout as that won't be assessed. Make sure your code is tested,
clean and maintainable..

There's no provided linting, however a prettier config has been supplied.

## Expected Results

  - A console application that retrieves data as specced above from the open library API
  - Suitable tests that demonstrate your application
  - Relevant error handling

## Time Management

You shouldn't spend more than 2-3 hours on this exercise. If you aren't finished during that time, please commit the 
latest version of your work, along with a short note explaining how far you got and what your next steps would be.