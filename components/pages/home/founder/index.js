import React from 'react';
import NextLink from 'next/link';

const Founder = () => {
  return (
    <>
      <div className="bg-[#1a2451] ">
        <div className="mt-16 flex justify-center items-center">
          <h1 className="text-4xl font-[martel] font-bold text-white text-center ">
            Kurucu Avukat
          </h1>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl block lg:flex">
        <div className="flex justify-center items-center pb-2 m-4 p-4 space-y-3 lg:space-y-0 min-w-[300px] mx-auto">
          <div className="p-4 text-gray-800 shadow-md bg-white border-solid border-2 border-[#Ffbd4a] rounded-md  ">
            <div className="mb-4">
              <NextLink href="/#hakkımızda">
                <a>
                  <img
                    className="border-solid border-4 border-[#1a2451] p-1"
                    src="/images/bunyamin-kosesoy.jpg"
                    alt=""
                  />
                </a>
              </NextLink>

              <div className="flex flex-col items-center justify-center">
                <h5 className="font-bold text-[[#1a2451]] my-5">
                  Av. Bünyamin KÖSESOY
                </h5>
                <p className="text-sm text-[#1a2451]">Kurucu Avukat</p>
                <div className="inline-flex mt-4 space-x-4">
                  <NextLink href="#">
                    <a>
                      <img
                        src="/icons/icons8-instagram-24.png"
                        alt="İnstagram"
                      />
                    </a>
                  </NextLink>
                  <NextLink href="#">
                    <a>
                      <img
                        src="/icons/icons8-instagram-24.png"
                        alt="İnstagram"
                      />
                    </a>
                  </NextLink>
                  <NextLink href="#">
                    <a>
                      <img src="/icons/twitterlogo.png" alt="Twitter" />
                    </a>
                  </NextLink>
                  <NextLink href="https://www.linkedin.com/in/bunyaminkosesoy/">
                    <a>
                      <img src="/icons/icons8-linkedin-24.png" alt="LinkedIn" />
                    </a>
                  </NextLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-white px-10 min-w-[340px] lg:min-w-0 mx-auto">
          <h1 className="inline-flex text-left font-bold font-[martel] m-5">
            Av. Bünyamin KÖSESOY
          </h1>
          <h2 className="text-justify leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            aperiam deleniti, ad nobis reiciendis hic itaque? Autem, vitae
            quidem. Nam, minima illum. Reiciendis fugit quaerat molestias
            aspernatur, architecto sunt quis. Quas labore qui, aspernatur minus
            illum obcaecati voluptatem provident odit nesciunt architecto.
            Similique, accusantium. Ab quas quis omnis, est tempore laboriosam
            odit commodi, odio sapiente, dicta amet accusamus ullam repellat!
            Sit delectus inventore, odit asperiores exercitationem commodi
            minima aliquam explicabo voluptatum minus. Rem nesciunt maxime
            cupiditate ratione quia suscipit ad illo aliquam similique laborum
            error exercitationem, doloremque architecto sapiente cum!
          </h2>
        </div>
      </div>
    </>
  );
};

export default Founder;
