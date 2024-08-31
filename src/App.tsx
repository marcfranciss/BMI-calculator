import "./App.css";
import pageLogo from "./assets/images/logo.svg";
import resultImg from "./assets/images/image-man-eating.webp";
import design1 from "./assets/images/pattern-curved-line-left.svg";
import { limitsArr, tipsArr } from "./Components/Utils/data";
import BmiForm from "./Components/BMI-Form/BmiForm";

function App() {
  return (
    <main>
      <header>
        <div className='header-logo'>
          <img src={pageLogo} alt='Website Logo' />
        </div>
      </header>
      <section id='hero' className='hero-container'>
        <div className='left-wing'>
          <h1 className='heading-xl'>
            Body Mass
            <br />
            Index Calculator
          </h1>
          <p className='body-m'>
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
        </div>
        <div className='right-wing'>
          <BmiForm />
        </div>
      </section>
      <section id='result' className='result-container'>
        <div className='left-wing'>
          <img
            src={resultImg}
            alt='A man holding chopsticks with sushi.'
            className='left-wing_img'
            loading='lazy'
          />
        </div>
        <div className='right-wing'>
          <img src={design1} alt='' className='right-wing_img' />
          <div className='right-wing_text'>
            <h2 className='heading-l'>What your BMI result means</h2>
            <p className='body-m'>
              A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
              Maintaining a healthy weight may lower your chances of
              experiencing health issues later on, such as obesity and type 2
              diabetes. Aim for a nutritious diet with reduced fat and sugar
              content, incorporating ample fruits and vegetables. Additionally,
              strive for regular physical activity, ideally about 30 minutes
              daily for five days a week.
            </p>
          </div>
        </div>
      </section>
      <section id='tips' className='tips-container'>
        {tipsArr.map((tip) => {
          return (
            <div className='tip-cards' key={tip.header}>
              <img src={tip.icon} alt='Card icon' />
              <div className='tip-texts'>
                <h2 className='heading-m'>{tip.header}</h2>
                <p className='body-m'>{tip.text}</p>
              </div>
            </div>
          );
        })}
      </section>
      <section id='limits' className='limits-container'>
        <header className='header-last'>
          <h2 className='heading-l'>Limitations of BMI</h2>
          <p className='body-m'>
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use.
          </p>
        </header>
        {limitsArr.map((limit) => {
          return (
            <div className='limits-card' key={limit.header}>
              <div className='header'>
                <img src={limit.icon} alt={limit.header} />
                <h3 className='heading-s'>{limit.header}</h3>
              </div>
              <p className='body-m'>{limit.text}</p>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default App;
