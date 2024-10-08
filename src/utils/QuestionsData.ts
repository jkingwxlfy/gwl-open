import type { IService } from '@/models/IService'

const QuestionsData: IService[] = [
    {
        id: 1,
        title: 'Какие бывают виды таможенных деклараций?',
        text: `
            <div>
                В Казахстане существует несколько видов таможенных деклараций, включая:
            </div>
            <br/>
            <ul>
                <li>
                    Декларация на груз (ТД): Эта форма используется для оформления импорта, экспорта и транзита товаров через границу Казахстана. Она включает информацию о грузах, их стоимости, количестве, происхождении и других деталях.
                </li>
                <li>
                    На транспортное средство (ТДТС): Подается при ввозе или вывозе транспортных средств через границу. Включает информацию о транспортном средстве, его технических характеристиках, стоимости и других деталях.
                </li>
                <li>
                    На временный ввоз (ТДВ): Используется для временного ввоза грузов на территорию Казахстана с целью их использования на определенный срок без уплаты пошлин и налогов.
                </li>
                <li>
                    На временный вывоз (ТДВЫ): Подается при временном вывозе грузов из Казахстана за его пределы на определенный срок без уплаты сборов и налогов.
                </li>
            </ul>
            <div>
                Это основные виды деклараций, используемых в Казахстане, хотя могут существовать и другие формы в зависимости от конкретных ситуаций и типов грузов.
            </div>
        `,
    },
    {
        id: 3,
        title: 'Наша компания хочет начать внешнеэкономическую деятельность. Что нужно для этого сделать?',
        text: `
            <div>
                Стать участником внешней экономической деятельности (ВЭД) может любое юридическое и физическое лицо. Первыми шагами обычно являются поиск партнера за рубежом — поставщика или покупателя, а затем ведение с ним переговоров для того, чтобы заключить с ним контракт на поставку товаров. Если фирма, желающая найти партнера за границей, может начать действовать, не имея собственного опыта в ВЭД, то перед заключением контракта желательно проконсультироваться с людьми или фирмами, имеющими опыт в подписании таких контрактов. Это могут быть консультанты из юридических фирм, но чаще всего, таким консультантом становится таможенный представитель (такую фирму называют еще и «таможенным брокером»).
            </div>
            <br/>
            <div>
                По всем вопросам, связанным с ВЭД, вы можете смело обращаться в нашу компанию! Позвоните по контактным телефонам и мы ответим на все ваши вопросы!
            </div>
        `,
    },
    {
        id: 4,
        title: 'Чем может быть полезен таможенный брокер?',
        text: `
            <div>
                Таможенный брокер — это фирма, специализирующаяся на таможенной очистке импортных или экспортных грузов. Однако этим его сфера деятельности не ограничивается.
            </div>
            <br/>
            <div>
                Таможенный представитель или таможенный брокер консультирует клиента на этапе заключения контракта, помогает выбрать необходимые условия поставки (согласно Инкотермс 2010), разъясняет особенности торговли с различными странами, особенности перевозки, консультирует по вопросам валютного законодательства, документооборота, ценообразования, логистики и т.д.
            </div>
            <br/>
            <div>
                В настоящее время таможенный представитель может взять все вопросы ВЭД клиента на себя.
            </div>
            <br/>
            <div>
                За более подробными разъяснениями обращайтесь в нашу компанию по контактным телефонам!
            </div>
        `,
    },
    {
        id: 5,
        title: 'Какова процедура растаможки товара?',
        text: `
            <div>
                В Казахстане существует несколько видов деклараций, включая:
            </div>
            <br/>
            <ul>
                <li>
                    Приём, регистрация и учёт декларации на товары.
                </li>
                <li>
                    Контроль правильности определения кода ТН ВЭД и соблюдения правил нетарифного регулирования (нормативный контроль объемов импорта-экспорта, проверка наличия необходимых лицензий и т.д.)
                </li>
                <li>
                    Валютный контроль и контроль правильности определения стоимости.
                </li>
                <li>
                    Проверка правильности прохождения таможенных платежей (верная ли пошлина была назначена, верно ли уплачена, поступила ли, и туда ли она поступила и т.д.)
                </li>
                <li>
                    Контроль перевозок и транспортных средств (например, проверка соответствия фактического груза данным, указанным в декларации).
                </li>
                <li>
                    Выпуск продукции в свободное обращение (собственно, одобрение).
                </li>
            </ul>
            <div>
                Более подробную информацию вы можете получить у нашего специалиста. Для этого позвоните по контактным телефонам и сообщите более детальную информацию касательно вашего вопроса.
            </div>
        `,
    },
    {
        id: 6,
        title: 'Как начисляется пошлина на импорт?',
        text: `
            <div>
                Пошлина определяется на основе кода ТН ВЭД и ставки, указанной в Едином Тарифе для Таможенного Союза. Вам нужно обратиться к этим документам, найти свой продукт по коду и рассчитать стоимость пошлины, которая представляет собой определенный процент от стоимости товара (себестоимость товара + доставка + страховка).
            </div>
            <br/>
            <div>
                Вы также можете ознакомиться со статьей о расчете налогов и пошлин на нашем сайте в разделе "Расчет налогов и таможенных платежей".
            </div>
            <br/>
            <div>
                Если у вас возникнут вопросы, не стесняйтесь обращаться к нам по контактным телефонам. Наши эксперты помогут вам правильно рассчитать все необходимые платежи и налоги!
            </div>
        `,
    },
    {
        id: 7,
        title: 'Каковы сроки хранения задержанных изделий и документов на них?',
        text: `
            <div>
                В соответствии со ст. 238 Кодекса Республики Казахстан "О таможенном деле в Республике Казахстан" от 30 июня 2010 года № 296-IV задержанные изделия и документы на них, за исключением указанных в пункте 2 данной статьи, хранятся контрольными органами в течение одного месяца, а скоропортящиеся продукты — в течение двадцати четырех часов. Продукция, запрещенная к ввозу на таможенную территорию Таможенного союза или вывозу за пределы этой территории, и документы на нее хранятся контрольными органами в течение трех суток.
            </div>
            <br/>
            <div>
                Сроки хранения задержанных изделий исчисляются со дня их задержания, а скоропортящихся продуктов — с момента их задержания.
            </div>
        `,
    },
    {
        id: 8,
        title: 'Как проходит таможенная очистка продукция, ввозимая из Китая в Казахстан?',
        text: `
            <div>
                У каждого изделия свой код согласно ТН ВЭД ТС и ставка пошлины согласно ЕТТ ТС. Процесс очистки указанных предметов проходит в общем порядке с уплатой пошлины, сбора за оформление и НДС 12%. Суммы пошлины и НДС рассчитываются по отдельным формулам с учетом транспортных расходов до границы ТС. Ставка сбора постоянна и составляет 60 евро за основной лист Декларации (1 вид продукции) и 25 евро за каждый добавочный лист, в котором можно отразить 3 вида изделий. Часть продукции подлежит обязательной сертификации. Для изделий с электронными схемами и системами требуется разрешение/согласование от КНБ РК. Если вам нужна более подробная информация, позвоните в нашу компанию по контактным телефонам. Мы с удовольствием вас проконсультируем.
            </div>
        `,
    },
]

export default QuestionsData
