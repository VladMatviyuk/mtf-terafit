export const Products = () => {
  return (
    <section id="products" className="pt-20 px-6">
      <div className="max-w-6xl mx-auto text-start">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Рамы
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div
            className="bg-white p-8 border border-gray-700 duration-300 flex flex-col gap-6"
            style={{
              boxShadow: '6px 6px 0px rgba(0, 0, 0, 0.9)',
            }}
          >
            <div className="ramaImage rama-1"></div>
            <div className="text-gray-700 text-xl text-center mt-4">
              Силовая рама 4 столба
            </div>
            <div className="flex justify-center">
              <p className="text-white bg-black w-54 p-4 text-center ">
                Цена: 75 400&#8381;
              </p>
            </div>
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
                Цена: 115 100&#8381;
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

        <h2 className="text-3xl md:text-4xl font-bold text-center my-16">
          Базовые комплектации
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div
            className="bg-white p-8 border border-gray-700 duration-300 flex flex-col gap-6"
            style={{
              boxShadow: '6px 6px 0px rgba(0, 0, 0, 0.9)',
            }}
          >
            <div className="ramaImage compl-1"></div>
            <div className="text-gray-700 text-xl text-center mt-4">
              Комплектация №1
              <div className="text-white text-xs">
                (Ручки в комплект не входят)
              </div>
            </div>

            <div className="flex justify-center">
              <p className="text-white bg-black w-54 p-4 text-center ">
                Цена: 92 400&#8381;
              </p>
            </div>
          </div>
          <div
            className="bg-white p-8 border border-gray-700 duration-300 flex flex-col gap-6"
            style={{
              boxShadow: '6px 6px 0px rgba(0, 0, 0, 0.9)',
            }}
          >
            <div className="ramaImage compl-2"></div>
            <div className="text-gray-700 text-xl text-center mt-4">
              Комплектация №2
              <div className="text-gray-500 text-xs">
                (Ручки в комплект не входят)
              </div>
            </div>
            <div className="flex justify-center">
              <p className="text-white bg-black w-54 p-4 text-center ">
                Цена: 172 000&#8381;
              </p>
            </div>
          </div>
          <div
            className="bg-white p-8 border border-gray-700 duration-300 flex flex-col gap-6"
            style={{
              boxShadow: '6px 6px 0px rgba(0, 0, 0, 0.9)',
            }}
          >
            <div className="ramaImage compl-3"></div>
            <div className="text-gray-700 text-xl text-center mt-4">
              Комплектация №3
              <div className="text-gray-500 text-xs">
                (Ручки в комплект не входят)
              </div>
            </div>
            <div className="flex justify-center">
              <p className="text-white bg-black w-54 p-4 text-center ">
                Цена: 137 200&#8381;
              </p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 my-16">
          <div
            className="bg-white p-8 border border-gray-700 duration-300 flex flex-col gap-6"
            style={{
              boxShadow: '6px 6px 0px rgba(0, 0, 0, 0.9)',
            }}
          >
            <div className="ramaImage compl-5"></div>
            <div className="text-gray-700 text-xl text-center mt-4">
              Комплектация №4
            </div>
            <div className="flex justify-center">
              <p className="text-white bg-black w-54 p-4 text-center ">
                Цена: 137 900&#8381;
              </p>
            </div>
          </div>
          <div
            className="bg-white p-8 border border-gray-700 duration-300 flex flex-col gap-6"
            style={{
              boxShadow: '6px 6px 0px rgba(0, 0, 0, 0.9)',
            }}
          >
            <div className="ramaImage compl-6"></div>
            <div className="text-gray-700 text-xl text-center mt-4">
              Комплектация №5
            </div>
            <div className="flex justify-center">
              <p className="text-white bg-black w-54 p-4 text-center ">
                Цена: 287 700&#8381;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
