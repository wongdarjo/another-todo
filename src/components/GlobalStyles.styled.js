import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*,
::before,
::after {
	box-sizing: border-box;
}

html {
	-moz-tab-size: 4;
	tab-size: 4;
}

html {
	line-height: 1.15;
	-webkit-text-size-adjust: 100%;
}

body {
	margin: 0;
}

body {
	font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
}

hr {
	height: 0;
	color: inherit;
}

abbr[title] {
	text-decoration: underline dotted;
}

b,
strong {
	font-weight: bolder;
}

code,
kbd,
samp,
pre {
	font-family: ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
	font-size: 1em;
}

small {
	font-size: 80%;
}

sub,
sup {
	font-size: 75%;
	line-height: 0;
	position: relative;
	vertical-align: baseline;
}

sub {
	bottom: -0.25em;
}

sup {
	top: -0.5em;
}

table {
	text-indent: 0;
	border-color: inherit;
}

button,
input,
optgroup,
select,
textarea {
	font-family: inherit;
	font-size: 100%;
	line-height: 1.15;
	margin: 0;
}

button,
select {
	text-transform: none;
}

button,
[type='button'],
[type='reset'],
[type='submit'] {
	-webkit-appearance: button;
}

::-moz-focus-inner {
	border-style: none;
	padding: 0;
}

:-moz-focusring {
	outline: 1px dotted ButtonText;
}

:-moz-ui-invalid {
	box-shadow: none;
}

legend {
	padding: 0;
}

progress {
	vertical-align: baseline;
}

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
	height: auto;
}

[type='search'] {
	-webkit-appearance: textfield;
	outline-offset: -2px;
}

::-webkit-search-decoration {
	-webkit-appearance: none;
}

::-webkit-file-upload-button {
	-webkit-appearance: button;
	font: inherit;
}

summary {
	display: list-item;
}

:root {
  --white: #FFFFFF;
  --yellow: #FFD717;
  --blue: #0D63A5;
  --dark: #083358;
	--dark-blue: #001f3f;
  --purple: #393E6F;
	--light-grey: #F2F2F2;
	--grey: #808080;
	--red: #ff1717;
}

body {
	margin: 0;
	font-family: 'Nunito Sans', 'Roboto', 'Helvetica Neue', sans-serif;
	font-weight: 400;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

code {
	font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	font-weight: 600;
}
`;
