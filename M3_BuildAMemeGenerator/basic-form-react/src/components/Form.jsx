import { useState } from "react"

export default function Form() {
    const [firstName, setFirstName] = useState("")
    
    console.log(firstName)
    
    function handleChange(event) {
        setFirstName(event.target.value)
    }
    
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
            />
        </form>
    )
}