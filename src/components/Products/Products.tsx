import { Complex } from '../../entities/complex/data';
import { Modules } from '../../entities/modules/data';

export const Products = () => {
  console.log(Modules);
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
                Цена: 75400&#8381;
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
                Цена: 115100&#8381;
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
                      Цена: {module.price}&#8381;
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

                <div className="flex justify-center">
                  <p className="text-white bg-black w-54 p-4 text-center ">
                    Цена: {compl.price}&#8381;
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* <div className="grid md:grid-cols-3 gap-8">
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
        </div> */}
      </div>
    </section>
  );
};
