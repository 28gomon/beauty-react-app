import React from 'react';
import classes from './Slider.module.css';
import Image from "./Image/Image";
import {NavLink} from "react-router-dom";


class Slider extends React.Component {

    state = {
        currentSlideIndex: 0,
        slide: [
            {
                label: 'Заголовок слайдера самый большой который только может быть 12www',
                image: 'https://bumboobs.info/wp-content/uploads/2020/01/Alica-Schmidt-logo.jpg',
                description: 'Как и в случае с любым градиентом, линейный градиент не имеет внутренних размеров; т. е., он не имеет ни естественного или предпочтительного размера, ни предпочтительного соотношения сторон. Его фактический размер будет совпадать с размеров элемента, к которому он применён.',
                hrefOut: '/about'
            },
            {
                label: 'Заголовок слайдера 2',
                image: 'https://sport.img.com.ua/nxs271/b/600x500/3/aa/646eb4242264bd7f7f96d606a7019aa3.jpg',
                description: 'Как и в случае с любым градиентом, линейный градиент не имеет внутренних размеров; т. е., он не имеет ни естественного или предпочтительного размера, ни предпочтительного соотношения сторон. Его фактический размер будет совпадать с размеров элемента, к которому он применён.',
                hrefOut: '/contacts'
            },
            {
                label: 'Заголовок слайдера 3',
                image: 'https://cdn.footballua.tv/i/image_650x360/uploads/football-media/image/5e1/362/b16/5e1362b169dc4_.jpeg',
                description: 'Как и в случае с любым градиентом, линейный градиент не имеет внутренних размеров; т. е., он не имеет ни естественного или предпочтительного размера, ни предпочтительного соотношения сторон. Его фактический размер будет совпадать с размеров элемента, к которому он применён.',
                hrefOut: '/contacts'
            }
        ]
    }

    nextSideHandler = (e) => {

        let newIndex = this.state.currentSlideIndex;

        if (e.currentTarget.dataset.direction === 'next') {
            if (newIndex < this.state.slide.length - 1) {
                newIndex = this.state.currentSlideIndex + 1;
            } else if (newIndex === this.state.slide.length - 1) {
                newIndex = 0;
            }
        } else {
            if (newIndex > 0) {
                newIndex = this.state.currentSlideIndex - 1;
            } else if (newIndex === 0) {
                newIndex = this.state.slide.length - 1;
            }
        }

        this.setState({
            currentSlideIndex: newIndex
        })
    }

    render() {

        const slideData = this.state.slide[this.state.currentSlideIndex];

        return (
            <div className={classes.Slider}>
                <div>

                    <div className={classes.Slide}>

                        {
                            <div>
                                <div className={classes.title}>
                                    <h1>
                                        <NavLink
                                            to={slideData.hrefOut}
                                        >
                                            {
                                                slideData.label.length > 60 ?
                                                    slideData.label.substring(0, 60) + '...' : slideData.label
                                            }
                                        </NavLink>
                                    </h1>
                                    <div className={classes.description}>
                                        <p>
                                            {
                                                window.innerWidth > 480 ?
                                                slideData.description.length > 270 ?
                                                    slideData.description.substring(0, 270) + '...' : slideData.description
                                                    : slideData.description.length > 270 ?
                                                    slideData.description.substring(0, 120) + '...' : slideData.description
                                            }
                                        </p>
                                    </div>
                                </div>
                                <div className={classes.buttonSlide}>
                                    <NavLink
                                        to={slideData.hrefOut}
                                        rel={'noopener noreferrer'}
                                    >
                                        Узнать больше
                                    </NavLink>
                                </div>
                                <Image
                                    image={slideData.image}
                                />
                            </div>
                        }

                    </div>

                    <div className={classes.controls}>
                        <button data-direction={'prev'} onClick={this.nextSideHandler}>
                            <i className={'fa fa-angle-left'}/>
                        </button>
                        <button data-direction={'next'} onClick={this.nextSideHandler}>
                            <i className={'fa fa-angle-right'}/>
                        </button>
                    </div>

                </div>
            </div>
        );
    }
}

export default Slider;