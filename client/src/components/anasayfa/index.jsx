import ScrollToTop from "@/hooks/scroll-to-top";
import Footer from "@/layout/footers/footer";
import Header from "@/layout/headers/header";
import React from "react";
import AboutArea from "../../common/about-area";
import FeatureArea from "./feature-area";
import HeroSlider from "./hero-slider";
import ProjectArea from "./project-area";
import RankArea from "./rank-area";
import SalesArea from "../../common/sales-area";
import CardArea from "@/common/card-area";

const Anasayfa = () => {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
      <div id="smooth-content">
      <main className="fix">
      <HeroSlider />
      <FeatureArea />
      <AboutArea />
      {/*<ServicesArea />*/}
          <RankArea />

          <ProjectArea />
      {/*<TestimonialArea />*/}
      <SalesArea />
      <CardArea/>
      {/*<PriceArea />*/}
      </main> 
      <Footer />
      <ScrollToTop />
      </div>
      </div>
    </>
  );
};

export default Anasayfa;
