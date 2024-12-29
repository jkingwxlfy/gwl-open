import footerbg from '@/assets/footerbg.png'
import './contactsborder.scss'

const ContactsBorder: React.FC = () => {
    return (
        <div
            className='contact-border'
            style={{ backgroundImage: `url(${footerbg.src})` }}
        >
            <section className='contact-border__container'>
                <div className='contact-border__row'>
                    <h1>Свяжитесь с нами! </h1>{' '}
                    <p>
                        Телефон: +7 (727) 367 16 67, Tел \ Whatsapp: +7 707 726
                        75 26 Адрес: 050054, г. Алматы, пр. Суюнбая д. 12,
                        Email: gwl_group@inbox.ru
                    </p>
                </div>
            </section>
        </div>
    )
}
export default ContactsBorder
