# Ada React Workshop file initial instruction

## STEP 1: Open index.html file

1. Add necessary scripts to from_scratch/index.html file. You can do that after #example1 element.

    ```javascript
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react-dom.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.21.1/babel.min.js"></script>
    ```

    First one allows you to use React.
    The second one adds ReactDOM - it's a glue between React and a browser - allows you to render React elements on your page.
    The third one, babel, allows you to use modern syntax of ES6 directly in a browser.

2. Add a custom `script` tag after scripts from STEP 1. You need to add an attribute `type="text/babel"` to be compiled by babel.

    ```javascript
        <script type="text/babel">
            // your app
        </script>
    ```

3. Create your own JSX element in the script tag, it can be e.g. `<h1/>` as below. Put your name in the element. Assign it to the variable. You have an example below:

    ```javascript
        <script type="text/babel">
            const myName = <h1> I am Marta </h1>
        </script>
    ```

4. Run the app in your browser. So far, nothing happened. That's because we need to render it in the browser first! You need to use `ReactDOM.render`. 

    That method that has two params: JSX element to render and the element from your DOM tree that will be parent of our object:
        `ReactDOM.render(<jsxElement/>, parentElementFromDOM)`

    Take a look at our HTML - there's an element with id `#example1` - let's mount it there!

    ```javascript
        <script type="text/babel">
            const myName = <h1> I am Marta </h1>
            ReactDOM.render(
                myName,
                document.getElementById("example1")
            );
        </script>
    ```

5. It is THAT simple to use React. Let's go a bit deeper with rules that are applied to JSX. Open index-2.html file and start with exercises there. Once you solve one, uncomment line comments of the next one. We're here if you need help :)

6. Once you finished, wait for a checkpoint and switch to the next branch called `1_the_letter`, we'll start the real fun now. I cannot wait!
