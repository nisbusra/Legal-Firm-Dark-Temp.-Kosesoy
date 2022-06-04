import React from 'react';
import NextLink from 'next/link';

const Hero = () => {
  return (
    <div className="showcase bg-[url('/images/booksandstatuedenim.jpg')] -mt-[136px] h-screen bg-center bg-cover">
      <div className="pt-96">
        <h1 className="text-4xl font-[martel] font-extrabold shadow-lg text-white text-center ">
          Önceliğimiz, sorunlarınızın çözümüdür.
        </h1>

        <div className="mx-10">
          <p className="flex justify-center text-sm text-white text-center mt-12 font-[montserrat] font-light max-w-[600px] mx-auto">
            Kösesoy, gerçek ve tüzel kişi müvekkillerine sunmuş olduğu hızlı,
            etkili, çözüm odaklı hukuki danışmanlık hizmetlerini yurtiçi ve
            yurtdışındaki gerçekleştirmektedir.
          </p>
        </div>

        <div className="flex justify-center items-center mt-5">
          <span className="text-white bg-[#Ffbd4a] p-3 rounded-lg bg-opacity-75 ring-1 hover:ring-[#fff] ring-offset-[#1a2451] opacity-60 hover:opacity-100">
            <NextLink href="/#about">
              <a>Daha fazlası için...</a>
            </NextLink>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
