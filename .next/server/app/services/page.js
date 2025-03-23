(()=>{var A={};A.id=469,A.ids=[469],A.modules={7849:A=>{"use strict";A.exports=require("next/dist/client/components/action-async-storage.external")},2934:A=>{"use strict";A.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:A=>{"use strict";A.exports=require("next/dist/client/components/request-async-storage.external")},4580:A=>{"use strict";A.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:A=>{"use strict";A.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:A=>{"use strict";A.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:A=>{"use strict";A.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9503:(A,e,i)=>{"use strict";i.r(e),i.d(e,{GlobalError:()=>l.a,__next_app__:()=>u,originalPathname:()=>c,pages:()=>g,routeModule:()=>o,tree:()=>n}),i(2127),i(3314),i(6193);var t=i(3191),s=i(8716),r=i(7922),l=i.n(r),a=i(5231),d={};for(let A in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(A)&&(d[A]=()=>a[A]);i.d(e,d);let n=["",{children:["services",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,2127)),"E:\\Codes\\my-projects\\gwl-open\\src\\app\\services\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(i.bind(i,3314)),"E:\\Codes\\my-projects\\gwl-open\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(i.bind(i,6193)),"E:\\Codes\\my-projects\\gwl-open\\src\\app\\not-found.tsx"]}],g=["E:\\Codes\\my-projects\\gwl-open\\src\\app\\services\\page.tsx"],c="/services/page",u={require:i,loadChunk:()=>Promise.resolve()},o=new t.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/services/page",pathname:"/services",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:n}})},6143:(A,e,i)=>{Promise.resolve().then(i.bind(i,8316)),Promise.resolve().then(i.bind(i,2650)),Promise.resolve().then(i.bind(i,9898)),Promise.resolve().then(i.bind(i,782)),Promise.resolve().then(i.bind(i,6581)),Promise.resolve().then(i.bind(i,2829)),Promise.resolve().then(i.bind(i,7287)),Promise.resolve().then(i.bind(i,8595)),Promise.resolve().then(i.bind(i,268)),Promise.resolve().then(i.bind(i,3669)),Promise.resolve().then(i.bind(i,1386))},1386:(A,e,i)=>{"use strict";i.d(e,{default:()=>u});var t=i(326),s=i(7577),r=i(6226),l=i(2982),a=i(6663);i(2139);let d={container:A=>({...A,width:"100%"}),control:(A,e)=>({...A,width:"100%",border:e.isFocused?"1px solid #f5f5f5":"1px solid f5f5f5"}),indicatorSeparator:(A,e)=>({...A,display:"none"}),option:(A,e)=>({...A,backgroundColor:e.isSelected?"#53C640":"#fff",color:"rgb(35, 35, 35)",fontSize:"16px",minHeight:"45px",display:"flex",alignItems:"center",padding:"12px 14px"}),menu:A=>({...A,width:"100%",marginTop:0,borderRadius:0}),menuList:A=>({...A,padding:0})},n=({setState:A,state:e,options:i,defaultValue:r,...l})=>{let[n,g]=(0,s.useState)([]),c={value:"default",label:r};return(0,s.useEffect)(()=>{A(c)},[]),(0,s.useEffect)(()=>{i.length&&g(i.map(A=>({value:A.title,label:A.title})))},[i]),t.jsx(a.ZP,{value:e,onChange:e=>A(e),options:n,styles:d,isSearchable:!1})};var g=i(6990);i(6523);var c=i(7241);let u=({servicesData:A,listTitle:e,selectTitle:i})=>{let[a,d]=(0,s.useState)(!1),[u,o]=(0,s.useState)(A[0]),[p,v]=(0,s.useState)(null),b=(0,l.Z)(),h=e=>{let i=A.find(A=>A.id===e);i&&o(i)};return(0,s.useEffect)(()=>{d(window.location.href.includes("faq"))},[]),(0,s.useEffect)(()=>{let e=A.find(A=>A.title===p?.value);e&&o(e)},[p]),t.jsx("div",{className:"services-list",children:(0,t.jsxs)("div",{className:"services-list__container",children:[b?null:t.jsx("div",{className:"services-list-title",children:e}),(0,t.jsxs)("div",{className:"services-list-wrapper",children:[b?t.jsx(n,{setState:v,state:p,defaultValue:i,options:A}):t.jsx("div",{className:"services-list-items",children:A.map(A=>t.jsx("div",{className:`services-list-item ${A.id===u.id?"selected":""}`,onClick:()=>h(A.id),children:A.title},A.id))}),(0,t.jsxs)("div",{className:"services-list-info",children:[t.jsx("div",{className:u.image?"services-list-info__title":"services-list-info__title widened",children:u.title}),u.image?t.jsx(r.default,{className:"services-list-info__image",src:b&&u.imageMobile?u.imageMobile:u.image,alt:"Изображение выбранной услуги"}):null,t.jsx("div",{className:"services-list-info__text",dangerouslySetInnerHTML:{__html:u.text}}),!a&&(0,t.jsxs)(c.Q,{href:"/contacts",type:"green",mobileWidth:328,width:410,children:["Связаться с нами"," ",t.jsx(r.default,{src:g.default,alt:"Изображение стрелки"})]})]})]})]})})}},8833:(A,e,i)=>{"use strict";i.d(e,{default:()=>g});var t=i(326),s=i(434),r=i(8029),l=i.n(r),a=i(2982),d=i(3832),n=i.n(d);let g=({children:A,href:e,type:i,width:r,mobileWidth:d,height:g})=>{let c=((0,a.Z)()?`${d}px`:`${r}px`)||"100%";return t.jsx(s.default,{className:l()(n().link,n()[i]),href:e,style:{width:c,height:`${g}px`},children:A})}},7241:(A,e,i)=>{"use strict";i.d(e,{Z:()=>l,Q:()=>a.default});var t=i(326),s=i(8029),r=i.n(s);i(3588);let l=({children:A,className:e,...i})=>t.jsx("article",{className:r()("card",[e]),...i,children:A});var a=i(8833)},3832:A=>{A.exports={link:"LinkButton_link__lFtJK",green:"LinkButton_green__qczZF",white:"LinkButton_white__An7e1"}},2127:(A,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>d,metadata:()=>a});var t=i(9510);let s=[{id:1,image:{src:"/_next/static/media/selectedservice.9181d5a0.png",height:250,width:760,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAMFBMVEViWEp1bGCQciltYU15YTJVTEBYUkfDvbQsKCSFb0epopiIfXJxYk+2qZCXfDDMuIRs7a38AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGPg4OPnZeRi52ZgYGLi5GFkYGZgY2HhYWBkYAUACUsAjRFw86MAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3},title:"Таможенная очистка грузов",text:`
        <div>
            Если вы стремитесь оптимизировать процесс получения вашего груза, избежать непредвиденных ситуаций и обеспечить разумные расходы, наиболее целесообразным решением будет доверить оформление вашего груза профессиональному представителю.
        </div>
        <br />
        <div>
            Компания \xabGWL group\xbb предоставляет высококвалифицированные услуги в области таможенного оформления и очистки. Мы гарантируем:
        </div>
        <br />
        <ul>
            <li>
                <span>
                    Сэкономим ваше время и средства.
                </span>
                Наши услуги более экономичны по сравнению с ежемесячными расходами на штатного логиста. Эффективность и квалификация наших специалистов оправдают ваши инвестиции.
            </li>
            <li>
                <span>
                    Разделим ответственность с вами.
                </span>
                При самостоятельном оформлении вы несете полную ответственность за процесс. Ошибки в документации могут потребовать значительных усилий для их устранения. Мы берем на себя часть обязательств и помогаем оперативно решить любые возникшие вопросы.
            </li>
            <li>
                <span>Полный цикл услуг.</span>
                Мы сопровождаем вас на всех этапах, начиная с подготовки договора о внешнеэкономической деятельности и заканчивая доставкой груза непосредственно на ваш склад. Ваша задача - только подтвердить получение.
            </li>
            <li>
                <span>
                Гибкость в обслуживании
                </span>
                Вы можете обратиться к нам на любом этапе процесса. Наши специалисты быстро включатся в работу и помогут решить любые вопросы, связанные с оформлением деклараций, расчетом пошлин и налогов, а также другими аспектами.
            </li>
        </ul>
        <br />
        <div>
            Команда \xabGWL group\xbb представляет собой профессионалов в области таможенного права и оформления, зарекомендовавших себя как надежные партнеры на рынке. Доверяя нам, вы обеспечиваете своевременное получение груза, отсутствие задержек и эффективное разрешение любых внештатных ситуаций.
        </div>
        <br />
        <span>
            Расширяйте горизонты вашего бизнеса с \xabGWL group\xbb!
        </span>
        `},{id:2,image:{src:"/_next/static/media/service2.348c7cb4.png",height:250,width:760,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAOVBMVEXL2vRpX1yegm17fZCMfGyxq6e8tajj4NrQyr+Tnbm/vs6ho69yYV3R4vu3x9+2iXSvvNKyopm0yuqtY56ZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGPgYRHkYmDgZGbg52bg5eMUEGJg4mBn52BjZQQACt8AxBJS+qMAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3},title:"Оформление И Подача  Декларации",text:`
        <div>
            <span>Важнейшим этапом процесса</span> оформления является подача и заполнение декларации на груз. Если ваша компания участвует в внешнеэкономической деятельности и требуется растаможить груз, поступивший из-за границы, использование декларации становится необходимым.
        </div>
        <br />
        <div>
            Грузовая декларация служит ключевым документом при перемещении продукции через государственную границу и подтверждает информацию о грузе. Этот документ оформляется распорядителем (грузополучателем или представителем) и является основанием для пропуска продукции через границу.
        </div>
        <br />
        <div>Декларация должна включать полную информацию о партии груза: наименование, стоимость, средство транспортировки до границ Таможенного Союза (или РК), а также данные отправителя и получателя.</div>
        <br/>
        <div>
        Процесс оформления и подачи декларации требует тщательного знания всех нюансов и требований
        </div>
        <br/>
        <div>Сведения в декларации должны точно соответствовать проверяемому грузу. Несоответствия могут привести к неприятным последствиям, таким как:
        </div>
        <br/>
        <ul>
            <li>
            Неправильный код продукции;
            </li>
            <li>
            Ошибки в номере товара;
            </li>
            <li>
            Нехватка информации в описании;
            </li>
            <li>
            Расхождения между данными декларации и фактическим содержанием груза.
            </li>
        </ul>
        <br />
        <div>
        Это может вызвать:
        </div>
        <br />
        <ul>
            <li>
            Дополнительные расходы (оплата за хранение на складе временного хранения, штрафы);
            </li>
            <li>
            Проблемы с выполнением контрактных обязательств перед партнерами;
            </li>
            <li>
            Подрыв репутации компании;
            </li>
            <li>
            Возможные судебные разбирательства.
            </li>
        </ul>
        <br/>
        <div>
        Чтобы избежать сложностей и рисков, связанных с оформлением и подачей декларации, наиболее разумным решением будет доверить этот процесс профессиональному представителю.
        </div>
        <br/>
        <div>
        Это избавит вас от беспокойства о возможных ошибках, а также от финансовых и временных потерь.
        </div>
        <br/>
        <div>
            <span>Компания “GWL group”</span> является одним из ведущих представителей в Алматы, ориентированных на защиту интересов клиента в таможенных органах. Мы эффективно управляем процессом оформления деклараций, гарантируя, что ваш груз прибудет в назначенное место своевременно и без задержек
        </div>
        `},{id:3,image:{src:"/_next/static/media/services3.b7c07b78.png",height:250,width:760,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAALVBMVEXz8fS+vbufmpjg3+GbhXG0r6HDxcPAq5uvmovOzdC/wsOTjIPj2dPProzQspB+8cbZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGPg5mNnZuBhYmNg4WXlYmZgYGbgYGFiZGTkZAIAB9IAesRxMokAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3},title:"Подбор Кодов ТН ВЭД",text:`
        <div>
        При импорте или экспорте продукции важно правильно выбрать код ТН ВЭД (Товарная Номенклатура Внешнеэкономической Деятельности), который указывается в декларации и других сопроводительных документах.
        </div>
        <br />
        <div>
        Процедура подбора кода может показаться простой — откройте номенклатуру, найдите нужный код и укажите его в документах. Однако на практике процесс может быть сложным из-за большого количества кодов, классов и подклассов. Дополнения и пояснительные записки к законодательным актам усложняют задачу еще больше.
        </div>
        <br />
        <div>
        Учитывая все нюансы, данный процесс может потребовать значительного времени, которое можно было бы использовать более продуктивно в других областях бизнеса. Даже при тщательном подходе не исключены ошибки, которые могут возникнуть с первого раза. Поэтому рекомендуется доверить эту задачу профессионалам с опытом в подборе кодов, что позволит вам сэкономить время и ресурсы.
        </div>
        <br/>
        <span>
        Влияние кода ТН ВЭД:
        </span>
        <br/>
        <div>
        Неправильный выбор кода может привести к следующим проблемам:
        </div>
        <br/>
        <ul>
            <li>
                Задержке груза;
            </li>
            <li>
                Корректировке таможенной стоимости груза;
            </li>
            <li>
                Длительные проверки;
            </li>
            <li>
                Конфискация груза и наложение значительных штрафов;
            </li>
            <li>
                Уголовные преследования.
            </li>
        </ul>
        <br />
        <div>
        Таким образом, правильный подбор кода ТН ВЭД:
        </div>
        <br />
        <ul>
            <li>
            Значительно ускоряет процесс оформления;
            </li>
            <li>
            Помогает избежать ненужных расходов;
            </li>
            <li>
            Определяет ставку пошлины;
            </li>
            <li>
            Устанавливает перечень необходимых сопроводительных документов (лицензий, сертификатов и др.).
            </li>
        </ul>
        <br/>
        <div>
        Если вы стремитесь избежать проблем при пересечении границы и обеспечить быструю обработку вашего груза, поручите подбор кодов ТН ВЭД специалистам компании \xabGWL Group\xbb.
        </div>
        <br/>
        <div>
            <span>Компания “GWL group”</span> является одним из ведущих представителей в Алматы, специализирующихся на защите интересов клиентов. Мы эффективно управляем процессом оформления документов, чтобы ваш груз прибыл в пункт назначения вовремя и без задержек.
        </div>
        `},{id:4,image:{src:"/_next/static/media/services4.3b98b9b9.png",height:250,width:760,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAM1BMVEVzcXG+u792dXnb0MOdmpvar6Dw5uj38Pd6cG6yr7jc2uDDqKFeXWJISE/tyMDTu6nnvaeeeCrrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGPg4GBh5GLlZ2ZgYWLg4eQTYGPgZuXg5WRjYwcACR4At0yK1yEAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3},title:"Расчет Таможенных Платежей И Налогов",text:`
        <div>
        Каждый предприниматель стремится максимизировать доход от своего бизнеса, и участники внешнеэкономической деятельности не являются исключением. При оценке рентабельности проектов, связанных с импортом или экспортом, ключевую роль играют размеры налогов и пошлин, которые необходимо уплатить государству. Эти затраты могут оказаться решающим фактором для реализации проекта.
        </div>
        <br />
        <div>
        Обычно расчёт налоговых обязательств выполняет бухгалтер. Однако важно понимать, что налоговое и таможенное налогообложение имеют свои особенности. Если в налоговом законодательстве существуют фиксированные ставки (например, 10% подоходный налог, 5% социальный налог), то в области внешнеэкономической деятельности ставки зависят от категории товара, установленной Единым Тарифом согласно коду Товарной Номенклатуры ВЭД.
        </div>
        <br />
        <div>
        Размер пошлины может варьироваться от 0% до значительных процентов от стоимости товара. Например, в определённые периоды ставка пошлины на импортный шоколад в РК достигала 69%.
        </div>
        <br/>
        <div>
        Для корректного расчёта пошлины необходимо сначала точно определить код товара по ТН ВЭД, а затем обратиться к Единому Тарифу. При этом, объём информации в этих документах, включая пояснительные записки и законодательные акты, может быть весьма внушительным и запутывающим. Ошибки в расчётах могут привести к административным штрафам и даже уголовной ответственности.
        </div>
        <br/>
        <div>
        Поэтому рекомендуется обращаться к профессионалам для точного и своевременного выполнения всех необходимых расчётов, что позволит избежать неприятных последствий и сосредоточиться на более важных аспектах бизнеса.
        </div>
        <br/>
        <div>
        Если вы хотите точно оценить рентабельность вашего проекта в плане налогообложения, или избежать проблем, связанных с ошибками в расчёте суммы пошлин, лучше доверить этот процесс профессионалам.
        </div>
        <br/>
        <div>
            <span>Компания “GWL group”</span> является одним из ведущих специалистов в Алматы, ориентированным на защиту интересов клиентов. Мы эффективно управляем процессом оформления документов и обеспечиваем своевременную доставку вашего груза без задержек и проблем.
        </div>
        `},{id:5,image:{src:"/_next/static/media/services5.7e6f9415.png",height:250,width:760,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAALVBMVEW0r6alnJZ3cmenpqHKw8PCsaiRjYe9p5utkYbSzM24t7yheXfZubKamJHn5u33j1LTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNgYOblZGNiZGRgZOdgYmNlYWVg5uHm4mNhYAAABmMAgFLOOZkAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3},title:"Консультирование По Вопросам Таможенного Законодательства РК И ТС",text:`
        <div>
        Каждый предприниматель на стадии разработки бизнеса стремится учесть все аспекты его функционирования. Некоторые элементы, такие как регистрация юридического лица или расчет доходов и налогов, являются достаточно понятными. Однако, когда речь идет о деятельности, связанной с внешнеэкономической деятельностью, важным аспектом становится законодательство в области международной торговли, которое характеризуется своей спецификой и обширностью. Хотя многие предприниматели обладают глубокой экспертизой в своей области, не все имеют достаточные знания о ключевых аспектах этого законодательства. Эта правовая сфера постоянно изменяется, и уследить за всеми нововведениями может быть сложно.
        </div>
        <br />
        <div>
        Процедура оформления может казаться простой: составить контракт, подготовить и подать декларацию, пройти проверки, уплатить налоги и получить груз. Однако на практике, процесс оформления может быть значительно сложнее. Для начала требуется учитывать международные стандарты, такие как Инкотермс, для определения выгодных условий поставки. Необходимо тщательно проработать все условия сотрудничества, включая вопросы о праве собственности, ответственности за груз и методах оплаты.
        </div>
        <br />
        <div>
        Вместо того чтобы пытаться разобраться в этих нюансах самостоятельно, разумным шагом будет обратиться к профессионалам. Найти квалифицированного специалиста по международному праву может быть непросто, поскольку многие опытные юристы уже работают в специализированных компаниях. Эти организации обладают высокой компетентностью и ответственностью, что обеспечивает более надежное решение задач
        </div>
        <br/>
        <div>
        Правильная подача декларации требует внимательного изучения формы и порядка ее оформления, точного подбора кода согласно Товарной Номенклатуре ВЭД и, возможно, приобретения специализированного программного обеспечения. Ошибки в этом процессе могут привести к переплатам, корректировке стоимости или серьезным штрафам.
        </div>
        <br/>
        <div>
        Таким образом, для минимизации рисков и эффективного управления процессом, настоятельно рекомендуется обратиться за консультацией к экспертам в области внешнеэкономической деятельности. Компания "GWL group" зарекомендовала себя как надежный партнер, обеспечивающий высокий уровень профессионализма и защиты интересов клиентов.
        </div>
        <br/>
        <div>
        Наши специалисты - это специалисты таможенного дела, которые помогут:
        </div>
        <br/>
        <ul>
            <li>
            Правильно оформить контракт внешнеэкономической деятельности, учитывая все нюансы и обеспечивая максимальную выгоду для вашего бизнеса.
            </li>
            <li>
            Подготовить все необходимые сопроводительные документы, включая специальные разрешения для определенных товаров, чтобы ускорить процесс прохождения таможенных процедур.
            </li>
            <li>
            Ответить на любые вопросы и предоставить экспертные консультации по тонкостям международной торговли.
            </li>
            <li>
            Решить любые нестандартные или непредвиденные ситуации, связанные с внешнеэкономической деятельностью.
            </li>
        </ul>
        <br/>
        <div>
            <span>Компания “GWL group”</span> зарекомендовала себя как ведущий эксперт в области внешнеэкономической деятельности в Алматы, специализируясь на защите интересов клиентов при взаимодействии с государственными органами. Мы обеспечим эффективное оформление всех необходимых документов, что позволит вам сэкономить время и гарантирует своевременную и бесперебойную доставку вашего груза.
        </div>
        `},{id:6,image:{src:"/_next/static/media/services6.997b4209.png",height:250,width:760,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAM1BMVEW4gUVmWz+ffDwvHxRzWUOIkbeeor9wWFNhVTlOPkOheWKOalWRiJVISS+VYEGKeX+voIXgxMYKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGPg5WDk5uNiZ2bgYGHnZ+dh42RgYGBgYRJg5QQACf4ArOwhkToAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3},title:"Консультирование по сопровождению ВЭД Клиента до и после Таможенного Оформления",text:`
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
        Первый ответ, который может прийти на ум, — обратиться за консультацией к юристу. Это действительно правильное решение! Однако не каждый юрист обладает необходимой квалификацией в области внешнеэкономической деятельности, чтобы эффективно помочь вам решить проблемы, связанные с регулирующими органами, и предотвратить лишние расходы, судебные разбирательства и потерю репутации.
        </div>
        <br />
        <span>
        Таких специалистов не так много, и они в основном работают в специализированных организациях, таких как компания "GWL Group"!
        </span>
        <br />
        <div>
        Мы предоставим вам консультации и поможем решить вопросы, связанные с :
        </div>
        <br/>
        <ul>
            <li>
            Неправильным оформлением документации;
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
            Административными или уголовными делами, связанными с нарушением законодательства.
            </li>
        </ul>
        <div>
        Обратившись к нам, вы можете быть уверены в том, что ваша проблема с контролирующими органами с большой вероятностью будет решена в вашу пользу!
        </div>
        <br/>
        <div>
            <span>Компания “GWL group”</span> зарекомендовала себя как ведущий эксперт в Алматы, специализирующийся на защите интересов клиентов в сфере внешнеэкономической деятельности. Мы сэкономим ваше ценное время и профессионально оформим все необходимые документы, чтобы ваш груз прибыл к месту назначения вовремя и без задержек.
        </div>
        `},{id:7,image:{src:"/_next/static/media/services7.e8288a40.png",height:250,width:760,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAMFBMVEXlqITp4tvgmXPg1dGvj4Xlybjkuqjej2fj08CwWz65hG3Vw7rYuaLerZnuvJzr2cpOE948AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGPg5OLhYGVg4GNgYWHkZ2JnYmBg5mZmZGXjZQMAB/oAjtV3HLkAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3},title:"Оформление Сопутствующих Документов По Внешне-Экономической Сделке",text:`
        <div>
        Каждый участник внешнеэкономической деятельности знает, что для растаможки любого груза необходим стандартный пакет документов, включая:
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
        Каждый участник внешнеэкономической деятельности знает, что для растаможки любого груза необходим стандартный пакет документов, включая:
        </div>
        <br />
        <ul>
            <li>
            Сопроводительную накладную на груз;
            </li>
            <li>
            Договор о внешнеэкономической сделке;
            </li>
            <li>
            Транспортные документы и декларации о происхождении товара.
            </li>
        </ul>
        <br/>
        <div>
            Однако для некоторых видов товаров требуются дополнительные документы. Например, оборудование с шифровальными функциями (компьютеры, сотовые телефоны и т.д.) требует специального разрешения от Комитета национальной безопасности. Одежда и определенные продукты питания также нуждаются в разрешении от санитарно-эпидемиологической службы и других регулирующих органов.
        </div>
        <br />
        <div>
        Невозможность своевременно собрать все необходимые разрешения может привести к задержкам и дополнительным расходам за хранение на складах временного хранения, а также к риску для репутации из-за нарушения контрактных обязательств.
        </div>
        <br/>
        <div>
        Чтобы избежать этих проблем, рекомендуется заранее выяснить перечень требуемых документов и поручить их оформление профессиональному таможенному брокеру, такому как “GWL group”.
        </div>
        <br/>
        <div>
        Обратившись к нам, вы сэкономите время, избежите необходимости погружаться в детали оформления документов и избегнете лишних поездок по инстанциям. Мы обеспечим быстрое и правильное оформление всех сопутствующих документов, что позволит вашему грузу беспрепятственно пересечь границу и поддерживать эффективное ведение внешнеэкономической деятельности.
        </div>
        <br/>
        <div>Наши специалисты обладают глубокими знаниями в области таможенного документооборота и многолетним опытом взаимодействия с контролирующими органами.</div>
        <br/>
        <div>
            Компания “GWL group” зарекомендовала себя как один из ведущих специалистов в Алматы в сфере внешнеэкономической деятельности. Мы сосредоточены на защите интересов наших клиентов и обеспечении бесперебойного процесса оформления. Доверьте нам оформление необходимых документов, и мы гарантируем, что ваш груз прибудет к месту назначения в срок и без задержек.
        </div>
        `},{id:8,image:{src:"/_next/static/media/services8.64a385bc.png",height:250,width:760,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAJ1BMVEVsvaLEkVhg0MGX2c5stKBlxLKkhGaXf2PFcjJ5qpSmqYa8nU2x1suH7RcRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVR4nAXBhwEAMAzDINlZXf/fW2CXAZvMknThRUz3Oh8EXQBncgGLpwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3},imageMobile:{src:"/_next/static/media/service8mobile.dcf6513e.png",height:184,width:328,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAPFBMVEVay7udkIGesoRrtKDJ7uhuvaeypHe8f0hTwKx+po9+sqCNva2RhXe22dHJfCytjG9VxLCsonZtyrW72M72RQF+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKUlEQVR4nAXBhwEAIAjAsKoguNf/v5pQAN8OJdWbT440Rc1sIk9GD2F9D4QA7lDwLVUAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4},title:"Грузоперевозки По Партнерским соглашениям",text:`
        <div>
        Компания “GWL group”, успешно предоставляет не только таможенные услуги, но также услуги по транспортировке грузов внутри города Алматы и по всему Казахстану. Многолетний опыт в области грузоперевозок позволяет сократить сроки доставки груза, поскольку мы все делаем комплексно - процедуры и логистические услуги.
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
            Сотрудничаем только с надежными компаниями, прямыми перевозчиками.=
        </li>
        <li>
            Гарантируем сроки доставки грузов согласно договоренностей, учитывая сложные погодные условия. Всегда стараемся выполнить обязательства по доставке грузов в срок!
        </li>
        <br/>
        <div>
        Ищете надежного партнера для транспортировки и оформления документов в Алматы? Обратитесь в “GWL group”! Мы предлагаем полный спектр услуг по доставке грузов по Казахстану и оформлению сопутствующих документов.
        </div>
        <div>
        Компания “GWL Group” зарекомендовала себя как ведущий специалист в области внешнеэкономической деятельности в Алматы. Мы сосредоточены на защите интересов наших клиентов и обеспечении бесперебойного процесса оформления. Наши профессионалы помогут вам оперативно и точно оформить все необходимые документы, чтобы ваш груз прибыл к месту назначения в срок и без задержек.
        </div>
        `}];var r=i(5595);let l={src:"/_next/static/media/servicespromo.b4c77742.png"};i(4187);let a={title:"GWL Group- Услуги ",description:"Услуги которые мы можем предоставить нашим клиентам. Если вы стремитесь оптимизировать процесс получения вашего груза, избежать непредвиденных ситуаций и обеспечить разумные расходы, наиболее целесообразным решением будет доверить оформление вашего груза профессиональному представителю. ",keywords:["Таможенные услуги","Услуги GWL GROUP","Таможенное оформление","Растаможка груза Казахстан","Таможенный представитель Казахстан","Внешнеэкономическая деятельность Казахстан","Таможенное право","Логистика Казахстан","Транспортировка грузов","Хранение грузов","Импорт и экспорт Казахстан","Таможенный брокер Казахстан","Оптимизация финансовых затрат","Сокращение времени таможенного оформления","Таможенная консультация","Таможенное сопровождение","Таможенный контроль"]},d=()=>(0,t.jsxs)("section",{className:"services",children:[t.jsx("div",{className:"services__promo",style:{backgroundImage:`url(${l.src})`},children:t.jsx("div",{className:"services__promo__container",children:(0,t.jsxs)("article",{className:"services__promo-wrapper",children:[t.jsx("h1",{className:"services__promo-title",children:"Наши услуги"}),t.jsx("h2",{className:"services__promo-description",children:"Какие услуги мы можем предоставить для наших клиентов?"})]})})}),t.jsx(r.ZP,{servicesData:s,listTitle:"Таможенные услуги",selectTitle:"Выбрать услугу : "})]})},5595:(A,e,i)=>{"use strict";i.d(e,{ZP:()=>a});var t=i(8570);let s=(0,t.createProxy)(String.raw`E:\Codes\my-projects\gwl-open\src\compontents\services-list\ServicesList.tsx`),{__esModule:r,$$typeof:l}=s;s.default;let a=(0,t.createProxy)(String.raw`E:\Codes\my-projects\gwl-open\src\compontents\services-list\ServicesList.tsx#default`)},8316:(A,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>t});let t={src:"/_next/static/media/selectedservice.9181d5a0.png",height:250,width:760,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAMFBMVEViWEp1bGCQciltYU15YTJVTEBYUkfDvbQsKCSFb0epopiIfXJxYk+2qZCXfDDMuIRs7a38AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGPg4OPnZeRi52ZgYGLi5GFkYGZgY2HhYWBkYAUACUsAjRFw86MAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3}},2650:(A,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>t});let t={src:"/_next/static/media/service2.348c7cb4.png",height:250,width:760,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAOVBMVEXL2vRpX1yegm17fZCMfGyxq6e8tajj4NrQyr+Tnbm/vs6ho69yYV3R4vu3x9+2iXSvvNKyopm0yuqtY56ZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGPgYRHkYmDgZGbg52bg5eMUEGJg4mBn52BjZQQACt8AxBJS+qMAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3}},9898:(A,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>t});let t={src:"/_next/static/media/service8mobile.dcf6513e.png",height:184,width:328,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAPFBMVEVay7udkIGesoRrtKDJ7uhuvaeypHe8f0hTwKx+po9+sqCNva2RhXe22dHJfCytjG9VxLCsonZtyrW72M72RQF+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKUlEQVR4nAXBhwEAIAjAsKoguNf/v5pQAN8OJdWbT440Rc1sIk9GD2F9D4QA7lDwLVUAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4}},782:(A,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>t});let t={src:"/_next/static/media/services3.b7c07b78.png",height:250,width:760,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAALVBMVEXz8fS+vbufmpjg3+GbhXG0r6HDxcPAq5uvmovOzdC/wsOTjIPj2dPProzQspB+8cbZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGPg5mNnZuBhYmNg4WXlYmZgYGbgYGFiZGTkZAIAB9IAesRxMokAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3}},6581:(A,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>t});let t={src:"/_next/static/media/services4.3b98b9b9.png",height:250,width:760,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAM1BMVEVzcXG+u792dXnb0MOdmpvar6Dw5uj38Pd6cG6yr7jc2uDDqKFeXWJISE/tyMDTu6nnvaeeeCrrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGPg4GBh5GLlZ2ZgYWLg4eQTYGPgZuXg5WRjYwcACR4At0yK1yEAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3}},2829:(A,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>t});let t={src:"/_next/static/media/services5.7e6f9415.png",height:250,width:760,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAALVBMVEW0r6alnJZ3cmenpqHKw8PCsaiRjYe9p5utkYbSzM24t7yheXfZubKamJHn5u33j1LTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNgYOblZGNiZGRgZOdgYmNlYWVg5uHm4mNhYAAABmMAgFLOOZkAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3}},7287:(A,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>t});let t={src:"/_next/static/media/services6.997b4209.png",height:250,width:760,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAM1BMVEW4gUVmWz+ffDwvHxRzWUOIkbeeor9wWFNhVTlOPkOheWKOalWRiJVISS+VYEGKeX+voIXgxMYKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGPg5WDk5uNiZ2bgYGHnZ+dh42RgYGBgYRJg5QQACf4ArOwhkToAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3}},8595:(A,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>t});let t={src:"/_next/static/media/services7.e8288a40.png",height:250,width:760,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAMFBMVEXlqITp4tvgmXPg1dGvj4Xlybjkuqjej2fj08CwWz65hG3Vw7rYuaLerZnuvJzr2cpOE948AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGPg5OLhYGVg4GNgYWHkZ2JnYmBg5mZmZGXjZQMAB/oAjtV3HLkAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3}},268:(A,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>t});let t={src:"/_next/static/media/services8.64a385bc.png",height:250,width:760,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAJ1BMVEVsvaLEkVhg0MGX2c5stKBlxLKkhGaXf2PFcjJ5qpSmqYa8nU2x1suH7RcRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVR4nAXBhwEAMAzDINlZXf/fW2CXAZvMknThRUz3Oh8EXQBncgGLpwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3}},3669:(A,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>t});let t={src:"/_next/static/media/servicespromo.b4c77742.png",height:360,width:1440,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAGFBMVEVNgopujHohep0cVlgCR04uhpZGcG05eoSebAxnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGklEQVR4nGNgYWZjZGRkYGdgYWZgYGBlYgIAAZcAKOr4MewAAAAASUVORK5CYII=",blurWidth:8,blurHeight:2}},4187:()=>{},2139:()=>{},6523:()=>{},3588:()=>{}};var e=require("../../webpack-runtime.js");e.C(A);var i=A=>e(e.s=A),t=e.X(0,[948,542,118,262],()=>i(9503));module.exports=t})();