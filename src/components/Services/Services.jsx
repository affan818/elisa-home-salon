import AnimatedHeader from "../AnimatedHeader/AnimatedHeader.jsx";
import Card from "../Card/Card.jsx";

export default function Services() {
  return (
    <div className="bg-[#FAF3E0] text-[#2E2C29]">
      {/* Page Header */}
      <AnimatedHeader title="Services" />

      <section className="bg-gradient-to-br py-16 px-8 rounded-3xl shadow-2xl">
        <div className="grid gap-6 md:gap-8 lg:grid-cols-3 max-w-screen-xl mx-auto">
          <Card />
        </div>
      </section>
    </div>
  );
}
