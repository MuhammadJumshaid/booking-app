import './mailList.css'

const MailList = () => {
  return (
    <div className='mail'>
    <h1 className=' mailTitle'>Save time, save money!</h1>
    <span className='mailDesc'> Sign up and we will send the best deals to you </span>
    <div className= 'mailInputContainer'>
    <input type='text' placeholder='your Email' />
    <button>Subscribe</button>
    </div>     
    </div>
  )
}

export default MailList
