(()=>{var e={};e.id=799,e.ids=[799],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9136:(e,t,i)=>{"use strict";i.r(t),i.d(t,{GlobalError:()=>a.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>c,routeModule:()=>v,tree:()=>o}),i(5337),i(3314),i(6193);var s=i(3191),r=i(8716),l=i(7922),a=i.n(l),n=i(5231),d={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>n[e]);i.d(t,d);let o=["",{children:["faq",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,5337)),"E:\\Codes\\my-projects\\gwl-open\\src\\app\\faq\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(i.bind(i,3314)),"E:\\Codes\\my-projects\\gwl-open\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(i.bind(i,6193)),"E:\\Codes\\my-projects\\gwl-open\\src\\app\\not-found.tsx"]}],c=["E:\\Codes\\my-projects\\gwl-open\\src\\app\\faq\\page.tsx"],p="/faq/page",u={require:i,loadChunk:()=>Promise.resolve()},v=new s.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/faq/page",pathname:"/faq",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},2849:(e,t,i)=>{Promise.resolve().then(i.bind(i,9583)),Promise.resolve().then(i.bind(i,1386))},1386:(e,t,i)=>{"use strict";i.d(t,{default:()=>u});var s=i(326),r=i(7577),l=i(6226),a=i(2982),n=i(6663);i(2139);let d={container:e=>({...e,width:"100%"}),control:(e,t)=>({...e,width:"100%",border:t.isFocused?"1px solid #f5f5f5":"1px solid f5f5f5"}),indicatorSeparator:(e,t)=>({...e,display:"none"}),option:(e,t)=>({...e,backgroundColor:t.isSelected?"#53C640":"#fff",color:"rgb(35, 35, 35)",fontSize:"16px",minHeight:"45px",display:"flex",alignItems:"center",padding:"12px 14px"}),menu:e=>({...e,width:"100%",marginTop:0,borderRadius:0}),menuList:e=>({...e,padding:0})},o=({setState:e,state:t,options:i,defaultValue:l,...a})=>{let[o,c]=(0,r.useState)([]),p={value:"default",label:l};return(0,r.useEffect)(()=>{e(p)},[]),(0,r.useEffect)(()=>{i.length&&c(i.map(e=>({value:e.title,label:e.title})))},[i]),s.jsx(n.ZP,{value:t,onChange:t=>e(t),options:o,styles:d,isSearchable:!1})};var c=i(6990);i(6523);var p=i(7241);let u=({servicesData:e,listTitle:t,selectTitle:i})=>{let[n,d]=(0,r.useState)(!1),[u,v]=(0,r.useState)(e[0]),[x,m]=(0,r.useState)(null),f=(0,a.Z)(),g=t=>{let i=e.find(e=>e.id===t);i&&v(i)};return(0,r.useEffect)(()=>{d(window.location.href.includes("faq"))},[]),(0,r.useEffect)(()=>{let t=e.find(e=>e.title===x?.value);t&&v(t)},[x]),s.jsx("div",{className:"services-list",children:(0,s.jsxs)("div",{className:"services-list__container",children:[f?null:s.jsx("div",{className:"services-list-title",children:t}),(0,s.jsxs)("div",{className:"services-list-wrapper",children:[f?s.jsx(o,{setState:m,state:x,defaultValue:i,options:e}):s.jsx("div",{className:"services-list-items",children:e.map(e=>s.jsx("div",{className:`services-list-item ${e.id===u.id?"selected":""}`,onClick:()=>g(e.id),children:e.title},e.id))}),(0,s.jsxs)("div",{className:"services-list-info",children:[s.jsx("div",{className:u.image?"services-list-info__title":"services-list-info__title widened",children:u.title}),u.image?s.jsx(l.default,{className:"services-list-info__image",src:f&&u.imageMobile?u.imageMobile:u.image,alt:"Изображение выбранной услуги"}):null,s.jsx("div",{className:"services-list-info__text",dangerouslySetInnerHTML:{__html:u.text}}),!n&&(0,s.jsxs)(p.Q,{href:"/contacts",type:"green",mobileWidth:328,width:410,children:["Связаться с нами"," ",s.jsx(l.default,{src:c.default,alt:"Изображение стрелки"})]})]})]})]})})}},8833:(e,t,i)=>{"use strict";i.d(t,{default:()=>c});var s=i(326),r=i(434),l=i(8029),a=i.n(l),n=i(2982),d=i(3832),o=i.n(d);let c=({children:e,href:t,type:i,width:l,mobileWidth:d,height:c})=>{let p=((0,n.Z)()?`${d}px`:`${l}px`)||"100%";return s.jsx(r.default,{className:a()(o().link,o()[i]),href:t,style:{width:p,height:`${c}px`},children:e})}},7241:(e,t,i)=>{"use strict";i.d(t,{Z:()=>a,Q:()=>n.default});var s=i(326),r=i(8029),l=i.n(r);i(3588);let a=({children:e,className:t,...i})=>s.jsx("article",{className:l()("card",[t]),...i,children:e});var n=i(8833)},3832:e=>{e.exports={link:"LinkButton_link__lFtJK",green:"LinkButton_green__qczZF",white:"LinkButton_white__An7e1"}},5337:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>d,metadata:()=>n});var s=i(9510);let r=[{id:1,title:"Какие бывают виды таможенных деклараций?",text:`
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
        `},{id:3,title:"Наша компания хочет начать внешнеэкономическую деятельность. Что нужно для этого сделать?",text:`
            <div>
                Стать участником внешней экономической деятельности (ВЭД) может любое юридическое и физическое лицо. Первыми шагами обычно являются поиск партнера за рубежом — поставщика или покупателя, а затем ведение с ним переговоров для того, чтобы заключить с ним контракт на поставку товаров. Если фирма, желающая найти партнера за границей, может начать действовать, не имея собственного опыта в ВЭД, то перед заключением контракта желательно проконсультироваться с людьми или фирмами, имеющими опыт в подписании таких контрактов. Это могут быть консультанты из юридических фирм, но чаще всего, таким консультантом становится таможенный представитель (такую фирму называют еще и \xabтаможенным брокером\xbb).
            </div>
            <br/>
            <div>
                По всем вопросам, связанным с ВЭД, вы можете смело обращаться в нашу компанию! Позвоните по контактным телефонам и мы ответим на все ваши вопросы!
            </div>
        `},{id:4,title:"Чем может быть полезен таможенный брокер?",text:`
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
        `},{id:5,title:"Какова процедура растаможки товара?",text:`
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
        `},{id:6,title:"Как начисляется пошлина на импорт?",text:`
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
        `},{id:7,title:"Каковы сроки хранения задержанных изделий и документов на них?",text:`
            <div>
                В соответствии со ст. 238 Кодекса Республики Казахстан "О таможенном деле в Республике Казахстан" от 30 июня 2010 года № 296-IV задержанные изделия и документы на них, за исключением указанных в пункте 2 данной статьи, хранятся контрольными органами в течение одного месяца, а скоропортящиеся продукты — в течение двадцати четырех часов. Продукция, запрещенная к ввозу на таможенную территорию Таможенного союза или вывозу за пределы этой территории, и документы на нее хранятся контрольными органами в течение трех суток.
            </div>
            <br/>
            <div>
                Сроки хранения задержанных изделий исчисляются со дня их задержания, а скоропортящихся продуктов — с момента их задержания.
            </div>
        `},{id:8,title:"Как проходит таможенная очистка продукция, ввозимая из Китая в Казахстан?",text:`
            <div>
                У каждого изделия свой код согласно ТН ВЭД ТС и ставка пошлины согласно ЕТТ ТС. Процесс очистки указанных предметов проходит в общем порядке с уплатой пошлины, сбора за оформление и НДС 12%. Суммы пошлины и НДС рассчитываются по отдельным формулам с учетом транспортных расходов до границы ТС. Ставка сбора постоянна и составляет 60 евро за основной лист Декларации (1 вид продукции) и 25 евро за каждый добавочный лист, в котором можно отразить 3 вида изделий. Часть продукции подлежит обязательной сертификации. Для изделий с электронными схемами и системами требуется разрешение/согласование от КНБ РК. Если вам нужна более подробная информация, позвоните в нашу компанию по контактным телефонам. Мы с удовольствием вас проконсультируем.
            </div>
        `}];var l=i(5595);let a={src:"/_next/static/media/faqpromo.850a224a.png"};i(7400);let n={title:"GWL Group - Часто задаваемые вопросы",description:"Ответы на самые частые вопросы в работе таможенного представителя",keywords:["Часто задаваемые вопросы","FAQ GWL GROUP","Таможенные вопросы","Ответы на вопросы о таможне","Таможенный представитель вопросы","Растаможка FAQ","Таможенные услуги вопросы","ВЭД вопросы","Логистика Казахстан FAQ","Импорт и экспорт вопросы","Таможенное оформление вопросы","Таможенные процедуры вопросы","Таможенное право FAQ","Растаможка груза вопросы","Таможенные сборы вопросы"]},d=()=>(0,s.jsxs)("section",{className:"faq",children:[s.jsx("div",{className:"faq__promo",style:{backgroundImage:`url(${a.src})`},children:s.jsx("div",{className:"faq__promo__container",children:(0,s.jsxs)("div",{className:"faq__promo-wrapper",children:[s.jsx("h1",{className:"faq__promo-title",children:"Ответы на самые частые вопросы"}),s.jsx("h2",{className:"faq__promo-pretitle",children:"в работе таможенного представителя"})]})})}),s.jsx(l.ZP,{servicesData:r,listTitle:"Часто задаваемые вопросы",selectTitle:"Выбрать вопрос : "})]})},5595:(e,t,i)=>{"use strict";i.d(t,{ZP:()=>n});var s=i(8570);let r=(0,s.createProxy)(String.raw`E:\Codes\my-projects\gwl-open\src\compontents\services-list\ServicesList.tsx`),{__esModule:l,$$typeof:a}=r;r.default;let n=(0,s.createProxy)(String.raw`E:\Codes\my-projects\gwl-open\src\compontents\services-list\ServicesList.tsx#default`)},9583:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>s});let s={src:"/_next/static/media/faqpromo.850a224a.png",height:360,width:1440,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAGFBMVEVISkoyMCxgY2UIExg9Pz1aT0crMzcYIiT51XYlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGklEQVR4nGNgZmZkZ2FkZGJgY2FlYGBlYgAAAcIALfw59SQAAAAASUVORK5CYII=",blurWidth:8,blurHeight:2}},7400:()=>{},2139:()=>{},6523:()=>{},3588:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),s=t.X(0,[948,542,118,262],()=>i(9136));module.exports=s})();