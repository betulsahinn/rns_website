import React from 'react';


import img_1 from "../../../public/assets/img/contact/circle.png";
import img_2 from "../../../public/assets/img/contact/award_13054749.png";
import img_3 from "../../../public/assets/img/contact/phone-booth_11026134.png";
import Image from 'next/image';
import Link from 'next/link';


// office location data
const office_data = [
    {
        id: 1, 
        cls:"",
        img: img_1,
        location: "Müşteri Hizmetleri",
        address: <>Güzelhisar Mah. Albay Şefik Cad. No:4 <br /> Rönesans Plaza Daire:6 Efeler/AYDIN</>,
    },
    {
        id: 2, 
        cls:"p-relative",
        img: img_2,
        badge: "Genel Müdürlük",
        location: "Genel Müdürlük",
        address: <>Zafer Mah. 152 Cad. Adnan Menderes <br />Üni. Teknokent No: 27D Efeler/AYDIN</>,
    },
    {
        id: 3, 
        cls:"",
        img: img_3,
        location: "Şirket Bilgileri",
        address: <>Ticari Sicil Numarası: 22229<br /> Mersis Numarası: 0735135892100001</>,
    },
]

const OfficeLocation = () => {
    return (
      <>
        <div className="contact-info-area pb-90">
          <div className="container">
            <div className="row">
              {office_data.map((item, i) => (
                <div key={i} className="col-xl-4 col-lg-4 mb-30">
                  <div className={`contact-info-item ${item.cls}`}>
                    {item.badge && (
                      <div className="contact-info-badge">
                        <span>Ana Ofis</span>
                      </div>
                    )}
                    <div className="contact-info-img">
                      <Image src={item.img} alt="theme-pure"/>
                    </div>
                    <div className="contact-info-title-box">
                      <h5 className="contact-info-title-sm">
                          {/*yönlendirme yapılan ve yapılmayan iki ayrı link*/}
                          {/*<Link href="https://maps.app.goo.gl/MvbNzwGQAML9uLkk8">{item.location}</Link>*/}
                          <Link href="/iletisim">{item.location}</Link>
                      </h5>
                      <p>{item.address}</p>
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

export default OfficeLocation;