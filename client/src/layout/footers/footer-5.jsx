import { CopyRight } from '@/common/social-links';
import EmailIcon from '@/svg/email';
import EmailFour from '@/svg/email-4';
import PhoneFour from '@/svg/phone-4';
import RightArrow from '@/svg/right-arrow';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_HEADERS_WITH_ORDER } from '@/graphql/queries';

import shape_img_1 from "../../../public/assets/img/footer/footer-inner-1.png";
import shape_img_2 from "../../../public/assets/img/footer/footer-inner-2.png";
import footer_logo from "../../../public/assets/img/logo/logo-black.png";

const footer_content = {
    info: "Rönesis PRO ile tüm süreçlerinizi\n" +
        "online olarak yönetin!",
    phone: "+0850 255 19 06",
    email: "iletisim@ronesis.com.tr",
}

const FooterFive = ({style_contact, bg_style=true, style_team}) => {
    const { loading, error, data } = useQuery(GET_ALL_HEADERS_WITH_ORDER);

    const getProcessedHeaders = (parentId) => {
        if (!data?.getAllHeadersWithOrder) return [];
        return [...data.getAllHeadersWithOrder]
            .filter(header => header.parent_id === parentId)
            .sort((a, b) => (a.order_index || 0) - (b.order_index || 0))
            .map(header => ({
                name: header.title,
                link: `/ronesis/${header.slug}`
            }));
    };

    const dynamicFooterLinks = [
        {
            id: 1,
            cls_1: "col-xl-3 col-lg-3",
            cls_2: "footer-col-3-2",
            title: "Rönesis PRO",
            delay: ".7s",
            links: getProcessedHeaders(12)
        },
        {
            id: 2,
            cls_1: "col-xl-2 col-lg-2",
            cls_2: "footer-col-3-3",
            title: "Üye Portalı",
            delay: ".9s",
            links: getProcessedHeaders(13)
        }
    ];

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            <div className={`tp-footer__pl-pr ${style_contact && "pt-105"} ${bg_style ? 'grey-bg-2' : ''}`}>
                <div className={`tp-footer__area ${style_contact && "p-relative"} tp-footer__tp-border-bottom`}>
                    {style_contact &&
                        <>
                            <div className="tp-footer__shape-1 d-none d-xxl-block">
                                <Image src={shape_img_1} alt="theme-pure" />
                            </div>
                            <div className="tp-footer__shape-2 d-none d-xxl-block">
                                <Image src={shape_img_2} alt="" />
                            </div>
                        </>
                    }
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-6 pb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                                <div className={`tp-footer__widget ${style_team && "tp-footer__input-inner"} footer-widget-3 footer-col-3-1`}>
                                    <div className="tp-footer__logo mb-25">
                                        <Link href="/">
                                            <Image src={footer_logo} alt="" />
                                        </Link>
                                    </div>
                                    <div className="tp-footer__contact-info">
                                        <p>{footer_content.info}</p>
                                        <ul>
                                            <li>
                                                <span><PhoneFour /></span>
                                                <Link className="first-child" href={`tel:${footer_content.phone}`}>{footer_content.phone}</Link>
                                            </li>
                                            <li>
                                                <span><EmailFour /></span>
                                                <Link href={`mailto:${footer_content.email}`}>{footer_content.email}</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {dynamicFooterLinks.map((item, i) => (
                                <div key={i} className={`${item.cls_1} col-md-6 pb-30 wow tpfadeUp`} data-wow-duration=".9s" data-wow-delay={item.delay}>
                                    <div className={`tp-footer__widget footer-widget-3 ${item.cls_2}`}>
                                        <h4 className="tp-footer__widget-title">{item.title}</h4>
                                        <div className="tp-footer__content">
                                            <ul>
                                                {item.links.map((link, j) => (
                                                    <li key={j}>
                                                        <Link href={link.link}>{link.name}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="col-xl-4 col-lg-4 col-md-6 pb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                                <div className="tp-footer__widget footer-widget-3 footer-widget-5 footer-col-3-4">
  {/*                                  <h4 className="tp-footer__widget-title">Online Sunum Talep Edin!</h4>
                                    <div className="tp-footer__input mb-35 p-relative">
                                        <form onSubmit={e => e.preventDefault()}>
                                            <input type="text" placeholder="Email adresiniz.." />
                                            <span><EmailIcon /></span>
                                            <button><RightArrow /></button>
                                        </form>
                                    </div>*/}
                                    <div className="tp-footer__social-3">
                                        <h4>Sosyal Medyamız</h4>
                                        <Link href="https://www.facebook.com/Ronesiscom"><i className="fab fa-facebook-f"></i></Link>
                                        <Link href="https://twitter.com/ronesiscom"><i className="fab fa-twitter"></i></Link>
                                        <Link href="https://www.instagram.com/ronesiscom/"><i className="fab fa-instagram"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tp-copyright__area pt-20 pb-20">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="tp-copyright__text tp-copyright__text-3 text-center">
                                    <span><CopyRight /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterFive;