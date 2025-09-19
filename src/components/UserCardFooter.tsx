import { useContext } from "react"
import styles from "./userCard.module.css"
import { UserCardContext } from "../context/useContext"

const UserCardFooter = () => {
    const user = useContext(UserCardContext)

    if (!user) {
        return null
    }

    return (
        <footer className={styles.footer}>
            <p>{user.website}</p>
        </footer>
    )
}

export default UserCardFooter