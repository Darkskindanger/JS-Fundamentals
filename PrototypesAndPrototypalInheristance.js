class Spartan {
  constructor(name, type, armour, weapon, kills, rank) {
    this.name = name;
    this.type = type;
    this.armour = armour;
    this.weapon = weapon;
    this.rank = rank;
  }

  showKills = (enemyLives) => {
    return (this.kills = 100 - enemyLives);
  };
}

let John117 = new Spartan(
  'John',
  'SpartanIII',
  'Mjonir III',
  ['BR', 'Pistol'],
  'Seargent Major'
);
John117.showKills(80);
Spartan.prototype.revive = function () {
  console.log('Reviving now...');
};
console.log(Object.getPrototypeOf(John117));
console.log(John117.revive());

// ---------- New Instance -----------

let Siera1 = new Spartan(
  'Siera',
  'SpartanIII',
  'Mjonir III',
  ['AR', 'S7-Sniper'],
  'Admiral'
);

Siera1.showKills(30);
Siera1.revive(); // Shares the earlier added 'revive()' function inside of the spartan prototype

class Elite extends Spartan {
  constructor(name, armour, weapon, kills, rank, tribe) {
    super(name, armour, weapon, kills, rank);
    this.tribe = tribe;
  }
  warCry = (spartanName) => {
    console.log(`ROOOOAR, OVER HERE... ${spartanName} IS OVER HERE`);
  };
}

let Arbiter = new Elite(
  'Vin Kadoom',
  'Elite III',
  'Energy Sword',
  'Arbiter',
  'Cov'
);
Arbiter.warCry(John117.name);
console.log(Object.getOwnPropertyNames(Arbiter));
console.log(Object.getPrototypeOf(Arbiter)); //Elites will share the Spartan prototype since the class is extending from the Spartan class.
