import type { IService } from '@/models/IService'

import service from '@/assets/selectedservice.png'
import service2 from '@/assets/service2.png'
import service3 from '@/assets/services3.png'
import service4 from '@/assets/services4.png'
import service5 from '@/assets/services5.png'
import service7 from '@/assets/services7.png'
import service8 from '@/assets/services8.png'

const ServicesData: IService[] = [
    {
        id: 1,
        image: service,
        title: 'Таможенная очистка грузов',
        text: `
        <div>
            Если вы хотите сэкономить свое время и получить
            свой груз вовремя, без “приключений” и за
            разумную цену, то самым лучшим решением было бы
            доверить таможенное оформление вашего груза
            надежному таможенному представителю.
        </div>
        <br />
        <div>
            Такому, как компания “GWL group”. Мы -
            профессионалы в таможенной очистке, поэтому:
        </div>
        <br />
        <ul>
            <li>
                <span>
                    Сэкономим ваше время и средства.
                </span>
                Наши услуги дешевле, чем ежемесячный оклад
                среднего логиста, а скорость работы и
                компетентность наших специалистов с лихвой
                оправдает вложенные средства.
            </li>
            <li>
                <span>
                    Разделим ответственность с вами.
                </span>
                Если вы решили осуществить растаможку груза
                самостоятельно, то ответственность за это
                несете только вы. И не факт, что, в случае
                ошибки в оформлении документов, вам хватит
                знаний, чтобы быстро разрешить ситуацию в
                свою пользу. Мы разделим с вами ваши
                обязательства и поможем оперативно решить
                любые возникшие разногласия.
            </li>
            <li>
                <span>Доставим груз до ваших дверей.</span>
                Мы начинаем работу с клиентом на этапе
                составления договора о внешнеэкономической
                деятельности, а заканчиваем доставкой груза
                до дверей вашего склада. Вам остается лишь
                расписаться в получении.
            </li>
            <li>
                <span>
                    Оказываем услуги на любом этапе
                    процедуры.
                </span>
                Вы можете обратиться к нам на любом этапе
                произведения таможенной очистки груза. Наши
                специалисты быстро включатся в вашу ситуацию
                и помогут решить вашу проблему, будь то
                правильное оформление декларации, расчет
                таможенных платежей и налогов или что-то
                еще, связанное с растаможкой.
            </li>
        </ul>
        <br />
        <div>
            Специалисты “GWL group” - это команда
            специалистов таможенного права и оформления,
            отлично зарекомендовавшая себя на рынке
            таможенных услуг! Доверяя нам, Вы гарантируете
            своевременное получение груза без передержек и
            проблем с документами, а также оперативное
            улаживание любых внештатных ситуаций, которые
            могут возникнуть в процессе!
        </div>
        <br />
        <span>
            Расширяйте горизонты вашего бизнеса вместе с
            “GWL group”!
        </span>
        `,
    },
    {
        id: 2,
        image: service2,
        title: 'Оформление И Подача Таможенной Декларации',
        text: `
        <div>
            <span>Важнейшей частью</span> процедуры таможенного оформления является подача и заполнение таможенной декларации на груз. Если вы или ваша компания - участник ВЭД, и вам нужно растаможить груз, пришедший из-за границы, то тут уже никак не обойтись без грузовой таможенной декларации.
        </div>
        <br />
        <div>
            <span>Грузовая таможенная декларация</span> - это основной документ, который оформляется при перемещении товаров через таможенную границу государства и подтверждает сведения о товаре. Оформление декларации производится распорядителем груза (непосредственно грузополучателем или таможенным представителем), и служит основанием для пропуска товара через границу.
        </div>
        <br />
        <div>В таможенной декларации должна содержаться вся информация о данной партии груза - наименование товара, его таможенная стоимость, средство транспортировки до границ Таможенного Союза (или РК), а также данные грузоотправителя и грузополучателя.</div>
        <br/>
        <div>Хотя основное описание документа выглядит достаточно просто, сам процесс оформления и подачи таможенной декларации - дело непростое, и требует хорошего знания всех нюансов и тонкостей.
        </div>
        <br/>
        <div>К примеру, сведения, указанные в таможенной декларации, должны полностью соответствовать предъявляемому для таможенного контроля товару. В случае, если будут выявлены какие-то несоответствия, у вас могут возникнуть неприятности.
        </div>
        <br/>
        <div>
            Например :
        </div>
        <br/>
        <ul>
            <li>
                неправильно подобранный код товара;
            </li>
            <li>
                неправильно указанный номер товара;
            </li>
            <li>
                не хватает какой-то информации в описании товара;
            </li>
            <li>
                есть расхождения между данными декларации и фактическим содержанием груза.
            </li>
        </ul>
        <br />
        <div>
            Может привести к :
        </div>
        <br />
        <ul>
            <li>
                дополнительным расходам (оплата за передержку на СВХ, штрафы);
            </li>
            <li>
                проблемам в выполнении контрактных обязательств перед партнерами;
            </li>
            <li>
                подрыву репутации компании;
            </li>
            <li>
                судебным разбирательствам!
            </li>
        </ul>
        <br/>
        <div>
            Чтобы избежать всего этого <span>“таможенного калейдоскопа”</span>, лучше всего поручить весь процесс оформления и подачи таможенной декларации компетентному таможенному представителю.
        </div>
        <br/>
        <div>
            Это избавит вас от беспокойства за возможную ошибку, а также от финансовых и временных потерь!
        </div>
        <br/>
        <div>
            <span>Компания “GWL group”</span> является одним из лучших таможенных представителей в Алматы, и в своей работе ориентирована исключительно на защиту интересов клиента в таможенных органах! Мы сэкономим ваше ценное время и грамотно оформим таможенную декларацию с тем, чтобы ваш груз прибыл к месту назначения своевременно и без проблем
        </div>
        `,
    },
    {
        id: 3,
        image: service3,
        title: 'Подбор Кодов ТН ВЭД',
        text: `
        <div>
            Когда вы импортируете или экспортируете товар, вам необходимо будет подобрать для него правильный <span>код ТН ВЭД</span> (Товарная Номенклатура Внешнеэкономической Деятельности). Этот код указывается в таможенной декларации и прочих сопроводительных документах к грузу.
        </div>
        <br />
        <div>
            Сама <span>процедура подбора кода</span> на первый взгляд выглядит простой - открываешь ТН ВЭД, находишь нужный код, прописываешь его в необходимые документы и все! - вопрос закрыт. На самом же деле можно получить некоторое представление об этом процессе уже после открытия номенклатуры, где можно потеряться в количестве кодов, классов, подклассов и прочей уточняющей информации. Но и это еще не все… Существуют дополнения к ТН ВЭД в виде разного рода пояснительных записок и дополнений к законодательным актам, связанным с ТН ВЭД, которые еще больше усложняют поиск…
        </div>
        <br />
        <div>
            В итоге на весь процесс, с учетом всех нюансов, классов, подклассов и т.д., может уйти достаточно много времени, которое вы могли бы потратить на другие аспекты бизнеса. И даже если вы это сделаете, то вряд ли получится предусмотреть все с первого раза и не допустить ни одной ошибки. Поэтому лучше поручить этот процесс профессионалам таможенного дела, которые имеют большой опыт в подборе этих кодов и помогут вам сэкономить время и деньги.
        </div>
        <br/>
        <span>
            На что влияет код ТН ВЭД?
        </span>
        <br/>
        <div>
            Неправильный подбор кода ТН ВЭД может привести к ряду серьезных проблем, а именно к :
        </div>
        <br/>
        <ul>
            <li>
                задержке груза;
            </li>
            <li>
                корректировке таможенной стоимости груза;
            </li>
            <li>
                многочисленным и долгим проверкам;
            </li>
            <li>
                конфискации груза с уплатой серьезных штрафных санкций;
            </li>
            <li>
                уголовному преследованию.
            </li>
        </ul>
        <br />
        <div>
            Следовательно, правильный подбор кода ТН ВЭД, крайне важен, ведь это :
        </div>
        <br />
        <ul>
            <li>
                значительно ускоряет процесс таможенной очистки груза;
            </li>
            <li>
                гарантирует отсутствие ненужных расходов;
            </li>
            <li>
                регулирует ставку таможенной пошлины на товар;
            </li>
            <li>
                устанавливает перечень необходимых сопроводительных документов (лицензий, сертификатов и т.п.).
            </li>
        </ul>
        <br/>
        <div>
            Словом, если вы хотите избежать проблем с таможней и в кратчайшие сроки произвести таможенную очистку груза - поручите подбор кодов ТН ВЭД для вашего груза таможенному представителю “GWL group”!
        </div>
        <br/>
        <div>
            <span>Компания “GWL group”</span> является одним из лучших таможенных представителей в Алматы, и в своей работе ориентирована исключительно на защиту интересов клиента в таможенных органах! Мы сэкономим ваше ценное время и грамотно оформим таможенную декларацию с тем, чтобы ваш груз прибыл к месту назначения своевременно и без проблем
        </div>
        `,
    },
    {
        id: 4,
        image: service4,
        title: 'Расчет Таможенных Платежей И Налогов',
        text: `
        <div>
            Каждый предприниматель заинтересован в том, чтобы получить как можно больше <span>дохода от своего предприятия</span>. Участники ВЭД в данном вопросе не являются исключением. При оценке рентабельности любого проекта, связанного с импортом или экспортом товара, важную роль играет размер налогов и таможенных пошлин, которые необходимо будет уплатить государству. Это может стать решающим фактором для того, чтобы дать проекту ход или совсем отказаться от его реализации.
        </div>
        <br />
        <div>
            Обычно расчетом суммы налогов в компаниях занимается бухгалтер. И вроде бы и тут налоги, и там налоги. Есть ли разница? Да. Дело в том, что если в налоговом законодательстве существуют фиксированные ставки налога (10% подоходный, 5% соц. налог и т.д.), то в таможенном налогообложении ситуация другая: размер налогов зависит от ставки на товар, определяемой Единым Таможенным Тарифом согласно коду товара в Товарной Номенклатуре ВЭД.
        </div>
        <br />
        <div>
            Это значит, что <span>ставка таможенной пошлины на ввозимый товар</span> может варьироваться от 0% (без пошлины) до баснословных 69% от таможенной стоимости товара (реально действовавшая в течение определенного периода времени пошлина на ввоз импортного шоколада в РК).
        </div>
        <br/>
        <div>
            Следовательно, чтобы правильно осуществить расчет таможенной пошлины, нужно сначала правильно определить код товара согласно ТН ВЭД, а потом обратиться к Единому Таможенному Тарифу. Если вы откроете эти документы, то можете испытать некоторое замешательство от количества информации, содержащегося там. Помимо двух вышеупомянутых документов, существуют еще и различные пояснительные записки и законодательные акты, регулирующие классификацию товаров в ТН ВЭД, разбираясь в которых можно легко запутаться и потерять уйму ценного времени, которое вы могли бы потратить на что-то более важное.
        </div>
        <br/>
        <div>
            Кроме того, если в расчетах будет допущена ошибка, то это может привести к административным штрафам и даже уголовной ответственности, а таких вещей никому не хочется.
        </div>
        <br/>
        <div>
            Если вы хотите точно установить рентабельность вашего проекта с точки зрения налогообложения, или же если вы хотите избежать неприятностей, которые могут возникнуть из-за неправильного расчета суммы таможенных платежей, лучше доверить этот процесс профессиональному таможенному представителю!
        </div>
        <br/>
        <div>
            <span>Компания “GWL group”</span> является одним из лучших таможенных представителей в Алматы, и в своей работе ориентирована исключительно на защиту интересов клиента в таможенных органах! Мы сэкономим ваше ценное время и грамотно оформим таможенную декларацию с тем, чтобы ваш груз прибыл к месту назначения своевременно и без проблем
        </div>
        `,
    },
    {
        id: 5,
        image: service5,
        title: 'Консультирование По Вопросам Таможенного Законодательства РК И ТС',
        text: `
        <div>
            Каждый предприниматель на этапе проектирования своего бизнеса старается максимально предугадать все аспекты его развития. Какие-то из них, например, процедура оформления ИП или ТОО, или просчет доходов и налогов, достаточно просты и понятны. Однако когда речь заходит о бизнесе, связанном с внешнеэкономической деятельностью, в игру вступает таможенное законодательство - предмет специфический и обширный. И, хотя обычно любой предприниматель хорошо знает свое дело, некоторые не разбираются даже в самых основных моментах таможенного законодательства. Эта правовая сфера постоянно развивается, и уследить за всеми новшествами, которые могут потенциально коснуться вашего бизнеса, не всегда представляется возможным.
        </div>
        <br />
        <div>
            Впрочем, на первый взгляд вся процедура выглядит достаточно простой: составить договор, оформить декларацию, подать ее в таможню, пройти пару проверок, заплатить налоги, получить груз, привезти на склад и дело с концом! И все подробности, конечно же, можно найти в Интернете на специализированных таможенных порталах. Что же тут сложного?
        </div>
        <br />
        <div>
            Однако, если вы самостоятельно попробуете хотя бы составить договор, то уже на этом этапе обнаружите, насколько сильно он отличается от типового договора о сотрудничестве, ведь нужно будет вникать в “Инкотермс” (международные стандарты грузоперевозок) чтобы понять, какие условия поставки вам наиболее выгодны, нужно будет тщательно продумать условия самого сотрудничества (когда право собственности и ответственность за товар переходит вам, каким образом лучше всего производить оплату и т.д.) и многое, многое другое.
        </div>
        <br/>
        <div>
            Выходом может быть содержание в штате собственного юриста, который будет заниматься всеми этими вопросами, но, увы, компетентного специалиста по таможенному праву найти весьма нелегко. Большинство таких узких специалистов уже работают в компаниях по оказанию таможенных услуг. И их уровень компетентности и ответственности за результат значительно выше, чем у частных или даже штатных юристов.
        </div>
        <br/>
        <div>
            Далее, для подачи декларации нужно будет тщательно изучить форму и порядок ее подачи в таможенные органы, правильно подобрать код товара согласно Товарной Номенклатуре Внешнеэкономической Деятельности, приобрести специальное программное обеспечение для ее оформления, которое мало того, что стоит достаточн дорого, так в нем же еще и разбираться надо…
        </div>
        <br/>
        <div>
            А если декларация составлена неправильно или не так указан код товара, то будут проблемы: от переплаты в таможенные органы до корректировки таможенной стоимости товара или даже внушительных штрафных санкций. И это еще до проверок…
        </div>
        <br/>
        <div>
            В общем, можно с уверенностью сказать, что если вы не разбираетесь в таможенном праве и в самой процедуре растаможки, то вероятность того, что может быть допущена ошибка - высока. А ошибка в таком серьезном деле, как ВЭД, может дорого обойтись: штрафы, конечно, можно уплатить, а вот подрыв репутации компании ввиду невыполнения контрактных обязательств может обернуться крахом на рынке, особенно если рынок узкий.
        </div>
        <br/>
        <div>
            Чтобы избежать любых сложностей в растаможке груза и быть юридически застрахованным от притязаний таможенных органов, лучше всего получить консультацию по вопросам таможенного законодательства и оформления документов у компетентных специалистов, таких, как команда “GWL group”.
        </div>
        <br/>
        <div>
            Компания “GWL group” зарекомендовала себя на рынке таможенных услуг как надежный и верный партнер, который всегда работает в интересах клиента!
        </div>
        <br/>
        <div>
            Наши специалисты - это специалисты таможенного дела, которые помогут:
        </div>
        <br/>
        <ul>
            <li>
                Правильно оформить договор внешнеэкономической деятельности. Мы досконально вникнем в вашу ситуацию и поможем корректно составить текст с тем, чтобы вы получили максимальную выгоду от этого сотрудничества.
            </li>
            <li>
                Установить и корректно составить сопутствующие документы. Помимо стандартного “джентльменского набора”, на некоторые виды товаров (например, сотовые телефоны, одежда, продукты питания и т.д.) необходимы дополнительные разрешительные документы. Мы поможем вам сформировать пакет документов, необходимый именно для вашего груза, чтобы он прошел таможню в кратчайшие сроки.
            </li>
            <li>
                Получить ответы на любые вопросы. Наши специалисты наработали богатейший опыт взаимодействия с таможенными органами, и расскажут вам о тех тонкостях таможенного оформления, которые нигде не описаны.  
            </li>
            <li>
                А также помогут в решении любых непредвиденных или нестандартных задач.
            </li>
        </ul>
        <br/>
        <div>
            <span>Компания “GWL group”</span> является одним из лучших таможенных представителей в Алматы, и в своей работе ориентирована исключительно на защиту интересов клиента в таможенных органах! Мы сэкономим ваше ценное время и грамотно оформим таможенную декларацию с тем, чтобы ваш груз прибыл к месту назначения своевременно и без проблем
        </div>
        `,
    },
    {
        id: 6,
        image: service5,
        title: 'Консультирование по сопровождению ВЭД Клиента до и после Таможенного Оформления',
        text: `
        <ul>
            <li>
                Что делать, если <span>груз задержали на СВХ</span> и вы теряете деньги каждый день?
            </li>
            <li>
                Что делать, если по прошествии нескольких лет таможенные органы <span>выдвинули вам претензию</span> по давней декларации и требуют денег?
            </li>
            <li>
                Что делать, если вследствие недобросовестной работы зарубежного партнера ваш <span>бизнес оказался под угрозой?</span>
            </li>
        </ul>
        <div>
            Первый ответ, который может возникнуть у вас в голове - скорее обратиться за консультацией к юристу. И это верный ответ! Но… Увы, не каждый юрист является достаточно компетентным в таможенном праве, чтобы помочь вам уладить любую проблему с таможенными органами и уберечь вас от лишних расходов, судебных разбирательств и подрыва репутации.
        </div>
        <br />
        <span>
            Их не так уж и много, и работают они, в основном, в специализированных организациях, таких, как компания “GWL group”!
        </span>
        <br />
        <div>
            Мы проконсультируем вас и поможем вам уладить проблемы с таможней, связанные с :
        </div>
        <br/>
        <ul>
            <li>
                неправильным оформлением таможенной декларации;
            </li>
            <li>
                расхождением фактического содержания груза с данными декларации;
            </li>
            <li>
                неправильным подбором кода ТН ВЭД;
            </li>
            <li>
                неправильным оформлением договора ВЭД с зарубежными партнерами;
            </li>
            <li>
                административным или уголовным производством в отношении вашей компании, связанным с некорректным оформлением документов или несоблюдением таможенного законодательства РК и ТС и т.д.
            </li>
        </ul>
        <div>
            Обратившись к нам, вы можете быть уверены в том, что ваша проблема с таможенными органами с большой вероятностью разрешится в вашу пользу!
        </div>
        <br/>
        <div>
            <span>Компания “GWL group”</span> является одним из лучших таможенных представителей в Алматы, и в своей работе ориентирована исключительно на защиту интересов клиента в таможенных органах! Мы сэкономим ваше ценное время и грамотно оформим таможенную декларацию с тем, чтобы ваш груз прибыл к месту назначения своевременно и без проблем
        </div>
        `,
    },
    {
        id: 7,
        image: service7,
        title: 'Оформление Сопутствующих Документов По Внешне-Экономической Сделке',
        text: `
        <div>
            Каждый участник ВЭД знает, что существует стандартный пакет документов, который необходим для растаможки любого груза. К ним относятся:
        </div>
        <br/>
        <ul>
            <li>
                сопроводительная накладная на груз;
            </li>
            <li>
                договор о внешнеэкономической сделке;
            </li>
            <li>
                транспортные документы и декларации о происхождении товара.
            </li>
        </ul>
        <div>
            Однако существует ряд документов, которые не являются распространенными, а используются только при растаможке определенного вида товара. Например, любое оборудование со шифровальными функциями (компьютеры, сотовые телефоны и т.д.), ввозимое на территорию РК, требует специального разрешения на ввоз от Комитета Национальной безопасности, а одежда и некоторые продукты питания обязательно также должны иметь специальное разрешение на ввоз, выданное СанЭпидемСтанцией и т.д.
        </div>
        <br />
        <div>
            Все подобные примеры здесь не перечислишь, но их достаточно много для того, чтобы неискушенный в таможенном законодательстве человек попал впросак на этапе растаможки груза. Если вовремя не забрать груз с СВХ и не предоставить специальные сопутствующие разрешительные документы, то можно понести ощутимые расходы за передержку. Кроме финансовых потерь, это чревато подрывом репутации ввиду неисполнения контрактных обязательств по поставке товара в срок.
        </div>
        <br />
        <div>
            Этих неприятностей можно избежать, если заранее выяснить перечень специальных сопутствующих документов, необходимых для вашего товара, и поручить их оформление компетентному таможенному брокеру, такому, как “GWL group”.
        </div>
        <br/>
        <div>
            Обратившись к нам, вы сэкономите время, избавившись от необходимости вникать во все тонкости оформления документов и беготни по инстанциям. Вы получите правильно оформленные сопутствующие документы в кратчайшие сроки. Обретете уверенность в том, что ваш груз пересечет границу быстро и без проблем исможете беспрепятственно вести внешнеэкономическую деятельность и расширять границы своего бизнеса.
        </div>
        <br/>
        <div>
            <span>Компания “GWL group”</span> является одним из лучших таможенных представителей в Алматы, и в своей работе ориентирована исключительно на защиту интересов клиента в таможенных органах! Мы сэкономим ваше ценное время и грамотно оформим таможенную декларацию с тем, чтобы ваш груз прибыл к месту назначения своевременно и без проблем
        </div>
        `,
    },
    {
        id: 8,
        image: service8,
        title: 'Грузоперевозки По Казахстану',
        text: `
        <div>
            Компания “GWL group”, успешно предоставляет не только таможенные услуги, но также услуги по транспортировке грузов внутри города Алматы и по всему Казахстану. Многолетний опыт в области грузоперевозок позволяет сократить сроки доставки груза, поскольку мы все делаем комплексно - таможенные процедуры и логистические услуги.
        </div>
        <br/>
        <span>
            Специалисты “GWL group” внимательно и индивидуально подходят к выполнению любых заказов по грузоперевозкам, учитывая интересы клиента и его пожелания.
        </span>
        <br/>
        <br/>
        <div>
            Предлагаем следующие услуги по доставке грузов:
        </div>
        <br/>
        <ul>
            <li>
                перевозка груза ж/д транспортом почтовыми или багажными вагонами;
            </li>
            <li>
                договор о внешнеэкономической сделке;
            </li>
            <li>
                перевозка груза автотранспортом, в том числе в самые удаленные уголки страны;
            </li>
            <li>
                перевозка груза авиатранспортом (максимально быстро);
            </li>
            <li>
                мультимодальные перевозки (например, авиа и автодоставка одного груза);
            </li>
            <li>
                доставка груза непосредственно по адресу получателя;
            </li>
            <li>
                экспедирование грузов;
            </li>
            <li>
                весь спектр складских услуг;
            </li>
            <li>
                оформление документов на грузы (включая таможенное оформление);
            </li>
            <li>
                страхование грузов.
            </li>
        </ul>
        <span>
            Преимущества сотрудничества с нами:
        </span>
        <br/>
        <br/>
        <ul>
        <li>
            Осуществляем грузоперевозки с выбором оптимального маршрута и типа транспорта, что оптимизирует затраты на доставку груза.
        </li>
        <li>
            Сотрудничаем только с надежными компаниями, прямыми перевозчиками.
        </li>
        <li>
            Гарантируем сроки доставки грузов согласно договоренностей, учитывая сложные погодные условия. Всегда стараемся выполнить обязательства по доставке грузов в срок!
        </li>
        `,
    },
]

export default ServicesData
