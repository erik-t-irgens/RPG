
// Business end


function Player (name, health, strength, agility, lore, aura) {
// Unchecked
    this.name = name
    this.health = health
// Physical check
    this.strength = strength
    this.agility = agility
// Skill checks
    this.lore = lore
    this.aura = aura
// Defensive check
    this.accuity = lore
    this.resistance = aura
}
// The above attributes are decided upon character creation. Player may write a name, while there will be a pool of available points for the player to spend in each 
// Name will be the player's Name. 
// Health will be their health, which will have a default of 100 points. 
// Strength, agility, lore, aura, accuity, and resistance will be the points in which you can pull from the creation pool. 
// Strength and agility will be physical checks which can be tested in physically based challenge cards. They may also be altered by physically based cards.
// Lore and aura (Knowledge, and magical ability) will be checked in skill-based cards, such as translations, rune interactions, and general interactions based on those attributes. 
// Accuity and resistance are defensive attributes. They are determined by the player's lore and aura input from the getgo. When lore or aura is affected by cards, these shouldn't change. They are permanent from the inception.


Player.prototype.damage = function(){
   var currentHealth = this.health;
   currentHealth = currentHealth -1;
    this.health = currentHealth;
}

Player.prototype.weaken = function(){
    var currentStrength = this.strength;
    currentStrength = currentStrength -1;
     this.strength = currentStrength;
 }

Player.prototype.slow = function(){ 
    var currentAgility = this.agility;
    currentAgility = currentAgility -1;
     this.agility = currentAgility;
}

Player.prototype.unlearn = function(){ 
    var currentLore = this.lore;
    currentLore = currentLore -1;
     this.lore = currentLore;
}

Player.prototype.syphon = function(){ 
    var currentAura = this.aura;
    currentAura = currentAura -1;
     this.aura = currentAura;
}

var player1 = new Player ("Sareth", 100, 10, 10, 10, 10)

// User end

$(document).ready(function(){
    $("#playerCreationForm").submit(function(event){
        
        $("#printArea").text("Your name is " + player1.name + ". <br>" + "You currently have " + player1.health + " health points. <br>" + "Your attributes are as follows: " + "<br>" + "Strength: " + player1.strength + "<br>" + "Agility: " + player1.agility + "<br>" + "Lore: " + player1.lore + "<br>" + "Aura: " + player1.aura + "<br>" + "Which gives you " + player1.accuity + " mental resistance points, and " + player1.resistance + " magical resistance points.");
       

        // var truePlayer = new Player ($("#name").val(), parseInt($("#health").val()), parseInt($("#strength").val()), parseInt($("#agility").val()), parseInt($("#lore").val()), parseInt($("#aura").val()));

        // $("#printArea").append("Your name is " + turePlayer.name + ". <br>" + "You currently have " + turePlayer.health + " health points. <br>" + "Your attributes are as follows: " + "<br>" + "Strength: " + turePlayer.strength + "<br>" + "Agility: " + turePlayer.agility + "<br>" + "Lore: " + turePlayer.lore + "<br>" + "Aura: " + turePlayer.aura + "<br>" + "Which gives you " + turePlayer.accuity + " mental resistance points, and " + turePlayer.resistance + " magical resistance points.");
       
       
       
       
       
       
        event.preventDefault();
    });
});