import React from 'react';
import SEO from '../common/seo';
import Blog from '../components/blog-default';
import Wrapper from '../layout/wrapper';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Rönesis PRO Yönetim Sistemleri"} />
            <Blog />           
        </Wrapper>
    );
};

export default index;