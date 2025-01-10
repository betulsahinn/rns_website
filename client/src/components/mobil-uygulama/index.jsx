import BreadcrumbSix from "@/common/breadcrumbs/breadcrumb-6";
import FooterFive from "@/layout/footers/footer-5";
import HeaderSix from "@/layout/headers/header-6";
import React from "react";
import Banner from "./banner";
import MobilUygulamaArea from "./mobil-uygulama-area";

const MobilUygulama = () => {
    return (
        <>
            <HeaderSix />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <BreadcrumbSix />
                        <Banner />
                        <MobilUygulamaArea />
                    </main>
                    <FooterFive style_contact={true} style_team={true} bg_style={false} />
                </div>
            </div>
        </>
    );
};

export default MobilUygulama;
