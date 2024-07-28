import { useParams } from "react-router-dom"


export function ProfileDetails() {
    const params = useParams()     
    return (
        <div>
            <h1>Profile Details</h1>
        </div>
    )
}