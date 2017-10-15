import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import Card from './card.js';
import Level from './level.js';
const uid= require('uuid/v4');
import Deck from './deck.js';
var zIndex=100;
class App extends React.Component {
     constructor(props) {
        super(props);
        this.state={
            cards:[],
            clubs:[],
            diamonds:[],
            hearts:[],
            spades:[],
            active:''
        }
        this.onDrag=this.onDrag.bind(this);
        this.onStop=this.onStop.bind(this);
        this.remove=this.remove.bind(this);
     }
     remove(house,num){
        this.setState((prevState, props) => {
            var cards=[];
            for(var i=0;i<prevState.cards.length;i++){
                if(prevState.cards[i].props.cardhouse!=house||prevState.cards[i].props.cardNum!=num){
                    cards.push(prevState.cards[i]);
                }else{
                    prevState[house].push(prevState.cards[i])
                }
            }
            prevState.cards=cards;
            return prevState;
        });
     }
     onDragStart(evt){
        evt.target.style.zIndex=++zIndex;
     }
     onStop(evt){
        var c= this.refs.deck.state.c;
        var d = this.refs.deck.state.d;
        var h = this.refs.deck.state.h;
        var s = this.refs.deck.state.s;
        var x = evt.screenX;
        var y = evt.screenY;
       if(evt.target.classList.contains('clubs')){
           if(x>c[0]&&x<c[0]+200&&y>c[1]&&y<c[1]+290)
            this.remove(evt.target.classList[1],evt.target.classList[2]);
       }
       if(evt.target.classList.contains('spades')){
           if(x>s[0]&&x<s[0]+200&&y>s[1]&&y<s[1]+290)
            this.remove(evt.target.classList[1],evt.target.classList[2]);
       }
       if(evt.target.classList.contains('hearts')){
           if(x>h[0]&&x<h[0]+200&&y>h[1]&&y<h[1]+290)
            this.remove(evt.target.classList[1],evt.target.classList[2]);
       }
       if(evt.target.classList.contains('diamonds')){
            if(x>d[0]&&x<h[0]+200&&y>d[1]&&y<d[1]+290)
            this.remove(evt.target.classList[1],evt.target.classList[2]);
       }
       this.forceUpdate();
    }
    componentWillMount(){
       var numbers=['ace','2','3','4','5','6','7','8','9','10','jack','queen','king'];
       var house = ['clubs','diamonds','hearts','spades'];
       var widthRandom=()=>{ return Math.floor(Math.random() * (window.innerWidth-200)) } ;
       var heightRandom=()=>{ return Math.floor(Math.random() * 130)};
       var ScatteredCards=[];
       for(var n=0;n<numbers.length;n++){
           for(var h=0;h<house.length;h++){
               ScatteredCards.push(
                    <Card 
                        key={uid()} 
                        x={widthRandom()} y={heightRandom()} 
                        onStart={this.onDragStart}
                        onDrag={this.onDrag}
                        onStop={this.onStop}
                        
                        cardhouse={house[h]}
                        cardNum={numbers[n]}
                        imageUrl={'./images/cards/'+numbers[n]+'_of_'+house[h]+'.png'}
                    />
               );
           }
       }
       this.setState({
           cards:ScatteredCards
       })
     }
     onDrag(evt){
         var c= this.refs.deck.state.c;
         var d = this.refs.deck.state.d;
         var h = this.refs.deck.state.h;
         var s = this.refs.deck.state.s;
        var x = evt.screenX;
        var y = evt.screenY;
        
        if(evt.target.classList.contains('clubs')){
            if(x>c[0]&&x<c[0]+200&&y>c[1]&&y<c[1]+290){
                this.setState({
                    active:'c'
                });
            }else{
                this.setState({
                    active:''
                });
            }
        }
        if(evt.target.classList.contains('spades')){
            if(x>s[0]&&x<s[0]+200&&y>s[1]&&y<s[1]+290){
                this.setState({
                    active:'s'
                });
            }else{
                this.setState({
                    active:''
                });
            }
        }
        if(evt.target.classList.contains('hearts')){
            if(x>h[0]&&x<h[0]+200&&y>h[1]&&y<h[1]+290){
                this.setState({
                    active:'h'
                });
            }else{
                this.setState({
                    active:''
                });
            }
        }
        if(evt.target.classList.contains('diamonds')){
            if(x>d[0]&&x<d[0]+200&&y>d[1]&&y<d[1]+290){
                this.setState({
                    active:'d'
                });
            }else{
                this.setState({
                    active:''
                });
            }
        }
     }
     render() {
        return (
           <div className='gamedeck'>
                {this.state.cards}
                <Deck clubs={this.state.clubs} 
                    diamonds={this.state.diamonds}
                    hearts={this.state.hearts}
                    spades={this.state.spades}
                    active={this.state.active} 
                    ref='deck' 
                />
                <Level length={this.state.cards.length}/>
           </div>
        )
    }
}
module.exports = App;