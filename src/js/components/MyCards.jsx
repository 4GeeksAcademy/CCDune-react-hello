import PropTypes from 'prop-types';

//create the Content Cards
const MyCards = ({ cards }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="m-4 col-8">
        <div className="card-group">
          {cards.map((card, index) => (
            <div
              key={index}
              className="card p-2 bg-light rounded-3 m-2"
              style={{ minWidth: "16rem" }}
            >
              <img src={card.imageUrl} className="card-img-top" alt={card.altUrlText} />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text border-bottom px-2">
                  {card.text}
                </p>
                <a href="#" className="btn btn-primary">
                  {card.btnText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

MyCards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      altUrlText: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string,
      btnText: PropTypes.string
    })
  ).isRequired
};



export default MyCards;


/*const Hero = (props) => {
  // Here you have to return expected html using the properties being passed to the component
  return (
    <div className="container m-5">
  <h1 className="display-4">{props.title}</h1>
  <p className="lead">{props.description}</p>
  <a className="btn btn-primary btn-lg" href={props.buttonURL} role="button">
    {props.buttonLabel}
    </a
  >
</div>
  )
};

Hero.propTypes = {
  // PropTypes here
  title: PropTypes.string,
  description: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonURL: PropTypes.string
};*/