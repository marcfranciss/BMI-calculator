import "./App.css";
import pageLogo from "./assets/images/logo.svg";
import resultImg from "./assets/images/image-man-eating.webp";
import design1 from "./assets/images/pattern-curved-line-left.svg";
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
          <img src={resultImg} alt='A man holding chopsticks with sushi.' />
        </div>
        <div className='right-wing'>
          <img src={design1} alt='' />
          <h2 className='heading-l'>What your BMI result means</h2>
          <p className='body-m'>
            A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
            Maintaining a healthy weight may lower your chances of experiencing
            health issues later on, such as obesity and type 2 diabetes. Aim for
            a nutritious diet with reduced fat and sugar content, incorporating
            ample fruits and vegetables. Additionally, strive for regular
            physical activity, ideally about 30 minutes daily for five days a
            week.
          </p>
        </div>
      </section>
      <section id='tips'></section>
      <section id='limitations'></section>
    </main>
  );
}

export default App;
