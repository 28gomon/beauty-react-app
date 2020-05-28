import React from 'react';
import classes from './InformationSection.module.css';
import Image from "../../UI/Slider/Image/Image";

const InformationSection = props => {

    return (
        <div className={classes.InformationSection}>
            <div className={classes.LeftBlock}>
                <Image
                    image={'https://bumboobs.info/wp-content/uploads/2020/01/Alica-Schmidt-logo.jpg'}
                />
            </div>
            <div className={classes.RightBlock}>
                <h2>Для кого это нужно?</h2>
                <p>
                        <span>По своей сути рыбатекст является альтернативой традиционному
                            lorem ipsum, который вызывает у некторых людей недоумение при попытках
                            прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском
                            языке наполнит любой макет непонятным смыслом и придаст неповторимый
                            колорит советских времен.
                        </span>
                    <span>По своей сути рыбатекст является альтернативой традиционному
                            lorem ipsum, который вызывает у некторых людей недоумение при попытках
                            прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском
                            языке наполнит любой макет непонятным смыслом и придаст неповторимый
                            колорит советских времен.
                        </span>
                    <span>По своей сути рыбатекст является альтернативой традиционному
                            lorem ipsum, который вызывает у некторых людей недоумение при попытках
                            прочитать рыбу текст.
                        </span>
                </p>
            </div>
        </div>
    );
}

export default InformationSection;