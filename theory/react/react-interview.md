Referenced:
* https://www.toptal.com/react?utm_campaign=hiring_guide_react&utm_medium=email&utm_source=blog_subscribers#hiring-guide
* https://www.toptal.com/react/interview-questions

React inline CSS benchmark
* http://ctheu.com/2015/08/17/react-inline-styles-vs-css-stupid-benchmark/

React ownership-children:
* http://ctheu.com/2015/02/10/ownership-and-children-in-reactjs/
* http://ctheu.com/2015/02/12/how-to-communicate-between-react-components/

React.createClass vs. React.createComponent
* https://toddmotto.com/react-create-class-versus-component/

Why choosing redux over flux?
* http://stackoverflow.com/questions/32461229/why-use-redux-over-facebook-fluxJ

Perfomance:
* http://benchling.engineering/performance-engineering-with-react/

Handle Ajax on React
* https://www.codementor.io/rowland/tutorials/handling-ajax-in-your-react-application-with-agility-0-du10866vz?utm_campaign=cm-internal&utm_source=tutorial&utm_medium=related-posts&utm_term=du10866vz&ref=tutorial-du10866vz

* http://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559

Framework helper
* https://github.com/brillout/awesome-react-components

* https://github.com/enaqx/awesome-react

#### 1. React.createClass versus extends React.Component (ES6 module)

* Syntax difference
* propTypes & getDefaultProps define syntax different
* How state is defined
* "this" is different
* Mixins

```
import React from 'react'
import ReactDOM from 'react-dom'

class Greeting extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>
  }
}
const mountNode = document.getElementById('app');

ReactDOM.render(<Greeting name='John' />, mountNode);

```

##### 2. What is JSX

* JS syntax extension
* look like xml/html
* react does not use templating languages
* embed jsx directly js code
* JSX is more powerful because of js
* JSX is concise & familiar syntax for define tree structure

```
<button className='btn btn-primary'>
  {{text}}
</button>

```

##### 3. Declarative components
* Define how UI should look for given data
* don't worry much about DOM manipulations
* As developer we focus on 2 things
  * Define out UI as components
  * Manage state of application
* React take care of updating DOM based on state changes

```
//CommentList

<div className="comment-list">
  {comments.map((comment) => {
    return (
      <Comment key={comment.id} comment={comment} />
    );
  })}
</div>

```

**Advantages**
* More predictable code
* Easier to debug
* Abstract DOM manipulations
* Efficient DOM updates

**Building components**
* Build encapsulated components
  * Each component should have single responsibility
  * Break complex components in smaller components
  * Build re-usable components
    * Identify & abstract repeated patterns
    * Use props to make components configurable

##### 4. Whats is one-way dataflow?
* Data flows from top to bottom of the component hierarchy
* 2 types of data: props & state

** Advantage **
* More explicit code
* Easy to debug
* Better performance

##### 4. Trick for better server rendering with React

https://www.youtube.com/watch?v=PnpfGy7q96U

* Production Mode
* Minified React (use React.min of browser version)
* Babel Transform
* ES6 classes and stateless components (require refactoring your code, outbound func support)
* Streaming (maybe) ==> look at React dom string
* Caching ==> not yet with React

##### 5. What is flux?

Action -> Dispatcher -> Store -> View -> Action -> Dispatcher

**Action**
* Pass data to dispatcher

**Dispatcher**
* Handle page intialization
* Communicate with service
* Dispatch data to Stores

**Store**
* Hold application data & state
* Contain app UI logic
* Emit change events

**View**
* Render data from stores as HTML
* invoke actions
* re-render on stores change events

##### 6. React PropTypes

* React.PropTypes.array,
* React.PropTypes.bool,
* React.PropTypes.func,
* React.PropTypes.number,
* React.PropTypes.object,
* React.PropTypes.string,
* React.PropTypes.symbol
* React.PropTypes.node,
* React.PropTypes.element,

* React.PropTypes.instanceOf(Message),
* React.PropTypes.oneOf(['News', 'Photos']),
* React.PropTypes.oneOfType([ React.PropTypes.string, React.PropTypes.number, React.PropTypes.instanceOf(Message)])
* React.PropTypes.arrayOf(React.PropTypes.number),
* React.PropTypes.shape({ color: React.PropTypes.string, fontSize: React.PropTypes.number })

##### 7. React Router

```
DOM.render(
  <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="about" component={About}/>
        <Route path="users" component={Users}>
          <Route path="/user/:userId" component={User}/>
        </Route>
        <Route path="*" component={NoMatch}/>
      </Route>
  </Router>
, document.body)
```
