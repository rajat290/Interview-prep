function Counter () {
    const [ count, setCount ] = React.useState(0);

    return (

        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(count +
            1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>

    )



}
/*
Every time setCount is called:

React creates a new Virtual DOM tree

Compares it with the previous one

Sees only the <h2> text changed → updates just that node in real DOM

*/