
import React from "react";
import {
  Card, CardImg, CardText, CardBody, CardFooter,
  CardTitle, CardSubtitle, Button, Container, Row, Col, CardImgOverlay, Badge, ListGroupItem, ListGroup
} from 'reactstrap';

class Pokemon extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fetched: false,
      loading: false, pokemon: ""
    };
    this.getPokemonDetail = this.getPokemonDetail.bind(this);
  }

  componentDidMount() {
    this.getPokemonDetail();
  }


  async getPokemonDetail() {
    await fetch(this.props.location.state.pokemon.url).then(res => res.json())
      .then(response1 => {
        console.log(response1);
        this.setState({
          pokemon: response1, loading: true,
          fetched: true,
        });

        console.log(this.state.pokemon);
      });
  }

  goPokemonDetail = () => {
    this.props.history.push("/admin/dashboard");
  }


  render() {
    const { pokemon, fetched, loading } = this.state;
    let content;
    let abilities =""; 
    let moves =""; 
    if (fetched) {
      {
        pokemon.abilities.map((item, index)=>
        abilities+= item.ability.name + ", ")

        pokemon.moves.map((item, index)=>
        moves+= item.move.name + ", ")
        
      }
      content =
        <Container>
          <Row  >
            <Col>
            <div className="bg-info clearfix"  style={{ padding: '.5rem', color:"white" }}>

            <h3>
            Pokemon: {pokemon.name} </h3>
            <button onClick={this.goPokemonDetail} className="btn btn-secondary float-right">Volver al listado</button>
            </div>
            </Col>
          </Row>

          <Row>
            <Col >
               <CardImg src={pokemon.sprites.front_default} alt="Card image" />
            </Col>
            <Col>

             <ListGroup>
              <ListGroupItem className="justify-content-between">{"Peso: "+pokemon.weight/10 +" kg "}  </ListGroupItem>
              <ListGroupItem className="justify-content-between">{"Altura: " + pokemon.height/10 + " m"}  </ListGroupItem>
              <ListGroupItem className="justify-content-between">{"Habilidades: " + abilities}  </ListGroupItem>
              <ListGroupItem className="justify-content-between">{"Movimientos: " + moves}  </ListGroupItem>


            </ListGroup>

          

            </Col>
          
          </Row>
        </Container>

    }
    else if (loading && !fetched) {
      content = <p> Loading ...</p>;
    }
    else {
      content = <div />;
    }
    return <div>
      {content}
    </div>;
  }
}

export default Pokemon;
