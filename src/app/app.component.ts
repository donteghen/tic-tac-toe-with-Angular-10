import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
squares:string[] = Array(9).fill(null);
gameEnd:boolean=false;
playerwon:string;
history = [
 { 
   squares : Array(9).fill(null)
  }
];
current : string[]

isX :boolean = true;
nextPlayer:string = "X";
constructor(public router:Router){}

play(index:number, btn:HTMLBaseElement){
  if(btn.getAttribute('value') != null || this.gameEnd){
    return;
  }
    btn.setAttribute('value', this.isX? "X" : "O");
    this.squares[index] = this.isX? "X" : "O";
    this.isX =!this.isX;
    this.nextPlayer = this.isX? "X" : "O";
    this.winner();
}

winner(){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
      this.gameEnd = true;
      this.playerwon = this.squares[a];
      console.log(this.squares[a]);
      return this.squares[a];
    }
  }
  return null;
}

restart(){
 this.gameEnd = false;
  this.squares =Array(9).fill(null);
  this.nextPlayer = "X";
  this.isX = true;
  this.playerwon = null;
  
}


}
