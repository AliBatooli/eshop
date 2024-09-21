import BannerAds from "@/Components/BannerAds";
import Footer from "@/Components/Footer/Footer";
import IncredibleOffers from "@/Components/incredibleOffers";
import MainSlider from "@/Components/MainSlider";
import OffersCarusel from "@/Components/OffersCarusel";
import SellForCAtegory from "@/Components/SellForCAtegory";
import SevenComponents from "@/Components/SevenComponents";
import SuggestInCategory from "@/Components/SuggestInCategory";
import Context from "@/ContextApi/context";
import * as fetchRep from "@/Repository/FetchApiRepository";

export default function Home(props) {
  return (
    <>
      {/* props ro ke az severSide gereftim , baraye inke az contextApi estefade konim
    , bayad provide konim ta berizimesh toye context ==> mainsliderData mirize to context */}
      <Context.Provider value={{ MainSliderImage: props.mainSliderData }}>
        <MainSlider />
        <SevenComponents data={props.SevenComponentData} />
        <OffersCarusel products={props.caruselOffersData} />
        <BannerAds data={props.mainSliderData} />
        <SellForCAtegory data={props.categoryPrdData} />
        <SuggestInCategory data={props.categoryPrdData} />
        <IncredibleOffers products={props.caruselOffersData} />
        <Footer />
      </Context.Provider>
    </>
  );
}

// baraye inke img haye slider ra server side begirim bayan inja get bezanim
// va az tariqe props be component bedim
export async function getStaticProps() {
  const mainSliderResponse = await fetchRep.Get("public/mainSlider");
  const mainSliderData = await mainSliderResponse.json();
  // baraye daryaft url icon ha az server
  const SevenComponentResponse = await fetchRep.Get("SevenIcons");
  const SevenComponentData = await SevenComponentResponse.json();
  // in get baraye carosel hast - data be componente
  // Offerscarusel prop mishe va az oonja baraye carusel mifrestim
  const caruselOffersResponse = await fetchRep.Get("products/incredibleOffers");
  const caruselOffersData = await caruselOffersResponse.json();
  //category
  const categoryPrdResponse = await fetchRep.Get("products/categories");
  const categoryPrdData = await categoryPrdResponse.json();

  return {
    props: {
      mainSliderData,
      SevenComponentData,
      caruselOffersData,
      categoryPrdData,
    },
    revalidate: 1,
  };
}
