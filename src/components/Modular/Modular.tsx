import styles from './styles.module.css';

export const Modular = () => {
  return (
    <section id="modular" className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          Модульная система
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center p-4">
          <div>
            <p className="text-lg text-gray-300 mb-8">
              Мультистанция Терафит - это{' '}
              <strong className="text-white">рама + модули</strong>. Вы
              начинаете с основы, а затем добавляете:
            </p>
            <ul className="space-y-3 text-gray-300">
              {[
                'Силовую стойку с упорами и держателями штанги',
                'Блочный блок с тросами и рукоятками',
                'Станок для тяги (свободные веса)',
                'Откидные скамьи и упоры для ног',
                'Крепления для TRX, петель, резинок',
              ].map((item, i) => (
                <li key={i} className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-gray-400">
              <strong className="text-white">
                Одна рама - бесконечные возможности.
              </strong>
              <br />
              <br />
              Апгрейд без замены оборудования.
            </p>
          </div>
          <div
            className="bg-white  border border-gray-700 flex items-center justify-center"
            style={{ height: '550px' }}
          >
            <div className={styles.moduleImage} />
          </div>
        </div>
      </div>
    </section>
  );
};
