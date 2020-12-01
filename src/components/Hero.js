import React from 'react';

const Hero = props => {
        return(
            <section className="hero-container">
                <div className="hero-left">
                    <header className="hero-header">
                        <h1>The Best Shopping</h1>
                    </header>
                    <footer className="hero-footer">
                        <button><a href="/items">Shop Now</a></button>
                    </footer>
                </div>
                <img src={"./assets/Container.svg"} className="hero-image"></img>
            </section>
        )
};

// image for background:
// unsplash id: MQzSZ5BkjAg
// url: https://source.unsplash.com/{PHOTO ID}/{WIDTHxHEIGHT}
// url: https://source.unsplash.com/MQzSZ5BkjAg



export default Hero;
