# Ada React Workshop file JSX & Props

## STEP 1: Differences between HTML & JSX

1. Modify the colors of elixirs (look for objects  `<div className='liquid' />`) according to labels. Use id, classname & inline styles to do that.
    
    1.1. For the first one, you need to add id to div element: `<div className='liquid' id='veritaserum'></div>`
    and then in a file `potions.css` you need to add styles `#veritaserum {background: yellow}`
    
    1.2. For the second one, you need to add one more className to the object and you need to add styles.
    
    1.3. For the third one, you need to add custom inline styles. Remember they are objects now!

2. Once you have changed color for all your elixirs, refactor your code so liquids objects only use classes (.veritaserum, .felis-felisis and .polyjuice). Remember to add classes also to css file! I'll leave the decisions about colors up to you :)

## STEP 5: Passing props to objects

1. Check the Welcome component, especially the weird attributes `who` and `messageColor`, `titleClassName`, `withEmoji`. Experiment with changing them. What would happen if you remove some? Pay attention to how custom prop `titleClassName` is added to className of title.

2. There's a skeleton for creating a Potion component. Create three components, each for displaying every of three Potions. As a props, pass `label` and `className`.

## STEP 5: Switch branch to go to the next exercise

1. To display the updated instruction, go to the branch `3-charms-class` in github. The instruction (coming from the readme file) will be updated.
2. Checkout branch in your local repository (you can stash your changes before) `git checkout 3-charms-class`
3. The branch content is updated.
