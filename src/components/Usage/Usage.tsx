export const Usage = () => {
  return (
    <section id="usage" className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-start">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Мобильность
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Дома",
              text: "Не нужно 10 тренажеров. Одна компактная станция заменит всё. Подходит для квартир, гаражей, дач.",
            },
            {
              title: "На улице",
              text: "Устойчив к погоде, не ржавеет. Установите во дворе, парке — тренируйтесь в любое время года. Есть возможность установить навес, крышу прямо на раму.",
            },
            {
              title: "В зале",
              text: "Идеален для частных студий, фитнес-клубов, тренеров. Экономит место и бюджет.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 border border-gray-700 duration-300 "
              style={{
                boxShadow: "6px 6px 0px rgba(0, 0, 0, 0.9)",
              }}
            >
              <h3 className="text-xl font-semibold mb-4 text-black">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
