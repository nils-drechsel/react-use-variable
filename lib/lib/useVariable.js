"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
exports.useVariable = (variable) => {
    const v = react_1.useRef(variable);
    v.current = variable;
    return v;
};
