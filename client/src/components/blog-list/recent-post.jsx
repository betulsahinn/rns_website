import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_FAQS } from "@/graphql/queries";


import avata_1 from "../../../public/assets/img/blog/blog-list-avata-1.jpg";
import avata_2 from "../../../public/assets/img/blog/blog-list-avata-2.jpg";
import avata_3 from "../../../public/assets/img/blog/blog-list-avata-3.jpg";
import default_avatar from "../../../public/assets/img/blog/faq_7672041.png";


const RecentPost = () => {
  const { data, loading, error } = useQuery(GET_ALL_FAQS);

  // FAQ verilerini sırala ve ilk 3'ünü al
  const recentFaqs = data ? [...data.getAllFaqs]
      .filter(faq => faq.status)
      .sort((a, b) => (a.order_index || 0) - (b.order_index || 0))
      .slice(1, 4)
      .map(faq => ({
        id: faq.id,
        img: default_avatar, // Varsayılan avatar kullan
        title: faq.question,
        cls: "mb-20"
      })) : [];

  return (
      <>
        <div className="sidebar__widget mb-40">
          <div className="sidebar__widge-title-box">
            <h3 className="sidebar__widget-title">Sık Sorulan Sorular</h3>
          </div>
          <div className="sidebar__widget-content">
            <div className="sidebar__post rc__post">
              {recentFaqs.map((item, i) => (
                  <div key={i} className={`rc__post ${item.cls} d-flex`}>
                    <div className="rc__post-thumb mr-20">
                      <Link href="/ronesis/uye-yonetimi">
                        <Image src={item.img} alt="theme-pure" />
                      </Link>
                    </div>
                    <div className="rc__post-content">
                      <h3 className="rc__post-title">
                        <Link href="/ronesis/uye-yonetimi">{item.title}</Link>
                      </h3>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </>
  );
};

export default RecentPost;
