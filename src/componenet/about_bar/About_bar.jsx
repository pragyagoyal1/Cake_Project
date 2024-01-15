import './About_bar.css';

function About_bar() {
    return (
        <>
            <section class="about spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="about__text">
                                <div class="section-title">

                                    <h2>Cakes and bakes from the house of Queens!</h2>
                                </div>
                                <p>The "Cake Shop" is a Jordanian Brand that started as a small family business. The owners are
                                    The "Cake Shop" is a Jordanian Brand that started as a small family business. The owners are
                                        Dr. Iyad Sultan and Dr. Sereen Sharabati, supported by a staff of 80 employees.</p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 pt-5">
                            <div class="about__bar">
                                <div class="about__bar__item">
                                    <p>Cake design</p>
                                    <div class="progress "  >
                                        <div class="progress-bar " style={{width :"90%"}}></div>
                                    </div>
                                </div>
                                <div class="about__bar__item">
                                    <p>Cake Class</p>
                                    <div class="progress " >
                                        <div class="progress-bar " style={{width :"85%"}}></div>
                                    </div>
                                </div>
                                <div class="about__bar__item">
                                    <p>Cake Recipes</p>
                                    <div class="progress " >
                                        <div class="progress-bar " style={{width :"95%"}} ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default About_bar;