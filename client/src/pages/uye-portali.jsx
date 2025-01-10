import React from "react";
import SEO from "../common/seo";
import UyePortali from "../components/uye-portali";
import Wrapper from "../layout/wrapper";

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Rönesis PRO Yönetim Sistemleri"} />
            <UyePortali />
        </Wrapper>
    );
};

export default index;
