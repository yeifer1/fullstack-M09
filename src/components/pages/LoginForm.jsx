import useForm from '../hook/useForm'
import { useAuthContext } from '../hook/useAuthContext'
import { useNavigate } from 'react-router-dom'
import { loginUserService } from '../services/userServices' 
import Navbar from '../Navbar/Navbar'
import './LoginForm.css'
const LoginForm = () => {
  const { login } = useAuthContext()

  const navigate = useNavigate()

  // Paso 1: crear un objeto con valores iniciales:
  const datos = {
    email: '',
    password: ''
  }

  // Paso 2: Creo la función que se ejecutara al enviar el formulario
  const sendData = async (data) => {
    try {
      const response = await loginUserService(data)
      if (response.status === 200) {
        // Guardamos el token en el localStorage del navegador
        // Este dato permanece aún si el navegador se cierra y se vuelve a abrir.
        //localStorage.setItem('token', response.data.token)
        login(response.data.token)
        navigate('/dashboard')
      }
    } catch (error) {
      console.error('Ocurrio un error en Login', error.message)
    }
  }

  // Paso 3: Hacer uso de mi custom hook
  const { input, handleInputChange, handleSubmit } = useForm(sendData, datos)

  return (
    <>
    <Navbar/>
    <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit}>
        <img
          className='mb-4'
          src={"https://cdn-icons-png.flaticon.com/512/272/272456.png"}
          alt=''
          width={72}
          height={57}
        />

        <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>
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

        <button className='btn btn-primary w-100 py-2' type='submit'>
          Sign in
        </button>
        <p className='mt-5 mb-3 text-body-secondary'>© 2017–2023</p>
      </form>
    </main>
    </>
  )
}
export default LoginForm