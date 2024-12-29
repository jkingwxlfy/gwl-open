import Card from '../Card/Card'

import styles from './NewCourses.module.scss'

const NewCourses: React.FC = () => {
    return (
        <section className={styles.courses} id='newCourses'>
            <div className={styles.container}>
                <Card />
                <div className={styles.text}>
                    <h1>
                        Курсы таможенного брокера от GWL Group стали еще более
                        полезными и информативными!{' '}
                    </h1>
                    <p>
                        Теперь у вас есть возможность познакомиться с системой
                        KEDEN.KZ, которая является ключевым инструментом для
                        участников внешнеэкономической деятельности. KEDEN.KZ —
                        это удобный и современный инструмент для взаимодействия
                        с таможенными органами, и освоение его функционала
                        станет вашим конкурентным преимуществом.
                    </p>
                </div>
            </div>
        </section>
    )
}
export default NewCourses
