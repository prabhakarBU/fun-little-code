# fun-little-code
Here I am going to write useless yet fun intended code programs

```
Explanation:
Ingredients, Amounts, and Wait Times: The arrays ingredients, amounts, and waitTimes store the respective information about the tea-making process.
Delay Function: The delay function is a helper function to create a pause in the execution using setTimeout.
makeTea Function: This function simulates the process of making tea. It iterates over the ingredients, logs the addition of each ingredient, waits for the specified time, and then proceeds to the next step.
Asynchronous Execution: await is used to ensure each step completes before moving on to the next one, creating a realistic simulation.
Running the Program
To run this program:

Open your terminal or command prompt.
Navigate to the directory where the file is saved.
Run the program using node make-some-tea.js.

Some errors I encountere:

- No inputs were found in config file 'c:/prabhakar/fun-little-code/tsconfig.json'. Specified 'include' paths were '["./src"]' and 'exclude' paths were '["./out"]'

Solution:
TypeScript expects there to be at least one TypeScript file in the folder in order to compile.
To fix the error, add an empty typescript file to the typescript scripts folder (the location of your tsconfig file).
[Link] : https://stackoverflow.com/questions/41211566/tsconfig-json-buildno-inputs-were-found-in-config-file


## Some other ways to try:
1) call and return above functions in using promises VERSUS async/await
Promise.resolve().then(addIngredient).then(makeTea)

2) Promise.all([addIngregient(), makeTea()]).then(([result1, result2]) => {
 use result1, result2 and result3
  });

3) Could use Design Patterns

### Useful Links and Few Highlights:

1) Array.splice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

2) Promises

3) Async/Await


How I came up with this awewome program:

1) Wrote a quick program to make tea inside function makeTea()
2) Now, what if someone wants to add a random ingredient. So, added couple more functions
3) Before final publishing I needed to show a TEA cup
4) Researched for ASCII codes and found following website to get my TEA graphic:
https://patorjk.com/software/taag/#p=display&f=ANSI%20Shadow&t=TEA

What could be worked on next:
1) Finding a way to show an actual Image of TEA cup!
