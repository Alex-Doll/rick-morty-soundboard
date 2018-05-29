// Rick Sounds
import Aids from './rick-sounds/Aids.mp3';
import BurgerTime from './rick-sounds/Burger Time.mp3';
import Grass from './rick-sounds/Graaaaaaaassss.mp3';
import HitTheSackJack from './rick-sounds/Hit The Sack Jack.mp3';
import LickSay from './rick-sounds/Lick Lick Lick...Say That All the Time.mp3';
import Lick from './rick-sounds/Lick Lick Lick.mp3';
import NoJumping from './rick-sounds/No Jumping In The Sewer.mp3';
import RickyTicky from './rick-sounds/Ricky Ticky Taffy.mp3';
import RubberBaby from './rick-sounds/Rubber Baby Bumpy Bunkers.mp3';
import SayThatAll from './rick-sounds/Say That All The Time.mp3';
import Schlum from './rick-sounds/Schlum Schlum.mp3';
import Somersault from './rick-sounds/Somersault Jump.mp3';
import NewsGoes from './rick-sounds/Thats the Way The News Goes.mp3';
import Wubaluba from './rick-sounds/Wubalubadubdub.mp3';

// Morty Sounds
import NotWentDown from './morty-sounds/But thats not how it went down.mp3';
import BeenDrinking from './morty-sounds/Have you been drinking Rick.mp3';
import BecauseItIsFun from './morty-sounds/Im doing it because it is fun.mp3';
import SoSmoothly from './morty-sounds/Im sorry everything is going so smoothly and adventurously.mp3';
import JeezRick from './morty-sounds/Jeez Rick what did you do.mp3';
import TakeALeak from './morty-sounds/Look I gotta take a leak if you havent learned how to lighten up.mp3';
import GotMe from './morty-sounds/OK you got me on that one.mp3';
import ChickenSay from './morty-sounds/That sounds like something a chicken would say.mp3';
import MyFerarri from './morty-sounds/You know my Ferarri is in the shop.mp3';
import FirstArrested from './morty-sounds/You were sayin that back when we were first arrested.mp3';
import LikeHitler from './morty-sounds/Youre a Monster Youre like Hitler but at least.mp3';

// Jerry Sounds
import HighConcept from './jerry-sounds/A high concept SciFi Rigamarole.mp3';
import CrazyIdea from './jerry-sounds/Crazy Idea Bad Pitch.mp3';
import MakeLove from './jerry-sounds/Hey Im going to make love to my wife.mp3';
import FinallyComplete from './jerry-sounds/I am finally complete.mp3';
import ToThisHam from './jerry-sounds/Jerry you are really giving it to this ham.mp3';
import NailedIt from './jerry-sounds/Nailed it.mp3';
import BestSex from './jerry-sounds/Thats the best sex Ive ever had in my life.mp3';
import ThankYouSir from './jerry-sounds/Yes thank you sir.mp3';
import OurWedding from './jerry-sounds/You said the same thing equally sarcastically at our wedding.mp3';
import HairCut from './jerry-sounds/You think you can control me with a hair cut.mp3';


const sounds = [
  // Rick Sounds
  {
    title: 'Aids',
    character: 'Rick Sanchez',
    soundPath: Aids
  },
  {
    title: 'Burger Time',
    character: 'Rick Sanchez',
    soundPath: BurgerTime
  },
  {
    title: 'Graaaaaaaassss',
    character: 'Rick Sanchez',
    soundPath: Grass
  },
  {
    title: 'Hit The Sack Jack',
    character: 'Rick Sanchez',
    soundPath: HitTheSackJack
  },
  {
    title: 'Lick Lick Lick...Say That All the Time',
    character: 'Rick Sanchez',
    soundPath: LickSay
  },
  {
    title: 'Lick Lick Lick',
    character: 'Rick Sanchez',
    soundPath: Lick
  },
  {
    title: 'No Jumping In The Sewer',
    character: 'Rick Sanchez',
    soundPath: NoJumping
  },
  {
    title: 'Ricky Ticky Taffy',
    character: 'Rick Sanchez',
    soundPath: RickyTicky
  },
  {
    title: 'Rubber Baby Bumpy Bunkers',
    character: 'Rick Sanchez',
    soundPath: RubberBaby
  },
  {
    title: 'Say That All The Time',
    character: 'Rick Sanchez',
    soundPath: SayThatAll
  },
  {
    title: 'Schlum Schlum',
    character: 'Rick Sanchez',
    soundPath: Schlum
  },
  {
    title: 'Somersault Jump',
    character: 'Rick Sanchez',
    soundPath: Somersault
  },
  {
    title: 'That\'s The Way The News Goes',
    character: 'Rick Sanchez',
    soundPath: NewsGoes
  },
  {
    title: 'Wubalubadubdub',
    character: 'Rick Sanchez',
    soundPath: Wubaluba
  },
  // Morty Sounds
  {
    title: 'Not How It Went Down',
    character: 'Morty Smith',
    soundPath: NotWentDown
  },
  {
    title: 'Have You Been Drinking',
    character: 'Morty Smith',
    soundPath: BeenDrinking
  },
  {
    title: 'Because It\'s Fun',
    character: 'Morty Smith',
    soundPath: BecauseItIsFun
  },
  {
    title: 'Going So Smoothly And Adventurously',
    character: 'Morty Smith',
    soundPath: SoSmoothly
  },
  {
    title: 'Jeez Rick...',
    character: 'Morty Smith',
    soundPath: JeezRick
  },
  {
    title: 'Gotta Take A Leak',
    character: 'Morty Smith',
    soundPath: TakeALeak
  },
  {
    title: 'You Got Me',
    character: 'Morty Smith',
    soundPath: GotMe
  },
  {
    title: 'What A Chicken Would Say',
    character: 'Morty Smith',
    soundPath: ChickenSay
  },
  {
    title: 'My Ferarri',
    character: 'Morty Smith',
    soundPath: MyFerarri
  },
  {
    title: 'First Arrested',
    character: 'Morty Smith',
    soundPath: FirstArrested
  },
  {
    title: 'Like Hitler',
    character: 'Morty Smith',
    soundPath: LikeHitler
  },
  // Jerry Sounds
  {
    title: 'High Concept Sci-Fi',
    character: 'Jerry Smith',
    soundPath: HighConcept
  },
  {
    title: 'Crazy Idea',
    character: 'Jerry Smith',
    soundPath: CrazyIdea
  },
  {
    title: 'I\'m Going To Make Love',
    character: 'Jerry Smith',
    soundPath: MakeLove
  },
  {
    title: 'Finally Complete',
    character: 'Jerry Smith',
    soundPath: FinallyComplete
  },
  {
    title: 'To This Ham',
    character: 'Jerry Smith',
    soundPath: ToThisHam
  },
  {
    title: 'Nailed It',
    character: 'Jerry Smith',
    soundPath: NailedIt
  },
  {
    title: 'Best Sex',
    character: 'Jerry Smith',
    soundPath: BestSex
  },
  {
    title: 'At Our Wedding',
    character: 'Jerry Smith',
    soundPath: OurWedding
  },
  {
    title: 'Thank You Sir',
    character: 'Jerry Smith',
    soundPath: ThankYouSir
  },
  {
    title: 'Hair Cut',
    character: 'Jerry Smith',
    soundPath: HairCut
  }
];

export default sounds;