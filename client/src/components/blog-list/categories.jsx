import Link from "next/link";
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_FAQS } from "@/graphql/queries";

const categories_data = [
  { id: 1, title: "Blog", items: "01", path: "/uye-portali/blog" },
  { id: 2, title: "Forum", items: "02", path: "/uye-portali/forum" },
  { id: 3, title: "Anketler", items: "03", path: "/uye-portali/anketler" },
  { id: 4, title: "Kampanyalar", items: "04", path: "/uye-portali/kampanyalar" },
];

const Categories = () => {
  return (
      <>
        <div className="sidebar__widget mb-40">
          <div className="sidebar__widge-title-box">
            <h3 className="sidebar__widget-title">Üye Portalı</h3>
          </div>
          <div className="sidebar__widget-content">
            <ul>
              {categories_data.map((item, i) => (
                  <li key={i}>
                    <Link href={item.path}>
                  <span>
                    <i className="fal fa-angle-right"></i>
                    {item.title}
                  </span>
                      <span>{item.items}</span>
                    </Link>
                  </li>
              ))}
            </ul>
          </div>
        </div>
      </>
  );
};

export default Categories;