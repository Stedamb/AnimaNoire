import { Phone, Mail, Instagram, Facebook } from "lucide-react";
import menuItems from "@/data/menu";

const Footer = () => {
  const items = menuItems;

  return (
    <div className="bg-background-alt">
      <div className=" grid grid-cols-2 lg:grid-cols-3 lg:gap-8 container-xl p-4">
        <div className="col-span-2 lg:col-span-1 mix-blend-exclusion p-8">
          <img
            src="/logo.svg"
            alt="Logo"
            width="640"
            height="640"
            className="w-1/2 lg:w-3/4 mx-auto h-auto"
          />
        </div>
        <div className="flex flex-col justify-center pl-8 py-8">
          <p className="text-xl bold">
            AnimaNoire Tattoo Atelier
          </p>
          <div className="text-sm mt-8">
            <a href="tel:+1 (234) 567-890" className="flex items-start gap-2 underline">
              <Phone size={18}></Phone>
              +1 (234) 567-890
            </a>
            <a href="mailto:info@animanoire.com" className="flex items-start gap-2 underline mt-2">
              <Mail size={18}></Mail>
              info@animanoire.com
            </a>
            <div className="mt-8">
              <p className="text-sm">
                Follow us on social media:
              </p>
              <div className="flex gap-4 mt-4">
                <a href="https://www.facebook.com/animanoire/" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-8 h-8" />
                </a>
                <a href="https://www.instagram.com/animanoire/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-8 h-8" />
                </a>
                <a href="https://www.instagram.com/animanoire/" target="_blank" rel="noopener noreferrer">
                  <svg className="w-7 h-8 fill-white ml-1" aria-label="TikTok" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TikTok</title><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>
                </a>

              </div>
            </div>
          </div>

        </div>
        <div className="flex flex-col items-end lg:justify-center lg:items-start p-8">
          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <a
                href={item.url}
                key={item.url}
                className="text-2xl font-title hover:underline"
              >
                {item.title}
              </a>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
