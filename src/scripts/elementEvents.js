import emit from "./emit.js";

import "../styles/board.css";
import "../styles/navigation.css";
import "../styles/styles.css"

const elementEvents = () => {
    const makeElement = (template) => {
        let newObject = template;
        let newObjectKeys = Object.keys(newObject);
        let newElement;

        if (newObject.element) newElement = document.createElement(newObject.element);
        else return new Error("object must include element")
        newObjectKeys.forEach(key => {
            if (key == "class") newElement.clasList = newObject[key];
            if (key == "source") newElement.src = newObject[key];
            if (key == "type") newElement.setAttribute("type",newObject[key]);
            if (key == "content") newElement.textContent = newObject[key];
            if (key == "placeholder") newElement.setAttribute("placeholder",newObject[key]);

        })

        newElement.isElement = true;
        return newElement;
    }

    const addElements = (parentElement,elements) => {
        let newParentElement = parentElement;
        newChildElement = elements;
        if (!Array.isArray(elements)) {
            if (!elements.isElement) newChildElement = makeElement(newChildElement);
            newParentElement.innerHTML = newChildElement.outerHTML;
        } else {
            newChildElement.forEach(element => {
                let currentElement = element;
                if (!element.isElement) currentElement = makeElement(element);
                newParentElement.innerHTML = newChildElement.outerHTML;
            })
        }
        return newParentElement;
    }

    const addBindings = (elements,func,binding) => {
        if (!Array.isArray(elements)) elements.addEventListener(binding,func);
        else elements.forEach(element => element.addEventListener(binding,func));
    }

    const removeBindings = (elements,func,binding) => {
        if (!Array.isArray(elements)) elements.removeEventListener(binding,func);
        else elements.forEach(element => element.removeEventListener(binding,func));
    }

    return {makeElement, addElements, addBindings, removeBindings};

}

export default elementEvents();
