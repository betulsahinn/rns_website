import React from "react";
import SEO from "../common/seo";
import Anasayfa from "../components/anasayfa";
import Wrapper from "../layout/wrapper";

const Home = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Rönesis PRO Yönetim Sistemleri"} />
            <Anasayfa />
        </Wrapper>
    );
};

export default Home;
