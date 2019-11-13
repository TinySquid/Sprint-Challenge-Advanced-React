- [x] Why would you use class component over function components (removing hooks from the question)?

Class components have state and lifecycle methods (componentDidMount, componentDidUpdate, componentWillUnmount) that functional components do not have. You would use a functinal component when you only want to render props or something simple (without state).

- [x] Name three lifecycle methods and their purposes.

Mounting - Updating - Unmounting
componentDidMount - This method is triggered after the component has initialized it's constructor and is rendered to the DOM.

componentDidUpdate - This method fires when the component's state changes either through setState or when forceUpdate() is called on it.

componentWillUnmount - This method will fire when the component is removed from the DOM. It allows you to write cleanup code for whatever your component was doing before. (Like closing open sockets, etc)

- [x] What is the purpose of a custom hook?

Custom hooks are great because they can be written to cover many things like form handling, animation, timers, etc. They are a layer of abstraction that makes your code cleaner (only when it fits an actual use case!) and they are re-usable via importing into other components.

- [x] Why is it important to test our apps?

1. Testing makes our code more robust because we test for edge cases and general usage to find bugs. 

2. It makes bugs show up quicker than if we were to break something and then have to manually reproduce the steps to find it. 

3. It acts as documentation for how the code should work (literally because it tests for functionality).

4. Testing shows that we know what are code is meant to do and it will always stay that way even after refactoring, because the functionality is what's being tested, not the implementation.