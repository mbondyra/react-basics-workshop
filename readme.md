# Ada React Workshop file JSX & Modules

## STEP 1: What's a JSX?

So you have the basic idea of what's JSX - an XML-like syntax extension of JavaScript. It means that you can basically write HTML in Javascript. It's a great feature of React because it helps with readability. There are some differences though.

## STEP 2: Differences between HTML & JSX

1. Run the app as before (`yarn start`) and take a look at the three divs you have in a `App-content` container. Modify the looks of the divs. 
HINT: Remember that:
- styles in JSX should be written as objects so eg.
`style="color: black"` becomes `style={{color: 'black'}}`
- class is a reserved word in Javascript, we use it to CREATE a class, so it cannot be used in JSX. That's why instead we have className.
- id stays id and it works exactly the same way as in HTML.

## STEP 3: Modularize your app

One of the biggest advantages of React is that it's very easy to modularize your app. 
1. Take a look at a file `Header.js` and compare it to the lines #11-14 of `App.js` file.
2. Replace lines #11-14 with this file.
    2.1. Import a file with 
        `import Header from 'Header'`
    2.2. Replace lines 11-14 with `<Header />`
    2.3. Take a look at imports in `App.js` file. It looks like one is not being used - remove it.
3. Extract `App-content` the same way. Create a new file basing on `Header.js` and repeat operations from #2.
 
## STEP 4: Switch branch to go to the next exercise

1. To display the updated instruction, go to the branch `task-3` in github. The instruction (coming from the readme file) will be updated.
2. Checkout branch in your local repository (you can stash your changes before) `git checkout task-3`
3. The branch content is updated. 
