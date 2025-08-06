export const Features = () => {
  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-start">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Преимущества
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Модульная система",
              text: "Добавляйте модули по мере роста задач. Сегодня — приседания, завтра — тяга, послезавтра — функциональный тренинг.",
            },
            {
              title: "Полная проработка тела",
              text: "От базы до изоляции — прокачайте все группы мышц. Один тренажер — полный комплекс упражнений.",
            },
            {
              title: "Компактность",
              text: "Экономьте пространство. Легко собирается, разбирается и перемещается. Идеален для дома, дачи, уличного зала.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white p-8 border border-gray-700 duration-300 "
              style={{
                boxShadow: "6px 6px 0px rgba(0, 0, 0, 0.9)",
              }}
            >
              <h3 className="text-xl font-semibold mb-4 text-black">
                {feature.title}
              </h3>
              <p className="text-black">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
