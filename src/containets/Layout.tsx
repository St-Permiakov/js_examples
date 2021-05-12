import React, { Suspense, useState } from 'react';

const Component1 = React.lazy(() => import('../components/examples/Component1'))
const Component2 = React.lazy(() => import('../components/examples/Component2'))

export const Layout = (): JSX.Element => {
  const nav: { text: string; Component: JSX.Element }[] = [
    {text: 'Component 1', Component: <Component1 />},
    {text: 'Component 2', Component: <Component2 />}
  ];

  const [Component, setComponent] = useState<JSX.Element>(nav[0].Component);

  return (
    <div className="layout">
      <header className="header">
        <h1>Permiakov.St — JS Examples</h1>
        <a href="https://www.linkedin.com/in/permiakov/" target="_blank" rel="noreferrer"
           className="avatar" title="LinkedIn Profile">
          <img className="avatar__img"
               src="https://sun9-8.userapi.com/impf/uGWL9mWlxxLb6-0DmLEfahpjzzaeAOrJvm1Qhg/fHSwNatXj7k.jpg?size=536x536&quality=96&sign=9215a27f724c3a0e27597ba19ec450c3&type=album"
               alt="avatar"/>
        </a>
      </header>
      <main className="main">
        <nav className="nav">
          <ul className="nav__list">
            {nav.map(navItem => (
              <li className="nav__item">
                <button
                  className="link nav__link"
                  onClick={() => setComponent(navItem.Component)}>{navItem.text}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="content">
          <Suspense fallback={<div>loading...</div>}>
            {Component}
          </Suspense>
        </div>
      </main>
      <div className="footer">
        <div className="contacts">
          <div className="contacts__item">
            <a href="tel:+79636866501" className="link contacts__link">✆ +7 (963) 686-65-01</a>
          </div>
          <div className="contacts__item">
            <a href="mailto:permiakov.st@gmail.com" className="link contacts__link">✉
              permiakov.st@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};
