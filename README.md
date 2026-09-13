Project name : B14-A05 (DevStack)

-----------------------------------
Description : A simple DevStack application to manage your development technologies.

-----------------------------------
Technology that is used in this project :

React.js, 
Tailwind CSS, 
[DaisyUI --> badges], 
TypeScript, 
React-Toastify (NPM Package), 
React-Icons (NPM Package), 
JSON (for technology data), 
Vite (build tool)

-----------------------------------
features about this project :
1. has a responsive design
2. uses modern UI components
3. can add and remove items(technologies-cards) from the "Yours Stack" section
-----------------------------------
i) What is JSX, and why is it used in React?

Ans: JSX stands for javascript XML. JSX is used in React to describe the structure of the user interface in a more readable and makes it easier to visualize the UI components.

ii) What is the difference between props and state?

Ans: Props are used to pass data from a parent component to a child component. State is used to manage data that can change over time within a component.

iii) What does the useState hook do, and where did you use it in this project?

Ans: The useState hook allows you to declare a state variable and a function to update that variable. In this project, I used the useState hook to manage the state of the technologies stack, such as adding or removing items from the "Yours Stack" section.

iv) What does the useEffect hook do, and why did you need it to load the JSON data?

Ans: The useEffect hook allows you to perform side effects in functional components, such as data fetching or subscriptions. In this project, I used the useEffect hook to load the JSON data when the component mounts.

v) Why does every item in a .map() list need a unique key prop?

Ans: Every item in a .map() list needs a unique key prop to help React identify which items have changed, been added, or removed. This improves performance and helps React efficiently update the UI.

vi) What is conditional rendering? Show one place you used it (example: the empty stack message).

Ans: Conditional rendering allows you to render different UI elements based on certain conditions. In this project, I used conditional rendering to display an empty stack message when there are no items in the "Yours Stack" section.

vii) How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Ans: Data is passed from a parent component to a child component using props. The parent component can pass data as attributes to the child component.To send data back from a child to a parent you can pass a function to the child as a prop. The child can then call that function to send the data back.
