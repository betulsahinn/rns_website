import React from 'react';
import AnswerQuestion from '@/common/answer-question';
import Link from 'next/link';
import Image from 'next/image';
import dashbord from "../../../public/assets/img/service/sv-dashbord.png";
import service_img from "../../../public/assets/img/service/meeting.jpg";


const service_details_content = {
    category_title: "Hizmet Kategorileri",
    categorys: [
        {id: 1, category: "DETSİS Entegrasyonu", cls: ""},
        {id: 2, category: "İşyeri Yönetimi", cls: "active"},
        {id: 3, category: "Otomatik Nakil", cls: ""},
        {id: 4, category: "Şube Yönetimi", cls: ""},
        {id: 5, category: "İstatistikler", cls: ""},
    ],
    bg_img: "/assets/img/service/sv-bg.jpg",

    overview_title: "İşyeri Yönetim Sistemi",
    overview_des: <>Rönesis PRO İşyeri Yönetim Sistemi, DETSİS entegrasyonu ile kamu kurum ve
        kuruluşlarının güncel yapısını otomatik olarak takip eder. Üyelerinizin tayin, nakil
        gibi işlemlerinde işyeri ve şube değişikliklerini otomatik olarak gerçekleştirir.
        Merkez, taşra ve yurt dışı teşkilat yapılarını tek bir sistemde yönetebilirsiniz.</>,

    overview_list: [
        <>DETSİS Entegrasyonu: <br /> <span>Cumhurbaşkanlığı Dijital Dönüşüm Ofisi tarafından
        yönetilen DETSİS ile tam entegrasyon sayesinde, tüm kamu kurum ve kuruluşlarının güncel
        organizasyon yapısına anında erişim sağlayabilirsiniz.</span></>,
        <>Otomatik Nakil Sistemi: <br /> <span>Üyelerinizin tayin ve görev yeri değişikliklerinde,
        işyeri ve şube bilgileri otomatik olarak güncellenir, hiçbir üyenin kaydı gözden kaçmaz.</span></>,
        <>Merkezi Yapı Yönetimi: <br /> <span>Tüm merkez, taşra ve yurt dışı teşkilat yapılarını
        tek bir sistem üzerinden kolayca yönetebilirsiniz.</span></>,
        <>Anlık Güncelleme: <br /> <span>Kurum yapılarındaki değişiklikler sistem tarafından
        otomatik olarak tespit edilir ve işyeri bilgileri anında güncellenir.</span></>,
        <>Detaylı Raporlama: <br /> <span>İşyeri bazında üye dağılımları, nakil istatistikleri
        ve şube performans raporlarına tek tıkla ulaşabilirsiniz.</span></>,
        <>Şube Koordinasyonu: <br /> <span>Şubeler arası üye nakil işlemlerini otomatik olarak
        takip edebilir, koordinasyonu kolayca sağlayabilirsiniz.</span></>,
        ],

        challange_titel: "Dijital Dönüşüm",
        challange_des: <>DETSİS entegrasyonu ve otomatik nakil sistemi sayesinde işyeri yönetimi
            artık çok daha kolay! Kamu kurumlarının teşkilat yapısındaki değişiklikleri anlık olarak
            takip edebilir, üyelerinizin tayin ve nakil işlemlerini otomatik olarak gerçekleştirebilirsiniz.
            e-Devlet entegrasyonu ile uyumlu altyapımız sayesinde tüm verileriniz güncel ve güvenilir.</>,
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

const IsyeriYonetimiArea = () => {

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
                                    <h4 className="sv-details-text-title pb-10">DETSİS Entegrasyonu ile İşyeri Süreçlerini Otomatikleştirin!</h4>
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

export default IsyeriYonetimiArea;