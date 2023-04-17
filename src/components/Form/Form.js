import { useState } from 'react'

const Form = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const userData = {
            name: name,
            phone: phone,
            address: address
        }
        onConfirm(userData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nombre:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                Telefono:
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </label>
            <label>
                Direccion:
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            </label>
            <button type="submit">Confirmar</button>
        </form>
    )
}

export default Form;