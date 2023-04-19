import { useState } from 'react'
import "../Form/Form.css"

const Form = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [confirmEmail, setConfirmEmail] = useState('')
    const [error, setError] = useState('')
    const [showError, setShowError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name || !phone || !email || !confirmEmail) {
            setError('DEBE COMPLETAR TODO EL FORMULARIO ANTES DE FINALIZAR LA COMPRA')
            setShowError(true)
            setTimeout(() => setShowError(false), 5000)
            return
        }
        if (email !== confirmEmail) {
            setError('LOS EMAILS NO COINCIDEN')
            setShowError(true)
            setTimeout(() => setShowError(false), 5000)
            return
        }
        const userData = {
            name: name,
            phone: phone,
            email: email,
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
                <p className='labelForm'>Email:</p> 
                <input className='checkoutFormInput' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                <p className='labelForm'>Confirmar email:</p> 
                <input className='checkoutFormInput' type="text" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} />
            </label>
            <button className='checkoutSubmitFormButton' type="submit">Confirmar</button>
        </form>
    )
}

export default Form;