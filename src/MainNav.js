import MainNavList from "./MainNavList"
import MainNavParagraph from "./MainNavParagraph"

function MainNav(){
    return(
        <nav className="email-toolbar">
          <MainNavList/>
          <div className="space"></div>
          <div>
            <MainNavParagraph/>
            <button>&lt;</button>
            <button>&gt;</button>
          </div>
        </nav>
    )
}
export default MainNav   