
import { useRouteError } from "react-router";
// this hook gives more info about the error

export const Error = () => {

    const err = useRouteError();

    return (
        <div>
            <h1> Oops!!</h1> 
                <h1>Something went wrong</h1>
                <h4>{err.data}</h4>
        </div>
    )
}