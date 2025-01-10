import useSticky from '@/hooks/use-sticky';
import Offcanvus from '@/common/offcanvus';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import NavMenu from './nav-menu';
import { useQuery } from "@apollo/client";
import { GET_ALL_HEADERS } from "@/graphql/queries";
// logo 
import logo_white from "../../../public/logo-beyaz.png";


const HeaderSeven = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const { loading, error, data } = useQuery(GET_ALL_HEADERS);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading header data: {error.message}</div>;

    const headerData = data?.getAllHeaders || [];
    const loginData = headerData.find(item => item.slug === 'login') || {};
    const contactData = headerData.find(item => item.slug === 'iletisim') || {};

    const loginUrl = loginData.slug || '/login';
    const contactUrl = contactData.slug || '/iletisim';
    const loginText = loginData.title || 'Log In';
    const contactText = contactData.title || 'Get in Touch';

    return (
        <>
            <header>
                <div className="header-signin-area header-bottom__transparent header-signin-ptb z-index-5">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <div className="header-signin-logo">
                                    <Link href="/"><Image src={logo_white} alt="" /></Link>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="header-signin-bar text-end tp-menu-bar">
                                    <button onClick={() => setSidebarOpen(true)}>
                                        <i>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom__area header-bottom__transparent header-bottom__bdr z-index-5 d-none">
                    <div className="container">
                        <div className="row g-0 align-items-center">
                            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
                                <div className="header-bottom__logo">
                                    <Link href="/anasayfa"><Image src={logo_white} alt="" /></Link>
                                </div>
                            </div>
                            <div className="col-xxl-7 col-xl-7 col-lg-7 d-none d-lg-block">
                                <div className="header-bottom__main-menu header-bottom__main-menu-4 header-bottom__main-menu-inner">
                                    <nav id="mobile-menu-2">
                                        <NavMenu />
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-8 col-6">
                                <div className="header-bottom__right d-flex align-items-center justify-content-end">
                                    <div className="header-bottom__action header-bottom__action-4">
                                        <Link className="d-none d-lg-inline-block header-bottom__action-2 border-none" href={loginUrl}>
                                            <span>{loginText}</span>
                                        </Link>
                                    </div>
                                    <div className="header-bottom__btn d-flex align-items-center">
                                        <Link className="tp-btn-yellow d-none d-md-inline-block inner-color" href={contactUrl}>
                                            {contactText}
                                        </Link>
                                        <a className="header-bottom__bar tp-menu-bar d-lg-none">
                                            <i className="fal fa-bars"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Offcanvus sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </>
    );
};
export default HeaderSeven;