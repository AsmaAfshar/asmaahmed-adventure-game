#!/usr/bin/env node
import inquirer from "inquirer";
import { TestScheduler } from "rxjs/testing";

//for player 
class Player {
    name: string;
    health = 100;

    constructor (name: string){
        this.name = name
    }
    decreaseHealth(){
        this.health -= 20
    }

    increaseHealth(){
        this.health = 100
    }
}
// for enemy
class Enemy{
      name: string;
      health = 100;

constructor (name: string){
    this.name = name
}
decreaseHealth(){
    this.health -= 20
}

increaseHealth(){
    this.health = 100
}
}
 
//STEP 2
// ========================== player object =====================
async function main(){
const { playerName } = await inquirer.prompt([
    {
        type: "input",
        name: "playerName",
        message: "Enter Your Player Name:"

    }
]);

// ====================== enemy object =======================
    const { enemyType } = await inquirer.prompt([
        {
            type: "list",
            name: "enemyType",
            choices: ["Alien", "Witch", "Zombie"],
            message: "Select the Enemy you want to fight with him:"
    
        }
    ]);

// step 3 battle  field


const player = new Player (playerName)
const enemy = new Enemy (enemyType);

console.log(`${enemy.name} v/s ${Player.name}` )

// step 4 action
do{
    const { action } = await inquirer.prompt([
            // action object
        {
            type: "list",
            name: "action",
            choices: ["Attack", "Defend", "Range Target", "Run"],
            message: "choosse the attact type to perform action!"
        }
          ]);

   switch (action) {
   case "Attack":
   const randomNum = Math.random();
   if (randomNum > 0.5) {
    player.decreaseHealth();
    console.log(`${player.name} health: ${player.health}`);
    console.log(`${enemy.name} health: ${enemy.health}`);
    if (player.health <= 0) {
        console.log("Ooooppsss You loss! try again")
        return
    } else {
        // enemy health decrease
        enemy.decreaseHealth();
        enemy.decreaseHealth();
        console.log(`${player.name} health: ${player.health}`);
        console.log(`${enemy.name} health: ${enemy.health}`);
        if (player.health <= 0){
            console.log("Congratulations! You Won")
            return
     }
    }
     break; 
   }
}
   }while (true);
}
main();
