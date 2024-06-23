import { Children, cloneElement, isValidElement } from 'react'
import type { CSSProperties, ReactElement } from 'react'

import './slider.scss'

interface SliderStyles {
    wrapper: {
        width: string
    }
    slider: {
        height: string
        width: string
    }
    inner: {
        gap: string
        height: string
    }
}

interface ISliderProps {
    styles: SliderStyles
    children: React.ReactNode
}

const Slider: React.FC<ISliderProps> = ({ styles, children }) => {
    return (
        <div className='slider' style={styles.wrapper}>
            <div
                className='slider__inner'
                style={{
                    ...styles.inner,
                    width: `${
                        parseInt(
                            styles.slider.width.replace(/[^\d]/g, ''),
                            10,
                        ) *
                            Children.count(children) +
                        (parseInt(styles.inner.gap.replace(/[^\d]/g, ''), 10) *
                            Children.count(children) -
                            1)
                    }px`,
                }}
            >
                {Children.map(children, child => {
                    if (isValidElement(child)) {
                        return cloneElement(
                            child as ReactElement<any> & {
                                style?: CSSProperties
                            },
                            {
                                style: {
                                    ...child.props.style,
                                    ...styles.slider,
                                },
                            },
                        )
                    }
                    return child
                })}
            </div>
        </div>
    )
}
export default Slider
