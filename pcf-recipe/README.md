# PCF Recipe Exercise

Welcome to the PCF Recipe exercise! This exercise is to write a small console application. There is no need to
demonstrate web server behaviour, db connectivity etc here. Feel free to use either JavaScript or TypeScript,
with appropriate entries in the package.json.

You'll need to provide suitable tests to demo your application, using your choice of test framework (if any!),
and handle any errors that crop up.

## Task Spec

You are to use the RecipePuppy API (http://www.recipepuppy.com) to create a node.js console application that takes
a list of ingredients, and displays 20 recipes containing a thumbnail URL.

You will need to output a list to the console displaying the name, recipe URL, and the thumbnail URL. Each recipe
displayed must have all 3 pieces of data, and you must display 20 recipes. At the end of the results, a list of all
ingredients in the displayed recipes needs to be shown. There should be no duplicates.

For example, when given the command `node example.js cheese milk salt`, a list of 20 recipes containing the "cheese",
"milk" and "salt" ingredients should be shown, with a full list of all ingredients mentioned at the bottom.

Don't spend too much time on creating the output layout as that won't be assessed. Make sure your code is tested,
clean and maintainable. It would be beneficial if you use git to show how and what you commit as you go along, however
please do not publicly post anything (commit but don't push anywhere).

There's no provided linting, however a prettier config has been supplied.

Send us the finished code, zipped up with everything you used (do not include node_modules);

## Expected Results

  - A console application that retrieves data as specced above from the recipepuppy API
  - Suitable tests that demonstrate your application
  - Relevant error handling

## Time Management

You shouldn't spend more than 2-3 hours on this exercise. If you aren't finished during that time, please commit the 
latest version of your work, along with a short note explaining how far you got and what your next steps would be.