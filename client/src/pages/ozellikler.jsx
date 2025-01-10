import React from "react";
import SEO from "../common/seo";
import Ozellikler from "../components/ozellikler";
import Wrapper from "../layout/wrapper";

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Rönesis PRO Yönetim Sistemleri"} />
            <Ozellikler />
        </Wrapper>
    );
};

export default index;
