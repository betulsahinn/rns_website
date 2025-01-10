
import testimonial_img_1 from "../../public/assets/img/testimonial/testi-logo-up-3.png"
import testimonial_img_2 from "../../public/assets/img/testimonial/testi-logo-up-4.png"
import testimonial_img_3 from "../../public/assets/img/testimonial/testi-logo-up-5.png"
import testimonial_img_4 from "../../public/assets/img/testimonial/testi-logo-up-6.png"
import testimonial_img_5 from "../../public/assets/img/testimonial/testi-logo-up-1.png"
import testimonial_img_6 from "../../public/assets/img/testimonial/testi-logo-up-5.png"
import testimonial_img_7 from "../../public/assets/img/testimonial/testi-logo-up-3.png"
import testimonial_img_8 from "../../public/assets/img/testimonial/testi-logo-up-4.png"
import testimonial_img_9 from "../../public/assets/img/testimonial/testi-logo-up-5.png"
import testimonial_img_10 from "../../public/assets/img/testimonial/testi-logo-up-6.png"
import testimonial_img_11 from "../../public/assets/img/testimonial/testi-logo-up-1.png"
import testimonial_img_12 from "../../public/assets/img/testimonial/testi-logo-up-5.png"

import author_img_1 from "../../public/assets/img/testimonial/user.png"
import author_img_2 from "../../public/assets/img/testimonial/user.png"
import author_img_3 from "../../public/assets/img/testimonial/user.png"
import author_img_4 from "../../public/assets/img/testimonial/user.png"
import author_img_5 from "../../public/assets/img/testimonial/user.png"
import author_img_6 from "../../public/assets/img/testimonial/user.png"
import author_img_7 from "../../public/assets/img/testimonial/user.png"
import author_img_8 from "../../public/assets/img/testimonial/user.png"
import author_img_9 from "../../public/assets/img/testimonial/user.png"
import author_img_10 from "../../public/assets/img/testimonial/user.png"
import author_img_11 from "../../public/assets/img/testimonial/user.png"
import author_img_12 from "../../public/assets/img/testimonial/user.png"


import brand_icon_1 from "../../public/assets/img/testimonial/testi-logo-5-2.png"
import brand_icon_2 from "../../public/assets/img/testimonial/testi-logo-5-1.png"
import brand_icon_3 from "../../public/assets/img/testimonial/testi-logo-5-2.png"
import brand_icon_4 from "../../public/assets/img/testimonial/testi-logo-5-3.png"
import brand_icon_5 from "../../public/assets/img/testimonial/testi-logo-5-3.png"
import brand_icon_6 from "../../public/assets/img/testimonial/testi-logo-5-2.png"
import brand_icon_7 from "../../public/assets/img/testimonial/testi-logo-5-2.png"
import brand_icon_8 from "../../public/assets/img/testimonial/testi-logo-5-1.png"
import brand_icon_9 from "../../public/assets/img/testimonial/testi-logo-5-2.png"
import brand_icon_10 from "../../public/assets/img/testimonial/testi-logo-5-3.png"
import brand_icon_11 from "../../public/assets/img/testimonial/testi-logo-5-3.png"
import brand_icon_12 from "../../public/assets/img/testimonial/testi-logo-5-2.png"

