export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-white border-t border-gray-700"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Контакты</h2>
        <p className="text-xl mb-10 text-gray-700">
          Получить полный каталог с ценами и техническими характеристиками, а
          также узнать про индивидуальные предложения можно связавшись с нами.
        </p>
        <div className="space-y-4">
          <a
            href="mailto:ceo@terafit18.ru"
            className="block bg-black hover:bg-red-600 text-white font-bold px-8 py-3 rounded-lg transition duration-300 mx-auto max-w-xs"
          >
            Написать на почту
          </a>
          <p className="text-black text-lg">
            Тел.{" "}
            <a
              href="tel:+79199168685"
              className="hover:text-red-500 transition"
            >
              +7 (919) 916-86-85
            </a>
          </p>
          <p className="text-gray-700 text-sm">
            Официальный сайт:{" "}
            <a
              href="https://terafit.ru "
              className="text-red-500 hover:underline"
            >
              terafit.ru
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
