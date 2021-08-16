import HeaderImg from "./Headerimg"
import HeaderInput from "./HeaderInput"
import HeaderSvg from "./HeaderSvg"

function Header(){
    return(
        <header className="header">
        <div className="left-menu">
        <HeaderSvg/>
        <HeaderImg/>
        </div>
        <div className="search">
        <HeaderInput/>
        </div>
      </header>
    )
}
export default Header