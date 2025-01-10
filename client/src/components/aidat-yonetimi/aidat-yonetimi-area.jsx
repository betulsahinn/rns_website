import React from 'react';
import AnswerQuestion from '@/common/answer-question';
import Link from 'next/link';
import Image from 'next/image';
import dashbord from "../../../public/assets/img/service/sv-dashbord.png";
import service_img from "../../../public/assets/img/service/meeting.jpg";

const service_details_content = {
    category_title: "Hizmet Kategorileri",
    categorys: [
        {id: 1, category: "Aidat Yönetimi", cls: "active"},
        {id: 2, category: "KBS Entegrasyonu", cls: ""},
        {id: 3, category: "Excel İle Veri Girişi", cls: ""},
        {id: 4, category: "Toplu Aidat Girişi", cls: ""},
        {id: 5, category: "Aidat İstatistikleri", cls: ""},
    ],
    bg_img: "/assets/img/service/sv-bg.jpg",

    overview_title: "Aidat Yönetim Sistemi",
    overview_des: <>Sendikanıza özel Aidat Yönetimi ile tüm süreçlerinizi kolayca yönetin!
        KBS Entegrasyonu sayesinde say2000'deki aidat bilgilerini tek tıkla aktarabilir,
        Excel ile toplu veri girişi yapabilirsiniz. Akıllı takip özelliğiyle her bir üyenin
        aidat verisi otomatik kontrol edilir.</>,

    overview_list: [
        <>KBS Entegrasyonu: <br /> <span>Say2000'deki tüm aidat bilgilerini tek bir tıkla üye
        kartlarına işleyebilir, günlerce sürecek aidat girişlerini saniyeler içerisinde
        gerçekleştirebilirsiniz.</span></>,
        <>Excel ile Veri Girişi: <br /> <span>Aidat verilerinizi hazır Excel dosyalarından
        kolayca sisteme aktarabilir, zaman kazanabilirsiniz.</span></>,
        <>Akıllı Aidat Takibi: <br /> <span>Her bir üyeye ait aidat verisi otomatik olarak
        kontrol edilir, aidat kesintisi yapılmayan üyeleri anında tespit edebilirsiniz.</span></>,
        <>Detaylı İstatistikler: <br /> <span>Aidat gelirlerinizi şehir ve işyeri bazında
        görüntüleyebilir, gelir dağılımı istatistiklerine kolayca ulaşabilirsiniz.</span></>,
        <>Toplu Aidat Girişi: <br /> <span>İşçi sendikaları ve sözleşmeli statüdeki üyeler
        için tek ekrandan toplu aidat girişi yapabilirsiniz.</span></>,
        <>Şube Koordinasyonu: <br /> <span>Şubelerinize veya temsilciliklerinize bölgesel
        yetkiler tanımlayarak aidat yönetimini eşgüdümlü yürütebilirsiniz.</span></>,
        ],

        challange_titel: "Dijital Dönüşüm",
        challange_des: <>KBS Entegrasyonu ve Excel ile veri girişi özelliklerimiz sayesinde
            aidat yönetimi artık çok daha kolay! Say2000'deki verileri otomatik aktarabilir,
            hazır Excel tablolarınızı yükleyebilir ve tüm aidat işlemlerinizi dijital ortamda
            yönetebilirsiniz. Karmaşık işlemler yerine tek tıkla çözüm sunan sistemimiz ile
            zaman kazanın, iş yükünüzü azaltın.</>,
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

const AidatYonetimiArea = () => {

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

{/*                                <div className="tp-service__dashboard mb-30" style={{backgroundImage: `url(${bg_img})`}}>
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
                                </div>*/}

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
                                    <h4 className="sv-details-text-title pb-10">Finansal Süreçlerinizi Akıllı Teknolojilerle Yönetin!</h4>
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

export default AidatYonetimiArea;