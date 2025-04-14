# React Crash Course: From Zero to Hero

## Section 2: Basic: Getting Started

### General notes

- [Udemy Course URL](https://fiserv.udemy.com/course/react-crash-course-from-zero-to-hero/learn/lecture/44473502#overview)
- [Github Course repo](https://github.com/dvasyliev/react-crash-course/tree/f11a88e8f9e8b90a688b7f6ebb095a7c71a7402f)
- [Create React App Dev](https://create-react-app.dev/docs/getting-started/)
- [Icons and stickers](https://www.flaticon.com)
- [HTML to JSX Transforma](https://transform.tools/html-to-jsx)

### What is React
- DOM: ![DOM](./images/DOM.png)
- Virtual DOM: Virtual DOM is the lightweight copy of the real DOM ![Virual DOM](./images/virtual_DOM.png)
- Components: ![components](./images/components.png)
- One way data flow: ![](./images/props_one_way_data_flow.png)

### Develop Tools
- Chrome extention plugging: [React Developer Tools](https://react.dev/learn/react-developer-tools)

## Section 3: Basic: Creating Component
### Creating project and components
- create project `npx create-react-app react-crash-course`
- to start in dev: `npm start`
- to build for production version `npm start build`
### Importing and Exporting Components
- React component starts with Pascal case
- import and export will let us use components in other files.
    - default export
    - named export (recommended)
### Writing Markup with JSX
- JSX requirment:
    - Component or return, should have only one parent element, for JS to work properly
    - Pros and attributes should have camel case. JSX turns into JS object and attributes become keys of these objects.
        - ex: class == className (in JSX) [HTML to JSX](https://transform.tools/html-to-jsx)
### Using Variables in JSX
- double curly braces ({{ }}) are used to embed JavaScript expressions within your HTML
    - ex1: `<div style={{ color: 'blue', fontSize: '20px' }}>`
### Passing Props to a Component
- props are used to communicate to eachother between components, they are similar to HTML attributes
- all props are grouped into one object which are passed through components
### Responding to Events
- handle function is used for handling events
### Fragment Component
- `<></>`
### Conditional Rendering

