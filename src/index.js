export const $ = function(selector, el = document) {
  return el.querySelector(selector);
};

export const $$ = function(selector, el = document) {
  return el.querySelectorAll(selector);
};

export const getPrefixedStyle = function(prop, val) {
  const prefixedStyle = {};

  ['', '-webkit-', '-moz-', '-ms-', '-o-'].forEach(prefix => {
    prefixedStyle[prefix + prop] = val;
  });

  return prefixedStyle;
};

export const addStyles = function(el, styles = {}) {
  Object.assign(el.style, styles);
};

export const matches = function(el, selector) {
  const compatibleMathes =
    el.matches ||
    el.matchesSelector ||
    el.msMatchesSelector ||
    el.webkitMatchesSelector;

  return compatibleMathes.call(el, selector);
};

export const closest = (inEl, inSelector, inParent = document) => {
  let parent = inEl.parentElement;

  while (parent) {
    if (matches(parent, inSelector)) return parent;
    if (parent === inParent) return null;
    parent = parent.parentElement;
  }

  return null;
};

// return the global offset of an element (top, left, width, height)
export const getGlobalOffset = function(
  elem,
  ancestorElem = document.documentElement
) {
  let top = elem.offsetTop;
  let left = elem.offsetLeft;
  const width = elem.offsetWidth;
  const height = elem.offsetHeight;

  while (elem.offsetParent && elem.offsetParent !== ancestorElem) {
    elem = elem.offsetParent;
    top += elem.offsetTop;
    left += elem.offsetLeft;
  }

  return {
    top: top,
    left: left,
    width: width,
    height: height,
  };
};
