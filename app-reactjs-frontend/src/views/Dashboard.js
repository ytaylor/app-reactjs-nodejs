
import React from "react";
import { Card, CardSubtitle, CardBody, CardFooter, CardTitle,Row, Col,CardImg,CardText,Button, Badge
} from "reactstrap";
import Utils from "constants/utils"
import {API_POKEMONS_ALL} from "constants/const";

class Dashboard extends React.Component {

  constructor(props){
    super(props)
      this.state=({
        pokemns:[]                   
        });
        this.getPokemns=this.getPokemns.bind(this);
        this.getPokemns();

}

  getPokemns=()=>{
    var pokemns =[];
    fetch(API_POKEMONS_ALL, {
      method: 'GET',                  
      headers: new Headers({
        'Content-Type': 'application/json'
       })                   
    }).then(Utils.processResponse)
    .then(res => {
      const { statusCode, data } = res;
      if (statusCode === 200) {      
        data.results.forEach(element => {
            //call the detail api pokemon
            fetch(element.url, {
              method: 'GET',                  
              headers: new Headers({
                'Content-Type': 'application/json'
               })                   
            }).then(Utils.processResponse)
            .then(res => {
              const { statusCode, data } = res;
              if (statusCode === 200) {  
                console.log(data);
                  var pkdetail={
                    pk_id: data.id,
                    pk_name: data.name,
                    pk_image: data.sprites.front_default,
                    pk_types: data.types,
                  }   
                  pokemns.push(pkdetail) 
                
              } else {
               console.log("Error",'No se ha podido obtener el listado')
              } 
            }).catch(error => console.log(error));
     
        });
        this.setState({pokemns: pokemns}); 
        console.log(pokemns);
      } else {
       console.log("Error",'No se ha podido obtener el listado')
      } 
    }).catch(error => console.log(error));
 }

   

  render() {
    return (
      <>
        <div className="content">
       {this.state.pokemns.map((pk, index) => (
            <Col lg="4" md="6" sm="6">
              <Card className="card-stats">
              <CardImg top width="50" src={pk.pk_image} alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h5">{pk.pk_name} </CardTitle>
                  {
                    pk.pk_types.map((type, index) =>
                    <Badge color="light" pill>type</Badge>)
                  }
                 
                  <hr />
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Evoluciona de </CardSubtitle>
                </CardBody>
               
              </Card>
            </Col>
        
             ))    
            }
        </div>
      </>
    );
  }
}

export default Dashboard;
