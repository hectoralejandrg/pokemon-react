import { useState } from "react";

const Search = ({ handleSearch, handleChangeAmount }) => {
    const [typeSearch, setTypeSearch] = useState('')
    const [amount, setAmount] = useState(10)

    return <div className="container-input">
        <input value={typeSearch} onChange={(e) => setTypeSearch(e.target.value)} />
        <input value={amount} onChange={(e) => setAmount(e.target.value)} />
        <button onClick={(e) => {
            handleSearch(typeSearch)
            handleChangeAmount(amount)
        }}>Search</button>
    </div>
}
export default Search;