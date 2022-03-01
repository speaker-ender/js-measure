# JS-Position-Helpers
### Basic JS Position Tools For HTML Elements
Provides safe cross-browser support for fetching positional information about html elements

## Functions

### documentHeight
Fetches the maximum height of your webpage by using the document body and the html element.
Returns `0` if the document or html element do not exist.

### windowWidth
Fetches the width of the window.
Returns `0` if the window and document element do not exist

### windowHeight
Fetches the height of the window.
Returns `0` if the window and document element do not exist

### scrollTop
Fetches the distance of the viewport from the top of the page
Returns `0` if the window and document element do not exist

### height
Fetches the height of the element passed to the function

### height
Fetches the width of the element passed to the function

### topPosition
Fetches the distance of the top of the element passed to the function from the top of the viewport

### relativeTopPosition
Fetches the distance of the top of the element passed to the function from the top of the page

### bottomPosition
Fetches the distance of the bottom of the element passed to the function from the top of the viewport

### relativebottomPosition
Fetches the distance of the bottom of the element passed to the function from the top of the page

### leftPosition
Fetches the distance of the left edge of the element passed to the function from the left of the viewport

### rightPosition
Fetches the distance of the right edge of the element passed to the function from the right of the viewport

### inViewport
Returns true if all edges of the element passed to the function are inside of the viewport
