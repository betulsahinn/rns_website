import React from "react";
import SEO from "../common/seo";
import Ronesis from "@/components/ronesis";
import Wrapper from "../layout/wrapper";

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Rönesis PRO Yönetim Sistemleri"} />
            <Ronesis />
        </Wrapper>
    );
};

export default index;
