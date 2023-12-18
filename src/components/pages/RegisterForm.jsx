import useForm from '../hook/useForm'
import { useNavigate } from 'react-router-dom'
import { registerUserService } from '../services/userServices'
import Navbar from '../Navbar/Navbar'
import './RegisterForm.css'
import logoBoleto from '../Navbar/logoBoleto.png'

const RegisterForm = () => {
  // usamos el hook useNavigate para redireccionar al usuario
  const navigate = useNavigate()

  // Paso 1: crear un objeto con valores iniciales:
  const datos = {

    name: '',
    email: '',
    password: ''

  }

  // Paso 2: Creo la función que se ejecutara al enviar el formulario
  const sendData = async (data) => {
    try {
      const response = await registerUserService(data)
      if (response.status === 201) {
        console.log('Usuario creado exitosamente')

        navigate('/login')
      }
      console.log(response)
    } catch (error) {
      console.error('Ocurrio un error en Signup', error.message)
    }
  }

  // Paso 3: Hacer uso de mi custom hook
  const { input, handleInputChange, handleSubmit } = useForm(sendData, datos)

  return (

    <>
      <Navbar />

      <main className='form-signin w-100 m-auto'>
        <form onSubmit={handleSubmit}>
          <img className='mb-4' src='https://cdn-icons-png.flaticon.com/512/3631/3631620.png' alt='' width='72' height='57' />
          <h1 className='h3 mb-3 fw-normal'>Please sign up</h1>

          <div className='form-floating'>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              value={input.name}
              onChange={handleInputChange}
              placeholder='name'
            />
            <label htmlFor='first_name'>First Name</label>
          </div>

          <div className='form-floating'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={input.email}
              onChange={handleInputChange}
              placeholder='name@example.com'
            />
            <label htmlFor='email'>Email address</label>
          </div>

          <div className='form-floating'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={input.password}
              onChange={handleInputChange}
              placeholder='Password'
            />
            <label htmlFor='password'>Password</label>
          </div>

          <button className='w-100 btn btn-lg btn-primary' type='submit'>Sign up</button>

          <p className='mt-5 mb-3 text-muted'>© 2017–2023   </p>
          <img src={logoBoleto.png} alt='' width='100px' />
        </form>
      </main>
    </>
  )
}
export default RegisterForm
