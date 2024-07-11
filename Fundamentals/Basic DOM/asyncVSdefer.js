// Async and defer are both ways to load your page

// Normal page load - Javascript blocks HTML parsing and releases it once both download and execution of JS script is done

// HTML Parsing ----------            --------
// JS downloading         ------
// JS executing                 ------

// Async - Javascript execution blocks HTML parsing and releases it once both execution of JS script is done

// HTML Parsing ----------------      --------
// JS downloading         ------
// JS executing                 ------

// Defer - Javascript will download its content while asynchronously to HTML parsing and then execute after html has finished parsing

// HTML Parsing -----------------------------
// JS downloading         ------
// JS executing                              ------

// Syntax -
//
// <script src = defer/async  'script.js'></script>

// Defer is the most useful in most cases
