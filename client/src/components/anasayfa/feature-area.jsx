import RightArrow from '@/svg/right-arrow';
import Link from 'next/link';
import Image from 'next/image';
import React, { useRef } from 'react';
import useTitleAnimation from "@/hooks/useTitleAnimation";

// icon import 
import icon_1 from "../../../public/assets/img/feature/staff.png";
import icon_2 from "../../../public/assets/img/feature/briefcase.png";
import icon_3 from "../../../public/assets/img/feature/manager.png";
import icon_4 from "../../../public/assets/img/feature/vakiflar.png";
import feature_bottom_shape from "../../../public/assets/img/feature/fea-bg-shape-1.png";

// feature data
const feature_data = [
   {
      id: 1,
      img: icon_1,
      title: <>Sendikalar</>,
      delay: ".4s",
   },
   {
      id: 2,
      img: icon_2,
      title: <>Dernekler</>,
      delay: ".6s",
   },
   {
      id: 3,
      img: icon_3,
      title: <>Odalar</>,
      delay: ".8s",
   },
   {
      id: 4,
      img: icon_4,
      title: <>Vakıflar</>,
      delay: ".1s",
   },
]

// feature content
const feature_content = {
   title: "Sendikalar İçin\n" +
       "İşleyişe Uygun Tasarlanmış\n" +
       "Bulut Tabanlı Yönetim Sistemleri",
   sub_title: "Rönesis PRO",
}
const { title, sub_title } = feature_content

const FeatureArea = () => {
   let titleRef = useRef(null)
   useTitleAnimation(titleRef)

   return (
      <>
         <div className="tp-feature__area tp-feature__pt-pb pt-165 pb-170 p-relative">
            <div className="tp-feature__bottom-shape">
               <Image style={{width: "auto", height: "auto"}} src={feature_bottom_shape} alt="them-pure" />
            </div>
            <div className="container">

               <div className="row justify-content-center">
                  <div className="col-xl-6 wow tpfadeUpp" data-wow-duration=".9s" data-wow-delay=".2s">
                     <div ref={titleRef} className="tp-feature__section-box tp__title_anime text-center mb-55 tp-title-anim">
                        <h2 className="tp-section-title">{title}</h2>
                        <p>{sub_title}</p>
                     </div>
                  </div>
               </div>

               {/*<div className="row">
                  {feature_data.map((item, i) =>
                      <div key={i} className="col-xl-3 col-lg-3 col-md-6 mb-30 wow tpfadeUp" data-wow-duration=".9s"
                           data-wow-delay={item.delay}>
                         <div id="divtest" className="tp-feature__item">
                            <div className="tp-feature__icon">
                               <div className="row justify-content-between">
                                  <Image src={item.img} alt={item.title}/>
                               </div>
                               </div>
                               <h3 className="tp-feature__title-sm">{item.title}</h3>
                               <div className="tp-feature__link tp-common-btn">
                                  <Link href="/service-details">
                                     <RightArrow/>
                                  </Link>
                               </div>
                            </div>
                         </div>
                         )}
               </div>*/}

            </div>
         </div>

      </>
   );
};

export default FeatureArea;