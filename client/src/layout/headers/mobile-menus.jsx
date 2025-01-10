import Link from "next/link";
import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_HEADERS } from "@/graphql/queries";

const MobileMenus = () => {
    const [openMenus, setOpenMenus] = useState([]);
    const { loading, error, data } = useQuery(GET_ALL_HEADERS);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading menu</div>;

    // Menü açma/kapama fonksiyonu
    const toggleMenu = (menuId) => {
        setOpenMenus(prev =>
            prev.includes(menuId)
                ? prev.filter(id => id !== menuId)
                : [...prev, menuId]
        );
    };

    // Ana menüleri ve alt menüleri organize et
    const organizeMenus = (headers) => {
        const mainMenus = headers
            .filter(header => !header.parent_id)
            .sort((a, b) => (a.order_index || 0) - (b.order_index || 0));

        return mainMenus.map(menu => ({
            ...menu,
            subMenus: headers
                .filter(header => header.parent_id === parseInt(menu.id))
                .sort((a, b) => (a.order_index || 0) - (b.order_index || 0)),
            headerContents: (menu.headerContents || [])
                .sort((a, b) => (a.order_index || 0) - (b.order_index || 0))
        }));
    };

    const organizedMenus = organizeMenus(data?.getAllHeaders || []);

    return (
        <nav className="mean-nav">
            <ul>
                {organizedMenus.map((menu) => (
                    <li key={menu.id} className={menu.subMenus?.length > 0 || menu.headerContents?.length > 0 ? "has-dropdown" : ""}>
                        <Link href={`/${menu.slug}`}>{menu.title}</Link>

                        {(menu.subMenus?.length > 0 || menu.headerContents?.length > 0) && (
                            <>
                                <ul className="submenu" style={{
                                    display: openMenus.includes(menu.id) ? "block" : "none"
                                }}>
                                    {/* Alt menüler */}
                                    {menu.subMenus.map((subMenu) => (
                                        <li key={subMenu.id}>
                                            <Link href={`/${menu.slug}/${subMenu.slug}`}>
                                                {subMenu.title}
                                            </Link>

                                            {/* Alt menünün kendi içerikleri */}
                                            {subMenu.headerContents?.length > 0 && (
                                                <>
                                                    <ul className="submenu" style={{
                                                        display: openMenus.includes(subMenu.id) ? "block" : "none"
                                                    }}>
                                                        {subMenu.headerContents.map((content) => (
                                                            <li key={content.id}>
                                                                <Link href={`/${menu.slug}/${subMenu.slug}/${content.id}`}>
                                                                    {content.title}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    {subMenu.headerContents.length > 0 && (
                                                        <a className={`mean-expand ${openMenus.includes(subMenu.id) ? "mean-clicked" : ""}`}
                                                           onClick={(e) => {
                                                               e.stopPropagation();
                                                               toggleMenu(subMenu.id);
                                                           }}
                                                           style={{ fontSize: "18px", cursor: "pointer" }}>
                                                            <i className={`fal fa-${openMenus.includes(subMenu.id) ? "minus" : "plus"}`}></i>
                                                        </a>
                                                    )}
                                                </>
                                            )}
                                        </li>
                                    ))}

                                    {/* Ana menünün direkt içerikleri */}
                                    {menu.headerContents?.map((content) => (
                                        <li key={content.id}>
                                            <Link href={`/${menu.slug}/content/${content.id}`}>
                                                {content.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                                <a className={`mean-expand ${openMenus.includes(menu.id) ? "mean-clicked" : ""}`}
                                   onClick={() => toggleMenu(menu.id)}
                                   style={{ fontSize: "18px", cursor: "pointer" }}>
                                    <i className={`fal fa-${openMenus.includes(menu.id) ? "minus" : "plus"}`}></i>
                                </a>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default MobileMenus;