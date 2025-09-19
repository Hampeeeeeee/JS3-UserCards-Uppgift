import { useQuery } from "@tanstack/react-query";
import type { Users } from "../types/user";
import LoadSpinner from "./LoadSpinner";
import styles from "../components/usercard.module.css";
import UserCardHeader from "./UserCardHeader";
import UserCardBody from "./UserCardBody";
import { UserCardContext } from "../context/useContext";
import UserCardFooter from "./UserCardFooter";

const UserCardTanstack = () => {
  const {
    data: users,
    isPending,
    isError,
    error,
    isSuccess,
  } = useQuery<Users[]>({
    queryKey: ["users"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
        response.json()
      ),
  });

  return (
    <>
      <h2>User Cards</h2>
      <div className={styles.cardsContainer}>
        {isPending && <LoadSpinner />}
        {isError && <p>Something went wrong: {error.message}</p>}
        {isSuccess && users && (
          <div>
            {users.map((user) => (
              <UserCardContext.Provider key={user.id} value={user}>
                <div className={styles.card}>
                  <UserCardHeader />
                  <UserCardBody />
                  <UserCardFooter />
                </div>
              </UserCardContext.Provider>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default UserCardTanstack;
