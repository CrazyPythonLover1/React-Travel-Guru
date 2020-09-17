import trip1 from '../images/Image/Rectangle 1.png';
import trip2 from '../images/Image/Sreemongol.png';
import trip3 from '../images/Image/sundorbon.png';
import hotel1 from '../images/Image/Rectangle 26.png';
import hotel2 from '../images/Image/Rectangle 27.png';
import hotel3 from '../images/Image/Rectangle 28.png';

const trips = [
    {
        id: 1,
        name: "cox's bazar",
        description: "Cox's Bazar is a city, Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island. ...",
        img: trip1,
        hotels:{
            id: 1,
            title: "Light bright airy stylish apt & safe peaceful stay",
            des:"Wif Air conditioning Kitchen",
            cancelation:"Cancellation fexibility availiable",
            price: 34,
            picture:hotel1,
        },
    },
    {
        id: 2,
        name: "Sreemangal",
        description: "Sreemangal fishing port, tourism centre and district headquarters in southeastern Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island....",
        img: trip2,
        hotels:{
            id: 2,
            title: "Apartment in Lost Panorama",
            des:"Wif Air conditioning Kitchen",
            cancelation:"Cancellation fexibility availiable",
            price: 52,
            picture: hotel2,
            
        },
    },
    {
        id: 3,
        name: "Sundarbans",
        description: "Sundarbans fishing port, tourism centre and district headquarters in southeastern Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island....",
        img: trip3,
        hotels:{
            id: 3,
            title: "AR Lounge & Pool (r&r + b&b)",
            des:"Wif Air conditioning Kitchen",
            cancelation:"Cancellation fexibility availiable",
            price: 44,
            picture: hotel3,
            
        },
    },
];
export default trips;