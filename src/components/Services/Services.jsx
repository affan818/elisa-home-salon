import AnimatedHeader from "../AnimatedHeader.jsx/AnimatedHeader";
import data from "../../../servicesData.json";

export default function Services() {
  return (
    <div className="bg-[#FAF3E0] text-[#2E2C29]">
      {/* Page Header */}
      <AnimatedHeader title="Services" />

      <section className="bg-gradient-to-br py-16 px-8 rounded-3xl shadow-2xl">
        <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex flex-col md:flex-row lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4">
          <div className="lg:w-[50%] xs:w-full">
            <img
              className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm w-full h-80 object-cover"
              src="https://images.pexels.com/photos/6763116/pexels-photo-6763116.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="chocolate wax"
            />
          </div>
          <div className="lg:w-[50%] sm:w-full xs:w-full bg-gradient-to-br from-[#FFF5E1] to-[#FFEBCC] md:p-4 xs:p-0 rounded-md">
            <h2 className="text-3xl font-semibold bg-gradient-to-br from-[#FFF5E1] to-[#FFEBCC]">
              Chocolate Wax
            </h2>
            <p className="text-lg mt-6 font-serif text-[#2E2C29] leading-relaxed tracking-wide">
              Indulge in the ultimate pampering experience with our Chocolate
              Wax. Enriched with decadent chocolate, it delicately removes hair
              while deeply nourishing and hydrating your skin. Designed for even
              the most sensitive skin, it leaves you feeling irresistibly
              smooth, velvety soft, and enveloped in luxurious comfort.
            </p>
          </div>
        </div>
        {/* Second Section */}
        <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex flex-col md:flex-row lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-6">
          <div className="lg:w-[50%] xs:w-full bg-gradient-to-br from-[#FFF5E1] to-[#FFEBCC] md:p-4 xs:p-0 rounded-md">
            <h2 className="text-3xl font-semibold bg-gradient-to-br from-[#FFF5E1] to-[#FFEBCC]">
              Rica Wax
            </h2>
            <p className="text-lg mt-6 font-serif text-[#2E2C29] leading-relaxed tracking-wide">
              Discover the elegance of Rica Wax, a premium treatment that
              combines the power of natural ingredients to offer a smooth,
              painless waxing experience. Infused with a blend of soothing oils,
              it not only removes hair effectively but also nourishes and
              hydrates your skin, leaving it soft, supple, and rejuvenated.
              Perfect for all skin types, Rica Wax is the epitome of luxury and
              comfort, providing a truly indulgent experience.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:block sm:hidden xs:hidden lg:w-[50%] xs:w-full mt-6 md:mt-0">
            <img
              className="lg:rounded-t-lg xs:rounded-sm w-full h-80 object-cover"
              src="https://images.pexels.com/photos/18243182/pexels-photo-18243182/free-photo-of-candle-burning-on-a-shoulder-of-a-young-shirtless-woman.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="billboard image"
            />
          </div>
        </div>
        {/* facial section  */}
        <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex flex-col md:flex-row lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-6">
          {/* Image Section */}
          <div className="md:block sm:hidden xs:hidden lg:w-[50%] xs:w-full mt-6 md:mt-0">
            <img
              className="lg:rounded-t-lg xs:rounded-sm w-full h-80 object-cover"
              src="https://images.pexels.com/photos/21316248/pexels-photo-21316248/free-photo-of-woman-with-eyes-closed-and-mask-on-face-for-skin-care.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Facial"
            />
          </div>
          <div className="lg:w-[50%] xs:w-full bg-gradient-to-br from-[#FFF5E1] to-[#FFEBCC] md:p-4 xs:p-0 rounded-md">
            <h2 className="text-3xl font-semibold bg-gradient-to-br from-[#FFF5E1] to-[#FFEBCC]">
              Facial
            </h2>
            <p className="text-lg mt-6 font-serif text-[#2E2C29] leading-relaxed tracking-wide">
              Indulge in the ultimate relaxation with our luxurious facials.
              Each treatment is designed to deeply cleanse, hydrate, and
              rejuvenate your skin, leaving it glowing and revitalized. Using
              premium skincare products, our facials are tailored to your skin's
              unique needs, ensuring a personalized experience that promotes
              youthful radiance and long-lasting beauty. Perfect for a serene
              escape from the stresses of everyday life, our facials are the
              epitome of skincare luxury.
            </p>
          </div>
        </div>
        {/* D-tan  */}
        <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex flex-col md:flex-row lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-6">
          <div className="lg:w-[50%] xs:w-full bg-gradient-to-br from-[#FFF5E1] to-[#FFEBCC] md:p-4 xs:p-0 rounded-md">
            <h2 className="text-3xl font-semibold bg-gradient-to-br from-[#FFF5E1] to-[#FFEBCC]">
              D-Tan
            </h2>
            <p className="text-lg mt-6 font-serif text-[#2E2C29] leading-relaxed tracking-wide">
              Reveal your natural glow with our rejuvenating D-Tan treatment.
              This luxurious treatment is designed to effectively lighten and
              even out your skin tone, removing the effects of sun exposure and
              pollution. Infused with potent ingredients, our D-Tan treatment
              nourishes and hydrates your skin, leaving it refreshed, smooth,
              and visibly brighter. Perfect for restoring your skin’s radiance,
              it’s an indulgent way to rejuvenate your complexion and embrace a
              glowing, youthful appearance.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:block sm:hidden xs:hidden lg:w-[50%] xs:w-full mt-6 md:mt-0">
            <img
              className="lg:rounded-t-lg xs:rounded-sm w-full h-80 object-cover"
              src="https://femina.wwmindia.com/content/2022/mar/d-tan11646649694.jpg"
              alt="billboard image"
            />
          </div>
        </div>
        {/* Bleach  */}
        <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex flex-col md:flex-row lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-6">
          {/* Image Section */}
          <div className="md:block sm:hidden xs:hidden lg:w-[50%] xs:w-full mt-6 md:mt-0">
            <img
              className="lg:rounded-t-lg xs:rounded-sm w-full h-80 object-cover"
              src="https://www.ashleespa.com/assets/images/service/hair-beauty/women/bleach.webp"
              alt="Facial"
            />
          </div>
          <div className="lg:w-[50%] xs:w-full bg-gradient-to-br from-[#FFF5E1] to-[#FFEBCC] md:p-4 xs:p-0 rounded-md">
            <h2 className="text-3xl font-semibold bg-gradient-to-br from-[#FFF5E1] to-[#FFEBCC]">
              Bleaching
            </h2>
            <p className="text-lg mt-6 font-serif text-[#2E2C29] leading-relaxed tracking-wide">
              Experience a radiant transformation with our premium Bleach
              treatment. Specially formulated to lighten facial hair and even
              skin tone, this treatment helps reveal a smoother, brighter
              complexion. Infused with gentle ingredients, it not only lightens
              but also nourishes the skin, leaving it soft and glowing. Ideal
              for achieving a flawless, youthful appearance, our Bleach
              treatment is the perfect way to enhance your natural beauty with a
              touch of luxury.
            </p>
          </div>
        </div>
        {/* massage  */}
        <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex flex-col md:flex-row lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-6">
          <div className="lg:w-[50%] xs:w-full bg-gradient-to-br from-[#FFF5E1] to-[#FFEBCC] md:p-4 xs:p-0 rounded-md">
            <h2 className="text-3xl font-semibold bg-gradient-to-br from-[#FFF5E1] to-[#FFEBCC]">
              Massage
            </h2>
            <p className="text-lg mt-6 font-serif text-[#2E2C29] leading-relaxed tracking-wide">
              Indulge in the ultimate relaxation with our luxurious Massage
              therapy. Expertly crafted to melt away tension and stress, each
              stroke promotes deep relaxation while improving circulation and
              rejuvenating your skin. Whether you're seeking tranquility or a
              revitalizing boost, our massage treatments offer a harmonious
              blend of comfort and indulgence, leaving you feeling renewed and
              refreshed, inside and out.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:block sm:hidden xs:hidden lg:w-[50%] xs:w-full mt-6 md:mt-0">
            <img
              className="lg:rounded-t-lg xs:rounded-sm w-full h-80 object-cover"
              src="https://images.pexels.com/photos/19641807/pexels-photo-19641807/free-photo-of-massage-therapist-pouring-oil-on-a-womans-back.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Massage"
            />
          </div>
        </div>
        {/* clean up  */}
        <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex flex-col md:flex-row lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-6">
          {/* Image Section */}
          <div className="md:block sm:hidden xs:hidden lg:w-[50%] xs:w-full mt-6 md:mt-0">
            <img
              className="lg:rounded-t-lg xs:rounded-sm w-full h-80 object-cover"
              src="https://images.herzindagi.info/image/2021/Mar/fruits-for-skin.jpg"
              alt="Clean up"
            />
          </div>
          <div className="lg:w-[50%] xs:w-full bg-gradient-to-br from-[#FFF5E1] to-[#FFEBCC] md:p-4 xs:p-0 rounded-md">
            <h2 className="text-3xl font-semibold bg-gradient-to-br from-[#FFF5E1] to-[#FFEBCC]">
              Clean Up
            </h2>
            <p className="text-lg mt-6 font-serif text-[#2E2C29] leading-relaxed tracking-wide">
              Refresh and rejuvenate your skin with our luxurious Clean Up
              treatments. Infused with the natural goodness of fruits and
              botanicals, our clean-up services gently exfoliate and purify your
              skin, leaving it radiant and revitalized. Designed to remove
              impurities and refresh your complexion, this treatment provides
              deep hydration and a glowing, fresh-faced look. Perfect for all
              skin types, it's your skin’s perfect first step to a renewed,
              youthful appearance.
            </p>
          </div>
        </div>
        {/* manicure  */}
        <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex flex-col md:flex-row lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-6">
          <div className="lg:w-[50%] xs:w-full bg-gradient-to-br from-[#FFF5E1] to-[#FFEBCC] md:p-4 xs:p-0 rounded-md">
            <h2 className="text-3xl font-semibold bg-gradient-to-br from-[#FFF5E1] to-[#FFEBCC]">
              Manicure
            </h2>
            <p className="text-lg mt-6 font-serif text-[#2E2C29] leading-relaxed tracking-wide">
              Indulge in the ultimate pampering experience with our luxurious
              Manicure service. Our expert technicians treat your hands to a
              soothing, rejuvenating experience, from shaping and exfoliation to
              nourishing your nails and cuticles. Whether you're looking for a
              classic polish or an elegant gel finish, we ensure your nails are
              left looking flawless and feeling soft. Perfect for those who seek
              a touch of elegance and relaxation, our manicure leaves you with
              hands that are not only beautiful but also deeply cared for.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:block sm:hidden xs:hidden lg:w-[50%] xs:w-full mt-6 md:mt-0">
            <img
              className="lg:rounded-t-lg xs:rounded-sm w-full h-80 object-cover"
              src="https://images.pexels.com/photos/7446921/pexels-photo-7446921.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Massage"
            />
          </div>
        </div>
        {/* padicure  */}
        <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex flex-col md:flex-row lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-6">
          {/* Image Section */}
          <div className="md:block sm:hidden xs:hidden lg:w-[50%] xs:w-full mt-6 md:mt-0">
            <img
              className="lg:rounded-t-lg xs:rounded-sm w-full h-80 object-cover"
              src="https://images.pexels.com/photos/6663566/pexels-photo-6663566.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Clean up"
            />
          </div>
          <div className="lg:w-[50%] xs:w-full bg-gradient-to-br from-[#FFF5E1] to-[#FFEBCC] md:p-4 xs:p-0 rounded-md">
            <h2 className="text-3xl font-semibold bg-gradient-to-br from-[#FFF5E1] to-[#FFEBCC]">
              Pedicure
            </h2>
            <p className="text-lg mt-6 font-serif text-[#2E2C29] leading-relaxed tracking-wide">
              Treat your feet to the luxury they deserve with our indulgent
              Pedicure service. From a soothing soak to the meticulous
              exfoliation, we provide a rejuvenating experience that refreshes
              both your feet and your spirit. Our expert technicians will shape,
              buff, and hydrate your nails and cuticles, leaving your feet soft,
              smooth, and beautifully polished. Whether you prefer a classic
              look or a bold statement, our pedicure ensures your feet are
              pampered, polished, and ready to step out in style.
            </p>
          </div>
        </div>
        {/* Hair cut and Trimming  */}
        <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex flex-col md:flex-row lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-6">
          <div className="lg:w-[50%] xs:w-full bg-gradient-to-br from-[#FFF5E1] to-[#FFEBCC] md:p-4 xs:p-0 rounded-md">
            <h2 className="text-3xl font-semibold bg-gradient-to-br from-[#FFF5E1] to-[#FFEBCC]">
              Hair cut and Trimming
            </h2>
            <p className="text-lg mt-6 font-serif text-[#2E2C29] leading-relaxed tracking-wide">
              Experience the art of precision and style with our exclusive Hair
              Cut and Trimming service. Whether you're looking for a dramatic
              transformation or a subtle refresh, our expert stylists will craft
              a look that suits your personality and enhances your natural
              beauty. Using only the finest techniques, we offer tailored cuts
              and trims that complement your features and lifestyle. Indulge in
              a rejuvenating experience that leaves your hair feeling smooth,
              refreshed, and impeccably styled.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:block sm:hidden xs:hidden lg:w-[50%] xs:w-full mt-6 md:mt-0">
            <img
              className="lg:rounded-t-lg xs:rounded-sm w-full h-80 object-cover"
              src="https://images.pexels.com/photos/7755239/pexels-photo-7755239.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Massage"
            />
          </div>
        </div>
        {/* Hair Care Styling  */}
        <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex flex-col md:flex-row lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-6">
          {/* Image Section */}
          <div className="md:block sm:hidden xs:hidden lg:w-[50%] xs:w-full mt-6 md:mt-0">
            <img
              className="lg:rounded-t-lg xs:rounded-sm w-full h-80 object-cover"
              src="https://images.pexels.com/photos/8467963/pexels-photo-8467963.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Clean up"
            />
          </div>
          <div className="lg:w-[50%] xs:w-full bg-gradient-to-br from-[#FFF5E1] to-[#FFEBCC] md:p-4 xs:p-0 rounded-md">
            <h2 className="text-3xl font-semibold bg-gradient-to-br from-[#FFF5E1] to-[#FFEBCC]">
              Hair Care Styling
            </h2>
            <p className="text-lg mt-6 font-serif text-[#2E2C29] leading-relaxed tracking-wide">
              Elevate your look with our premium Hair Care Styling service,
              where beauty meets sophistication. Our expert stylists use
              top-tier products and techniques to create flawless, long-lasting
              styles that enhance your natural hair texture and complement your
              unique look. From elegant updos to sleek, bouncy curls, every
              style is crafted with care and precision. Experience the ultimate
              in hair care, leaving you feeling confident, glamorous, and ready
              to shine.
            </p>
          </div>
        </div>
        {/* Hair Spa Treatment  */}
        <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex flex-col md:flex-row lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-6">
          <div className="lg:w-[50%] xs:w-full bg-gradient-to-br from-[#FFF5E1] to-[#FFEBCC] md:p-4 xs:p-0 rounded-md">
            <h2 className="text-3xl font-semibold bg-gradient-to-br from-[#FFF5E1] to-[#FFEBCC]">
              Hair Spa Treatment
            </h2>
            <p className="text-lg mt-6 font-serif text-[#2E2C29] leading-relaxed tracking-wide">
              Indulge in the ultimate relaxation with our Hair Spa Treatment,
              designed to rejuvenate and nourish your hair from root to tip. Our
              premium treatments use luxurious oils, rich serums, and advanced
              techniques to restore vitality, smoothness, and shine to your
              hair. Whether you're seeking to repair damaged strands or simply
              unwind, our Hair Spa Treatment leaves your hair feeling
              revitalized, soft, and incredibly healthy. Experience the art of
              hair care at its finest, where every strand is pampered to
              perfection.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:block sm:hidden xs:hidden lg:w-[50%] xs:w-full mt-6 md:mt-0">
            <img
              className="lg:rounded-t-lg xs:rounded-sm w-full h-80 object-cover"
              src="https://images.pexels.com/photos/7755447/pexels-photo-7755447.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Massage"
            />
          </div>
        </div>
        {/* Hair colour styling */}
        <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex flex-col md:flex-row lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-6">
          {/* Image Section */}
          <div className="md:block sm:hidden xs:hidden lg:w-[50%] xs:w-full mt-6 md:mt-0">
            <img
              className="lg:rounded-t-lg xs:rounded-sm w-full h-80 object-cover"
              src="https://images.pexels.com/photos/8468125/pexels-photo-8468125.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Clean up"
            />
          </div>
          <div className="lg:w-[50%] xs:w-full bg-gradient-to-br from-[#FFF5E1] to-[#FFEBCC] md:p-4 xs:p-0 rounded-md">
            <h2 className="text-3xl font-semibold bg-gradient-to-br from-[#FFF5E1] to-[#FFEBCC]">
              Hair Colouring
            </h2>
            <p className="text-lg mt-6 font-serif text-[#2E2C29] leading-relaxed tracking-wide">
              Transform your look with our exquisite Hair Coloring service,
              where artistry meets luxury. We use high-quality, vibrant dyes
              that not only deliver stunning color but also nourish and protect
              each strand. From rich, deep tones to bold, radiant shades, our
              expert stylists craft the perfect color that complements your
              personality and enhances your natural beauty. Whether you’re going
              for a subtle enhancement or a dramatic change, our Hair Coloring
              service will leave you with a head of hair that’s vibrant,
              healthy, and full of life.
            </p>
          </div>
        </div>

        {/* Make up  */}

        <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex flex-col md:flex-row lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-6">
          <div className="lg:w-[50%] xs:w-full bg-gradient-to-br from-[#FFF5E1] to-[#FFEBCC] md:p-4 xs:p-0 rounded-md">
            <h2 className="text-3xl font-semibold bg-gradient-to-br from-[#FFF5E1] to-[#FFEBCC]">
              Make up
            </h2>
            <p className="text-lg mt-6 font-serif text-[#2E2C29] leading-relaxed tracking-wide">
              Elevate your beauty with our luxurious Makeup services, designed
              to enhance your natural features and bring out your inner
              radiance. Whether you’re preparing for a wedding, a special event,
              or just want to feel glamorous, our professional makeup artists
              use high-end products to create a flawless, long-lasting look.
              From subtle, elegant styles to bold, dramatic transformations, we
              tailor each makeup session to your unique vision, leaving you
              feeling confident, empowered, and ready to shine.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:block sm:hidden xs:hidden lg:w-[50%] xs:w-full mt-6 md:mt-0">
            <img
              className="lg:rounded-t-lg xs:rounded-sm w-full h-80 object-cover"
              src="https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Massage"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
