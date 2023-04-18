import { useState } from 'react'
import "../Form/Form.css"

const Form = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [error, setError] = useState('')
    const [showError, setShowError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name || !phone || !address) {
            setError('DEBE COMPLETAR TODO EL FORMULARIO ANTES DE FINALIZAR LA COMPRA')
            setShowError(true)
            setTimeout(() => setShowError(false), 5000)
            return
        }
        const userData = {
            name: name,
            phone: phone,
            address: address
        }
        onConfirm(userData)
    }

    return (
        <form className='formCheckout' onSubmit={handleSubmit}>
            <p>Completa el formulario para finalizar la compra:</p>
            {showError && <p className='error'>{error}</p>}
            <label>
                <p className='labelForm'>Nombre:</p>
                <input className='checkoutFormInput' type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                <p className='labelForm'>Telefono:</p> 
                <input className='checkoutFormInput' type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </label>
            <label>
                <p className='labelForm'>Direccion:</p> 
                <input className='checkoutFormInput' type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            </label>
            <button className='checkoutSubmitFormButton' type="submit">Confirmar</button>
        </form>
    )
}

export default Form;