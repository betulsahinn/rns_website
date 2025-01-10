import Link from "next/link";
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_HEADERS_WITH_ORDER } from "@/graphql/queries";

const Tags = () => {
  const { data } = useQuery(GET_ALL_HEADERS_WITH_ORDER);

  // Ronesis alt başlıklarını al (parent_id = 10)
  const ronesisSubHeaders = data?.getAllHeadersWithOrder?.filter(
      header => header.parent_id === 12 || header.parent_id === "12"
  ) || [];


  // Eğer veri boşsa
  if (!ronesisSubHeaders.length) {
    return (
        <div className="sidebar__widget mb-40">
          <div className="sidebar__widge-title-box">
            <h3 className="sidebar__widget-title">Modüllerimiz</h3>
          </div>
          <div className="sidebar__widget-content">
            <div className="tagcloud">
              <span>Henüz modül bulunmamaktadır.</span>
            </div>
          </div>
        </div>
    );
  }

  // Rastgele 6 başlık seç
  const randomTags = ronesisSubHeaders
      .sort(() => 0.5 - Math.random())
      .slice(0, Math.min(6, ronesisSubHeaders.length));

  return (
      <>
        <div className="sidebar__widget mb-40">
          <div className="sidebar__widge-title-box">
            <h3 className="sidebar__widget-title">Modüllerimiz</h3>
          </div>
          <div className="sidebar__widget-content">
            <div className="tagcloud">
              {randomTags.map((item, i) => (
                  <Link key={item.id || i} href={`/ronesis/${item.slug}`}>
                    {item.title}
                  </Link>
              ))}
            </div>
          </div>
        </div>
      </>
  );
};

export default Tags;