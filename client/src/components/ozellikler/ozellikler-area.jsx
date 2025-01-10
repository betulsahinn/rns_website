import SocialLinks from '@/common/social-links';
import CommentPost from '@/forms/comment-post';
import DoubleSemicolon from '@/svg/double-semicolon';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Categories from '../blog-list/categories';
import RecentPost from '../blog-list/recent-post';
import Search from '../blog-list/search';
import Tags from '../blog-list/tags';
import Comments from './comments';


import blog_details_img_1  from "../../../public/assets/img/blog/deneme-3.jpg";
import blog_details_img_2  from "../../../public/assets/img/blog/ozellikler-3.png";
import blog_details_img_3  from "../../../public/assets/img/blog/ozellikler-1.png";
import navigation_img_1  from "../../../public/assets/img/blog/navigation-1.png";
import navigation_img_2  from "../../../public/assets/img/blog/navigation-2.png";
import blog_details_avata  from "../../../public/assets/img/blog/blog-details-avata-1.jpg";


const post_box_content = {
   title_1: <>Sendika Yönetim Sistemi</>,
   des_1: <>Sendika yönetimini dijitalleştiren sistemimiz, bulut tabanlı altyapısıyla 7/24 kesintisiz hizmet sağlar. Modern ve güvenli bir platform üzerinden üye yönetimi, evrak takibi ve iletişim süreçlerini kolayca yönetebilirsiniz. Responsive yapısı sayesinde tüm cihazlardan erişim imkanı sunar.</>,
   des_2: <>KVKK uyumlu altyapımız ve güçlü veri güvenliği önlemleriyle üye bilgileriniz güvence altında. DETSİS, MERNİS ve KBS entegrasyonları ile kamu sistemleriyle tam uyumlu çalışır.</>,
   checkmark_list: [
      "Bulut tabanlı güvenli altyapı ve veri yedekleme",
      "Responsive tasarım ile tüm cihazlardan erişim",
      "Sürükle-bırak özellikli antent yönetimi",
      "Kapsamlı istatistik ve raporlama araçları"
   ],
   title_2: "Sistemin Temel Özellikleri",
   des_3: <>Özelleştirilebilir dashboard ve raporlama araçlarıyla, sendika verilerinizi analiz edebilir ve stratejik kararlar alabilirsiniz. Kişiselleştirilebilir arayüz sayesinde, ihtiyaçlarınıza özel çözümler oluşturabilirsiniz.</>,
   des_4: <>Antent sistemindeki sürükle-bırak özelliği ile evrak yönetimini kolaylaştırır, dokümanları hızlıca organize edebilirsiniz. Gelişmiş arama ve filtreleme özellikleriyle, aradığınız belgelere anında erişim sağlayabilirsiniz. Toplu döküman işleme ve otomatik indeksleme özellikleri iş süreçlerinizi hızlandırır.</>,
   des_5: <>DETSİS, MERNİS ve KBS entegrasyonları sayesinde kamu sistemleriyle kesintisiz veri alışverişi sağlanır. KVKK uyumlu yapımız, kişisel verilerin işlenmesi ve korunması konusunda en üst düzey güvenlik standartlarını karşılar. Modüler yapısı sayesinde, sendikanızın büyüyen ihtiyaçlarına göre sistem kolayca genişletilebilir ve yeni özellikler eklenebilir. Otomatik güncelleme ve yedekleme sistemleri ile verileriniz her zaman güvende kalır.</>,
   des_6: <></>
}
const {title_1, des_1, des_2, checkmark_list, title_2, des_3, des_4, des_5, des_6}  = post_box_content


