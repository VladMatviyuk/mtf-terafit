import styles from "./style.module.css";
export const Hero = () => {
  return (
    <section
      id="home"
      className={
        styles.bg +
        " min-h-screen flex items-center justify-center px-6 text-center relative overflow-hidden"
      }
    >
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-black text-4xl md:text-6xl font-bold mb-6 leading-tight bg-white/75">
          Мультистанция <span className="">Терафит</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-black-300 max-w-3xl mx-auto italic bg-white/75 p-4">
          Это универсальный многофункциональный тренажер, созданный для
          функционального тренинга в любых условиях: дома, в спортивном зале или
          даже на открытом воздухе.
        </p>
      </div>
    </section>
  );
};
