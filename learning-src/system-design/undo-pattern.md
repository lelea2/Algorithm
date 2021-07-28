### Ways to implement undo/redo

* Memento Pattern:
where you capture the whole current state. It's easy to implement, but memory-inefficient since you need to store similar copies of the whole state.

* Command Pattern:
where you capture commands/actions that affect the state (the current action and it's inverse action). 
More memory-efficient since you only store the actions that affect the state.


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
```html

```