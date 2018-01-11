# ConsoleWriter jQuery Plugin
This is a jQuery plugin that performs realistic typewriter behaviour on inline text elements and also allows
 console-style editing of the displayed text.
 
The plugin has numerous options that can be used to customise the typewriter and console-editing behaviours, or turn
either behaviour off.

ConsoleWriter can be invoked on an element by simply adding the console-writer class to the element. ConsoleWriter
will use default values for all options.

ConsoleWriter can also be invoked on an element using jQuery like this:
`$('p').consoleWriter()`. This will again use default values for all options.

Detail on setting and using options is covered below.

## Options
Below is a table showing all current options, their effects, default values and supported methods for setting their
values. **Option names should be prefixed with cw- when they are set using HTML element attributes.**

| Option            | Effect                                                                  | Type            | Default  | HTML attribute |
|:-----------------:|-------------------------------------------------------------------------|:---------------:|:--------:|:--------------:|
| text              | Text to be displayed in the element (if not using element contents)     | String          | ""       | yes            |
| animation         | Typewriter animation on/off                                             | Boolean         | false    | yes            |
| sound             | Global sound on/off                                                     | Boolean         | false    | yes            |
| animationSound    | Typewriter animation sound on/off                                       | Boolean         | false    | yes            |
| typingSound       | Console typing sound on/off                                             | Boolean         | true     | yes            |
| cursorFadeDuration| Fade duration of blinking console cursor (ms)                           | Number          | 500      | no             |
| initialDelay      | Initial delay before typing animation begin (in ms)                     | Number          | 150      | yes            |
| writeDelay        | Animation typing delay (in ms)                                          | Number          | 150      | no             |
| cursorCSS         | Override cursor CSS from javascript                                     | Plain Object    | false    | no             |
| leadingCursor     | Inserts invisible leading cursor character (for horizontal alignment    | Object          | false    | yes            |
| leadingCursorCSS  | Override CSS of leading cursor from javascript                          | Plain Object    | false    | no             |
| callback          | Callback function to run after typewriter animation                     | Function        | N/A      | no             |
| runOnLoad         | Toggles whether ConsoleWriter runs on page load                         | Boolean         | N/A      | yes            |

## Examples
Examples of using ConsoleWriter can be viewed in the demo.html file included in the ConsoleWriter Github
[repository](https://github.com/robinrob/console-writer/blob/master/demo.html).

## Dev dependencies
To develop ConsoleWriter using my setup, do the following:
* Install node 5.5.0: `nvm install 5.5.0`
* Use node 5.5.0: `nvm use 5.5.0`
* Install node packages: `npm install`
* Run gulp: `gulp`. This should open the demo.html file in a browser.