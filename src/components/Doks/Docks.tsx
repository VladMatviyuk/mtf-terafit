export const Docks = () => {
  return (
    <section id="docs" className="py-16 px-6 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Скачайте документацию
        </h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          Ознакомьтесь с полным чертежом мультистанции и инструкцией по сборке.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {/* Кнопка: Сборочный чертёж */}
          <a
            href="/docs/steps.pdf"
            download="Инструкция_сборки_МТФ_Терафит.pdf"
            className="flex items-center gap-3 bg-white text-black px-6 py-4 rounded-lg hover:bg-gray-200 transition duration-300 shadow-sharp group"
          >
            <svg
              className="w-6 h-6 text-red-500"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM2 18V6c0-1.1.9-2 2-2h8v6h6v10c0 1.1-.9 2-2 2H4a2 2 0 0 1-2-2z" />
            </svg>
            <span className="font-medium">Инструкция сборки</span>
            <span className="text-sm text-gray-500 group-hover:text-gray-700 ml-2">
              PDF
            </span>
          </a>

          {/* Кнопка: Каталог */}
          <a
            href="/docs/steps_mtf.pdf"
            download="Сборочный_чертеж_МТФ_Терафит.pdf"
            className="flex items-center gap-3 bg-white text-black border border-gray-300 px-6 py-4 rounded-lg hover:bg-gray-200 transition duration-300 shadow-sharp group"
          >
            <svg
              className="w-6 h-6 text-red-500"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM2 18V6c0-1.1.9-2 2-2h8v6h6v10c0 1.1-.9 2-2 2H4a2 2 0 0 1-2-2z" />
            </svg>
            <span className="font-medium">Сборочный чертёж</span>
            <span className="text-sm text-gray-500 group-hover:text-gray-700 ml-2">
              PDF
            </span>
          </a>
        </div>

        {/* Подсказка */}
        {/* <p className="text-gray-500 text-sm mt-8">
          Файл откроется в браузере или начнёт загружаться — в зависимости от
          настроек.
        </p> */}
      </div>
    </section>
  );
};
