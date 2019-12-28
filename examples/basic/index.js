import './_polyfills';
import { $, $$, addStyles, getPrefixedStyle } from '@frontant/utils-dom';

window.onload = () => {
  const containerElem = $('.container');
  const listElem = $('ul', containerElem);

  addStyles(listElem, { 'list-style-type': 'none', padding: 0, margin: 0 });

  const listItemsElemArr = $$(':scope > li', listElem);

  listItemsElemArr.forEach(el => {
    addStyles(el, {
      margin: '10px',
      padding: '10px',
      border: '1px solid white',
      ...getPrefixedStyle('border-radius', '10px'),
    });
  });
};
