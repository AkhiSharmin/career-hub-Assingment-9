import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="collapse">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-slate-300 text-black text-2xl font-semibold rounded shadow">
                When using context Api?
            </div>
            <div className="collapse-content text-black bg-gray-300">
                <p className='shadow-2xl p-5'>when numerous components at various levels of the component tree need to access the same data or state. Manually transferring the props down the tree in this situation could be difficult and result in prop drilling.
                when it is preferable to avoid passing props through numerous intermediary components that never actually use the data. Your code may become clearer and simpler to comprehend as a result.when you want to give a prop a default value that child components can override. In this situation, you may make a default value available to all child components using the Context API.</p>
            </div>
        </div>

        <div className="collapse my-4">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-slate-300 text-black text-2xl font-semibold rounded shadow">
                What is custom hook ?
            </div>
            <div className="collapse-content text-black bg-gray-300">
                <p className='shadow-2xl p-5'>When we need to communicate logic between several JavaScript functions, we construct Custom Hook, a JavaScript function. It enables you to reuse some code across different sections of your project .A custom hook, whose name begins with the word "use," is a unique JavaScript function that can be used to call other hooks. A unique signature is not necessary for a custom hook .Reusable functions are hooks. We can extract component logic into a custom Hook when it has to be used by numerous components. Use is the first word in Custom Hooks..</p>
            </div>
        </div>

        <div className="collapse my-4">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-slate-300 text-black text-2xl font-semibold rounded shadow">
                What is uesRef and what does it do?
            </div>
            <div className="collapse-content text-black bg-gray-300">
                <p className='shadow-2xl p-5'>useRef() is a built-in React hook that accepts one argument as the initial value and returns a reference (known as ref). The reference is an object having a special property current 1  2.The main use case for the useRef hook is to access a DOM child directl..</p>
            </div>
        </div>

        <div className="collapse my-4">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-slate-300 text-black text-2xl font-semibold rounded shadow">
                What is useMemo?
            </div>
            <div className="collapse-content text-black bg-gray-300">
                <p className='shadow-2xl p-5'>useMemo is a React hook that memorizes the output of a function 3. It accepts two arguments: a function and a list of dependencies. useMemo will call the function and return its return value. Then, every time you call useMemo again, it will first check if any dependencies have changed 3.The main use case for useMemo is to keep expensive, resource-intensive functions from needlessly running..</p>
            </div>
        </div>
        
        </div>
    );
};

export default Blog;