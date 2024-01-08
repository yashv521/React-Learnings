import { useState } from "react"

function RatingSelect({ select }) {
    const [selected, setSelected] = useState(10)

    const handleChange = (e) => {
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }

    return (
        <ul className="rating">
            {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (                //creates an array with values 1 to 10
                <li key={num}>
                    <input
                        type="radio"
                        id={`num${num}`}
                        name="rating"
                        value={`${num}`}
                        onChange={handleChange}
                        checked={selected === num}
                    />
                    <label htmlFor={`num${num}`}> {`${num}`} </label>
                </li>
            ))}
        </ul>
    )
}

export default RatingSelect