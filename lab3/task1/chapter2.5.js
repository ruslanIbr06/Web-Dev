let name = "Ilya";

alert( `hello ${1}` ); // Output: "hello 1" - ${1} replaces with number 1

alert( `hello ${"name"}` ); // Output: "hello name" - ${"name"} is a string literal, not a variable

alert( `hello ${name}` ); // Output: "hello Ilya" - ${name} replaces with value of variable name
