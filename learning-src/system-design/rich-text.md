#### Design a component to support rich text content creation across products, with the following critical features: block-level styling (list items, blockquotes, etc.), inline-level styling (bold, italic)

- <div contentdeditable=true></div> (check src code for expected outcome with <p> for new line)
- Immutable State: everytime we get a change, you get a new structure. Use immutable to only add additional memory to existing data structure.
Keep history of old model for undo
- Convert state to JSON & Restore the state from JSON
- Downside whenever you change data and just send HTML tag over. This is bad. Data sanitization and security is a concern.

```javascript
import React form 'react';
import { Editor, EditorState } from 'draft-js';

class MyEditor extends React.Component {
  state = {
    editorState: EditorState.createEmpty()
  }

  onChange = (editorState) => this.setState({ editorState });

  render() {
    // similar to form input defaultValue, value, onChange
    return ( 
      <Editor
        editorState={this.state.editorState}
        onChange={this.onChange}
        blockRenderFn={blockRenderFn} // intercept with editing block to render 
      >
    );
  }
}

Model of editorState
* ContentState: represent the whole content
    - block
    - text
```javascript
{
  "currentContent": {
    "blockMap": Immutable.Map({
      "key1": {
        "key": "ket1",
        "type": "header-two", // set of pre-defined html tag: h1, h2,....
        "text": "...",
        "characterList": [{ // every character has info
          "style": ["UNDERLINE"], // pre-defined decorator to defined how it should be defined.
          "entity": null
        }]
      }
    })
  }
}

When save to the server, can convert to raw JSON

```javscript
{
  "entityMap": {
    "O": {
      type: "IMAGE",
      data: {
        src: "<img_url>"
      }
    },
    blocks: [{
      "key": "",
      "text": "",
      "type": "",
      "inlineStyleRange": [],
      "entityRange": []
    }]
  }
}
```

* SelectionState: