import React, { useState } from 'react';
import NextLink from 'next/link';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="relative z-50">
      <div className="">
        <nav className="flex justify-between items-center p-5 ">
          <div className=" ">
            <NextLink href="/">
              <a>
                <img
                  className="h-14 md:h-24 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
                  src="/images/Kosesoyamblemnavbar.png"
                  alt="Kösesoy"
                />
              </a>
            </NextLink>
          </div>

          <div className="hidden md:block justify-end">
            <ul className="flex space-x-5 text-[#ffffff] text-base bg-[#1a2451] p-5 rounded-lg bg-opacity-75 ">
              <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:text-yellow-500">
                <NextLink href="/">
                  <a>Anasayfa</a>
                </NextLink>
              </li>
              <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:text-yellow-500">
                <NextLink href="/#about">
                  <a>Hakkımızda</a>
                </NextLink>
              </li>
              <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:text-yellow-500">
                <NextLink href="/practice-area">
                  <a>Çalışma Alanları</a>
                </NextLink>
              </li>
              <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:text-yellow-500">
                <NextLink href="/blog">
                  <a>Blog</a>
                </NextLink>
              </li>
              <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:text-yellow-500">
                <NextLink href="/price">
                  <a>Ücret</a>
                </NextLink>
              </li>
              <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:text-yellow-500">
                <NextLink href="/#contact">
                  <a>İletişim</a>
                </NextLink>
              </li>
            </ul>
          </div>
          <div className="block md:hidden justify-end ">
            <div className="relative inline-block dropdown">
              <div className=" relative inline-block text-left ">
                <div>
                  <button
                    className="inline-flex w-full justify-center rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
                    onClick={() => setToggle((state) => !state)}
                  >
                    <img
                      className="bg-[#1a2451] p-5 rounded-lg bg-opacity-75 "
                      src="/icons/navbar-toggler.png"
                      alt=""
                    />
                  </button>
                </div>
                <div className={`z-20 ${!toggle ? 'hidden' : ''}`}>
                  <div className="absolute right-0 mt-2 w-40 py-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white bg-opacity-70 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-2 py-2">
                      <div className=" flex justify-end items-center bg-center p-2 mr-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300">
                        <button className="Button p-1 rounded-md hover:bg-yellow-400 active:bg-yellow-500 ">
                          <NextLink href="/">
                            <a>Anasayfa</a>
                          </NextLink>
                        </button>
                      </div>
                      <div className=" flex justify-end items-center bg-center p-2 mr-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300">
                        <button className="Button p-1 rounded-md hover:bg-yellow-400 active:bg-yellow-500 ">
                          <NextLink href="/#about">
                            <a>Hakkımızda</a>
                          </NextLink>
                        </button>
                      </div>
                      <div className="flex justify-end items-center bg-center p-2 mr-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300">
                        <button className="Button p-1 rounded-md hover:bg-yellow-400 active:bg-yellow-500 ">
                          <NextLink href="/practice-area">
                            <a>Çalışma Alanları</a>
                          </NextLink>
                        </button>
                      </div>
                      <div className="Menu.Item flex justify-end items-center bg-center p-2 mr-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300">
                        <button className="Button p-1 rounded-md hover:bg-yellow-400 active:bg-yellow-500 ">
                          <NextLink href="/blog">
                            <a>Blog</a>
                          </NextLink>
                        </button>
                      </div>
                      <div className="Menu.Item flex justify-end items-center bg-center p-2 mr-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300">
                        <button className="Button p-1 rounded-md hover:bg-yellow-400 active:bg-yellow-500 ">
                          <NextLink href="/price">
                            <a>Ücret</a>
                          </NextLink>
                        </button>
                      </div>
                      <div className="Menu.Item flex justify-end items-center bg-center p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300">
                        <button className="Button p-1 mr-1 rounded-md hover:bg-yellow-400 active:bg-yellow-500 ">
                          <NextLink href="/#contact">
                            <a>İletişim</a>
                          </NextLink>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
