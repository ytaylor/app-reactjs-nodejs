import React, { Component } from 'react';
import styles from "../styles.css"
import {
  Card, CardImg, CardText, CardBody,Badge,
  CardTitle, CardSubtitle, CardImgOverlay
} from 'reactstrap';
export default class Pokemon extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemon: "",
      evolves: "",
      fetched: false,
      loading: false,
    };
  }

  componentWillMount() {
    const { pokemon } = this.props;
    this.setState({
      loading: true
    });
    fetch(pokemon.url).then(res => res.json())
      .then(response1 => {
        const url = 'https://pokeapi.co/api/v2/pokemon-species/' + response1.id;
        fetch(url).then(res => res.json())
          .then(response2 => {
            this.setState({
              evolves: response2,
              pokemon: response1,
              loading: true,
              fetched: true,
            });
          });

      });
  }

  render() {
    const { fetched, loading, pokemon, evolves } = this.state;
    let content;
    if (fetched) {
      content =

        <Card className="pokemon--species--container" >
          
            <CardBody>
            <CardImg  src={pokemon.sprites.front_default} alt="Card image" />
            <CardImgOverlay onClick={this.props.history}>
            <CardText>
            <small className="text-muted">{"ID/"+pokemon.id}</small>
          </CardText>
            </CardImgOverlay>
             <CardTitle tag="h5" color="dark">{pokemon.name}</CardTitle>
             <CardText>             {
                pokemon.types.map((types, index) =>
                  <Badge color="dark" >{types.type.name}</Badge>)}
           </CardText>
             {evolves.evolves_from_species != null ? <CardSubtitle tag="h6" className=" text-muted"> Evoluciona de {evolves.evolves_from_species.name} </CardSubtitle>: <CardSubtitle tag="h6" style={{color: 'white'}}>{" Evoluciona de"}</CardSubtitle>}
          </CardBody>
        </Card>
;
    }
    
    else {
      content = <div />;
    }
    return <div>
      {content}
    </div>;
  }

}

