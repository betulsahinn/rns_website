import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_HEADERS_WITH_ORDER} from '@/graphql/queries';

import service_icon_1 from "../../../public/assets/img/service/sv-icon-3-1.png"
import service_icon_2 from "../../../public/assets/img/service/service-shape-3-1.png"

const service_content = {
    title: <>Üye Portalı Modüllerimiz</>,
    btn_text: <>Tüm Özellikler</>,
    bg_img: "/assets/img/service/service-3-bg.png",
    service_title: "Üye Portalı",
    service_info: <>Üyeleriniz için özel olarak tasarlanmış <br /> dijital platform</>,
}

const UyePortaliArea = () => {
    const { loading, error, data } = useQuery(GET_ALL_HEADERS_WITH_ORDER);
    const { title, btn_text, bg_img, service_title, service_info } = service_content;

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const sortedServices = [...(data?.getAllHeadersWithOrder || [])]
        .filter(header => header.parent_id === 13)
        .sort((a, b) => (a.order_index || 0) - (b.order_index || 0));

    return (
        <>
            <div className="tp-service-area pb-120 z-index">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="tp-service-section-wrapper mb-60 d-flex justify-content-between align-items-end">
                                <h3 className="tp-section-title tp-title-anim">{title}</h3>
                                <Link
                                    className="tp-btn-inner tp-btn-hover alt-color-black wow tpfadeRight"
                                    data-wow-duration=".9s"
                                    data-wow-delay=".3s"
                                    href="/uye-portali"
                                >
                                    <span>{btn_text}</span>
                                    <b></b>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-8 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                            <div className="tp-service-3-item mb-30 p-relative z-index" style={{backgroundImage: `url(${bg_img})`}}>
                                <div className="tp-service-3-icon">
                                    <Image src={service_icon_1} alt="theme-pure" />
                                </div>
                                <div className="tp-service-3-content">
                                    <span>{service_title}</span>
                                    <h4 className="tp-service-3-title-sm">
                                        <Link href={`/uye-portali/${sortedServices[0]?.slug}`}>
                                            {service_info}
                                        </Link>
                                    </h4>
                                </div>
                                <div className="tp-service-3-btn">
                                    {/*detaylar kısmının linkini  indexli slug yönlendiriyor*/}
                                    <Link className="tp-btn-white-solid" href={`/uye-portali/${sortedServices[0]?.slug}`}>
                                        Detaylar
                                    </Link>
                                </div>
                                <div className="tp-service-3-shape">
                                    <Image src={service_icon_2} alt="theme-pure" />
                                </div>
                            </div>
                        </div>

                        {sortedServices.map((service, i) => (
                            <div
                                key={service.id}
                                className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp"
                                data-wow-duration=".9s"
                                data-wow-delay=".5s"
                            >
                                <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between">
                                    <div className="tp-service-sm-icon">
                                        {service.icon}
                                    </div>
                                    <div className="tp-service-sm-content">
                                        <span>Özellik</span>
                                        <h3 className="tp-service-sm-title">
                                            <Link href={`/uye-portali/${service.slug}`}>
                                                {service.title}
                                            </Link>
                                        </h3>
                                        <div className="tp-service-sm-link">
                                            <Link href={`/uye-portali/${service.slug}`}>
                                                Detayları Gör <i className="far fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default UyePortaliArea;