const testimonial_data = [
    // Ana sayfa 01 için
    {
        id: 1,
        img: testimonial_img_1,
        name: "Ahmet Yılmaz",
        title: "İşyeri Temsilcisi",
        count: 94,
        description: <>"Sendikamız, çalışma koşullarının iyileştirilmesi ve işçi haklarının korunması için sürekli mücadele etmektedir. Üyelerimizin refahı bizim önceliğimizdir."</>,
        sub_des: <>Üye memnuniyetinde artış</>
    },
    {
        id: 2,
        img: testimonial_img_2,
        name: "Ayşe Demir",
        title: "Şube Başkanı",
        count: 59,
        description: <>"Sendikamızın örgütlü gücü ve kararlı duruşu sayesinde, üyelerimizin hakları için önemli kazanımlar elde ettik. Birlikte daha güçlüyüz."</>,
        sub_des: <>Üye katılımında artış</>
    },
    {
        id: 3,
        img: testimonial_img_3,
        name: "Mehmet Öztürk",
        title: "Eğitim Sekreteri",
        count: 82,
        description: <>"Üyelerimize yönelik düzenlediğimiz eğitim programları ve seminerler ile mesleki gelişimlerini destekliyor, bilinçli bir sendikal mücadele yürütüyoruz."</>,
        sub_des: <>Eğitim programlarına katılımda artış</>
    },
    {
        id: 4,
        img: testimonial_img_4,
        name: "Fatma Şahin",
        title: "Örgütlenme Sekreteri",
        count: 99,
        description: <>"Örgütlenme çalışmalarımız sayesinde her geçen gün büyüyen ailemiz, işçi sınıfının haklarını koruma mücadelesinde daha da güçleniyor."</>,
        sub_des: <>Yeni üye katılımında artış</>
    },
    {
        id: 5,
        img: testimonial_img_5,
        name: "Ali Kaya",
        title: "Mali Sekreter",
        count: 81,
        description: <>"Sendikamızın finansal kaynaklarını şeffaf ve etkin bir şekilde yöneterek, üyelerimize daha iyi hizmet sunmak için çalışıyoruz."</>,
        sub_des: <>Mali yönetimde şeffaflık</>
    },
    {
        id: 6,
        img: testimonial_img_6,
        name: "Zeynep Yıldız",
        title: "İş Sağlığı ve Güvenliği Uzmanı",
        count: 83,
        description: <>"İş sağlığı ve güvenliği konusunda yürüttüğümüz çalışmalar, üyelerimizin daha güvenli ortamlarda çalışmasını sağlıyor."</>,
        sub_des: <>İş kazalarında azalma</>
    },
    {
        id: 7,
        img: testimonial_img_7,
        name: "Hasan Demir",
        title: "Hukuk Müşaviri",
        count: 94,
        description: <>"Hukuki süreçlerde üyelerimizin haklarını korumak için var gücümüzle çalışıyor, adil bir çalışma hayatı için mücadele ediyoruz."</>,
        sub_des: <>Hukuki kazanımlar</>
    },
    {
        id: 8,
        img: testimonial_img_8,
        name: "Aysel Çelik",
        title: "Kadın Komisyonu Başkanı",
        count: 59,
        description: <>"Kadın işçilerin sorunlarına yönelik özel çalışmalar yürütüyor, cinsiyet eşitliğini gözeten bir çalışma ortamı için mücadele ediyoruz."</>,
        sub_des: <>Kadın üye katılımında artış</>
    },
    {
        id: 9,
        img: testimonial_img_9,
        name: "Mustafa Aydın",
        title: "Genç İşçiler Komisyonu Başkanı",
        count: 82,
        description: <>"Genç işçilerin sendikal mücadeleye katılımını artırmak için özel projeler geliştiriyor, geleceğin sendikacılarını yetiştiriyoruz."</>,
        sub_des: <>Genç üye katılımında artış</>
    },
    {
        id: 10,
        img: testimonial_img_10,
        name: "Sevgi Özkan",
        title: "Sosyal İşler Sekreteri",
        count: 99,
        description: <>"Üyelerimizin sosyal ve kültürel gelişimi için düzenlediğimiz etkinlikler, sendikamızın dayanışma ruhunu güçlendiriyor."</>,
        sub_des: <>Sosyal etkinliklere katılım</>
    },
    {
        id: 11,
        img: testimonial_img_11,
        name: "Okan Yılmazer",
        title: "Basın Yayın Sekreteri",
        count: 81,
        description: <>"Sendikamızın sesini duyurmak ve üyelerimizi bilgilendirmek için etkin bir iletişim stratejisi yürütüyoruz."</>,
        sub_des: <>İletişim etkinliğinde artış</>
    },
    {
        id: 12,
        img: testimonial_img_12,
        name: "Elif Koç",
        title: "Araştırma Sekreteri",
        count: 83,
        description: <>"İşçi sınıfının sorunlarına yönelik araştırmalar yapıyor, çözüm önerileri geliştiriyoruz."</>,
        sub_des: <>Araştırma raporları</>
    },

    // Ana sayfa 05 için
    {
        id: 13,
        author_img: author_img_1,
        brand_icon: brand_icon_1,
        name: "Kemal Yücel",
        title: "İşyeri Baş Temsilcisi",
        description: <>"Sendikamızın örgütlü gücü sayesinde toplu iş sözleşmesi görüşmelerinde önemli kazanımlar elde ettik. Dayanışma ruhumuz her geçen gün güçleniyor."</>,
    },
    {
        id: 14,
        author_img: author_img_2,
        brand_icon: brand_icon_2,
        name: "Sema Arslan",
        title: "Denetleme Kurulu Üyesi",
        description: <>"Sendikamızın şeffaf ve hesap verebilir yönetim anlayışı, üyelerimizin güvenini artırıyor ve kurumsal yapımızı güçlendiriyor."</>,
    },
    {
        id: 15,
        author_img: author_img_3,
        brand_icon: brand_icon_3,
        name: "Canan Yücel",
        title: "Disiplin Kurulu Başkanı",
        description: <>"Sendikal etik değerlerimiz ve ilkelerimiz doğrultusunda, üyelerimizin haklarını korumak için çalışıyoruz."</>,
    },
    {
        id: 16,
        author_img: author_img_4,
        brand_icon: brand_icon_4,
        name: "Burak Şahin",
        title: "Uluslararası İlişkiler Sorumlusu",
        description: <>"Uluslararası sendikal dayanışma ağlarıyla kurduğumuz işbirlikleri, mücadelemizi güçlendiriyor ve ufkumuzu genişletiyor."</>,
    },
    {
        id: 17,
        author_img: author_img_5,
        brand_icon: brand_icon_5,
        name: "Deniz Yalçın",
        title: "Çevre Komisyonu Başkanı",
        description: <>"İşçi sağlığı ve çevre konularında yürüttüğümüz projeler, sürdürülebilir bir gelecek için önemli adımlar atmamızı sağlıyor."</>,
    },
    {
        id: 18,
        author_img: author_img_6,
        brand_icon: brand_icon_6,
        name: "Selim Kara",
        title: "Engelli Komisyonu Başkanı",
        description: <>"Engelli üyelerimizin çalışma hayatında karşılaştıkları sorunların çözümü için özel projeler geliştiriyoruz."</>,
    },
    {
        id: 19,
        author_img: author_img_7,
        brand_icon: brand_icon_7,
        name: "Aslı Demir",
        title: "Eğitim Komisyonu Üyesi",
        description: <>"Mesleki eğitim programlarımız ve seminerlerimiz, üyelerimizin kişisel ve profesyonel gelişimine katkı sağlıyor."</>,
    },
    {
        id: 20,
        author_img: author_img_8,
        brand_icon: brand_icon_8,
        name: "Murat Özdemir",
        title: "İSG Komisyonu Üyesi",
        description: <>"İş güvenliği konusunda yaptığımız düzenli denetimler ve eğitimler, güvenli çalışma ortamının oluşmasını sağlıyor."</>,
    },
    {
        id: 21,
        author_img: author_img_9,
        brand_icon: brand_icon_9,
        name: "Gül Yılmaz",
        title: "Kültür Sanat Komisyonu Başkanı",
        description: <>"Düzenlediğimiz kültür-sanat etkinlikleri, üyelerimizin sosyal yaşamını zenginleştiriyor ve dayanışmayı güçlendiriyor."</>,
    },
    {
        id: 22,
        author_img: author_img_10,
        brand_icon: brand_icon_10,
        name: "Tarık Aksoy",
        title: "Emekli Üyeler Komisyonu Başkanı",
        description: <>"Emekli üyelerimizle olan bağlarımızı güçlendiriyor, deneyimlerinden faydalanmaya devam ediyoruz."</>,
    },
    {
        id: 23,
        author_img: author_img_11,
        brand_icon: brand_icon_11,
        name: "İpek Şahin",
        title: "Sosyal Etkinlikler Sorumlusu",
        description: <>"Üyelerimiz ve aileleri için düzenlediğimiz sosyal etkinlikler, sendika içi dayanışmayı ve birlikteliği güçlendiriyor."</>,
    },
    {
        id: 24,
        author_img: author_img_12,
        brand_icon: brand_icon_12,
        name: "Cemil Yıldırım",
        title: "Örgütlenme Uzmanı",
        description: <>"Yeni işyerlerinde yürüttüğümüz örgütlenme çalışmaları, sendikamızın büyümesine ve güçlenmesine katkı sağlıyor."</>,
    },
]
export default testimonial_data