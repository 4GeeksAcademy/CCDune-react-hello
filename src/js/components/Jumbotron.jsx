import PropTypes from 'prop-types';

//create the NavBar
const Jumbotron = ({ jumbo }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="p-5 mb-4 mt-4 bg-light col-8 rounded-3 border shadow">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">{ jumbo.jumboTitle }</h1>
          <p className="col-md-8 fs-4">
           { jumbo.jumboText }
          </p>
          <button className="btn btn-primary btn-lg" type="button">
            { jumbo.jumboBtn }
          </button>
        </div>
      </div>
    </div>
  );
};

Jumbotron.propTypes={
  jumboTitle: PropTypes.string,
  jumboText: PropTypes.string,
  jumboBtn: PropTypes.string
};

export default Jumbotron;