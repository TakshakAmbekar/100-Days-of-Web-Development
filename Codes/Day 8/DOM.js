/*
The Document Object Model serves as the interface between HTML documents and JavaScript, enabling scripts to dynamically access and update the content, structure, and style of a document.
The DOM represents the HTML structure of a webpage in a tree-like format, where each node corresponds to an element in the document. 

DOM creation process:
    1. HTML Loading: the browser first loads the HTML document
    2. HTML Parsing: as the browser loads the HTML, it begins parsing it from top to bottom
    3. DOM Tree Creation: During parsing, the browser constructs the DOM tree. It represents the hierarchical structure of the HTML document

HTML
├── HEAD
│   ├── META
│   ├── TITLE
│   └── LINK
└── BODY
    ├── H1
    ├── DIV
    │   ├── P
    │   ├── BUTTON
    │   └── A
    └── SECTION
        ├── ARTICLE
        │   ├── P
        │   └── SPAN


Window Object: is an object that the browser automatically creates and puts at the top of the heirarchy. It is like an API that is used to set and access all the properties and methods of the browser.
Document Object: when an HTML document is loaded into a window, it becomes a document object. It has various properties that refer to other objects which allow access to and modification of the 
    content of the web page. Document object is a property of the window object.
Form Object: is represented by form tags
Link Object: is represented by link tags
Anchor Object: is represented by href tags
Form Control Elements: elements like text fields, buttons, radio buttons, checkboxes, etc.

Searching for elements: document.getElementById(), document.getElementByClassName(), document.querySelector(), document.querySelectorAll()
Modifyng elements: innerHTML, setAttribute(), style
Event handling: event listeners can be added to DOM elements to respond using user interactions such as clicks and key presses.

CSSOM is CSS Object Model that is created concurrently with DOM by the browser.
Render tree is made by combining DOM and CSSOM which represents the document's content and styles.


element.querySelectorAll(selectors) selects all the child nodes of the 'element' with the given 'selectors', and returns them in a static NodeList object. Selectors are CSS selectors like ids, classes, types, etc.

element.addEventListener(event, listener, useCapture)
event: can be any valid JS event. Events are used without 'on' prefix like 'click' instead of 'onclick', or 'mousedown' instead of 'onmousedown'
listener (handler function): can be a JS function which responds to the event's occurrence
useCapture: is an optional parameter used to control event propagation. A boolean value is passed where 'true' denotes capturing phase and 'false' denotes the bubbling phase.


Event Bubbling is a method of event propagation in the HTML DOM API when an event is in an element inside another element, and both elements have registered a handle to that event. 
It is a process that starts with the element that triggered the event and then bubbles up to the containing elements in the hierarchy. 
In event bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements.

Event Delegation is a technique where you add a single event listener to parent element instead of adding multiple event listeners to each child element. 
This takes advantage of even bubbling, where an even triggered on a child element propagates to its parent elements.
By placing the event listener on a common ancestor, you can capture events from all its children
*/
