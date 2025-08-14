export const Products = () => {
  return (
    <section id="usage" className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-start">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Рамы
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div
            className="bg-white p-8 border border-gray-700 duration-300 "
            style={{
              boxShadow: '6px 6px 0px rgba(0, 0, 0, 0.9)',
            }}
          >
            <div className="ramaImage rama-1"></div>
            <p className="text-gray-700 text-xl text-center mt-4">
              Силовая рама 4 столба
            </p>
            <p className="text-gray-500 text-center mt-4">
              Цена: 90 400&#8381;
            </p>
          </div>
          <div
            className="bg-white p-8 border border-gray-700 duration-300 flex flex-col gap-6"
            style={{
              boxShadow: '6px 6px 0px rgba(0, 0, 0, 0.9)',
            }}
          >
            <div className="ramaImage rama-2"></div>
            <div className="text-gray-700 text-xl text-center mt-4">
              Силовая рама 6 столбов
            </div>
            <div className="flex justify-center">
              <p className="text-white bg-black w-54 p-4 text-center ">
                Цена: 90 400&#8381;
              </p>
            </div>
          </div>
        </div>
        {/* <h3 className="text-2xl md:text-4xl font-bold mt-16 text-center">
          Модули
        </h3>

        <h3 className="text-xl md:text-3xl font-bold mt-16 text-center">
          Элементы рамы
        </h3>
        <h3 className="text-xl md:text-3xl font-bold mt-16 text-center">
          Навесные элементы
        </h3>
        <h3 className="text-xl md:text-3xl font-bold mt-16 text-center">
          Скамейки
        </h3>
        <h3 className="text-xl md:text-3xl font-bold mt-16 text-center">
          Свободный вес
        </h3> */}
        {/* <table className="mt-12">
          <tr>
            <td className="table-image">
              <img src="/public/module-1.jpg" alt="module-1" />
            </td>
            <td>Наименование детали 1</td>
            <td>14 600&#8381;</td>
          </tr>
          <tr>
            <td className="table-image">
              <img src="/public/module-1.jpg" alt="module-1" />
            </td>
            <td>Наименование детали 1</td>
            <td>14 600&#8381;</td>
          </tr>
          <tr>
            <td className="table-image">
              <img src="/public/module-1.jpg" alt="module-1" />
            </td>
            <td>Наименование детали 1</td>
            <td>14 600&#8381;</td>
          </tr>
          <tr>
            <td className="table-image">
              <img src="/public/module-1.jpg" alt="module-1" />
            </td>
            <td>Наименование детали 1</td>
            <td>14 600&#8381;</td>
          </tr>
          <tr>
            <td className="table-image">
              <img src="/public/module-1.jpg" alt="module-1" />
            </td>
            <td>Наименование детали 1</td>
            <td>14 600&#8381;</td>
          </tr>
          <tr>
            <td className="table-image">
              <img src="/public/module-1.jpg" alt="module-1" />
            </td>
            <td>Наименование детали 1</td>
            <td>14 600&#8381;</td>
          </tr>
        </table> */}

        {/* <div>Базовые наборы</div>
        <div>Набор №1</div>
        <div>Набор №2</div>
        <div>Набор №3</div>
        <div>Набор №4</div>
        <div>Набор №5</div> */}
      </div>
    </section>
  );
};
