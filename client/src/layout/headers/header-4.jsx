import useSticky from '@/hooks/use-sticky';
import Offcanvus from '@/common/offcanvus';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { useQuery } from "@apollo/client";
import { GET_ALL_HEADERS } from "@/graphql/queries";

import logo from "../../../public/logo.png";
import white_logo from "../../../public/logo-beyaz.png";
import black_logo from "../../../public/logo-siyah.png";

const DynamicNavMenu = () => {
   const { loading, error, data } = useQuery(GET_ALL_HEADERS);

   if (loading) return <div className="loading-menu">Loading...</div>;
   if (error) return <div className="error-menu">Error: {error.message}</div>;

   // Organize menus function
   const organizeMenus = (headers) => {
      const mainMenus = headers
          .filter(header => !header.parent_id)
          .sort((a, b) => parseInt(a.id) - parseInt(b.id));

      return mainMenus.map(menu => {
         const subMenus = headers
             .filter(header => header.parent_id === parseInt(menu.id))
             .sort((a, b) => parseInt(a.id) - parseInt(b.id))
             .map(subMenu => ({
                ...subMenu,
                headerContents: (subMenu.headerContents || [])
                    .sort((a, b) => (a.order_index || 0) - (b.order_index || 0))
             }));

         return {
            ...menu,
            subMenus,
            headerContents: (menu.headerContents || [])
                .sort((a, b) => (a.order_index || 0) - (b.order_index || 0))
         };
      });
   };

   const organizedMenus = organizeMenus(data?.getAllHeaders || []);

   return (
       <ul>
          {organizedMenus.map((menu) => (
              <li key={menu.id} className={menu.subMenus?.length > 0 || menu.headerContents?.length > 0 ? "has-dropdown" : ""}>
                 <Link href={`/${menu.slug}`}>
                    {menu.title}
                 </Link>

                 {(menu.subMenus?.length > 0 || menu.headerContents?.length > 0) && (
                     <ul className="submenu">
                        {menu.subMenus.map((subMenu) => (
                            <li key={subMenu.id}>
                               <Link href={`/${menu.slug}/${subMenu.slug}`}>
                                  {subMenu.title}
                               </Link>

                               {subMenu.headerContents?.length > 0 && (
                                   <ul className="submenu">
                                      {subMenu.headerContents.map((content) => (
                                          <li key={content.id}>
                                             <Link href={`/${menu.slug}/${subMenu.slug}/${content.id}`}>
                                                {content.title}
                                             </Link>
                                          </li>
                                      ))}
                                   </ul>
                               )}
                            </li>
                        ))}

                        {menu.headerContents?.map((content) => (
                            <li key={content.id}>
                               <Link href={`/${menu.slug}/content/${content.id}`}>
                                  {content.title}
                               </Link>
                            </li>
                        ))}
                     </ul>
                 )}
              </li>
          ))}
       </ul>
   );
};

const HeaderFour = ({ style_error }) => {
   const { sticky } = useSticky();
   const [sidebarOpen, setSidebarOpen] = useState(false);
   const { loading, error } = useQuery(GET_ALL_HEADERS);

   return (
       <>
          <header className={`${style_error ? "" : "tp-header-height"}`}>
             <div id="header-sticky"
                  className={`header-bottom__area ${style_error ? "header-sticky-bg-2 tp-error-header z-index-5" : "header-blur header-bottom__plr-4 z-index-3"}  header-bottom__transparent ${sticky && "header-sticky"}`}>
                <div className={`${style_error ? "container" : "container-fluid p-0"}`}>
                   <div className="row g-0 align-items-center">
                      <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
                         <div className="header-bottom__logo">
                            {style_error ? (
                                <Link href="/"><Image src={logo} alt="theme-pure" /></Link>
                            ) : (
                                <>
                                   <Link className="white-logo" href="/"><Image src={white_logo} alt="theme-pure" /></Link>
                                   <Link className="black-logo" href="/"><Image src={black_logo} alt="theme-pure" /></Link>
                                </>
                            )}
                         </div>
                      </div>
                      <div className="col-xxl-7 col-xl-7 col-lg-7 d-none d-lg-block">
                         <div className="header-bottom__main-menu header-bottom__main-menu-4">
                            <nav id="mobile-menu">
                               {loading ? (
                                   <div className="loading-menu">Loading...</div>
                               ) : error ? (
                                   <div className="error-menu">Error: {error.message}</div>
                               ) : (
                                   <DynamicNavMenu />
                               )}
                            </nav>
                         </div>
                      </div>
                      <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-8 col-6">
                         <div className="header-bottom__right d-flex align-items-center justify-content-end">
                            <div className={`header-bottom__action ${style_error ? "" : "header-bottom__action-4"}`}>
                               <Link className="d-none d-lg-inline-block header-bottom__action-2 border-none" href="/register">
                                  <span>Giriş Yap</span>
                               </Link>
                            </div>
                            <div className="header-bottom__btn d-flex align-items-center">
                               <Link className={`tp-btn-yellow ${style_error ? "inner-color alt-color-black" : "alt-color-white"} tp-btn-hover d-none d-md-inline-block`} href="/client/src/pages/iletisim">
                                  <span>İletişime Geç</span>
                                  <b></b>
                               </Link>
                               <a className="header-bottom__bar tp-menu-bar d-lg-none"
                                  onClick={() => setSidebarOpen(true)}>
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

export default HeaderFour;