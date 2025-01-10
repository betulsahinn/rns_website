import React from "react";
import SEO from "../common/seo";
import Contact from "../components/iletisim";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Rönesis PRO Yönetim Sistemleri"} />
      <Contact />
    </Wrapper>
  );
};

export default index;
