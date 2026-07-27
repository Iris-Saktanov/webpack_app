import { useState } from "react"
import classes from './App.module.scss'

export const App = () => {
    const [count, setCount] = useState<number>(0)

    return (
        <div>
            <h1 className={classes.value}>{count}</h1>
            <button className={classes.button} onClick={() => setCount(p => p + 1)}>+</button>
        </div>
    )
}