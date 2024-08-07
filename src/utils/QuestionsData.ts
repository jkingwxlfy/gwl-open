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
                    Таможенная декларация на товары (ТД): Эта декларация используется для оформления импорта, экспорта и транзита товаров через таможенную территорию Казахстана. Она содержит информацию о товарах, их стоимости, количестве, происхождении и других деталях.
                </li>
                <li>
                    Таможенная декларация на транспортное средство (ТДТС): Подается при ввозе или вывозе    транспортных средств через таможенную границу. Включает информацию о транспортном средстве, его технических характеристиках, стоимости и других деталях.
                </li>
                <li>
                    Таможенная декларация на временный ввоз (ТДВ): Используется для временного ввоза товаров на территорию Казахстана с целью их использования на определенный срок без уплаты таможенных пошлин и налогов.
                </li>
                <li>
                    Таможенная декларация на временный вывоз (ТДВЫ): Подается при временном вывозе товаров из Казахстана за его пределы на определенный срок без уплаты таможенных пошлин и налогов.
                </li>
            </ul>
            <div>
                Это основные виды таможенных деклараций, используемых в Казахстане, хотя могут существовать и другие формы в зависимости от конкретных ситуаций и типов товаров.
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
                Растаможка груза - это обширный предмет, и описать все его нюансы не получится. Процедура стандартного таможенного оформления любого груза такова:
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
                    Валютный контроль и контроль правильности определения таможенной стоимости.
                </li>
                <li>
                    Проверка правильности прохождения таможенных платежей (верная ли пошлина была назначена, верно ли уплачена, поступила ли, и туда ли она поступила и т.д.)
                </li>
                <li>
                    Таможенный контроль товаров и транспортных средств (например, соответствует ли фактический груз данным, указанным в декларации, или нет?)
                </li>
                <li>
                    Выпуск товара в свободное обращение (собственно, одобрение).
                </li>
            </ul>
            <div>
                Более подробную информацию вы можете получить у нашего специалиста. Для этого позвоните по контактным телефонам и сообщите более детальную информацию касательно вашего вопроса.
            </div>
        `,
    },
    {
        id: 6,
        title: 'Как начисляется таможенная пошлина?',
        text: `
            <div>
                Таможенная пошлина начисляется в зависимости от кода ТН ВЭД и таможенной ставки, указанной в Едином Таможенном Тарифе для Таможенного Союза. Вам необходимо обратиться к этим документам, найти там свой товар по коду, а затем рассчитать стоимость таможенной пошлины, которая составит определенный процент от таможенной стоимости товара (себестоимость товара+доставка+страховка).
            </div>
            <br/>
            <div>
                Вы также можете прочесть статью о расчете налогов и пошлин на нашем сайте - Расчет налогов и таможенных платежей.
            </div>
            <br/>
            <div>
                Если у вас возникнут трудности, то смело звоните нам по контактным телефонам. Наши специалисты помогут вам правильно рассчитать таможенные платежи и налоги!
            </div>
        `,
    },
    {
        id: 7,
        title: 'Каковы сроки хранения задержанных товаров и документов на них?',
        text: `
            <div>
                В соответствии со ст. 238 Кодекса Республики Казахстан "О таможенном деле в Республике Казахстан" от 30 июня 2010 года № 296-IV задержанные товары и документы на них, за исключением товаров, указанных в пункте 2 настоящей статьи, хранятся таможенными органами в течение одного месяца, а скоропортящиеся продукты - в течение двадцати четырех часов. Товары, запрещенные к ввозу на таможенную территорию Таможенного союза или вывозу за пределы такой территории, и документы на них хранятся таможенными органами в течение трех суток. Сроки хранения задержанных товаров исчисляются со дня их задержания, а скоропортящихся продуктов - с момента их задержания.
            </div>
        `,
    },
    {
        id: 8,
        title: 'Подскажите, пожалуйста, как проходят таможенную очистку товары ввозимые из Китая в Казахстан?',
        text: `
            <div>
                У каждого товара свой код согласно ТН ВЭД ТС и ставка таможенной пошлины согласно ЕТТ ТС.
                Таможенная очистка вышеперечисленных товаров проходит в общем порядке с уплатой таможенной пошлины, таможенного сбора за таможенное оформление и НДС 12%. Суммы таможенной пошлины и НДС рассчитываются каждая по отдельной формуле с учётом транспортных расходов до границы ТС. Ставка таможенного сбора постоянна и составляет 60 евро за основной лист Декларации на товары (1 вид товара) и 25 евро за каждый добавочный лист в котором можно отразить 3 вида товаров.
                Часть товаров подлежит обязательной сертификации. На товары с электронными схемами и системами необходимо разрешение/согласование от КНБ РК.
                Если вам необходима более подробная информация, позвоните в нашу компанию по контактным телефонам. Мы с удовольствием вас проконсультируем.
            </div>
        `,
    },
]

export default QuestionsData
