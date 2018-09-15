# Ada React Workshop file Modules

From now on our tasks will be placed in directories - this task is task-1_3,4.

## STEP 1: Change element displayed

    1. Go to file `src/index.js`. Notice that it still displays the old `App.js` file which now is placed in `task-1` directory.

        ```javascript
        import App from './task-1/App'
        ```

    2. Switch the displayed content to `task-1_3,4`. You can now forget about `task-1` folder.

## STEP 2: Modularize your app

    One of the biggest advantages of React is that it's very easy to modularize your app.

    1. Take a look at a file `Header/index.js` and compare it to the lines #13-19 of `App.js` file.
    2. Replace lines #13-19 with the content of the file. To do so, follow these steps:
        2.1. Import a file with `import Header from 'Header'` in the top of the file.
        2.2. Replace lines 13-19 with `<Header />`
        2.3. Take a look at imports in `App.js` file. It looks like some are not being used as now they are used in `Header/index.js` file- remove them.
    3. Extract `App-content` the same way - Create a new file based on `Header/index.js` called `Content/index.js` with the content extracted from the `App.js` and repeat operations from #2.

## STEP 3: Switch to the next branch (2-elixirs-class)
