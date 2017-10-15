import React from 'react';
import ReactDOM from 'react-dom';
import './deck.css';
const uid= require('uuid/v4');

class Deck extends React.Component {
     constructor(props) {
     super(props);
        this.state={
            c:0,
            d:0,
            h:0,
            s:0
        }
     }
     componentDidMount(){
         this.setState({
            c:[this.refs.cdeck.getBoundingClientRect().x,this.refs.cdeck.getBoundingClientRect().y],
            d:[this.refs.ddeck.getBoundingClientRect().x,this.refs.ddeck.getBoundingClientRect().y],
            h:[this.refs.hdeck.getBoundingClientRect().x,this.refs.hdeck.getBoundingClientRect().y],
            s:[this.refs.sdeck.getBoundingClientRect().x,this.refs.sdeck.getBoundingClientRect().y],
         });;
     }
     render() {
            var house = ['clubs','diamonds','hearts','spades'];
            var clubs=this.props.clubs;
            var clubBackGround=(clubs.length!=0)?'url('+clubs[clubs.length-1].props.imageUrl+')':'';
            var diamonds=this.props.diamonds;
            var diamondBackGround=(diamonds.length!=0)?'url('+diamonds[diamonds.length-1].props.imageUrl+')':'';
            var hearts=this.props.hearts;
            var heartBackGround=(hearts.length!=0)?'url('+hearts[hearts.length-1].props.imageUrl+')':'';
            var spades=this.props.spades;
            var spadeBackGround=(spades.length!=0)?'url('+spades[spades.length-1].props.imageUrl+')':'';

        return (
           <div className='decks' 
           style={{
               left:window.innerWidth*0.5-450
           }}>
           <div ref='cdeck' 
            className={'placeholder clubs '+(this.props.active=='c'?'active':'')}
            style={{
                backgroundImage:clubBackGround,
                backgroundSize:'200px',
                color:(clubs.length!=0)?'rgba(0,0,0,0)':'',
                borderRight:''+(clubs.length+2)+'px solid #ccc',
                width:(200+clubs.length)
            }}
            >CLUBS</div>
           <div ref='ddeck' 
           className={'placeholder diamonds '+(this.props.active=='d'?'active':'')}
           style={{
                backgroundImage:diamondBackGround,
                backgroundSize:'200px',
                color:(diamonds.length!=0)?'rgba(0,0,0,0)':'',
                borderRight:''+(diamonds.length+2)+'px solid #ccc',
                width:(200+diamonds.length)
            }}
           >DIAMONDS</div>
           <div ref='hdeck' 
           className={'placeholder hearts '+(this.props.active=='h'?'active':'')}
           style={{
                backgroundImage:heartBackGround,
                backgroundSize:'200px',
                color:(hearts.length!=0)?'rgba(0,0,0,0)':'',
                borderRight:''+(hearts.length+2)+'px solid #ccc',
                width:(200+hearts.length)
            }}
           >HEARTS</div>
           <div ref='sdeck' 
           className={'placeholder spades '+(this.props.active=='s'?'active':'')}
           style={{
                backgroundImage:spadeBackGround,
                backgroundSize:'200px',
                color:(spades.length!=0)?'rgba(0,0,0,0)':'',
                borderRight:''+(spades.length+2)+'px solid #ccc',
                width:(200+spades.length)
            }}
           >SPADES</div>
           </div>
        )
    }
}
module.exports = Deck;