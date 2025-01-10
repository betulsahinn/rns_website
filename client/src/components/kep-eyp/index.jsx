import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import TestimonialArea from "@/common/testimonial-area";
import FooterFive from "@/layout/footers/footer-5";
import HeaderSix from "@/layout/headers/header-6";
import React from "react";
import KepEypArea from "./kep-eyp-area";

const KepEyp = ({ pageData }) => {
    return (
        <>
            <HeaderSix />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <BreadcrumbTwo
                            title={pageData?.title || "Rönesis PRO"}
                            innertitle={pageData?.description || "KEP-EYP Detayları"}
                        />
                        <KepEypArea pageData={pageData} />
                        <TestimonialArea />
                    </main>
                    <FooterFive style_contact={true} style_team={true} bg_style={false} />
                </div>
            </div>
        </>
    );
};

export default KepEyp;
