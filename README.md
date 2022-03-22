# JS-Measure

### [DEMO](https://js-measure.vercel.app)
### JS DOM Measurement Tools
Provides safe cross-browser support for fetching measurments about DOM elements

## Functions

### `documentHeight()`
Fetches the maximum height of your webpage by using the document body and the html element.  
Returns `0` if the document or html element do not exist.

### `windowWidth()`
Fetches the width of the window.  
Returns `0` if the window and document element do not exist

### `windowHeight()`
Fetches the height of the window.  
Returns `0` if the window and document element do not exist

### `scrollTopDistance()`
Fetches the distance of the viewport from the top of the page.  
Returns `0` if the window and document element do not exist

### `scrollLeftDistance(element)`
Fetches the distance of the viewport from the left of the page or the distance of the left side of `element` from the left side of the viewport.  
Returns `0` if the window and document element do not exist

### `height(element, includeMargin)`
Fetches the height of the element passed to the function

### `height(element, includeMargin)`
Fetches the width of the element passed to the function

### `topEdgeDistance(element: Element, relativeTo?: 'document' | Element)`
Fetches the distance of the top of the element passed to the function from the top of the viewport. If `relativeTo` is passed `document`, it will use the distance from the top of the document. If you pass any Element to `relativeTo`, it will return the distance between the top of `element` and the top of `relativeTo`.

### `bottomEdgeDistance(element: Element, relativeTo?: 'document' | Element)`
Fetches the distance of the bottom of the element passed to the function from the top of the viewport. If `relativeTo` is passed `document`, it will use the distance from the top of the document. If you pass any Element to `relativeTo`, it will return the distance between the bottom of `element` and the bottom of `relativeTo`.

### `leftEdgeDistance(element: Element, relativeTo?: 'document' | Element)`
Fetches the distance of the left edge of the element passed to the function from the left of the viewport.  If `relativeTo` is passed `document`, it will use the distance from the left of the document. If you pass any Element to `relativeTo`, it will return the distance between the left edge of `element` and the left edge of `relativeTo`.

### `rightEdgeDistance(element: Element, relativeTo?: 'document' | Element)`
Fetches the distance of the right edge of the element passed to the function from the right of the viewport. If `relativeTo` is passed `document`, it will use the distance from the right of the document. If you pass any Element to `relativeTo`, it will return the distance between the right edge of `element` and the right edge of `relativeTo`.

### `inViewport(element)`
Returns `true` if all edges of the element passed to the function are inside of the viewport
