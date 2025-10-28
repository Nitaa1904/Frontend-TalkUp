import { featuresData } from "../../models/home/featuresData";

const FeatureCard = ({ img, title, desc }) => {
  return (
    <div
      className="flex flex-col items-center text-center max-w-[290px] mx-auto 
                 transition-transform duration-300 hover:scale-105 hover:shadow-lg p-4 rounded-xl"
    >
      <img
        src={img}
        alt={title}
        className="w-[290px] h-[218px] object-contain mb-6"
      />
      <h3 className="text-[18px] font-bold mb-2">{title}</h3>
      <p className="text-[16px] text-gray-600">{desc}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h4 className="text-primary font-semibold mb-2">Kenapa TalkUp?</h4>
        <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-12">
          Sahabat Konseling Terbaik <br /> bagi Siswa Siswi
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {featuresData.map((feature) => (
            <FeatureCard
              key={feature.id}
              img={feature.img}
              title={feature.title}
              desc={feature.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
