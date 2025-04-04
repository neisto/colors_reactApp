import classes from '../components/Button.module.css'
import ColorsRandom from './RandomColors'

export default function Button({children}) {

    return (
        <button className={classes.btn} onClick={() => App()}>{children}</button>
        // <button></button>

    )
}