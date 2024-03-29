import '../styles/app.css'
import logo from '../assets/cat.svg'
import { Counter } from './Counter'

export const App = () => {
  return (
    <div className='container--main'>
      <header className='header--wrapper'>
        <h1>Create Application Template</h1>
        <h2>Configured and under your control!</h2>
        <h2>Access the template <a href='https://www.npmjs.com/package/create-application-template' rel='noreferrer' target='_blank'>here</a>...</h2>
      </header>
      <section className='section--wrapper'>
        <code className='card--env'>[NODE_ENV={process.env.NODE_ENV}]</code>
        <code className='card--env'>[EXAMPLE={process.env.EXAMPLE}]</code>
      </section>
      <section className='section--wrapper'>
        <img src={logo} className='logo--app' alt='logo' />
      </section>
      <section className='section--wrapper'>
        <Counter />
      </section>
    </div>
  )
}
