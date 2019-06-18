import React from 'react';

const Contact = (props) => {
    console.log(props);
    setTimeout(() => {
        props.history.push('/about')
    }, 2000);
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, perspiciatis dolorum labore voluptatem distinctio ipsum facere esse laborum quis dolor vero cumque unde aliquam voluptatibus, commodi incidunt, non illum sit.</p>
        </div>
    );
}

export default Contact;