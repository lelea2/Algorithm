# Design CSS theming

## Method #1: Theming with Sass and little bit of BEM
https://www.browserlondon.com/blog/2015/04/07/theming-with-sass/

- Create a theme layer
```css
.foo { ... }
.foo--highlight {
    .t-default & { background-color: $t-default-bg-highlight; }
    .t-alt & { background-color: $t-alt-bg-highlight; }
}
```

- Support for LOTS of theme, Sass (v3.3+) comes with `Maps` allow us to loop through variable list - essentially an array of values
```css
$bg-highlight: (
  t-default: (bgcolor: $t-default-bg-highlight),
  t-accentuate: (bgcolor: $t-accentuate-bg-highlight),
  t-bluesky: (bgcolor: $t-bluesky-bg-highlight),
  t-dusk: (bgcolor: $t-dusk-bg-highlight),
  t-midnight: (bgcolor: $t-midnight-bg-highlight),
  t-sleek: (bgcolor: $t-sleek-bg-highlight),
  t-solar: (bgcolor: $t-solar-bg-highlight),
  t-sunrise: (bgcolor: $t-sunrise-bg-highlight),
);

.foo--highlight {
  @each $theme, $map in $bg-highlight {
    $bg-highlight: map-get($map, bgcolor);
    .#{$theme} & {
        background-color: $bg-highlight;
    }
  };
}

```


## Method #2: Theming with CSS variable
https://pspdfkit.com/blog/2020/ui-theming-with-css-variable-mapping/

### Mapping approach
#### Pros
- Having an extra file where we map our variables makes it easy to create new themes by simply creating and importing a new theme file.
- The variable names are specific and unique, making them more flexible and reliable.
This will ensure that the abstraction won’t easily break while adding new themeable components or implementing a new color scheme.
#### Cons
- Verbose: the amount of custom properties grows quickly, as every theme-related property needs its own variable.

```css
/* light-theme.css */
:root {
  --Button-color: var(--color-black);
  --Modal-color: var(--color-yellow);
}

```

```css
:root {
  --sectionBG: var(--white);
  --sectionText: var(--grey-dark);
  --linkColor: var(--green-bright);
  --titleColor: var(--green-bright);
}

section {
  background-color: var(--sectionBG);
  color: var(--sectionText);
  padding: 7rem 0;

  h2 {
    color: var(--titleColor);
  }

  a {
    color: var(--linkColor);
  }

  .btn {
    &:hover {
      background-color: var(--linkColor);
      border-color: var(--linkColor);
      color: var(--sectionText);
    }
  }
}

/** Using BEM **/
.section--grey {
  --sectionBG: var(--grey-dark);
  --sectionText: var(--grey-light);
  --titleColor: var(--white);
}
```

### Generic approach
#### Pros
- Using very generic names, like `color-primary`, directly in our components without any further mapping is a less verbose approach.
- It’s faster.
#### Cons
- The abstraction needs to be flexible. Otherwise, it’s likely to fail.

```css
/* light-theme.css */
:root {
  --primary-color: #000;
  --other-primary-color: #ffff00;
}
```

## Design system (Atomic design)

### 1) Brand definition
```css
--color-brand-starbucks-green: #00704a;
--color-brand-target-red: #cc0000;
--font-family-primary: 'Roboto, san-serif';
```

### 2) High-level application variables
```css
--primary-action-background-color: var(--color-brand-starbucks-green);
--border-color-subtle: var(--color-gray-07);
--font-family-heading: var(--font-family-secondary);
```

### 3) component-specific variables
```css
--button-background-color
--button-fon-family
--button-border-width
--button-padding
```


## Darkmode (media-query: prefer-color-scheme)
```css
@media (prefers-color-scheme: dark) {
  img {
    opacity: .75;
    transition: opacity .5s ease-in-out;
  }
  img:hover {
    opacity: 1;
  }
}
```

OR leverage `data-theme`

```js
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
}
```

```css
:root {
  --primary-color: #302AE6;
  --secondary-color: #536390;
  --font-color: #424242;
  --bg-color: #fff;
  --heading-color: #292922;
}

[data-theme="dark"] {
  --primary-color: #9A97F3;
  --secondary-color: #818cab;
  --font-color: #e1e1ff;
  --bg-color: #161625;
  --heading-color: #818cab;
}
```
