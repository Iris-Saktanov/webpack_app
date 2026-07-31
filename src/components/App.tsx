import { useState } from "react"
import classes from './App.module.scss'
import { Outlet, Link } from "react-router-dom"
import exampleJpg from '@/assets/example.jpeg'
import examplePng from '@/assets/example.png'
import ExampleSvg from '@/assets/example.svg'



export const App = () => {
    const [count, setCount] = useState<number>(0)

    if (__PLATFORM__ === 'mobile') {
        return <div>MOBLIE</div>
    }

    if (__PLATFORM__ === 'desktop') {
        return <div>DESKTOP</div>
    }

    return (
        <div>
            <h1>Platform = {__PLATFORM__}</h1>
            <div>
                <img src={exampleJpg} alt="" />
                <img width={400} height={600} src={examplePng} alt="" />
                <ExampleSvg width={300} height={300} />
            </div>
            <Link to="/about">about</Link>
            <br />
            <Link to="/shop">shop</Link>
            <h1 className={classes.value}>{count}</h1>
            <button className={classes.button} onClick={() => setCount(p => p + 1)}>+</button>
            <Outlet />
        </div>
    )
}