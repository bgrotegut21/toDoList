import emit from "./emit.js";

const elementEvents = () => {
    const makeElement = (element,className,source, content) => {
        let newElement;
        if (element) newElement = document.createElement(element);
        if (className) newElement.classList = className;
        if (source) newElement.src = source;
        if (content) newElement.textContent = content;
        return newElement;
    }

    const addElement = (parentElement,elements) => {
        let newParentElement = parentElement;
        if (!Array.isArray(elements)) {
            newParentElement.innerHTML = elements.outerHTML;
        } else {
            elements.forEach(element => newParentElement.innerHTML += element.outerHTML);
        }
        return newParentElement;
    }

    const addClickBindings = (elements,func) => {
        if (!Array.isArray(elements)) elements.addEventListener("click",func);
        else elements.forEach(element => element.addEventListener("click",func));
    }

    const removeClickBindings = (elements,func) => {
        if (!Array.isArray(elements)) elements.removeEventListener("click",func);
        else elements.forEach(element => element.removeEventListener("click",func));
    }

    return {makeElement, addElement, addClickBindings, removeClickBindings};

}

export default elementEvents
