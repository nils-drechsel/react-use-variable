import { useEffect, useState, useRef } from 'react';


export const useVariable = <TYPE>(variable: TYPE) => {

    const v = useRef(variable);
    v.current = variable;

    return v;
}
