import "./App.css";
import pageLogo from "./assets/images/logo.svg";

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
        <div className='right-wing'></div>
      </section>
      <section id='result' className='default-container'></section>
      <section id='tips'></section>
      <section id='limitations'></section>
    </main>
  );
}

export default App;
