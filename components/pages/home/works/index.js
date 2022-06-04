import React from 'react';
import NextLink from 'next/link';

const Works = () => {
  return (
    <div className="bg-[#1a2451] flex flex-col " id="practiseAreas">
      <div className="mt-24">
        <h1 className="text-4xl font-[martel] font-bold text-white text-center ">
          Çalışma Alanlarımız
        </h1>

        <div className="mx-10">
          <p className="flex justify-around text-base text-white text-center mt-12 font-[montserrat] font-light">
            Profesyonel çözümler için yanınızdayız.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center justify-items-center items-center gap-3 my-16 mx-auto max-w-[1280px]">
        <div className="bg-white border-solid border-2 w-80 h-40 border-[#Ffbd4a] rounded-md hover:shadow-xl cursor-pointer active:ring-1 active:ring-[#ffffff] ">
          <div className="inline-flex items-center m-4">
            <div className="mr-3">
              <img src="/icons/sigortahukuku.png" alt="Sigorta Hukuku" />
            </div>
            <div>
              <h3 className="font-[martel] font-bold">Sigorta Hukuku</h3>
            </div>
          </div>
          <div className="mx-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum id
              sunt officiis! minima eligendi esse.
            </p>
          </div>
        </div>

        <div className="bg-white border-solid border-2 w-80 h-40 border-[#Ffbd4a] rounded-md hover:shadow-xl cursor-pointer active:ring-1 active:ring-[#ffffff]">
          <div className="inline-flex items-center m-4">
            <div className="mr-3">
              <img src="/icons/cezahukuku.png" alt="Ceza Hukuku" />
            </div>
            <div>
              <h3 className="font-[martel] font-bold">Ceza Hukuku</h3>
            </div>
          </div>
          <div className="mx-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum id
              sunt officiis! minima eligendi esse.
            </p>
          </div>
        </div>

        <div className="bg-white border-solid border-2 w-80 h-40 border-[#Ffbd4a] rounded-md hover:shadow-xl cursor-pointer active:ring-1 active:ring-[#ffffff]">
          <div className="inline-flex items-center m-4">
            <div className="mr-3">
              <img src="/icons/familylaw.png" alt="Aile Hukuku" />
            </div>
            <div>
              <h3 className="font-[martel] font-bold">Aile Hukuku</h3>
            </div>
          </div>
          <div className="mx-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum id
              sunt officiis! minima eligendi esse.
            </p>
          </div>
        </div>

        <div className="bg-white border-solid border-2 w-80 h-40 border-[#Ffbd4a] rounded-md hover:shadow-xl cursor-pointer active:ring-1 active:ring-[#ffffff]">
          <div className="inline-flex items-center m-4">
            <div className="mr-3">
              <img
                className=""
                src="/icons/medenihukuk.png"
                alt="Medeni Hukuk"
              />
            </div>
            <div>
              <h3 className="font-[martel] font-bold">Medeni Hukuk</h3>
            </div>
          </div>
          <div className="mx-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum id
              sunt officiis! minima eligendi esse.
            </p>
          </div>
        </div>

        <div className="bg-white border-solid border-2 w-80 h-40 border-[#Ffbd4a] rounded-md hover:shadow-xl cursor-pointer active:ring-1 active:ring-[#ffffff]">
          <div className="inline-flex items-center justify-center p-4">
            <div className="mr-3">
              <img src="/icons/businesslaw.png" alt="İş Hukuku" />
            </div>
            <div>
              <h3 className="font-[martel] font-bold">İş Hukuku</h3>
            </div>
          </div>
          <div className="mx-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum id
              sunt officiis! minima eligendi esse.
            </p>
          </div>
        </div>

        <div className="bg-white border-solid border-2 w-80 h-40 border-[#Ffbd4a] rounded-md hover:shadow-xl cursor-pointer active:ring-1 active:ring-[#ffffff]">
          <div className="inline-flex items-center m-4">
            <div className="mr-3">
              <img src="/icons/gayrimenkul.png" alt="Gayrimenkul Hukuku" />
            </div>
            <div className="flex text-center">
              <h3 className="font-[martel] font-bold">Gayrimenkul Hukuku</h3>
            </div>
          </div>
          <div className="mx-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum id
              sunt officiis! minima eligendi esse.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <span className="text-white bg-[#Ffbd4a] p-3 rounded-lg bg-opacity-75 ring-1 hover:ring-[#fff] ring-offset-[#1a2451]">
          <NextLink href="/practice-area">
            <a>Daha fazlası için...</a>
          </NextLink>
        </span>
      </div>
    </div>
  );
};

export default Works;
