const Testimonial = () => {
  return (
    <section className="w-screen  h-[345px] bg-[url('/assets/icons/banner-bg.svg')] bg-no-repeat bg-cover bg-center">
      <div className="h-full bg-bottom bg-[url('/assets/icons/testimonial.svg')] bg-no-repeat flex items-center justify-center">
        <div className="mx-auto text-center px-3 md:px-0">
          <h3 className="mb-4 text-primary-black text-[14px] leading-6 font-semibold md:text-xl md:leading-9">
            তিনি বলেন, রাসূলুল্লাহ্ (সাঃ) বলেছেন : কোন মুসলিম যখন উত্তমরূপে উযূ
            করে একাগ্রচিত্তে আল্লাহর দিকে রুজু হয়ে দাঁড়িয়ে দুই রাক’আত
            <br />
            সলাত আদায়করে তার জন্য জান্নাত অবধারিত হয়ে যায়।
          </h3>
          <p className="text-primary-black/60">[সহিহ ফাযায়েলে আমল: ৮৭]</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
