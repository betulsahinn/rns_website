import {gsap} from 'gsap';
import Link from 'next/link';
import Image from 'next/image';
import React, {useState} from 'react';
import SocialLinks from '@/common/social-links';
import ContactIcon from '@/svg/contact-icon';
import EmailIcon from '@/svg/email';
import LocationIcon from '@/svg/location-icon';
import PhoneIcon from '@/svg/phone-icon';
import RightArrow from '@/svg/right-arrow';

import footer_logo from "../../../public/logo-beyaz.png";
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicEffect';


// footer_content 
const footer_content  = {
    title: <>Güncellemelerden Haberdar Olun !</>,
    description: <>Rönesis PRO ile tüm süreçlerinizi <br /> online olarak yönetin!</>,
    phone: "0850 255 19 06",
    contact_mail: "iletisim@ronesis.com",
    location: "Zafer Mah. 152 Cad. Adnan Menderes Üniversitesi Teknokent No: 27D Efeler/AYDIN",

    copy_right: <>Bütün Hakları Saklıdır. <Link href="#">©2018 Rönesans İnovasyon ve Mühendislik A.Ş.</Link> </>,

    footer_lisks : [
        {
            id: 1,
            cls_1: "col-xl-3 col-lg-3 col-md-5",
            cls_2: "footer-col-2",
            title: "Kullanıcılar",
            delay: ".7s",
            links: [
                {name: "Veri Güvenliği", link: "/ozellikler"},
                {name: "Kişisel Verilerin Korunması", link: "/ozellikler"},
                {name: "Kullanıcı Sözleşmesi", link: "/ozellikler"},
                {name: "Gizlilik Politikamız", link: "/ozellikler"},
/*                {name: "Strategy", link: "#"},
                {name: "Development", link: "#"},*/
            ]
        },
        {
            id: 2,
            cls_1: "col-xl-2 col-lg-2 col-md-6",
            cls_2: "footer-col-3",
            title: "Hakkımızda",
            delay: ".9s",
            links: [
                {name: "Özellikler", link: "/ozellikler"},
                {name: "Destek", link: "/iletidim"},
                {name: "İletişim", link: "/iletisim"},
/*                {name: "Pricing Plan", link: "/price"},
                {name: "Blog", link: "/blog-default"},
                {name: "Contact", link: "/iletisim"},*/
            ]
        },

    ],

}
const {title, description, phone, contact_mail, location, copy_right , footer_lisks}  = footer_content


const Footer = () => {
    const [isOppen , setIsOppen]  = useState(false)
    const oppenLan = () => {
        setIsOppen(!isOppen)
    }
    
    useIsomorphicLayoutEffect(() => {
      gsap.set(".tp-gsap-bg", {scaleX : 1} );
       let mm = gsap.matchMedia();
       mm.add("(min-width:1400px)", () => {
			gsap.to(".tp-gsap-bg", {
				scrollTrigger: {
					trigger: ".tp-gsap-bg",
					scrub: 0.02,
					start:"top bottom",
					end: "bottom bottom",
				},
				scaleX: .95,
				borderRadius: "30px",
				transformOrigin: "center center", 
				ease: "none",
			});
		})
    }, []);
    

    return (
        <>
        <footer className="pb-50 fix">
            <div className="tp-footer__pl-pr p-relative">
               <div className="footer-black-bg tp-gsap-bg"></div>
               <div className="tp-footer__area pt-50">
                  <div className="container">

                     <div className="tp-footer__border-bottom">
                        <div className="row align-items-center">
                           <div className="col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                              <div className="tp-footer__top-text">
                                 <span>{title}</span>
                              </div>
                           </div>
                           <div className="col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
{/*                              <div className="tp-footer__input p-relative">
                                 <form onSubmit={(e) => e.preventDefault()}>
                                    <input type="text" placeholder="Email adress" />
                                    <span>
                                        <EmailIcon /> 
                                    </span>
                                    <button>
                                        <RightArrow />
                                    </button>
                                 </form>
                              </div>*/}
                           </div>
                        </div>
                     </div>

                     <div className="tp-footer__top-space">
                        <div className="row">

                           <div className="col-xl-4 col-lg-4 col-md-7 pb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                              <div className="tp-footer__widget footer-col-1">
                                 <Link href="/" className="tp-footer__widget-logo mb-10">
                                    <Image src={footer_logo} alt="" />
                                 </Link>
                                 <div className="tp-footer__text">
                                    <p>{description}</p>
                                 </div>
                                 <div className="tp-footer__social">
                                    <SocialLinks /> 
                                 </div>
                              </div>
                           </div>


                           {footer_lisks.map((item, i)  => 
                            <div key={i} className={`${item.cls_1} pb-30 wow tpfadeUp`} data-wow-duration=".9s" data-wow-delay={item.delay}>
                              <div className={`tp-footer__widget ${item.cls_2}`}>
                                 <h4 className="tp-footer__widget-title">{item.title}</h4>
                                 <div className="tp-footer__content">
                                    <ul>
                                        {item.links.map((link, i)  => <li key={i}><Link href={link.link}>{link.name}</Link></li>)} 
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           )}

                           <div className="col-xl-3 col-lg-3 col-md-6 pb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1s">
                              <div className="tp-footer__widget footer-col-4">
                                 <h4 className="tp-footer__widget-title">İletişim</h4>
                                 <div className="tp-footer__contact-info tp-footer__icon-space">
                                    <ul>
                                       <li>
                                          <span>
                                            <PhoneIcon /> 
                                          </span>
                                          <Link href={`tel:${phone}`}>{phone}</Link>
                                       </li>
                                       <li>
                                          <span>
                                            <ContactIcon /> 
                                          </span>
                                          <Link href={`mailto:${contact_mail}`}>{contact_mail}</Link>
                                       </li>
                                       <li>
                                          <span>
                                            <LocationIcon /> 
                                          </span>
                                          <Link href="https://www.google.com/maps/@41.6758525,-86.2531698,18.17z"
                                             target="_blank">{location}</Link>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="tp-copyright__area pt-20 pb-20">
                  <div className="container">
                     <div className="row align-items-center">
                        <div className="col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                           <div className="tp-copyright__text">
                              <span>{copy_right} </span>
                           </div>
                        </div>
                        <div className="col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                           <div className="tp-copyright__lang-box  d-flex align-items-center justify-content-md-end justify-content-start">
                              <div className="tp-copyright__lang">
                                 <ul>
                                    <li>
                                       <button id="tp-copyright__lang-toggle" onClick={() => oppenLan()} >
                                          <span>Türkçe (TR)<i className="fal fa-angle-down"></i></span>
                                       </button>

                                       {isOppen && 
                                       <ul className={`tp-copyright__lang-submenu ${isOppen && "open"}`}>
                                          <li>
                                             <Link href="#">English</Link>
                                          </li>
                                          <li>
                                             <Link href="#">Deutsch</Link>
                                          </li>
                                          <li>
                                             <Link href="#">Spanish</Link>
                                          </li>
                                       </ul>
                                       }
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
        </>
    );
};

export default Footer;