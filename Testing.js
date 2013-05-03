/*!
 * Date.strftime Testing script
 * KILLHAPPY. 2013-05-03
 */

require("./Date.strftime");

var TestingDate = new Date();
// Shorthand format one [ like 2013-05-03 ]
console.log( 'Format one: ' + TestingDate.strftime( Date.Formats.O ) );
// Shorthand format two [ like 05/03/13 ]
console.log( 'Format two: ' + TestingDate.strftime( Date.Formats.T ) );
// Shorthand format three [ like 2013年05月03日 ]
console.log( 'Format three: ' + TestingDate.strftime( Date.Formats.C ) );
// Shorthand format four [ like 2013-05-03 22:56:23 ]
console.log( 'Format four: ' + TestingDate.strftime( Date.Formats.F ) );
