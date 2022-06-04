import React from 'react';
import NextLink from 'next/link';

const Content = () => {
  return (
    <div className="bg-[#1a2451] flex ">
      <div className="m-8 justify-center items-center text-center lg:m-16">
        <div className="my-5">
          <h1 className="text-center text-2xl text-[#fff] font-[martel] font-extrabold">
            Avukatlık Ücreti
          </h1>
        </div>
        <div className="justify-center items-center text-justify text-white">
          <div>
            Avukatlık vekalet ücreti yasal temelini Anayasa ‘dan almaktadır.
            Anayasanın 18. maddesinde çalışma hürriyeti düzenlenmiştir. Herkes
            çalışma hakkına sahiptir. Bu hak ayrıca kişinin yaşadığı topluma
            karşı bir vazifesidir. Bununla birlikte ücretsiz çalışmak ve angarya
            yasaktır. <br />
            <br />
            <span>
              <NextLink href="https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=1136&MevzuatTur=1&MevzuatTertip=5">
                <a className="font-bold underline underline-offset-2">
                  1136 Sayılı Avukatlık Kanunu
                </a>
              </NextLink>
            </span>{' '}
            ise avukatlığın ücretli bir kamu hizmeti olduğunu bir çok maddesinde
            göstermiştir.
            <span>
              {' '}
              <NextLink href="https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=6098&MevzuatTur=1&MevzuatTertip=5">
                <a className="font-bold underline underline-offset-2">
                  6098 Sayılı Türk Borçlar Kanunu
                </a>
              </NextLink>
            </span>{' '}
            içerisinde vekalet sözleşmesine uygulanacak yasa hükümlerine yer
            verilmiştir.
            <span>
              {' '}
              <NextLink href="https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=6100&MevzuatTur=1&MevzuatTertip=5">
                <a className="font-bold underline underline-offset-2">
                  6100 Sayılı Hukuk Mahkemeleri Kanunu
                </a>
              </NextLink>
            </span>{' '}
            ( 323. Maddesi) vekil ile takip edilen işlerde avukatlık ücreti
            olduğu belirtilmiştir.{' '}
            <span>
              <NextLink href="https://www.barobirlik.org.tr/">
                <a className="font-bold underline underline-offset-2">
                  Türkiye Barolar Birliği
                </a>
              </NextLink>
            </span>
            , her yıl yenilenen ve güncellenen Avukatlık Asgari Ücret Tarifesi
            ‘ni oluşturmakta ve resmi gazetede yayımlamaktadır.2022 Yılı
            Avukatlık Asgari Ücret Tarifesi 20 Kasım 2021 Tarih ve 31665 sayılı
            resmi gazetede yayımlanarak yürürlüğe girmiştir. Her avukat ve hukuk
            bürosu da da asgari ücret tarifesinin alt sınırlarına aykırı olmamak
            koşuluyla yapılacak iş ve takip edilecek davalardaki vekalet ücreti
            politikasını serbestçe belirleyebilir. Bununla birlikte uygulamada
            ve yasada üç farklı vekalet ücreti hesaplama sisteminin olduğu
            söylenebilecektir:
          </div>
          <h2 className="font-semibold text-[#ffbd4a] text-lg my-3">
            Saatlik Vekalet Ücreti
          </h2>
          <p>
            Müvekkillerimizin işleri için, ayrılan her bir zaman diliminin ayrı
            ayrı ücretlendirildiği sistemdir. Bu sistemde müvekkilimizle
            aramızda yapacağımız Avukatlık Ücret Sözleşmesinde, yapılacak işin
            niteliğine göre işe ayıracağımız zamanın her bir saati için bir
            ücret talep edilir. Bu saatlik vekalet ücretinin miktarı, işin
            yapısına göre kararlaştırılır. Müvekkillerimizin işine ayırdığımız
            her bir zaman ölçülür ve avukat tarafından zaman ücret çizelgesine
            işlenerek ilgili çizelge imzalanır. Bu çizelgeye göre de ücretimiz,
            müvekkilimize makbuzlanır.
          </p>
          <h2 className="font-semibold text-[#ffbd4a] text-lg my-3">
            Aylık Vekalet Ücreti
          </h2>
          <p>
            Genellikle tarafımızdan Danışmanlık Hizmeti alan kurumsal
            müvekkillerimizden aylık olarak talep ettiğimiz vekalet ücreti
            sistemimizdir. Bu avukatlık ücret sisteminde, müvekkillerimiz;
            avukatlık ücret sözleşmesi ile belirlenen hizmet karşılığında yine
            aynı sözleşme ile belirlenen ücreti tarafımıza ödemektedirler.
          </p>
          <h2 className="font-semibold text-[#ffbd4a] text-lg my-3">
            Toplam Vekalet Ücreti
          </h2>
          <p className="mb-5">
            Genel ve bilindik vekalet ücreti sistemidir. Avukat tarafından takip
            edilmesi istenen iş için avukatın talep ettiği toplam meblağdır.
            Genellikle uygulamada davalar ve icra takiplerinde istenen avukatlık
            ücretidir. Bu ücret dava değerine (Müddeabihe) göre oransal olarak
            belirlenebileceği gibi toplam bir meblağ olarak da belirlenebilir.
          </p>
        </div>
        <div className="text-gray-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300">
          <NextLink href="https://www.antalyabarosu.org.tr/Detay.aspx?ID=/lO9fTJdrKpweRU4AUfdmA==">
            <a>
              2022 YILI TAVSİYE NİTELİĞİNDEKİ ÜCRET TARİFESİ&apos;ne erişmek
              için tıklayın.
            </a>
          </NextLink>
        </div>
      </div>
    </div>
  );
};

export default Content;
