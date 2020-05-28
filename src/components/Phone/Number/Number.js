import React from 'react';

const Number = props => {

    return (
        <div className={'phoneList'}>
            {
                props.strNumber.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href={"tel:" + item}>
                                {item}
                            </a>
                        </li>
                    )
                })
            }
        </div>
    );
}

export default Number;