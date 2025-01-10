import React from 'react';
import AnswerQuestion from '@/common/answer-question';
import Link from 'next/link';
import Image from 'next/image';
import dashbord from "../../../public/assets/img/service/sv-dashbord.png";
import service_img from "../../../public/assets/img/service/meeting.jpg";

const service_details_content = {
    category_title: "Hizmet Kategorileri",
    categorys: [
        {id: 1, category: "Lokasyon Takibi", cls: "active"},
        {id: 2, category: "Güvenlik Yönetimi", cls: ""},
        {id: 3, category: "Katılım Analizi", cls: ""},
        {id: 4, category: "Bölge Raporları", cls: ""},
        {id: 5, category: "Anlık Bildirimler", cls: ""},
    ],
    bg_img: "/assets/img/service/sv-bg.jpg",

    overview_title: "Lokasyon Takip Sistemi",
    overview_des: <>Rönesis PRO Mobil Uygulaması ile üyelerinizin eylem ve etkinlik katılımlarını güvenle
        takip edin! Akıllı lokasyon sistemi sayesinde eylem alanlarındaki katılımı anlık olarak ölçün,
        etkinlik katılım analizlerini otomatik oluşturun. Gizlilik ve güvenlik öncelikli yaklaşımla,
        sadece eylem ve etkinlik alanlarında aktif olan lokasyon takibi ile sendikal organizasyonlarınızı
        güçlendirin.</>,

    overview_list: [
        <>Güvenli Lokasyon Takibi: <br /> <span>Sadece eylem ve etkinlik alanlarında aktif olan,
        gizlilik odaklı lokasyon sistemi ile güvenli takip sağlayın. Üyelerin onayı ile çalışan,
        KVKK uyumlu altyapı.</span></>,
        <>Anlık Katılım Ölçümü: <br /> <span>Eylem alanlarındaki katılımcı sayısını gerçek zamanlı
        görüntüleyin, bölgesel yoğunluk haritaları oluşturun.</span></>,
        <>Akıllı Bildirim Sistemi: <br /> <span>Eylem alanına yakın üyelere otomatik bildirimler
        gönderin, katılımı artırın, anlık yönlendirmeler yapın.</span></>,
        <>Bölgesel Analiz: <br /> <span>Şube ve temsilcilik bölgelerindeki katılım oranlarını analiz
        edin, karşılaştırmalı raporlar oluşturun.</span></>,
        <>Etkinlik Optimizasyonu: <br /> <span>Geçmiş etkinlik verilerini analiz ederek gelecek
        organizasyonlar için en uygun lokasyonları belirleyin.</span></>,
        <>Gizlilik Kontrolü: <br /> <span>Üyeler istedikleri zaman lokasyon paylaşımını kapatabilir,
        verilerini yönetebilir ve gizlilik tercihlerini güncelleyebilir.</span></>,
        ],

        challange_titel: "Akıllı Organizasyon",
        challange_des: <>Lokasyon takip sistemi ile eylem ve etkinliklerinizi daha etkili hale getirin!
            Anlık katılım verileri ile organizasyonlarınızı optimize edin, katılımı artırın. Gizlilik ve
            güvenlik öncelikli yaklaşımımız ile üyelerinizin verilerini koruyun, sadece gerekli alanlarda
            ve zamanlarda aktif olan akıllı takip sistemi ile sendikal mücadelenizi güçlendirin.</>,
        }
const {
    category_title,
    categorys,
    bg_img,
    overview_title,
    overview_des,
    overview_list,
    challange_titel,
    challange_des
}  = service_details_content

const UyeLokasyonTakibiArea = () => {

    return (
        <>
            <div className="sv-details-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4">
                            <div className="sv-details-widget">
                                <div className="sv-details-category mb-30">
                                    <div className="sv-details-category-title">
                                        <h4 className="sv-details-title-sm">{category_title}</h4>
                                    </div>
                                    <div className="sv-details-category-list">
                                        <ul>
                                            {categorys.map((item, i)  =>
                                                <li key={i} className={item.cls}>
                                                    <Link href="#"><span>{item.category}</span><i className="fal fa-angle-right"></i></Link>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                </div>

{/*
                                <div className="tp-service__dashboard mb-30" style={{backgroundImage: `url(${bg_img})`}}>
                                    <div className="tp-service__top-content">
                                        <h3 className="tp-service__title-white">Data Analysis <br /> Tools & Methods</h3>
                                        <p>Lorem Ipsum is simply dummy text <br /> of the printing</p>
                                        <Link className="tp-btn-orange tp-btn-hover alt-color-white" href="#">
                                            <span>Work with Us</span>
                                            <b></b>
                                        </Link>
                                    </div>
                                    <div className="tp-service__dashdboard-sm-img">
                                        <Image src={dashbord} className="wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".3s"
                                               alt="theme-pure" />
                                    </div>
                                </div>

                                <div className="sv-details-social-box mb-30">
                                    <h4 className="sv-details-title-sm">Share it.</h4>
                                    <div className="sv-details-social-link">
                                        <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                        <Link href="#"><i className="fab fa-twitter"></i></Link>
                                        <Link href="#"><i className="fab fa-instagram"></i></Link>
                                        <Link href="#"><i className="fab fa-youtube"></i></Link>
                                    </div>
                                </div>
*/}

                            </div>
                        </div>

                        <div className="col-xl-8 col-lg-8">
                            <div className="sv-details-wrapper">
                                <div className="sv-details-thumb mb-45">
                                    <Image className="w-100" src={service_img} alt="theme-pure" />
                                </div>
                                <div className="sv-details-title-box mb-55">
                                    <h4 className="sv-details-title">{overview_title}</h4>
                                    <p>{overview_des}</p>
                                </div>
                                <div className="sv-details-text mb-35">
                                    <h4 className="sv-details-text-title pb-10">KVKK Uyumlu Lokasyon Sistemi ile Güvenli Takip!</h4>
                                    <ul>
                                        {overview_list.map((item, i)  =>  <li key={i}> <i className="fal fa-check"></i> <p> {item} </p> </li> )}
                                    </ul>
                                </div>
                                <div className="sv-details-text-2">
                                    <h4 className="sv-details-text-title">{challange_titel}</h4>
                                    <p>{challange_des}</p>
                                </div>
                                <div className="tp-faq-area pt-50">
                                    <div className="container p-0">
                                        <div className="row g-0">
                                            <div className="col-xl-12">
                                                <h4 className="sv-details-title">Sıkça Sorulan Sorular</h4>
                                                <AnswerQuestion style={true} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UyeLokasyonTakibiArea;