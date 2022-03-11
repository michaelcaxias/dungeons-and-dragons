import Battle from './Battle';
import Character from '../Character';
import Fighter from '../Fighter/Fighter';
import SimpleFighter from '../Fighter/SimpleFighter';
import Monster from '../Monster';

type Champion = Character | Fighter;
type Environment = Monster | SimpleFighter | Fighter;

export default class PVE extends Battle {
  firstCharacter: Champion;
  secondCharacter: Environment[];
  constructor(firstCharacter: Champion, secondCharacter: Environment[]) {
    super(firstCharacter);
    this.firstCharacter = firstCharacter;
    this.secondCharacter = secondCharacter;
  }

  fight(): number {
    const player1LifePoints = this.firstCharacter.lifePoints;
    // const eviroment = this.secondCharacter;
    const eviromentLifePoints = this.secondCharacter[0].lifePoints;
    // const eviromentLifePoints = Object.keys(eviroment).reduce((acc, curr) => acc + curr);
    if (player1LifePoints > eviromentLifePoints) return 1;
    if (eviromentLifePoints > player1LifePoints) return -1;
    return 0;
  }
}