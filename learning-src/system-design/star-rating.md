#### Design star rating system as reusable component

Things to consider
* reusable component
* Accessibility (input form) - handle both onChange/onClick?
* Support icon flexibility

- Create a resuable widget similar to material UI call Rating

```js
<Rating
  value={value}
  name="rating"
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
  onClick={props.handleInputChange}
  readOnly={false}
  icon={<FavoriteIcon fontSize="inherit" />}
/>
```

- Use form input - radio button

```html
<fieldset class="r-radios">
  <legend>
    Rate my rating system:
  </legend>

  <input type="radio" name="r_input" id="r_input_0" checked>
  <label for="r_input_0" class="r-radio r-radio--none">
    <svg aria-hidden="true" focusable="false">
      <use xlink:href="#no_rating"/>
    </svg>
    <span>No rating</span>
  </label>

  <input type="radio" name="r_input" id="r_input_1">
  <label for="r_input_1" class="r-radio">
    <svg aria-hidden="true" focusable="false">
      <use xlink:href="#star"/>
    </svg>
    <span>1 Star</span>
  </label>

  <!-- add more stars here! -->
</fieldset>
```

- radio input using `visibility: hidden` or `apperance: none` with some `opacity` set, it's still available for screen reader but not shown in actual UI

**Accessibility**

* A radio group is used with its fields visually hidden. It contains six radio buttons, one for each star and another for 0 stars, which is checked by default. 
Make sure you are providing a name prop that is unique to the parent form.
* The labels for the radio buttons contain actual text (“1 Star”, “2 Stars”, …), make sure you provide a getLabelText prop when the page language is not English.


```css
.star {
  color: #ff9933;
  cursor: pointer;
}
```

```javascript
const Star = ({ marked, starId }) => {
  return (
    <span data-star-id={starId} className="star" role="button">
      {marked ? '\u2605' : '\u2606'}
    </span>
  );
};

const StarRating = ({ value }) => {
  const [rating, setRating] = React.useState(parseInt(value) || 0);
  const [selection, setSelection] = React.useState(0);

  const hoverOver = event => {
    let val = 0;
    if (event && event.target && event.target.getAttribute('data-star-id'))
      val = event.target.getAttribute('data-star-id');
    setSelection(val);
  };
  return (
    <div
      onMouseOut={() => hoverOver(null)}
      onClick={e => setRating(e.target.getAttribute('data-star-id') || rating)}
    >
      {Array.from({ length: 5 }, (v, i) => (
        <Star
          starId={i + 1}
          key={`star_${i + 1}`}
          marked={selection ? selection >= i + 1 : rating >= i + 1}
        />
      ))}
    </div>
  );
};

ReactDOM.render(<StarRating value={2} />, document.getElementById('root'));
```
