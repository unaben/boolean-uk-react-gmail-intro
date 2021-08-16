import MainArticleHeader from "./MainArticleHeader"
import MainArticleSectionOne from "./MainArticleSectionOne"
import MainArticleSectionTwo from "./MainArticleSectionTwo"
import MainArticleTitle from "./MainArticleTitle"

function MainArticle(){
    return(
        <article className="email-content">
          <div className="title">
          <MainArticleTitle/>
          </div>
          <MainArticleHeader/>
          <MainArticleSectionOne/>
          <MainArticleSectionTwo/>
        </article>
    )
}
export default MainArticle