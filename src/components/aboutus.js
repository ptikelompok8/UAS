import React from 'react';
import './AboutUs.css';

const MyComponent = () => {
    return (
        <div>
            <nav>
                <ul className="indicator">
                    <li><a href="#snapping"><span className="sr-only">Snapping</span></a></li>
                    <li><a href="#scrolling"><span className="sr-only">Scrolling</span></a></li>
                    <li><a href="#layout"><span className="sr-only">Layout</span></a></li>
                    <li><a href="#transition"><span className="sr-only">Transition</span></a></li>
                    <li><a href="#caveats"><span className="sr-only">Caveats</span></a></li>
                </ul>
            </nav>

            <main>
                <section id="snapping" className="section">
                    <div className="content">
                        <h2><strong>Willbert Budi Lian </strong></h2>

                        <div className="text">
                            <img src="/image/wb.png" alt=""></img>
                            <h1><strong className="selector" id="NIM">00000082864</strong></h1>
                        </div>
                    </div>
                </section>
                <section id="scrolling" className="section">
                    <div className="content">
                        <h2><strong>Richard Wijaya</strong></h2>

                        <div className="text">
                            <img src="/image/richard.png" alt=""></img>
                            <h1><strong className="property" id="NIM">00000087656</strong></h1>
                        </div>
                    </div>
                </section>
                <section id="layout" className="section">
                    <div className="content">
                        <h2><strong>Jap Feodrian Calvin</strong></h2>

                        <div className="text">
                            <img src="/image/calvin.png" alt="" id="calvin"></img>
                            <h1><strong className="selector" id="NIM">00000083500</strong></h1>

                        </div>
                    </div>
                </section>
                <section id="transition" className="section">
                    <div className="content">
                        <h2><strong>Davin Christopher</strong></h2>

                        <div className="text">
                            <img src="/image/davin.png" alt=""></img>
                            <h1><strong className="selector" id="NIM">00000085465</strong></h1>
                        </div>
                    </div>
                </section>
                <section id="caveats" className="section">
                    <div className="content">
                        <h2><strong>Ferdiyanto</strong></h2>

                        <div className="text">
                            <img src="/image/ferdi.png" alt=""></img>
                            <h1><strong className="selector" id="NIM">00000082619</strong></h1>
                        </div>
                    </div>
                </section>

            </main>

            <footer>
                <p>That's it <span className="emoji">🌸</span></p>
            </footer>
        </div>
    );
};

export default MyComponent;