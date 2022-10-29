"use strict";

// class Cs142TemplateProcessor {
//   /** @param {string} template */
//   constructor(template) {

//   }

//   /** @public */
//   fillIn()
// }

/**
 * @constructor
 * @param {string} template
 */
function Cs142TemplateProcessor(template) {
  this.template = template;
}

/**
 * @param {Record<string, unknown>} dictionary
 */
Cs142TemplateProcessor.prototype.fillIn = function (dictionary) {
  return this.template.replace(
    /{{[A-Za-z]+\w*}}/g,
    (match) => dictionary[match.slice(2, -2)],
  );
};
