/**
 * @path ch11/11.13/11.13.1/11.13.1-4-28gs.js
 * @description Strict Mode - SyntaxError is thrown if the identifier 'Math.PI' appears as the LeftHandSideExpression of simple assignment(=)
 * @onlyStrict
 * @negative NotEarlyError
 */
"use strict";
throw NotEarlyError;
Math.PI = 20;
