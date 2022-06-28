import React from 'react';

const About = () => {
    return (
        <div style = {{margin: 20}}>
            <h3>Это приложение создано в качестве проекта для демострации возможностей React.<br/></h3>
            <p> В качестве исходных данных использован сервис для предоставления фальшивого REST-API,</p>
            <p> но функционал можно адаптировать под реальные данные</p>
            <br/>
            <p> Приложение реализовано в концепции SPA - Single Page Application.<br/>
            Все компоненты предложения написаны в функциональном стиле, а взаимодействие с состоянием реализовано на Hooks,<br/> что соответствует последним тенденциям индустрии WEB-разработки.</p>
            <br/>
            <h4> Реализованный функционал:</h4>
                <ul>
                    <li>Запрос и обработка данных с сервера, их сортировка и фильтрация.</li>
                    <li>Создана библиотека переиспользуемых управляемых react-компонентов </li>
                    <li>Пользовательские React-Hooks</li>
                    <li>Создан API для запросов на сервер</li>
                    <li>Постраничный вывод (пагинация) компонентов. Бесконечная прокрутка.</li>
                    <li>Роутинг (постраничная навигация)</li>
                    <li>Динамическая навигация - присвоение страницам уникального адреса</li>
                    <li>Авторизация пользователя и ограничение доступного контента</li>
                </ul>
            <br/>
            <h4> Использованные библиотеки: </h4>
            <ul>
                <li>-React, React-DOM, React-Router</li>
                <li>-Axios</li>
                <li>-CSSTransion Group</li>
            </ul>
            <br/>
            <h4> Ресурсы: </h4>
            <ul>
                <li><a href = "https://jsonplaceholder.typicode.com/">https://jsonplaceholder.typicode.com/</a></li>
                <li><a href = "https://learn-reactjs.ru/">https://learn-reactjs.ru/</a></li>
                <li><a href = "https://developer.mozilla.org/ru/">https://developer.mozilla.org/ru/</a></li>
            </ul>
        </div>
    );
};

export default About;