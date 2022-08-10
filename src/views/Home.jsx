import React, { useState } from 'react'
import data from '../utils/data';
// import myData from '../utils/pageData';
import Question from '../components/Question';
import Navigate from '../components/Navigate';

const Home = () => {

    const [questions] = useState(data);

    return (
        <header className='container'>
            <div>
                <h1>Мой класс</h1>
                <Navigate />
            </div>

            <section className='info'>
                {questions.map((question) => {
                    return (
                        <Question key={question.id} {...question}></Question>
                    );
                })}
            </section>
        </header >
    )
}

export default Home