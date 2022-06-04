import React from 'react';
import NextLink from 'next/link';

const Footer = () => {
  return (
    <footer className="p-5 mx-5">
      <div>
        <div className="w-full border-t border-gray-300"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="w-4/13 py-5">
          <div className="text-[#fff] font-bold text-3xl">
            Av. Bünyamin <br /> KÖSESOY
            <br />
            <span className="text-[#ffbd4a] py-5 text-sm">Antalya Barosu </span>
          </div>
        </div>

        <div className="w-3/13">
          <div className="text-white font-semibold py-5 ">Faydalı Linkler</div>
          <div>
            <ul className="text-[#c3c5cc] font-normal leading-7">
              <li>
                <NextLink href="/">
                  <a className="hover:text-yellow-500">Anasayfa</a>
                </NextLink>
              </li>
              <li>
                <NextLink href="/#about">
                  <a className="hover:text-yellow-500">Hakkımızda</a>
                </NextLink>
              </li>
              <li>
                <NextLink href="/practice-area">
                  <a className="hover:text-yellow-500">Çalışma Alanları</a>
                </NextLink>
              </li>
              <li>
                <NextLink href="/price">
                  <a className="hover:text-yellow-500">Ücret</a>
                </NextLink>
              </li>
              <li>
                <NextLink href="/#contact">
                  <a className="hover:text-yellow-500">İletişim</a>
                </NextLink>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="text-white font-semibold py-5">Sosyal Medya</div>
          <div>
            <ul className="text-[#c3c5cc] font-normal leading-7">
              <li>
                <NextLink href="/blog">
                  <a className="hover:text-yellow-500">Blog</a>
                </NextLink>
              </li>
              <li>
                <NextLink href="#">
                  <a className="hover:text-yellow-500">İnstagram</a>
                </NextLink>
              </li>
              <li>
                <NextLink href="#">
                  <a className="hover:text-yellow-500">Linkedin</a>
                </NextLink>
              </li>
              <li>
                <NextLink href="#">
                  <a className="hover:text-yellow-500">Twitter</a>
                </NextLink>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="py-5 inline-flex">
            <img
              className="border-solid border-2 border-white rounded-md shadow-md"
              src="/images/Kosesoyamblemnavbar.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
