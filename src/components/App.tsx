import { useState } from "react"
import classes from './App.module.scss'
import { Outlet, Link } from "react-router-dom"

export const App = () => {
    const [count, setCount] = useState<number>(0)

    return (
        <div>
            <Link to="/about">about</Link>
            <br />
            <Link to="/shop">shop</Link>
            <h1 className={classes.value}>{count}</h1>
            <button className={classes.button} onClick={() => setCount(p => p + 1)}>+</button>
            <Outlet />
        </div>
    )
}