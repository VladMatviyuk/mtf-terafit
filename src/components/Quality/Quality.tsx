export const Quality = () => {
  return (
    <section className="py-20 px-20 bg-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-18 text-white">
          <span className="text-red-500">Т</span>ерафит это
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {[
            { num: "25+", label: "лет на рынке" },
            { num: "🇷🇺", label: "Сертифицировано в РФ" },
            { num: "🏭", label: "Собственное производство" },
          ].map((item, i) => (
            <div key={i}>
              <div className="text-2xl md:text-3xl font-bold text-red-500 mb-2">
                {item.num}
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                {item.label}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-18 text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Мы контролируем каждый этап — от чертежа до упаковки. Наше
          оборудование используется в России, Европе, ОАЭ и других странах.
        </p>
      </div>
    </section>
  );
};
