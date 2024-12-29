import HeroSectionInfo from '../HeroSectionInfo/HeroSectionInfo'
import HeroSectionSlider from '../HeroSectionSlider/HeroSectionSlider'

import promoImage from '@/assets/main-promo.png'

import './HeroSection.scss'
import styles from './HeroSection.module.scss'

const HeroSection: React.FC = () => {
    return (
        <section>
            <div
                className='app__promo'
                style={{ backgroundImage: `url(${promoImage.src})` }}
            >
                <div className='app__promo__container'>
                    <div className={styles.wrapper}>
                        <HeroSectionInfo />
                        <HeroSectionSlider />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HeroSection
