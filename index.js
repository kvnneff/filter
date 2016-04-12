
/**
 * Module dependencies.
 */

var classes = require('classes-component');

/**
 * Filter `el`'s children with the given `fn(el, i)`.
 *
 * @param {Element} el
 * @param {Function} fn
 * @api public
 */

module.exports = function(el, fn, className){
  className = className || 'hide';
  for (var i = 0; i < el.children.length; ++i) {
    var child = el.children[i];
    if (fn(child, i)) {
      classes(child).remove(className);
    } else {
      classes(child).add(className);
    }
  }
};
