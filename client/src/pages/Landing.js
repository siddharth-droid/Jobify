import React from 'react';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components/index';
import { Link, Navigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';

const Landing = () => {
  const { user } = useAppContext();
  return (
    <React.Fragment>
      {user && <Navigate to="/" />}
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          <div className="info">
            <h1>
              Job <span>Tracking</span> App
            </h1>
            <p>
              {/*Generate using Hipster ipsum */}
              I'm baby selvage plaid butcher lomo tattooed sus biodiesel ramps
              gentrify man braid actually messenger bag. Fanny pack skateboard
              chambray irony asymmetrical truffaut narwhal. Fingerstache seitan
              cray, copper mug woke ramps live-edge farm-to-table chambray
              sriracha ugh.
            </p>
            <Link to="/register" className="btn btn-hero">
              Login/Register
            </Link>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default Landing;
