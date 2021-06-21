#### Design a general purpose typeahead component

** Things to consider**

1. UI performance - how many character typed before qurying, ajax calls should not be stacked up through debounce
2. API performance - Tries data structure, lexical patterns
3. Caching
4. Modularization
5. Animation & Timing
6. Data size through network or local cache: pagination on result. 
7. Accessibility: arrow key used to select word, tab or enter to complete.
