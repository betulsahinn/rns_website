import React from 'react';
import AnswerQuestion from '@/common/answer-question';
import Link from 'next/link';
import Image from 'next/image';
import dashbord from "../../../public/assets/img/service/sv-dashbord.png";
import service_img from "../../../public/assets/img/service/meeting.jpg";

const service_details_content = {
    category_title: "Hizmet Kategorileri",
    categorys: [
        {id: 1, category: "SMS Yönetimi", cls: "active"},
        {id: 2, category: "Otomatik Bildirimler", cls: ""},
        {id: 3, category: "Toplu SMS", cls: ""},
        {id: 4, category: "İleri Tarihli SMS", cls: ""},
        {id: 5, category: "SMS Raporlama", cls: ""},
    ],
    bg_img: "/assets/img/service/sv-bg.jpg",

    overview_title: "SMS Yönetim Sistemi",
    overview_des: <>Gelişmiş SMS modülü ile üyelerinize anlık veya ileri tarihli mesajlar gönderin!
        Gruplandırma özelliği sayesinde hedef kitleye özel içerikler oluşturabilir, otomatik bildirim
        sistemi ile tüm süreçlerinizi dijitalleştirebilirsiniz. Başlıklı SMS paketleri ile kurumsal
        kimliğinizi koruyarak ekonomik iletişim sağlayın.</>,

    overview_list: [
        <>Otomatik Bildirim Sistemi: <br /> <span>Yeni üye kaydı, hukuki başvurular, avans işlemleri
        gibi tüm süreçlerde otomatik SMS bildirimleri gönderin. Sistem yöneticileri ve üyelere anlık
        bilgilendirmeler yapın.</span></>,
        <>Akıllı Gruplandırma: <br /> <span>Üyeleri cinsiyet, meslek, kan grubu ve şehir bazında
        gruplandırarak, her gruba özel içerikler oluşturun. Gereksiz SMS gönderimlerini engelleyin.</span></>,
        <>İleri Tarihli Gönderim: <br /> <span>Özel günler, doğum günleri ve önemli etkinlikler için
        SMS'leri önceden planlayın. Kişiselleştirilmiş mesajlar ile üyelerinizle bağınızı güçlendirin.</span></>,
        <>Güvenlik Entegrasyonu: <br /> <span>Üye paneli ve mobil uygulama girişlerini SMS doğrulama
        ile güçlendirin. Log-in işlemlerinde maksimum güvenlik sağlayın.</span></>,
        <>Hatırlatma Servisi: <br /> <span>Aidat ödemeleri, etkinlikler ve önemli tarihler için
        otomatik hatırlatma mesajları gönderin.</span></>,
        <>Şube Yetkilendirme: <br /> <span>Şubelere kendi bölgelerindeki üyelere SMS gönderme yetkisi
        tanımlayın, merkezi kontrolü koruyun.</span></>,
        ],

        challange_titel: "Dijital İletişim",
        challange_des: <>SMS Bildirim Sistemi ile tüm süreçlerinizi otomatikleştirin! Yeni üye kayıtlarında
            hoş geldin mesajından, hukuki başvuru süreçlerine, aidat hatırlatmalarından doğum günü kutlamalarına
            kadar tüm iletişiminizi tek platformdan yönetin. Başlıklı SMS paketleri ile kurumsal kimliğinizi
            koruyarak ekonomik iletişim sağlayın.</>,
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

const SmsYonetimiArea = () => {

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
                                    <h4 className="sv-details-text-title pb-10">Üyelerinizle Kesintisiz İletişimi Garanti Altına Alın!</h4>
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

export default SmsYonetimiArea;