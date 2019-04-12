import { ICreature } from "../../interfaces/i-creature";

export const SARAH_HANSON: ICreature = {
    ac: 15,
    actions: [
        {
            title: "Enkiem's Scythe",
            description:
                "Range 10ft. +4 to hit. Deal 2d4 slashing damage and 4d10 against Enkiem's demon creatures."
        },
        {
            title: "Mending",
            description:
                "This spell repairs a single break or tear in an object you touch, such as a broken chain link, two halves of a broken key, a torn cloak, or a leaking wineskin. As long as the break or tear is no larger than 1 foot in any dimension, you mend it, leaving no trace of the former damage. This spell can physically repair a magic item or construct, but the spell can’t restore magic to such an object."
        },
        {
            title: "Speak with Animals",
            description:
                "You gain the ability to comprehend and verbally communicate with beasts for the duration. The knowledge and awareness of many beasts is limited by their intelligence, but at minimum, beasts can give you information about nearby locations and monsters, including whatever they can perceive or have perceived within the past day. You might be able to persuade a beast to perform a small favor for you, at the GM’s discretion."
        },
        {
            title: "Spike Growth",
            description:
                "The ground in a 20-foot radius centered on a point within range twists and sprouts hard spikes and thorns. The area becomes difficult terrain for the duration. When a creature moves into or within the area, it takes 2d4 piercing damage for every 5 feet it travels. The transformation of the ground is camouflaged to look natural. Any creature that can’t see the area at the time the spell is cast must make a Wisdom (Perception) check against your spell save DC to recognize the terrain as hazardous before entering it."
        },
        {
            title: "Move Earth",
            description:
                "Choose an area of terrain no larger than 40 feet on a side within range. You can reshape dirt, sand, or clay in the area in any manner you choose for the duration. You can raise or lower the area’s elevation, create or fill in a trench, erect or flatten a wall, or form a pillar. The extent of any such changes can’t exceed half the area’s largest dimension. So, if you affect a 40-foot square, you can create a pillar up to 20 feet high, raise or lower the square’s elevation by up to 20 feet, dig a trench up to 20 feet deep, and so on. It takes 10 minutes for these changes to complete. At the end of every 10 minutes you spend concentrating on the spell, you can choose a new area of terrain to affect. Because the terrain’s transformation occurs slowly, creatures in the area can’t usually be trapped or injured by the ground’s movement. This spell can’t manipulate natural stone or stone construction. Rocks and structures shift to accommodate the new terrain. If the way you shape the terrain would make a structure unstable, it might collapse. Similarly, this spell doesn’t directly affect plant growth. The moved earth carries any plants along with it."
        },
        {
            title: "Meld into Stone",
            description:
                "You step into a stone object or surface large enough to fully contain your body, melding yourself and all the equipment you carry with the stone for the duration. Using your movement, you step into the stone at a point you can touch. Nothing of your presence remains visible or otherwise detectable by nonmagical senses. While merged with the stone, you can’t see what occurs outside it, and any Wisdom (Perception) checks you make to hear sounds outside it are made with disadvantage. You remain aware of the passage of time and can cast spells on yourself while merged in the stone. You can use your movement to leave the stone where you entered it, which ends the spell. You otherwise can’t move. Minor physical damage to the stone doesn’t harm you, but its partial destruction or a change in its shape (to the extent that you no longer fit within it) expels you and deals 6d6 bludgeoning damage to you. The stone’s complete destruction (or transmutation into a different substance) expels you and deals 50 bludgeoning damage to you. If expelled, you fall prone in an unoccupied space closest to where you first entered."
        },
        {
            title: "Stone Shape",
            description:
                "You touch a stone object of Medium size or smaller or a section of stone no more than 5 feet in any dimension and form it into any shape that suits your purpose. So, for example, you could shape a large rock into a weapon, idol, or coffer, or make a small passage through a wall, as long as the wall is less than 5 feet thick. You could also shape a stone door or its frame to seal the door shut. The object you create can have up to two hinges and a latch, but finer mechanical detail isn’t possible."
        },
        {
            title: "Wall of Stone",
            description:
                "A nonmagical wall of solid stone springs into existence at a point you choose within range. The wall is 6 inches thick and is composed of ten 10-foot-by-10-foot panels. Each panel must be contiguous with at least one other panel. Alternatively, you can create 10-foot-by-20-foot panels that are only 3 inches thick. If the wall cuts through a creature’s space when it appears, the creature is pushed to one side of the wall (your choice). If a creature would be surrounded on all sides by the wall (or the wall and another solid surface), that creature can make a Dexterity saving throw. On a success, it can use its reaction to move up to its speed so that it is no longer enclosed by the wall. The wall can have any shape you desire, though it can’t occupy the same space as a creature or object. The wall doesn’t need to be vertical or rest on any firm foundation. It must, however, merge with and be solidly supported by existing stone. Thus, you can use this spell to bridge a chasm or create a ramp. If you create a span greater than 20 feet in length, you must halve the size of each panel to create supports. You can crudely shape the wall to create crenellations, battlements, and so on. The wall is an object made of stone that can be damaged and thus breached. Each panel has AC 15 and 30 hit points per inch of thickness. Reducing a panel to 0 hit points destroys it and might cause connected panels to collapse at the GM’s discretion. If you maintain your concentration on this spell for its whole duration, the wall becomes permanent and can’t be dispelled. Otherwise, the wall disappears when the spell ends."
        }
    ],
    alignment: "Chaotic Good",
    challenge: "10",
    conditionImmunities: [],
    damageImmunities: [],
    damageResistances: [],
    damageWeaknesses: [],
    description: "",
    features: [
        {
            title: "Blood Maledict",
            description:
                "You gain access to Blood Curse. After you invoke a curse, but before it affects the target, you AMPLIFY the curse by suffering damage = your crimson rite die. Bloodless creatures are immune to Blood Curses. You can use this feature once per rest. You gain additional uses at levels 6, 11, 17."
        },
        {
            title: "Dueling",
            description:
                "+2 to damage rolls when wielding a melee weapon in one hand and no other weapons."
        },
        {
            title: "Hunter's Bane",
            description:
                "Advantage on Survival checks to track Fey, Fiends, Undead; and Intelligence checks to recall information about them. You cannot be surprised by any creatures of a type you are actively tracking. You can only be tracking one type at a time."
        },
        {
            title: "Rite of Lightning.",
            description: "Your rite deals lightning damage."
        },
        {
            title: "Mutigen: Aether",
            description:
                "You gain a flying speed of 20 feet, Side effect: You have disadvantage on all Strength and Dexterity ability checks."
        },
        {
            title: "Mutigen: Cruelty",
            description:
                "You can make a single weapon attack as a bonus action on each of your turns. Side effect: You have disadvantage on all Intelligence, Wisdom, and Charisma saving throws."
        }
    ],
    hp: 80,
    languages: ["Common", "Dwarvish", "Druidic", "Infernal", "Abyssal"],
    reactions: [],
    savingThrows: ["INT +8", "WIS: +8"],
    senses: [],
    size: "Medium",
    skills: ["Nature +6", "Arcana +10", "History +8", "Medicine +6"],
    speed: "30 ft.",
    stats: {
        str: 10,
        dex: 15,
        con: 13,
        int: 19,
        wis: 16,
        cha: 11
    },
    type: "Halfling"
};
