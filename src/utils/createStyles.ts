export const createStyles = (globalState: { [key: string]: any }) => {
    const {
        fontColor,
        fontSizeAdjustment,
        lineHeight,
        titleColor,
        textItalic,
        letterSpacing,
        textBold,
        textCase,
        titleBackgroundColor,
        highlightTitles,
        highlightLinks,
        hideImages,
        textAlignment,
        monochrome,
        highContrast,
        lowContrast,
    } = globalState;


    const excludeStyles = "#accessibility__widget";

    return `
      /* Global styles, excluding the widget and its descendants */
      html:not(${excludeStyles}) {
          ${monochrome ? `filter: grayscale(1) !important;` : ''};
          transition: transform 0.3s ease-in;
      }

      html:not(${excludeStyles}) *:not(${excludeStyles} *) {
          ${fontColor ? `color: ${fontColor} !important;` : ''}
          ${textAlignment !== 'initial' ? `text-align: ${textAlignment} !important;` : ''}
          ${textBold ? `font-weight: bold !important;` : ''}
          ${textCase !== 'initial' ? `text-transform: ${textCase} !important;` : ''}
          ${textItalic ? `font-style: italic !important;` : ''}
      }

      html:not(${excludeStyles}) img:not(${excludeStyles} img) {
          ${hideImages ? `display: none !important;` : ''}
      }

      html:not(${excludeStyles}) a:not(${excludeStyles} a) {
          ${highlightLinks &&
        `font-weight:bold !important; font-weight: bolder !important;text-decoration: underline;color:#0645AD;`
        }
      }

      html:not(${excludeStyles}) h1:not(${excludeStyles} h1),
      html:not(${excludeStyles}) h2:not(${excludeStyles} h2),
      html:not(${excludeStyles}) h3:not(${excludeStyles} h3),
      html:not(${excludeStyles}) h4:not(${excludeStyles} h4),
      html:not(${excludeStyles}) h5:not(${excludeStyles} h5),
      html:not(${excludeStyles}) h6:not(${excludeStyles} h6) {
          ${highlightTitles
            ? `border: solid 2px black !important; background-color: ${titleBackgroundColor || 'white'} !important; color: ${fontColor || 'black'} !important; font-weight:800`
            : ''}
          ${titleColor ? `color: ${titleColor} !important;` : ''}
          ${titleBackgroundColor ? `background-color: ${titleBackgroundColor} !important;` : ''}
          ${fontSizeAdjustment ? `zoom: ${1 + fontSizeAdjustment / 101} !important;` : ''}
          ${lineHeight ? `line-height: ${1.25 + lineHeight / 101} !important;` : ''}
          ${letterSpacing ? `letter-spacing: ${letterSpacing / 10}px !important;` : ''}
          ${highContrast ? `filter: contrast(2) !important;` : ''}
          ${lowContrast ? `filter: contrast(0.5) !important;` : ''}
      }

      html:not(${excludeStyles}) p:not(${excludeStyles} p),
      html:not(${excludeStyles}) button:not(${excludeStyles} button),
      html:not(${excludeStyles}) li:not(${excludeStyles} li),
      html:not(${excludeStyles}) ol:not(${excludeStyles} ol) {
          ${fontSizeAdjustment ? `zoom: ${1 + fontSizeAdjustment / 101} !important;` : ''}
          ${lineHeight ? `line-height: ${1 + lineHeight / 101} !important;` : ''}
          ${letterSpacing ? `letter-spacing: ${letterSpacing / 10}px !important;` : ''}
          ${highContrast ? `filter: contrast(2) !important;` : ''}
          ${lowContrast ? `filter: contrast(0.5) !important;` : ''}
      }     
      `
};
