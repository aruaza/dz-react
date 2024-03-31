import {Component} from "react";
import styles from  './mainPage.module.css'

class MainPage extends Component{
    render() {
        return(
            <>
            <h1 className={styles.title}>Main Page</h1>
                <p className={styles.mainText}>{this.props.text}</p>
            </>
        )
    }
}

export default MainPage