const ATTACK_VALUE = 10; //will not change - therefor is a const. The uppercase indicates that this is a "not mutable" state and holds a hard coded value. It is just a convention. 

let chosenMaxLife = 100; //will be changed latter. 
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damage;
}

attackBtn.addEventListener('click', attackHandler)