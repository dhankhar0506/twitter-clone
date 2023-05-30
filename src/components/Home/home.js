import { Fragment } from "react";
import styles from './home.module.css';


export default function Home(){
    return(
        <Fragment>
           <h1 className={styles.heading}>I am a home page</h1>
        </Fragment>
    )
}