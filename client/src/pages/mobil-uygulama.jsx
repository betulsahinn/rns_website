import React from "react";
import SEO from "@/common/seo";
import MobilUygulama from "@/components/mobil-uygulama";
import Wrapper from "@/layout/wrapper";


const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Rönesis PRO Yönetim Sistemleri"} />
            <MobilUygulama />
        </Wrapper>
    );
};

export default index;