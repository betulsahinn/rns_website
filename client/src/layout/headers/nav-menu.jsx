import Link from "next/link";
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_HEADERS } from "@/graphql/queries";
import { useRouter } from 'next/router';

const NavMenu = () => {
    const { loading, error, data } = useQuery(GET_ALL_HEADERS);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    // Ana menüleri ve alt menüleri organize et
    const organizeMenus = (headers) => {
        const mainMenus = headers
            .filter(header => !header.parent_id)
            .sort((a, b) => parseInt(a.id) - parseInt(b.id));

        // Her ana menü için alt menüleri bul ve sırala
        return mainMenus.map(menu => {
            const subMenus = headers
                .filter(header => header.parent_id === parseInt(menu.id))
                .sort((a, b) => parseInt(a.id) - parseInt(b.id))
                .map(subMenu => ({
                    ...subMenu,
                    headerContents: (subMenu.headerContents || [])
                        .sort((a, b) => (a.order_index || 0) - (b.order_index || 0))
                }));

            return {
                ...menu,
                subMenus,
                headerContents: (menu.headerContents || [])
                    .sort((a, b) => (a.order_index || 0) - (b.order_index || 0))
            };
        });
    };

    const organizedMenus = organizeMenus(data?.getAllHeaders || []);

    return (
        <ul>
            {organizedMenus.map((menu) => (
                <li key={menu.id} className={menu.subMenus?.length > 0 || menu.headerContents?.length > 0 ? "has-dropdown" : ""}>
                    <Link href={`/${menu.slug}`}>
                        {menu.title}
                    </Link>

                    {(menu.subMenus?.length > 0 || menu.headerContents?.length > 0) && (
                        <ul className="submenu">
                            {/* Alt menüler (ID'ye göre sıraladım) */}
                            {menu.subMenus.map((subMenu) => (
                                <li key={subMenu.id}>
                                    <Link href={`/${menu.slug}/${subMenu.slug}`}>
                                        {subMenu.title}
                                    </Link>

                                    {/* Alt menünün içerikleri */}
                                    {subMenu.headerContents?.length > 0 && (
                                        <ul className="submenu">
                                            {subMenu.headerContents.map((content) => (
                                                <li key={content.id}>
                                                    <Link href={`/${menu.slug}/${subMenu.slug}/${content.id}`}>
                                                        {content.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
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
                    )}
                </li>
            ))}
        </ul>
    );
};

export default NavMenu;