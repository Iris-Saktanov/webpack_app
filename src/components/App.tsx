import { useState } from "react"

export const App = () => {
    const [count, setCount] = useState<number>(0)

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(p => p + 1)}>+</button>
        </div>
    )
}