import { ImbuimentProtecaoEnum, Item, Protecao, ProtecaoEnum, SlotEnum, VocacaoEnum } from "./item.model";

export class Sorcerer {
  static itensSorcerer(): Item[] {
    let itens: Item[] = [];
    const vocacao = VocacaoEnum.Sorcerer;
    let id = 1;

    // Hand (Wands)
    itens.push(new Item(id++, "Grand Sanguine Coil", "https://www.tibiawiki.com.br/images/0/08/Grand_Sanguine_Coil.gif", vocacao, SlotEnum.Hand, 0, false, [new Protecao(ProtecaoEnum.Earth, 7)], 0));
    itens.push(new Item(id++, "Sanguine Coil", "https://www.tibiawiki.com.br/images/7/7a/Sanguine_Coil.gif", vocacao, SlotEnum.Hand, 0, false, [new Protecao(ProtecaoEnum.Earth, 7)], 0));
    itens.push(new Item(id++, "Soultainter", "https://www.tibiawiki.com.br/images/6/6d/Soultainter.gif", vocacao, SlotEnum.Hand, 0, false, [new Protecao(ProtecaoEnum.Death, 12)], 0));
    itens.push(new Item(id++, "Falcon Wand", "https://www.tibiawiki.com.br/images/1/17/Falcon_Wand.gif", vocacao, SlotEnum.Hand, 0, false, [new Protecao(ProtecaoEnum.Fire, 8)], 0));
    itens.push(new Item(id++, "Eldritch Wand", "https://www.tibiawiki.com.br/images/b/b8/Eldritch_Wand.gif", vocacao, SlotEnum.Hand, 0, false, [new Protecao(ProtecaoEnum.Energy, 4)], 0));
    itens.push(new Item(id++, "Gilded Eldritch Wand", "https://www.tibiawiki.com.br/images/a/a0/Gilded_Eldritch_Wand.gif", vocacao, SlotEnum.Hand, 0, false, [new Protecao(ProtecaoEnum.Energy, 4)], 0));
    itens.push(new Item(id++, "Naga Wand", "https://www.tibiawiki.com.br/images/d/d2/Naga_Wand.gif", vocacao, SlotEnum.Hand, 0, false, [new Protecao(ProtecaoEnum.Ice, 4)], 0));
    itens.push(new Item(id++, "Deepling Fork", "https://www.tibiawiki.com.br/images/9/9d/Deepling_Fork.gif", vocacao, SlotEnum.Hand, 0, false, [new Protecao(ProtecaoEnum.Holy, 8)], 0));
    itens.push(new Item(id++, "Deepling Ceremonial Dagger", "https://www.tibiawiki.com.br/images/1/1b/Deepling_Ceremonial_Dagger.gif", vocacao, SlotEnum.Hand, 0, false, [new Protecao(ProtecaoEnum.Earth, 5)], 0));
    itens.push(new Item(id++, "Energized Limb", "https://www.tibiawiki.com.br/images/a/a7/Energized_Limb.gif", vocacao, SlotEnum.Hand, 0, false, [new Protecao(ProtecaoEnum.Energy, 10)], 0));
    itens.push(new Item(id++, "Jungle Wand", "https://www.tibiawiki.com.br/images/6/60/Jungle_Wand.gif", vocacao, SlotEnum.Hand, 0, false, [new Protecao(ProtecaoEnum.Ice, 3)], 0));

    // Helmets
    itens.push(new Item(id++, "Arcanomancer Regalia", "https://www.tibiawiki.com.br/images/b/b1/Arcanomancer_Regalia.gif", vocacao, SlotEnum.Helmet, 0, false, [new Protecao(ProtecaoEnum.Physical, 3), new Protecao(ProtecaoEnum.Earth, 7)], 0));
    itens.push(new Item(id++, "Falcon Circlet", "https://www.tibiawiki.com.br/images/6/65/Falcon_Circlet.gif", vocacao, SlotEnum.Helmet, 0, false, [new Protecao(ProtecaoEnum.Fire, 9)], 0));
    itens.push(new Item(id++, "Eldritch Cowl", "https://www.tibiawiki.com.br/images/1/1c/Eldritch_Cowl.gif", vocacao, SlotEnum.Helmet, 0, false, [new Protecao(ProtecaoEnum.Ice, 7)], 0));
    itens.push(new Item(id++, "Galea Mortis", "https://www.tibiawiki.com.br/images/3/34/Galea_Mortis.gif", vocacao, SlotEnum.Helmet, 0, false, [new Protecao(ProtecaoEnum.Death, 6), new Protecao(ProtecaoEnum.Holy, -3)], 0));
    itens.push(new Item(id++, "Gnome Helmet", "https://www.tibiawiki.com.br/images/9/97/Gnome_Helmet.gif", vocacao, SlotEnum.Helmet, 0, false, [new Protecao(ProtecaoEnum.Physical, 3), new Protecao(ProtecaoEnum.Energy, 8), new Protecao(ProtecaoEnum.Ice, -2)], 0));

    // Armors
    itens.push(new Item(id++, "Soulmantle", "https://www.tibiawiki.com.br/images/c/cb/Soulmantle.gif", vocacao, SlotEnum.Armor, 0, false, [new Protecao(ProtecaoEnum.Physical, 4)], 1, Item.allImbuiments()));
    itens.push(new Item(id++, "Elven Mail", "https://www.tibiawiki.com.br/images/0/01/Elven_Mail.gif", vocacao, SlotEnum.Armor, 0, false, [], 2, Item.allImbuiments()));
    itens.push(new Item(id++, "Dawnfire Sherwani", "https://www.tibiawiki.com.br/images/5/5d/Dawnfire_Sherwani.gif", vocacao, SlotEnum.Armor, 0, false, [new Protecao(ProtecaoEnum.Fire, 4), new Protecao(ProtecaoEnum.Earth, -2)], 0));
    itens.push(new Item(id++, "Toga Mortis", "https://www.tibiawiki.com.br/images/4/4a/Toga_Mortis.gif", vocacao, SlotEnum.Armor, 0, false, [new Protecao(ProtecaoEnum.Death, 6)], 0));
    itens.push(new Item(id++, "Dream Shroud", "https://www.tibiawiki.com.br/images/a/ad/Dream_Shroud.gif", vocacao, SlotEnum.Armor, 0, false, [new Protecao(ProtecaoEnum.Energy, 10)], 0));
    itens.push(new Item(id++, "Living Armor", "https://www.tibiawiki.com.br/images/c/c4/Living_Armor.gif", vocacao, SlotEnum.Armor, 0, false, [new Protecao(ProtecaoEnum.Earth, 12), new Protecao(ProtecaoEnum.Fire, -5)], 0));

    // Legs
    itens.push(new Item(id++, "Soulshanks", "https://www.tibiawiki.com.br/images/d/d2/Soulshanks.gif", vocacao, SlotEnum.Legs, 0, false, [new Protecao(ProtecaoEnum.Death, 10)], 0));
    itens.push(new Item(id++, "Dawnfire Pantaloons", "https://www.tibiawiki.com.br/images/b/bb/Dawnfire_Pantaloons.gif", vocacao, SlotEnum.Legs, 0, false, [new Protecao(ProtecaoEnum.Physical, 3)], 0));
    itens.push(new Item(id++, "Gnome Legs", "https://www.tibiawiki.com.br/images/0/04/Gnome_Legs.gif", vocacao, SlotEnum.Legs, 0, false, [new Protecao(ProtecaoEnum.Energy, 7), new Protecao(ProtecaoEnum.Ice, -2)], 0));
    itens.push(new Item(id++, "Soulful Legs", "https://www.tibiawiki.com.br/images/d/d4/Soulful_Legs.gif", vocacao, SlotEnum.Legs, 0, false, [new Protecao(ProtecaoEnum.Holy, 8)], 0));
    itens.push(new Item(id++, "Gill Legs", "https://www.tibiawiki.com.br/images/a/a6/Gill_Legs.gif", vocacao, SlotEnum.Legs, 0, false, [new Protecao(ProtecaoEnum.Earth, 8), new Protecao(ProtecaoEnum.Fire, -8)], 0));
    itens.push(new Item(id++, "Icy Culottes", "https://www.tibiawiki.com.br/images/2/25/Icy_Culottes.gif", vocacao, SlotEnum.Legs, 0, false, [new Protecao(ProtecaoEnum.Ice, 8)], 0));
    itens.push(new Item(id++, "Dwarven Legs", "https://www.tibiawiki.com.br/images/3/34/Dwarven_Legs.gif", vocacao, SlotEnum.Legs, 0, false, [new Protecao(ProtecaoEnum.Physical, 3)], 0));

    // Boots
    itens.push(new Item(id++, "Sanguine Boots", "https://www.tibiawiki.com.br/images/9/92/Sanguine_Boots.gif", vocacao, SlotEnum.Boots, 0, false, [new Protecao(ProtecaoEnum.Physical, 2), new Protecao(ProtecaoEnum.Fire, 8)], 0));
    itens.push(new Item(id++, "Alchemist's Boots", "https://www.tibiawiki.com.br/images/9/9d/Alchemist%27s_Boots.gif", vocacao, SlotEnum.Boots, 0, false, [new Protecao(ProtecaoEnum.Physical, 2)], 0));
    itens.push(new Item(id++, "Pair of Dreamwalkers", "https://www.tibiawiki.com.br/images/5/53/Pair_of_Dreamwalkers.gif", vocacao, SlotEnum.Boots, 0, false, [new Protecao(ProtecaoEnum.Earth, 8)], 0));
    itens.push(new Item(id++, "Makeshift Boots", "https://www.tibiawiki.com.br/images/1/1b/Makeshift_Boots.gif", vocacao, SlotEnum.Boots, 0, false, [new Protecao(ProtecaoEnum.Fire, 8)], 0));
    itens.push(new Item(id++, "Pair of Nightmare Boots", "https://www.tibiawiki.com.br/images/e/ec/Pair_of_Nightmare_Boots.gif", vocacao, SlotEnum.Boots, 0, false, [new Protecao(ProtecaoEnum.Energy, 6)], 0));
    itens.push(new Item(id++, "Void Boots", "https://www.tibiawiki.com.br/images/f/f7/Void_Boots.gif", vocacao, SlotEnum.Boots, 0, false, [new Protecao(ProtecaoEnum.Energy, 10)], 0));

    // Spellbooks
    itens.push(new Item(id++, "Arcanomancer Folio", "https://www.tibiawiki.com.br/images/5/5b/Arcanomancer_Folio.gif", vocacao, SlotEnum.ShieldOrSpellbookOrQuiver, 0, false, [new Protecao(ProtecaoEnum.Physical, 3), new Protecao(ProtecaoEnum.Fire, 8)], 1, [ImbuimentProtecaoEnum.Death, ImbuimentProtecaoEnum.Earth, ImbuimentProtecaoEnum.Energy, ImbuimentProtecaoEnum.Holy, ImbuimentProtecaoEnum.Ice]));
    itens.push(new Item(id++, "Eldritch Folio", "https://www.tibiawiki.com.br/images/7/75/Eldritch_Folio.gif", vocacao, SlotEnum.ShieldOrSpellbookOrQuiver, 0, false, [new Protecao(ProtecaoEnum.Earth, 6)], 1, [ImbuimentProtecaoEnum.Death, ImbuimentProtecaoEnum.Energy, ImbuimentProtecaoEnum.Fire, ImbuimentProtecaoEnum.Holy, ImbuimentProtecaoEnum.Ice]));
    itens.push(new Item(id++, "Alchemist's Notepad", "https://www.tibiawiki.com.br/images/2/2d/Alchemist%27s_Notepad.gif", vocacao, SlotEnum.ShieldOrSpellbookOrQuiver, 0, false, [new Protecao(ProtecaoEnum.Death, 5)], 1, [ImbuimentProtecaoEnum.Earth, ImbuimentProtecaoEnum.Energy, ImbuimentProtecaoEnum.Fire, ImbuimentProtecaoEnum.Holy, ImbuimentProtecaoEnum.Ice]));
    itens.push(new Item(id++, "Umbral Master Spellbook", "https://www.tibiawiki.com.br/images/9/9c/Umbral_Master_Spellbook.gif", vocacao, SlotEnum.ShieldOrSpellbookOrQuiver, 0, false, [new Protecao(ProtecaoEnum.Earth, 5), new Protecao(ProtecaoEnum.Energy, 5), new Protecao(ProtecaoEnum.Fire, 5), new Protecao(ProtecaoEnum.Ice, 5)], 1, [ImbuimentProtecaoEnum.Death, ImbuimentProtecaoEnum.Holy]));
    itens.push(new Item(id++, "Lion Spellbook", "https://www.tibiawiki.com.br/images/e/eb/Lion_Spellbook.gif", vocacao, SlotEnum.ShieldOrSpellbookOrQuiver, 0, false, [new Protecao(ProtecaoEnum.Physical, 3), new Protecao(ProtecaoEnum.Ice, 7)], 1, [ImbuimentProtecaoEnum.Death, ImbuimentProtecaoEnum.Earth, ImbuimentProtecaoEnum.Energy, ImbuimentProtecaoEnum.Fire, ImbuimentProtecaoEnum.Holy]));
    itens.push(new Item(id++, "Brain in a Jar", "https://www.tibiawiki.com.br/images/a/a9/Brain_in_a_Jar.gif", vocacao, SlotEnum.ShieldOrSpellbookOrQuiver, 0, false, [new Protecao(ProtecaoEnum.Earth, 7)], 1, [ImbuimentProtecaoEnum.Death, ImbuimentProtecaoEnum.Energy, ImbuimentProtecaoEnum.Fire, ImbuimentProtecaoEnum.Holy, ImbuimentProtecaoEnum.Ice]));
    itens.push(new Item(id++, "Shoulder Plate", "https://www.tibiawiki.com.br/images/3/32/Shoulder_Plate.gif", vocacao, SlotEnum.ShieldOrSpellbookOrQuiver, 0, false, [new Protecao(ProtecaoEnum.Physical, 3), new Protecao(ProtecaoEnum.Earth, 6)], 1, [ImbuimentProtecaoEnum.Death, ImbuimentProtecaoEnum.Energy, ImbuimentProtecaoEnum.Fire, ImbuimentProtecaoEnum.Holy, ImbuimentProtecaoEnum.Ice]));
    itens.push(new Item(id++, "Spirit Guide", "https://www.tibiawiki.com.br/images/4/42/Spirit_Guide.gif", vocacao, SlotEnum.ShieldOrSpellbookOrQuiver, 0, false, [new Protecao(ProtecaoEnum.Energy, 6)], 1, [ImbuimentProtecaoEnum.Death, ImbuimentProtecaoEnum.Earth, ImbuimentProtecaoEnum.Fire, ImbuimentProtecaoEnum.Holy, ImbuimentProtecaoEnum.Ice]));
    itens.push(new Item(id++, "Spellbook of Ancient Arcana", "https://www.tibiawiki.com.br/images/3/3c/Spellbook_of_Ancient_Arcana.gif", vocacao, SlotEnum.ShieldOrSpellbookOrQuiver, 0, false, [new Protecao(ProtecaoEnum.Death, 5)], 0));
    itens.push(new Item(id++, "Umbral Spellbook", "https://www.tibiawiki.com.br/images/e/e3/Umbral_Spellbook.gif", vocacao, SlotEnum.ShieldOrSpellbookOrQuiver, 0, false, [new Protecao(ProtecaoEnum.Earth, 3), new Protecao(ProtecaoEnum.Energy, 3), new Protecao(ProtecaoEnum.Fire, 3), new Protecao(ProtecaoEnum.Ice, 3)], 1, [ImbuimentProtecaoEnum.Death, ImbuimentProtecaoEnum.Holy]));
    itens.push(new Item(id++, "Spellbook of Vigilance", "https://www.tibiawiki.com.br/images/2/2c/Spellbook_of_Vigilance.gif", vocacao, SlotEnum.ShieldOrSpellbookOrQuiver, 0, false, [new Protecao(ProtecaoEnum.Earth, 3), new Protecao(ProtecaoEnum.Fire, 5)], 0));
    itens.push(new Item(id++, "Wooden Spellbook", "https://www.tibiawiki.com.br/images/0/07/Wooden_Spellbook.gif", vocacao, SlotEnum.ShieldOrSpellbookOrQuiver, 0, false, [new Protecao(ProtecaoEnum.Earth, 5)], 1, [ImbuimentProtecaoEnum.Death, ImbuimentProtecaoEnum.Energy, ImbuimentProtecaoEnum.Fire, ImbuimentProtecaoEnum.Holy, ImbuimentProtecaoEnum.Ice]));
    itens.push(new Item(id++, "Crude Umbral Spellbook", "https://www.tibiawiki.com.br/images/5/50/Crude_Umbral_Spellbook.gif", vocacao, SlotEnum.ShieldOrSpellbookOrQuiver, 0, false, [new Protecao(ProtecaoEnum.Earth, 2), new Protecao(ProtecaoEnum.Energy, 2), new Protecao(ProtecaoEnum.Fire, 2), new Protecao(ProtecaoEnum.Ice, 2)], 0));

    // Amulets
    itens.push(new Item(id++, "Enchanted Theurgic Amulet", "https://www.tibiawiki.com.br/images/8/8d/Enchanted_Theurgic_Amulet.gif", vocacao, SlotEnum.Amulet, 0, false, [new Protecao(ProtecaoEnum.Physical, 3), new Protecao(ProtecaoEnum.Earth, 14)], 0));
    itens.push(new Item(id++, "The Cobra Amulet", "https://www.tibiawiki.com.br/images/5/57/The_Cobra_Amulet.gif", vocacao, SlotEnum.Amulet, 0, false, [new Protecao(ProtecaoEnum.Death, 9)], 0));
    itens.push(new Item(id++, "Lion Amulet", "https://www.tibiawiki.com.br/images/2/21/Lion_Amulet.gif", vocacao, SlotEnum.Amulet, 0, false, [new Protecao(ProtecaoEnum.Physical, 3), new Protecao(ProtecaoEnum.Ice, 7)], 0));
    itens.push(new Item(id++, "Rainbow Necklace", "https://www.tibiawiki.com.br/images/d/d8/Rainbow_Necklace.gif", vocacao, SlotEnum.Amulet, 0, false, [new Protecao(ProtecaoEnum.Physical, 3), new Protecao(ProtecaoEnum.Fire, 6), new Protecao(ProtecaoEnum.Ice, -5)], 0));
    itens.push(new Item(id++, "Exotic Amulet", "https://www.tibiawiki.com.br/images/e/ef/Exotic_Amulet.gif", vocacao, SlotEnum.Amulet, 0, false, [new Protecao(ProtecaoEnum.Physical, 4), new Protecao(ProtecaoEnum.Earth, 5)], 0));
    itens.push(new Item(id++, "Gill Necklace", "https://www.tibiawiki.com.br/images/1/18/Gill_Necklace.gif", vocacao, SlotEnum.Amulet, 0, false, [new Protecao(ProtecaoEnum.Physical, 15), new Protecao(ProtecaoEnum.Earth, 10)], 0));
    itens.push(new Item(id++, "Prismatic Necklace", "https://www.tibiawiki.com.br/images/b/b4/Prismatic_Necklace.gif", vocacao, SlotEnum.Amulet, 0, false, [new Protecao(ProtecaoEnum.Physical, 10), new Protecao(ProtecaoEnum.Energy, 15)], 0));
    itens.push(new Item(id++, "Necklace of the Deep", "https://www.tibiawiki.com.br/images/0/06/Necklace_of_the_Deep.gif", vocacao, SlotEnum.Amulet, 0, false, [new Protecao(ProtecaoEnum.LifeDrain, 50)], 0));
    itens.push(new Item(id++, "Foxtail Amulet", "https://www.tibiawiki.com.br/images/a/a9/Foxtail_Amulet.gif", vocacao, SlotEnum.Amulet, 0, false, [new Protecao(ProtecaoEnum.Physical, 5)], 0));
    itens.push(new Item(id++, "Bonfire Amulet", "https://www.tibiawiki.com.br/images/3/3f/Bonfire_Amulet.gif", vocacao, SlotEnum.Amulet, 0, false, [new Protecao(ProtecaoEnum.Physical, 60), new Protecao(ProtecaoEnum.Fire, 40)], 0));
    itens.push(new Item(id++, "Leviathan's Amulet", "https://www.tibiawiki.com.br/images/d/d3/Leviathan%27s_Amulet.gif", vocacao, SlotEnum.Amulet, 0, false, [new Protecao(ProtecaoEnum.Physical, 60), new Protecao(ProtecaoEnum.Ice, 40)], 0));
    itens.push(new Item(id++, "Sacred Tree Amulet", "https://www.tibiawiki.com.br/images/1/16/Sacred_Tree_Amulet.gif", vocacao, SlotEnum.Amulet, 0, false, [new Protecao(ProtecaoEnum.Physical, 60), new Protecao(ProtecaoEnum.Earth, 40)], 0));
    itens.push(new Item(id++, "Shockwave Amulet", "https://www.tibiawiki.com.br/images/4/41/Shockwave_Amulet.gif", vocacao, SlotEnum.Amulet, 0, false, [new Protecao(ProtecaoEnum.Physical, 60), new Protecao(ProtecaoEnum.Energy, 40)], 0));
    itens.push(new Item(id++, "Glacier Amulet", "https://www.tibiawiki.com.br/images/d/d6/Glacier_Amulet.gif", vocacao, SlotEnum.Amulet, 0, false, [new Protecao(ProtecaoEnum.Ice, 20), new Protecao(ProtecaoEnum.Energy, -10)], 0));
    itens.push(new Item(id++, "Lightning Pendant", "https://www.tibiawiki.com.br/images/3/35/Lightning_Pendant.gif", vocacao, SlotEnum.Amulet, 0, false, [new Protecao(ProtecaoEnum.Ice, 20), new Protecao(ProtecaoEnum.Energy, -10)], 0));
    itens.push(new Item(id++, "Magma Amulet", "https://www.tibiawiki.com.br/images/3/31/Magma_Amulet.gif", vocacao, SlotEnum.Amulet, 0, false, [new Protecao(ProtecaoEnum.Energy, 20), new Protecao(ProtecaoEnum.Earth, -10)], 0));
    itens.push(new Item(id++, "Terra Amulet", "https://www.tibiawiki.com.br/images/e/ed/Terra_Amulet.gif", vocacao, SlotEnum.Amulet, 0, false, [new Protecao(ProtecaoEnum.Earth, 20), new Protecao(ProtecaoEnum.Fire, -10)], 0));
    itens.push(new Item(id++, "Onyx Pendant", "https://www.tibiawiki.com.br/images/2/27/Onyx_Pendant.gif", vocacao, SlotEnum.Amulet, 0, false, [new Protecao(ProtecaoEnum.Death, 2)], 0));
    itens.push(new Item(id++, "Bronze Amulet", "https://www.tibiawiki.com.br/images/e/ee/Bronze_Amulet.gif", vocacao, SlotEnum.Amulet, 0, false, [new Protecao(ProtecaoEnum.ManaDrain, 20)], 0));
    itens.push(new Item(id++, "Dragon Necklace", "https://www.tibiawiki.com.br/images/b/b0/Dragon_Necklace.gif", vocacao, SlotEnum.Amulet, 0, false, [new Protecao(ProtecaoEnum.Fire, 8)], 0));
    itens.push(new Item(id++, "Enchanted Werewolf Amulet", "https://www.tibiawiki.com.br/images/7/7e/Enchanted_Werewolf_Amulet.gif", vocacao, SlotEnum.Amulet, 0, false, [new Protecao(ProtecaoEnum.Physical, 6)], 0));
    itens.push(new Item(id++, "Garlic Necklace", "https://www.tibiawiki.com.br/images/1/16/Garlic_Necklace.gif", vocacao, SlotEnum.Amulet, 0, false, [new Protecao(ProtecaoEnum.LifeDrain, 20)], 0));
    itens.push(new Item(id++, "Koshei's Ancient Amulet", "https://www.tibiawiki.com.br/images/5/5a/Koshei%27s_Ancient_Amulet.gif", vocacao, SlotEnum.Amulet, 0, false, [new Protecao(ProtecaoEnum.Death, 8), new Protecao(ProtecaoEnum.Holy, -50)], 0));
    itens.push(new Item(id++, "Protection Amulet", "https://www.tibiawiki.com.br/images/3/38/Protection_Amulet.gif", vocacao, SlotEnum.Amulet, 0, false, [new Protecao(ProtecaoEnum.Physical, 6)], 0));
    itens.push(new Item(id++, "Silver Amulet", "https://www.tibiawiki.com.br/images/1/18/Silver_Amulet.gif", vocacao, SlotEnum.Amulet, 0, false, [new Protecao(ProtecaoEnum.Earth, 10)], 0));
    itens.push(new Item(id++, "Strange Talisman", "https://www.tibiawiki.com.br/images/6/66/Strange_Talisman.gif", vocacao, SlotEnum.Amulet, 0, false, [new Protecao(ProtecaoEnum.Energy, 10)], 0));

    // Rings
    itens.push(new Item(id++, "Charged Arcanomancer Sigil", "https://www.tibiawiki.com.br/images/7/77/Charged_Arcanomancer_Sigil.gif", vocacao, SlotEnum.Ring, 0, false, [new Protecao(ProtecaoEnum.Fire, 4), new Protecao(ProtecaoEnum.Earth, 4), new Protecao(ProtecaoEnum.Energy, 4), new Protecao(ProtecaoEnum.Ice, 4)], 0));
    itens.push(new Item(id++, "Enchanted Blister Ring", "https://www.tibiawiki.com.br/images/d/d0/Enchanted_Blister_Ring.gif", vocacao, SlotEnum.Ring, 0, false, [new Protecao(ProtecaoEnum.Fire, 6)], 0));
    itens.push(new Item(id++, "Enchanted Ring of Souls", "https://www.tibiawiki.com.br/images/5/55/Enchanted_Ring_of_Souls.gif", vocacao, SlotEnum.Ring, 0, false, [new Protecao(ProtecaoEnum.Physical, 2), new Protecao(ProtecaoEnum.LifeDrain, 10)], 0));
    itens.push(new Item(id++, "Prismatic Ring", "https://www.tibiawiki.com.br/images/c/cb/Prismatic_Ring.gif", vocacao, SlotEnum.Ring, 0, false, [new Protecao(ProtecaoEnum.Physical, 10), new Protecao(ProtecaoEnum.Energy, 8)], 0));
    itens.push(new Item(id++, "Butterfly Ring", "https://www.tibiawiki.com.br/images/b/b1/Butterfly_Ring.gif", vocacao, SlotEnum.Ring, 0, false, [new Protecao(ProtecaoEnum.Death, 3)], 0));

    // Extra Slots
    itens.push(new Item(id++, "Sun Catcher", "https://www.tibiawiki.com.br/images/d/da/Sun_Catcher.gif", vocacao, SlotEnum.ExtraSlot, 0, false, [new Protecao(ProtecaoEnum.Fire, 5)], 0));
    itens.push(new Item(id++, "Moon Mirror", "https://www.tibiawiki.com.br/images/4/46/Moon_Mirror.gif", vocacao, SlotEnum.ExtraSlot, 0, false, [new Protecao(ProtecaoEnum.Death, 5)], 0));
    itens.push(new Item(id++, "Starlight Vial", "https://www.tibiawiki.com.br/images/d/da/Sun_Catcher.gif", vocacao, SlotEnum.ExtraSlot, 0, false, [new Protecao(ProtecaoEnum.ManaDrain, 5)], 0));
    itens.push(new Item(id++, "Lit Torch", "https://www.tibiawiki.com.br/images/3/3a/Lit_Torch.gif", vocacao, SlotEnum.ExtraSlot, 0, false, [new Protecao(ProtecaoEnum.Holy, 2)], 0));
    itens.push(new Item(id++, "Bone Fiddle", "https://www.tibiawiki.com.br/images/3/3b/Bone_Fiddle.gif", vocacao, SlotEnum.ExtraSlot, 0, false, [new Protecao(ProtecaoEnum.LifeDrain, 5)], 0));
    itens.push(new Item(id++, "Conch Shell Horn", "https://www.tibiawiki.com.br/images/5/5b/Conch_Shell_Horn.gif", vocacao, SlotEnum.ExtraSlot, 0, false, [new Protecao(ProtecaoEnum.Ice, 2)], 0));
    itens.push(new Item(id++, "Scarab Ocarina", "https://www.tibiawiki.com.br/images/b/be/Scarab_Ocarina.gif", vocacao, SlotEnum.ExtraSlot, 0, false, [new Protecao(ProtecaoEnum.Earth, 2)], 0));

    return itens;
  }


}

