import '../styles/Logo.css'
import LogoImg from './LogoImg'
import LogoText from './LogoText'

const Logo = () => (
  <figure className="w-full flex bg-sky-300 h-40 items-center relative">
    <LogoText />
    <LogoImg />
  </figure>
)

export default Logo
