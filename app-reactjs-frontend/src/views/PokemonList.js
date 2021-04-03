import React, {Component} from 'react';
import Pokemon from 'components/PokemonDetail';
import FuzzySearch from 'fuzzy-search';

export default class PokemonList extends Component{
    constructor(props){
      super(props);
      this.state = {
        pokemns : [],
        fetched : false,
        loading : false,
      };
      this.searcher = null;
      this.goPokemonDetail = this.goPokemonDetail.bind(this);
    }

    handleFilterSearch=(e)=> {
      this.setState({
        ...this.state,
        pokemns: this.searcher.search(e.target.value)
        });
         
      }
  

    componentWillMount(){
      this.setState({
        loading : true
      });
      fetch('http://pokeapi.co/api/v2/pokemon?limit=151').then(res=>res.json())
      .then(response=>{    
        this.setState({
          pokemns :response.results,
          loading : true,
          fetched : true
        });
        this.searcher = new FuzzySearch(response.results, ["name"], {
          caseSensitive: false
        });

      });
    }

    goPokemonDetail=(pokemon)=>{
      this.props.history.push({ pathname:"/admin/pokemon", state:{pokemon:pokemon}});
      }

  
    render(){
      const {fetched, loading, pokemns} = this.state;
      let content ;
      if(fetched){
        content = 
        <div  className="pokemon--species--list">
          {pokemns.map((pokemon,index)=> 
          <div key={index} className="justify-content-md-center">
            <Pokemon {...this.props} key={pokemon.name} id={index+1} pokemon={pokemon} history={()=>this.goPokemonDetail(pokemon)}/>
        </div>
          
          )}
          </div>
       ;
      }else if(loading && !fetched){
          content = <p> Loading ...</p>;
      }
      else{
        content = <div/>;
      }
      return  <div>
            <input className="search" placeholder="Filtra pokemons por nombre..." onChange={this.handleFilterSearch} />
               {content}      
      </div>
;
    }
  }