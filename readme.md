# Ada React Workshop file JSX & Modules

## STEP 1: Fix the repo

1. Looks like something is not right... The repo is not displaying. That's because in a `Wand` component we're using module that needs to be installed. Run `yarn` one more time in your terminal.

2. Ok, so now you should see a Wand and a Door... You see when we're going with it, don't you? Display alert message 'alohomora' when clicking on a wand.

3. Message is cool, but let's just open/close the door for real. To do that, you need to modify your content class to add initial state in a constructor:


```
class App extends Component {
  constructor(){
      super(); //that's invoking parent (Component) constructor
      this.state ={
          isDoorOpen: false
      }
  }  
  render() {
    return (
      <div className="App-content">
        <Welcome who="Ada" messageColor="#fff" />
        <Door />
        <div>
          <Wand />
        </div>
      </div>
    );
  }
}
```

After that, the state needs to be read by the door, so we can pass the state as prop to the door. 
```
<Door isOpen={this.state.isDoorOpen}>
```

The only thing left is to change THE STATE of the door on CLicking the wand, we need to use `setState` for it:

```
render() {
    return (
    <div className="App-content">
        <Welcome who="Ada" messageColor="#fff" />
        <Door />
        <div onClick={()=> {this.setState(isDoorOpen: true)}}>
            <Wand />
        </div>
    </div>
    );
}
```

This would allow us to open the door once. If we want to toggle the state of it, we can switch it from `<div onClick={()=> {this.setState(isDoorOpen: true)}}>` to  `<div onClick={()=> {this.setState(isDoorOpen: !this.state.isDoorOpen)}}>`. The `!` will negate the previous state.

4. Do you remember the confetti module that was breaking? Now that it's working, let's have some fun! Add prop: `spellCasting` to the `<Wand />` with a value of `this.state.doorOpen`. Try it in a browser.


5. So you get the basic idea of a state. Great! Let's add some more events to practice. Add state `wandRaised` to our constructor:

```javascript
this.state = {
  doorOpen: false,
  wandRaised: false
}
```

Add two more listeners to the div surrounding wand. `onMouseEnter={()=>{this.setState(wandRaised: true)}}` will cause raising a wand a bit. Add the same thing for `onMouseLeave` but with changing the value of state to `false`.
Pass prop `raised` to <Wand /> with a value of `this.state.wandRaised`.

6. Let's now go into the Wand component. The Wand is a function - it is not a class extending a component as the previous ones. Isn't it weird? Do you know the reason why? (Slide)

7. Once your door toggle and confetti gets triggered and a wand is going up and down AND you know what's stateless component, you're ready to go next :)
