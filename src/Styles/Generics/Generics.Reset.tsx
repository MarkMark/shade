import { CSS_GLOBAL } from '../Settings/Settings.Global'
import { createGlobalStyle } from 'styled-components'
import { rem } from 'polished'

export const GReset = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Overwrites */
  body {
    font-family: ${CSS_GLOBAL.fontFamily};
    font-size: ${CSS_GLOBAL.fontSizeRegular};
    font-weight: ${CSS_GLOBAL.fontWeightRegular};
    line-height: ${CSS_GLOBAL.lineHeight};
  }

  address,
  h1, h2, h3, h4, h5, h6,
  blockquote, p, pre,
  dl, ol, ul,
  figure,
  hr,
  table,
  fieldset {
    margin-bottom: ${CSS_GLOBAL.p2};
  }

  h1 {
    font-size: ${rem('28px')};
  }
  h2 {
    font-size: ${rem('26px')};
  }
  h3 {
    font-size: ${rem('24px')};
  }
  h4 {
    font-size: ${rem('22px')};
  }
  h5 {
    font-size: ${rem('20px')};
  }
  h6 {
    font-size: ${rem('18px')};
  }

`
