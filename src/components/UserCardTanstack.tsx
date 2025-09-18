import React, { useContext } from "react"
import { useQuery } from "@tanstack/react-query"
import type { Users } from "../types/user"
import LoadSpinner from "./LoadSpinner"

const UserCardTanstack = () => {
    const {
        data: users,
        isPending, 
        isError, 
        error,
        isSuccess

    }   = useQuery<Users>({
        queryKey: ["users"],
        queryFn: () => fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
    })

    return (
        <>
            <h2>Usercards</h2>
            {isPending && <LoadSpinner />}
            {isError && <p>Something went wrong: {error.message}</p>}
            {isSuccess && users && (
                <div>
                    {users.map((user) =>
                        <header>

                        </header>
                    )}
                </div>
            )}
        </>
    )
}