import { useContext } from "react"
import { UserCardContext } from "../context/useContext"
import styles from "../components/usercard.module.css"

const UserCardBody = () => {
    const user = useContext(UserCardContext)

    if (!user) {
        return null
    }

    return (
        <div className={styles.body}>
            <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Email</span>
                <span className={styles.infoValue}>{user.email}</span>
            </div>
            <div className={styles.infoRow}>
                <span className={styles.infoLabel}>ID</span>
                <span className={styles.infoValue}>{user.id}</span>
            </div>
        </div>
    )
}

export default UserCardBody