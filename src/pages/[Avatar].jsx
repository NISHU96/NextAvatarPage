import NavBar from "../Components/NavBar/NavBar.components";
import MainPanel from "../Components/Main-Panel/MainPanel.components";
import Banner from "../Components/Banner/Banner.components";
import Categories from "../Components/Categories/Categories.components";
import RecommendedBox from "../Components/RecommendationBox/Recommendation.components";
import TrendingBox from "../Components/TrendingBox/TrendingBox.components";
import Panels from "../Components/Panels/Panels.components";
import TrendingBrands from "../Components/TrendingBrands/TrendingBrands.components";
import HistoryProducts from "../Components/HistoryProducts/HistoryProducts.components";
import Artwork from "../Components/Artwork/Artwork.components";
import Footer from "../Components/Footer/Footer.components";

export default class AvatarPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <NavBar />
        <MainPanel />
        <Banner />
        <Categories />
        <RecommendedBox />
        <TrendingBox />
        <Panels />
        <TrendingBrands />
        <HistoryProducts />
        <Artwork />
        <Footer />
      </div>
    );
  }
}
