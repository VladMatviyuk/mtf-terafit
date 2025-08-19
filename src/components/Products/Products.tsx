import { useState } from 'react';
import { Complex } from '../../entities/complex/data';
import { Modules } from '../../entities/modules/data';

export const Products = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [complex, setComplex] = useState(undefined);

  const handleOpenModel = (complex?: any) => {
    if (isOpen) {
      setIsOpen(false);
      setComplex(undefined);
      return;
    }

    setComplex(complex);
    setIsOpen(true);
  };

  function formatNumber(str: string) {
    const num = parseInt(str, 10);
    if (isNaN(num)) return str;

    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

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
            <div className="text-gray-700 text-xl text-center my-4 font-bold">
              Силовая рама 4 столба
            </div>
            <div className="ramaImage rama-1"></div>
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
            <div className="text-gray-700 text-xl text-center mt-4 font-bold">
              Силовая рама 6 столбов
            </div>
            <div className="ramaImage rama-2"></div>
            <div className="flex justify-center">
              <p className="text-white bg-black w-54 p-4 text-center ">
                Цена: 115 100&#8381;
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold my-16 text-center">
          Модули
        </h2>

        <div className="grid grid-cols md:grid-cols-3 grid-rows-5 gap-4">
          {Modules.map((module) => {
            if (!module.iamge || !module.price) return;
            return (
              <div
                className="bg-white p-4 border border-gray-700 duration-300 flex flex-col justify-between"
                style={{
                  boxShadow: '6px 6px 0px rgba(0, 0, 0, 0.9)',
                }}
              >
                <div className="moduleImage">
                  <div className="text-gray-700 text-xl text-center font-bold">
                    {module.name}
                  </div>
                  <img
                    className="my-8"
                    src={`modules/${module?.iamge ?? '404.png'}`}
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-center">
                    <p className="text-white bg-black w-48 p-4 text-center text-sm ">
                      Цена: {formatNumber(module.price)}&#8381;
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-center my-16">
          Готовые решения
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {Complex.map((compl) => {
            return (
              <div
                key={compl.name}
                className="bg-white p-8 border border-gray-700 duration-300 flex flex-col gap-6"
                style={{
                  boxShadow: '6px 6px 0px rgba(0, 0, 0, 0.9)',
                }}
              >
                <div className="text-gray-700 text-xl text-center font-bold">
                  {compl.name}
                </div>
                <div className="coplexImage my-6">
                  <img src={`complex/${compl.image}`} alt={compl.image} />
                </div>

                <div className="flex flex-col items-center justify-center gap-2">
                  <p className="text-white bg-black w-54 p-4 text-center ">
                    Цена: {formatNumber(compl.price)}&#8381;
                  </p>

                  <p
                    className="text-black border w-40 p-2 text-center text-sm cursor-pointer"
                    onClick={() => handleOpenModel(compl)}
                  >
                    Подробнее
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => handleOpenModel()}
        >
          <div
            className="bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Заголовок */}
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold">{complex.name}</h2>
            </div>

            {/* Прокручиваемый контент */}
            <div className="flex-1 overflow-y-auto p-6 max-h-[60vh]">
              <div className="flex flex-col gap-4">
                <h3 className="text-xl text-left font-bold my-1">Основа</h3>
                <div className="flex flex-col items-center gap-2 border-gray-300 py-2">
                  <img
                    className="h-24"
                    src={complex.modules.core.image}
                    alt=""
                  />
                  <div className="text-l font-bold">
                    {complex.modules.core.name}
                  </div>
                </div>

                <h3 className="text-xl text-left font-bold my-1">Модули</h3>
                {complex.modules.elements.map((element) => (
                  <div
                    key={element.name}
                    className="flex justify-between items-center border-b border-gray-300 py-2"
                  >
                    <img
                      className="h-24"
                      src={`modules/${element.iamge}`}
                      alt=""
                    />
                    <div className="text-sm text-right max-w-32 font-bold">
                      {element.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Кнопка закрытия внизу */}
            <div className="p-6 border-t border-gray-200 flex justify-between">
              <div className="text-2xl">
                {formatNumber(complex.price)}&#8381;
              </div>
              <button
                onClick={() => handleOpenModel()}
                className="border border-gray-300 text-gray-600 px-4 py-2 rounded hover:bg-gray-100 transition"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
