(function(escapeHTML, html, css, http, escapeCSS) {

function run() {}


// Regular template string that has HTML in it.
var a = `
        This <b dir="${{model: this.numberX}}">bold ${this.numberX}</b>
        <!-- comment -->
        ${{model: this.numberX}}
        `;

// Just a normal function call, do the tagged template function calls below
// syntax highlight in the same way?
run(a);

// HTML tagged template strings with HTML syntax highlighting.
var b = escapeHTML`
        This <b dir="${{model: this.numberX}}">bold ${this.numberX}</b>
        <!-- comment -->
        ${{model: this.numberX}}
        `;



// HTML tagged template strings with HTML syntax highlighting.
var c = html   `
        This <b dir="${{model: this.numberX}}">bold ${this.numberX}</b>
        <!-- comment -->
        ${{model: this.numberX}}
        `;


// Regular template string that has CSS in it.
var d = `
/* Allow inputs to be selectable, and to allow cut/copy operations. */
.center input[type="text"],
.center input[type="url"] {
  -moz-user-select: text;
}

html {
  width: 100%;
  height: 100%;
  font-size: ${{model: this.numberX}};
  overflow: hidden;
}

body {
  ${this.numberX};
}

${this.numberX} {
  background: transparent;
}
`;

// CSS tagged template strings with CSS syntax highlighting.
var e = css   `
/* Allow inputs to be selectable, and to allow cut/copy operations. */
.center input[type="text"],
.center input[type="url"] {
  -moz-user-select: text;
}

html {
  width: 100%;
  height: 100%;
  font-size: ${{model: this.numberX}};
  overflow: hidden;
}

body {
  ${this.numberX};
}

${this.numberX} {
  background: transparent;
}
`;

// CSS tagged template strings with CSS syntax highlighting.
var e = escapeCSS    `
/* Allow inputs to be selectable, and to allow cut/copy operations. */
.center input[type="text"],
.center input[type="url"] {
  -moz-user-select: text;
}

html {
  width: 100%;
  height: 100%;
  font-size: ${{model: this.numberX}};
  overflow: hidden;
}

body {
  ${this.numberX};
}

${this.numberX} {
  background: transparent;
}
`;

console.log(a, b, c, d, e, f);

}).call(window, window);
