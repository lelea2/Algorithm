### Ways to implement undo/redo

* Memento Pattern:
where you capture the whole current state. It's easy to implement, but memory-inefficient since you need to store similar copies of the whole state.

* Command Pattern:
where you capture commands/actions that affect the state (the current action and it's inverse action). 
More memory-efficient since you only store the actions that affect the state.

https://medium.com/fbbd/intro-to-writing-undo-redo-systems-in-javascript-af17148a852b

##### Memento
```html
<h4> Type some characters and hit Undo </h4>
<input onkeydown="saveMemento()" value="Hello World"/>
<button onclick="undo()">Undo</button>

<script>
  const mementos = []
  const input = document.querySelector('input')

  function saveMemento() {
    mementos.push(input.value)
  }

  function undo() {
    const lastMemento = mementos.pop()
    
    input.value = lastMemento ? lastMemento : input.value
  }
</script>
```

##### Command
Each action has a corresponding inverse action(command).
For example, each time you add character in a textbox, you save the inverse function; which is to delete the character at that position.
If the user wants to undo, you apply the inverse action.

```html
<h4> Type some characters and hit Undo </h4>
<input onkeydown="saveCommand(event)" value="Hello World"/>
<button onclick="undo()">Undo</button>

<script>
const commands = []
const input = document.querySelector('input')

function saveCommand(e) {
  commands.push({
    // the action is also saved for implementing redo, which
    // is not implemented in this example.
    action: { type: 'add', key: e.key, index: input.selectionStart },
    inverse: { type: 'remove', index: input.selectionStart }
  })
}

function undo() {
  let value = input.value.split('')
  const lastCommand = commands.pop()
 
  if (!lastCommand) return
    
  switch (lastCommand.inverse.type) {
    case 'remove':
      value.splice(lastCommand.inverse.index, 1)
      break;      
  }
  
  input.value = value.join('')
}
</script>
```

#### Approach#1
```js
const createUndoableCounter = () => {
  let history = [0];
  let position = 0;

  return {

    value() {
      return history[position];
    },

    setValue(value) {
      if (position < history.length - 1) {
        history = history.slice(0, position + 1);
      }
      history.push(value);
      position += 1;
    },

    increment() {
      this.setValue(this.value() + 1);
    },

    decrement() {
      this.setValue(this.value() - 1);
    },

    undo() {
      if (position > 0) {
        position -= 1;
      }
    },

    redo() {
      if (position < history.length - 1) {
        position += 1;
      }
    },

    // toString function to aid in illustrating
    toString() {
      return `Value: ${this.value()}, History: [${history}], Position: ${position}`; 
    }
  }
}

const undoableCounter = createUndoableCounter();
console.log(undoableCounter.toString()); // => Value: 0, History: [0], Position: 0

undoableCounter.increment();
console.log(undoableCounter.toString()); // => Value: 1, History: [0,1], Position: 1

undoableCounter.decrement();
console.log(undoableCounter.toString()); // => Value: 0, History: [0,1,0], Position: 2

undoableCounter.undo();
console.log(undoableCounter.toString()); // => Value: 1, History: [0,1,0], Position: 1

undoableCounter.increment();
console.log(undoableCounter.toString()); // => Value: 2, History: [0,1,2], Position: 2

```

#### Approach#2 (command pattern)

```js
const createNamedCounter = (name) => {
  return {
    name,
    count: 0
  }
};

const createIncrementCommand = (counter) => {
  const previousCount = counter.count;

  return {
    execute() {
      counter.count += 1;
    },
    undo() {
      counter.count = previousCount;
    }
  }
};

const createDecrementCommand = (counter) => {
  const previousCount = counter.count;

  return {
    execute() {
      counter.count -= 1;
    },
    undo() {
      counter.count = previousCount;
    }
  }
};

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const commands = {
  [INCREMENT]: createIncrementCommand,
  [DECREMENT]: createDecrementCommand
};

const createCommandManager = (target) => {
  let history = [null];
  let position = 0;

  return {
    doCommand(commandType) {
      if (position < history.length - 1) {
        history = history.slice(0, position + 1);
      }

      if (commands[commandType]) {
        const concreteCommand = commands[commandType](target);
        history.push(concreteCommand);
        position += 1;

        concreteCommand.execute();
      }
    },

    undo() {
      if (position > 0) {
        history[position].undo();
        position -= 1;
      }
    },

    redo() {
      if (position < history.length - 1) {
        position += 1;
        history[position].execute();
      }
    }
  }
};


```