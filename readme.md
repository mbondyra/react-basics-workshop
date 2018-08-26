# Ada React Workshop file JSX & Modules

## STEP 1: Modularize your app

One of the biggest advantages of React is that it's very easy to modularize your app. 
1. Take a look at a file `Header.js` and compare it to the lines #13-19 of `App.js` file.
2. Replace lines #13-19 with this file.
    2.1. Import a file with 
        `import Header from 'Header'`
    2.2. Replace lines 13-19 with `<Header />`
    2.3. Take a look at imports in `App.js` file. It looks like some are not being used as now they are used in `Header.js` file- remove tem.
3. Extract `App-content` the same way. Create a new file based on `Header.js` called `Content.js` and repeat operations from #2.
4. 

## STEP 2: What's a JSX? (Slide) Differences between HTML & JSX

So you have the basic idea of what's JSX - an XML-like syntax extension of JavaScript. It means that you can basically write HTML in Javascript. It's a great feature of React because it helps with readability. There are some differences though. Take a look a the slide :)