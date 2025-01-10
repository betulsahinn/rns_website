import useSticky from '@/hooks/use-sticky';
import Offcanvus from '@/common/offcanvus';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import NavMenu from './nav-menu';
import { useQuery } from "@apollo/client";
import { GET_ALL_HEADERS } from "@/graphql/queries";

import logo from "../../../public/logo.png"

const HeaderThree = () => {
    const { sticky } = useSticky();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const { loading, error, data } = useQuery(GET_ALL_HEADERS);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading header data: {error.message}</div>;

    const headerData = data?.getAllHeaders || [];
    const loginData = headerData.find(item => item.slug === 'login') || {};
    const registerData = headerData.find(item => item.slug === 'register') || {};

    const loginUrl = loginData.slug || '/login';
    const registerUrl = registerData.slug || '/register';
    const loginText = loginData.title || 'Giriş Yap';
    const registerText = registerData.title || 'Ücretsiz Başla';

    return (
        <>
            <header className="tp-header-height">
                <div id="header-sticky" className={`header-bottom__area header__space header-sticky-bg-2 header-bottom__transparent z-index-5 ${sticky && "header-sticky"}`}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
                                <div className="header-bottom__logo">
                                    <Link href="/"><Image src={logo} alt="" /></Link>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 d-none d-lg-block">
                                <div className="header-bottom__main-menu header-bottom__main-menu-3">
                                    <nav id="mobile-menu">
                                        <NavMenu />
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-8 col-6">
                                <div className="header-bottom__right d-flex align-items-center justify-content-end">
                                    <div className="header-bottom__action">
                                        <Link className="d-none d-lg-inline-block header-bottom__action-2 border-none" href={loginUrl}>
                                            <span>{loginText}</span>
                                        </Link>
                                        <Link className="tp-btn-blue-sm d-none d-md-inline-block tp-btn-hover alt-color-black" href={registerUrl}>
                                            <span>{registerText}</span>
                                            <b></b>
                                        </Link>
                                        <a className="header-bottom__bar tp-menu-bar d-lg-none" onClick={() => setSidebarOpen(true)}>
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
export default HeaderThree;