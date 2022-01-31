// cSpell:ignore Lato, latoRegular, latoBold, ieFix

import styled, { createGlobalStyle } from 'styled-components'
import { PRIMARY_FONT, PRIMARY_COLOR, BREAKPOINT_SM_MIN, BREAKPOINT_XS_MAX } from './constants/constants'

export const Reset = createGlobalStyle`
  ${require('reset-css')};

  html,
  body,
  input,
  button {
    font-family: ${PRIMARY_FONT};
    color: ${PRIMARY_COLOR};
  }
  @media screen and (min-width: ${BREAKPOINT_SM_MIN}) {
    html
    body,
    input,
    button {
      font-size: 10px;
    }
  }
  @media screen and (max-width: ${BREAKPOINT_XS_MAX}) {
    html,
    body,
    input,
    button {
      font-size: calc(0px + 10 * (100vw / ${parseInt(BREAKPOINT_XS_MAX)}));
    }
  }
`

export const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'latoBold';
    src: url(${require('./assets/fonts/Lato-Bold.ttf')});
  }
  @font-face {
    font-family: 'latoRegular';
    src: url(${require('./assets/fonts/Lato-Regular.ttf')});
  }
`

export const Icons = createGlobalStyle`
  @font-face {
    font-family: 'icons';
    src: url(${require('./assets/icons/icons.eot?j2a5az')});
    src: url(${require('./assets/icons/icons.eot?j2a5az#iefix')}) format('embedded-opentype'),
      url(${require('./assets/icons/icons.ttf?j2a5az')}) format('truetype'), url(${require('./assets/icons/icons.woff?j2a5az')}) format('woff'),
      url(${require('./assets/icons/icons.svg?j2a5az#icomoon')}) format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }

  [class^='icon-']::before,
  [class*=' icon-']::before {
    font-family: 'icons' !important;
    speak: never;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-delete:before {
    content: '\\e9ad';
  }
  .icon-important:before {
    content: '\\e9d9';
  }
  .icon-completed:before {
    content: '\\ea10';
  }
  
/* @font-face {
	font-family: 'icons';
	src: url('./assets/icons/icons.eot?j2a5az');
	src: url('./assets/icons/icons.eot?j2a5az#iefix') format('embedded-opentype'),
		url('./assets/icons/icons.ttf?j2a5az') format('truetype'), url('./assets/icons/icons.woff?j2a5az') format('woff'),
		url('./assets/icons/icons.svg?j2a5az#icomoon') format('svg');
	font-weight: normal;
	font-style: normal;
	font-display: block;
}

[class^='icon-']::before,
[class*=' icon-']::before {
	font-family: 'icons' !important;
	speak: never;
	font-style: normal;
	font-weight: normal;
	font-variant: normal;
	text-transform: none;
	line-height: 1;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.icon-delete:before {
	content: '\e9ad';
}
.icon-important:before {
	content: '\e9d9';
}
.icon-completed:before {
	content: '\ea10';
} */
`