const OzelliklerArea = ({style_details_2}) => {
    return (
        <>
            <div className={`postbox__area ${style_details_2 && "pt-100"} pb-100`}>
            <div className="container">
               <div className="row">
                  <div className="col-xxl-8 col-xl-8 col-lg-8">
                     <div className="postbox__details-wrapper pr-20">
                        <article>
                           {style_details_2 &&
                              <div className="postbox__thumb w-img">
                                 <Link href="/blog-details">
                                    <Image src={blog_details_img_1} alt="" />
                                 </Link>
                              </div>
                           }
                           <div className="postbox__details-title-box pb-30">
                              <h4 className="postbox__details-title">{title_1}</h4>
                              <p>{des_1}</p>
                              <p>{des_2}</p>
                           </div>
                           <div className="postbox__details-checkmark">
                              <ul>
                                {checkmark_list.map((item, i)  => <li key={i}><i className="fal fa-check"></i>{item}</li>)}
                              </ul>
                           </div>
                           <div className="postbox__details-title-box pb-30">
                              <h4 className="postbox__details-title">{title_2}</h4>
                              <p>{des_3}</p>
                           </div>
                           <div className="postbox__details-img-box d-flex">
                              <div className="mr-20 text-center">
                                 <Image className="mb-20" src={blog_details_img_2} alt="theme-pure" />
                                 {/*<h4 className="postbox__details-img-caption"><span>Images by</span>@sample</h4>*/}
                              </div>
                              <div className="text-center">
                                 <Image className="mb-20" src={blog_details_img_3} alt="theme-pure" />
                                 {/*<h5 className="postbox__details-img-caption"><span>Images by</span>@sample</h5>*/}
                              </div>
                           </div>
                           <div className="postbox__details-title-box pb-15">
                              <p>{des_4}</p>
                           </div>
                           <div className="postbox__details-qoute mb-30">
                              <blockquote className="d-flex align-items-start">
                                 <div className="postbox__details-qoute-icon">
                                    <DoubleSemicolon />
                                 </div>
                                 <div className="postbox__details-qoute-text">
                                    <p>“İnsan hakları uygar yaşamın temelidir, çağımızın değeridir, güvencesi demokrasidir.</p>
                                    <span> Mustafa Kemal ATATÜRK</span>
                                 </div>
                              </blockquote>
                           </div>
                           <div className="postbox__details-title-box pb-15">
                              <p>{des_5}</p>
                           </div>
                           <div className="postbox__details tagcloud mb-50">
                              <span>Sayfalar :</span>
                              <Link href="/ronesis">Rönesis PRO</Link>
                              <Link href="/uye-portali">Üye Portalı</Link>
                              {/*<Link href="/ronesis/belge-yonetimi">Belge Yönetimi</Link>*/}
                              <Link href="/iletisim">İletişim</Link>
                           </div>

                           <div className="postbox__navigation-more mb-70 d-flex justify-content-between">
                              <div className="postbox__navigation-left d-flex align-items-center">
                                 <div className="postbox__navigation-img">
                                    <Link href="../sube-temsilcilik-yonetimi"><Image src={navigation_img_1} alt="theme-pure" /></Link>
                                 </div>
                                 <div className="postbox__navigation-content">
                                    <Link href="/ronesis">
                                       <span>
                                          <i className="far fa-arrow-left"></i>
                                          Rönesis PRO
                                       </span>
                                    </Link>
                                    <h5><Link href="/ronesis/sube-temsilcilik-yonetimi">Şube Temsilcilik Yön...</Link></h5>
                                 </div>
                              </div>
                              <div className="postbox__navigation-right d-flex align-items-center">
                                 <div className="postbox__navigation-content">
                                    <Link href="/uye-portali">
                                       <span>
                                          Üye Portalı
                                          <i className="far fa-arrow-right"></i>
                                       </span>
                                    </Link>
                                    <h5><Link href="/uye-portali/haberler-ve-duyurular">Haberler ve Duyur...</Link></h5>
                                 </div>
                                 <div className="postbox__navigation-img">
                                    <Link href="../haberler-ve-duyurular"><Image src={navigation_img_2} alt="theme-pure" /></Link>
                                 </div>
                              </div>
                           </div>

{/*                           <div className="postbox__details-author-info-box mb-100 d-flex align-items-start">
                              <div className="postbox__details-author-avata">
                                 <Image src={blog_details_avata} alt="theme-pure" />
                              </div>
                              <div className="postbox__details-author-content">
                                 <h5 className="postbox__details-author-title">Dianne Ameter</h5>
                                 <p>Ex erat referrentur vis. Vim ad consul molestie, eu malorum aliquando
                                    referrentur pro, erroribus gloriatur sed at.!
                                 </p>
                                 <div className="postbox__details-author-social">
                                    <SocialLinks />
                                 </div>
                              </div>
                           </div>*/}

                           <div className="postbox__comment mb-65">
                              <h3 className="postbox__comment-title">3 Kullanıcı Yorumu</h3>
                              <Comments />
                           </div>
{/*                           <div className="postbox__comment-form">
                              <h3 className="postbox__comment-form-title">Leave A Comment</h3>
                              <CommentPost />
                           </div>*/}
                        </article>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4">
                     <div className="sidebar__wrapper">
                        {/*<Search />*/}
                        <RecentPost />
                        <Categories />
                        <Tags />
                     </div>
                  </div>
               </div>
            </div>
         </div>
        </>
    );
};

export default OzelliklerArea;