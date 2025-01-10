import React from 'react';
import Image from 'next/image';
import ReplyIcon from '@/svg/reply-icon';

import avata_1 from "../../../public/assets/img/blog/user.png";
import avata_2 from "../../../public/assets/img/blog/user.png";
import avata_3 from "../../../public/assets/img/blog/user.png";
import Link from 'next/link';

const comments_data = [
    {
        id: 1,
        img: avata_1,
        name: "Ahmet Yılmaz",
        //role: "Sendika Başkanı",
        date: "15 Aralık 2024",
        comment: <>Bulut tabanlı sistem sayesinde tüm şubelerimizle anlık iletişim kurabiliyoruz. Özellikle antent yönetimindeki sürükle-bırak özelliği evrak işlerimizi çok kolaylaştırdı. İstatistik ve raporlama araçları karar alma süreçlerimize büyük katkı sağlıyor.</>,
        cls_reply: ""
    },
    {
        id: 2,
        img: avata_2,
        name: "Fatma Demir",
        //role: "Şube Sekreteri",
        date: "12 Aralık 2024",
        comment: <>Responsive tasarımı sayesinde mobil cihazlardan da kolayca erişebiliyoruz. KVKK uyumluluğu ve güvenlik önlemleri üye verilerinin korunması konusunda bize güven veriyor. DETSİS ve MERNİS entegrasyonları işlerimizi çok hızlandırdı.</>,
        cls_reply: ""
    },
    {
        id: 3,
        img: avata_3,
        name: "Mehmet Kaya",
        //role: "İl Temsilcisi",
        date: "10 Aralık 2024",
        comment: <>Özelleştirilebilir raporlama sistemi ile ihtiyacımız olan tüm verilere anında ulaşabiliyoruz. Sistem entegrasyonları sayesinde veri girişlerinde yaşanan sorunlar tamamen ortadan kalktı. Teknik destek ekibi her konuda hızlı çözümler sunuyor.</>,
        cls_reply: ""
    },
]

const Comments = () => {
    return (
      <>
        <ul>
          {comments_data.map((item, i) => (
            <li key={i} className={item.cls_reply}>
              <div className="postbox__comment-box  d-flex">
                <div className="postbox__comment-info">
                  <div className="postbox__comment-avater mr-20">
                    <Image src={item.img} alt="theme-pure" />
                  </div>
                </div>
                <div className="postbox__comment-text">
                  <div className="postbox__comment-name d-flex">
                    <h5>{item.name}</h5>
                    <span className="post-meta">{item.date}</span>
                  </div>
                  <p>{item.comment}</p>
{/*                  <div className="postbox__comment-reply">
                    <Link href="#">
                      <ReplyIcon />
                      Reply
                    </Link>
                  </div>*/}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </>
    );
};

export default Comments;