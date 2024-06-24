// Base class for all characters
class Character {
    constructor(name, health, attackPower) {
      this.name = name;
      this.health = health;
      this.attackPower = attackPower;
    }
  
    attack(target) {
      console.log(`${this.name} attacks ${target.name} for ${this.attackPower} damage!`);
      target.takeDamage(this.attackPower);
    }
  
    takeDamage(damage) {
      this.health -= damage;
      console.log(`${this.name} takes ${damage} damage and has ${this.health} health left.`);
      if (this.health <= 0) {
        console.log(`${this.name} has been defeated!`);
      }
    }
  }
  
  // Derived class for Warrior
  class Warrior extends Character {
    constructor(name, health, attackPower, armor) {
      super(name, health, attackPower);
      this.armor = armor;
    }
  
    takeDamage(damage) {
      const reducedDamage = damage - this.armor;
      console.log(`${this.name} reduces damage by ${this.armor} due to armor.`);
      super.takeDamage(reducedDamage > 0 ? reducedDamage : 0);
    }
  }
  
  // Derived class for Mage
  class Mage extends Character {
    constructor(name, health, attackPower, mana) {
      super(name, health, attackPower);
      this.mana = mana;
    }
  
    castSpell(target) {
      if (this.mana >= 10) {
        console.log(`${this.name} casts a spell on ${target.name} for ${this.attackPower * 2} damage!`);
        target.takeDamage(this.attackPower * 2);
        this.mana -= 10;
        console.log(`${this.name} now has ${this.mana} mana left.`);
      } else {
        console.log(`${this.name} does not have enough mana to cast a spell.`);
      }
    }
  }
  
  // Derived class for Archer
  class Archer extends Character {
    constructor(name, health, attackPower, range) {
      super(name, health, attackPower);
      this.range = range;
    }
  
    rangedAttack(target) {
      console.log(`${this.name} performs a ranged attack on ${target.name} for ${this.attackPower} damage!`);
      target.takeDamage(this.attackPower);
    }
  }
  
  // Example usage
  const warrior = new Warrior('Thor', 100, 15, 5);
  const mage = new Mage('Merlin', 60, 10, 30);
  const archer = new Archer('Robin', 70, 12, 15);
  
  console.log('--- Battle Start ---');
  warrior.attack(mage);
  mage.castSpell(warrior);
  archer.rangedAttack(warrior);
  
  console.log('--- Battle End ---');
  