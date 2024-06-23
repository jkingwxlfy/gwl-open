import footerbg from '@/assets/footerbg.png'
import './contactsborder.scss'

const ContactsBorder: React.FC = () => {
    return (
        <div
            className='contact-border'
            style={{ backgroundImage: `url(${footerbg.src})` }}
        >
            <div className='contact-border__container'>
                <div className='contact-border__row'>
                    <span>Свяжитесь с нами!</span> <br /> Телефон: +7 (727) 367
                    16 67, Tел \ Whatsapp: +7 707 726 75 26 Адрес: 050054, г.
                    Алматы, пр. Суюнбая д. 12, Email: gwl_group@inbox.ru
                </div>
            </div>
        </div>
    )
}
export default ContactsBorder
