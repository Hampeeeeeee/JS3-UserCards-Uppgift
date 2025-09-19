import { useContext } from "react"
import { UserCardContext } from "../context/useContext"
import styles from "./userCard.module.css"
import UserCardAvatar from "./UserCardAvatar"


const UserCardHeader = () => {
    const user = useContext(UserCardContext)

    if (!user) {
        return null
    }

    return (
        <header className={styles.header}>
            <UserCardAvatar />
            <div>
                <h2 className={styles.name}>{user.name}</h2>
                <p className={styles.company}>{user.company.name}</p>
            </div>
        </header>
    )
}

export default UserCardHeader