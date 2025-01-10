import React from "react";
import SEO from "@/common/seo";
import UyeLokasyonTakibi from "@/components/uye-lokasyon-takibi";
import Wrapper from "@/layout/wrapper";
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_ALL_HEADERS_WITH_ORDER } from '@/graphql/queries';

const DynamicPage = () => {
    const router = useRouter();
    const { slug } = router.query;

    const { loading, error, data } = useQuery(GET_ALL_HEADERS_WITH_ORDER, {
        variables: { slug },
        skip: !slug,
    });

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const pageData = data?.getHeaderBySlug;

    return (
        <Wrapper>
            <SEO pageTitle={pageData?.title || "Rönesis PRO Yönetim Sistemleri"} />
            <UyeLokasyonTakibi pageData={pageData} />
        </Wrapper>
    );
};

export default DynamicPage;