import React from 'react';
import AnswerQuestion from '@/common/answer-question';
import Link from 'next/link';
import Image from 'next/image';
import dashbord from "../../../public/assets/img/service/sv-dashbord.png";
import service_img from "../../../public/assets/img/service/meeting.jpg";

const service_details_content = {
    category_title: "Hizmet Kategorileri",
    categorys: [
        {id: 1, category: "Üye Yönetimi", cls: "active"},
        {id: 2, category: "MERNIS Entegrasyonu", cls: ""},
        {id: 3, category: "Online Başvuru", cls: ""},
        {id: 4, category: "İstatistikler", cls: ""},
        {id: 5, category: "Şube Yönetimi", cls: ""},
    ],
    bg_img: "/assets/img/service/sv-bg.jpg",

    overview_title: "Üye Yönetim Sistemi",
    overview_des: <>Üye bilgilerini online olarak yönetin! Üyelere ait dilediğiniz bilgileri kayıt altına alabilir,
        istifa veya pasife alma işlemlerini kolayca gerçekleştirebilirsiniz. MERNIS entegrasyonu sayesinde kimlik
        doğrulaması anında yapılır ve online başvuru sistemi ile üyelik işlemleri hızlıca tamamlanır.</>,

    overview_list: [
        <>Üye Kartı Oluşturma: <br /> <span>Üyelik formlarını, üye kartlarına yükleyip güvenle saklayabilir,
        dilediğiniz anda görüntüleyebilirsiniz.</span></>,
        <>MERNIS Entegrasyonu: <br /> <span>Kimlik doğrulama işlemleri otomatik olarak MERNIS üzerinden
        gerçekleştirilir, veri güvenliği ve doğruluğu sağlanır.</span></>,
        <>Online Başvuru: <br /> <span>Üyeler internet üzerinden başvurularını yapabilir, sistem otomatik
        olarak kontrolleri gerçekleştirir.</span></>,
        <>Mükerrer Üyelik Tespiti: <br /> <span>Üye kayıt işleminde otomatik olarak üyeleri tarayan ve
        mükerrer kayıt halinde uyarı veren sistem ile daima gerçek üye listeniz olsun.</span></>,
        <>Hazirun Listesi: <br /> <span>Delegelerinizi belirleyerek, hazirun listesini ad, soyad, üye
        numarası bazında sıralayarak tek tıkla excel olarak indirebilirsiniz.</span></>,
        <>Üye İstatistikleri: <br /> <span>Aktif üye sayınızı anlık olarak takip edebilir, yeni kayıt ve
        istifa bilgilerini aylık olarak görüntüleyebilirsiniz.</span></>,
        <>Şube Koordinasyonu: <br /> <span>Şubelerinize veya temsilciliklerinize faaliyet gösterdikleri
        bölgeleri dahilinde yetkiler tanımlayabilirsiniz.</span></>,
        <>Çapraz Arama: <br /> <span>Birden fazla kriter girerek üye listesinde aramalar yapabilir,
        dilediğiniz bilgilere tek tıkla ulaşabilirsiniz.</span></>,
        ],

        challange_titel: "Dijital Dönüşüm",
        challange_des: <>Sendikanıza özel Üye Takip Sistemi ile tüm süreçlerinizi dijitalleştirin!<br/>
            MERNIS entegrasyonu sayesinde kimlik doğrulama işlemleri otomatik olarak yapılır, online başvuru
            sistemi ile üyelik işlemleri hızlıca tamamlanır. Karmaşık menüler ile uğraşmadan tüm işlemleri
            kolayca yönetebilir, hiç bir eğitime ihtiyaç duymadan hemen kullanmaya başlayabilirsiniz.</>,
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

const UyeYonetimiArea = () => {

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
                                    <h4 className="sv-details-text-title pb-10">Üyelerinizle Olan Bağınızı Dijital Dünyada Güçlendirin!</h4>
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

export default UyeYonetimiArea;