import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, perspiciatis dolorum labore voluptatem distinctio ipsum facere esse laborum quis dolor vero cumque unde aliquam voluptatibus, commodi incidunt, non illum sit.</p>
        </div>
    );
}

export default Rainbow(About);