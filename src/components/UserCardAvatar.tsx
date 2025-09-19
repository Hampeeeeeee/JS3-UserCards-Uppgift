import { UserCardContext } from "../context/useContext"
import { useContext } from "react"
import styles from "./userCard.module.css"

const UserCardAvatar = () => {
    const user = useContext(UserCardContext)

    if (!user) {
        return null
    }

    const userImg = user.avatarUrl

    return (
        userImg
            ? <img className={styles.avatar} src={userImg} />
            : <div className={styles.avatar}></div>
    )
}

export default UserCardAvatar