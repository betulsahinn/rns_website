import Link from "next/link";


const social_links = [
  {
    link: "https://www.facebook.com/Ronesiscom/",
    target: "_blank",
    icon: "fab fa-facebook-f", 
  },
  {
    link: "https://twitter.com/ronesiscom",
    target: "_blank",
    icon: "fab fa-twitter", 
  },
  {
    link: "https://www.linkedin.com",
    target: "_blank",
    icon: "fab fa-linkedin-in", 
  },
  {
    link: "https://www.instagram.com/ronesiscom/",
    target: "_blank",
    icon: "fab fa-instagram",
  },
];

const SocialLinks = () => {
  return (
    <>
      {social_links.map((l, i) => (
        <Link
          key={i}
          href={l.link}
          className={l.color}
          target={l.target ? l.target : ""}
        >
          <i className={l.icon}></i>
        </Link>
      ))}
    </>
  );
};

export default SocialLinks;






const copy_right_text = {
  copy_right: <>Bütün Hakları Saklıdır<br/> <Link href="#">©2018 Rönesans İnovasyon ve Mühendislik A.Ş.</Link> </>,
}
const {copy_right}  = copy_right_text

export const CopyRight = ()  => {
  return (
    <>
    {copy_right}
    </>
  )
}




// home 04 social link
const social_links_two = [
  {
    link: "https://facebook.com/Ronesiscom/",
    target: "_blank",
    icon: "fab fa-facebook-f",
    color: "1", 
  },
  {
      link: "https://www.instagram.com/ronesiscom/",
      target: "_blank",
      icon: "fab fa-instagram", 
      color: "2",
  },

  {
    link: "https://twitter.com/ronesiscom",
    target: "_blank",
    icon: "fab fa-twitter", 
    color: "3",
  },
  {
    link: "https://www.linkedin.com",
    target: "_blank",
    icon: "fab fa-linkedin-in",
    color: "4", 
  }, 
];

export const  SocialLinksTwo = ()  => {
   return (
     <>
        {social_links_two.map((link, i) => (
          <Link
            key={i}
            target={link.target}
            className={`icon-color-${link.color}`}
            href={link.link}
          >
            <i className={link.icon}></i>
            <span></span>
          </Link>
        ))}
     </>
   );
}