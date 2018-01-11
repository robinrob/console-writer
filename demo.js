/**
 * Created by msl on 19/07/15.
 */

var $button = $(".button")
$button.on("click", function() {
    // We need to clear all queued timeout events first, to stop characters from any previous runs interfering with the
    // current run.
    var highestTimeoutId = setTimeout(";");
    for (var i = 0 ; i < highestTimeoutId ; i++) {
        clearTimeout(i);
    }
    $('.console-writer').consoleWriter({
        writeDelay: 100
    })
})