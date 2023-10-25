import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ImbuimentProtecaoEnum, Item, Protecao, ProtecaoEnum, SlotEnum, VocacaoEnum } from './item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Portal Ze Tibinha';

  damageInput: string = ``;

  protecaoAtual_Physical: number = 0;
  protecaoAtual_Fire: number = 0;
  protecaoAtual_Earth: number = 0;
  protecaoAtual_Energy: number = 0;
  protecaoAtual_Ice: number = 0;
  protecaoAtual_Holy: number = 0;
  protecaoAtual_Death: number = 0;

  danoAtual_Physical: number = 0;
  danoAtual_Fire: number = 0;
  danoAtual_Earth: number = 0;
  danoAtual_Energy: number = 0;
  danoAtual_Ice: number = 0;
  danoAtual_Holy: number = 0;
  danoAtual_Death: number = 0;
  danoAtual_Total: number = 0;

  danoReal_Physical: number = 0;
  danoReal_Fire: number = 0;
  danoReal_Earth: number = 0;
  danoReal_Energy: number = 0;
  danoReal_Ice: number = 0;
  danoReal_Holy: number = 0;
  danoReal_Death: number = 0;
  danoReal_Total: number = 0;

  danoRealPercentual_Physical: number = 0;
  danoRealPercentual_Fire: number = 0;
  danoRealPercentual_Earth: number = 0;
  danoRealPercentual_Energy: number = 0;
  danoRealPercentual_Ice: number = 0;
  danoRealPercentual_Holy: number = 0;
  danoRealPercentual_Death: number = 0;

  protecaoSugestao_Physical: number = 0;
  protecaoSugestao_Fire: number = 0;
  protecaoSugestao_Earth: number = 0;
  protecaoSugestao_Energy: number = 0;
  protecaoSugestao_Ice: number = 0;
  protecaoSugestao_Holy: number = 0;
  protecaoSugestao_Death: number = 0;

  danoPossivel_Physical: number = 0;
  danoPossivel_Fire: number = 0;
  danoPossivel_Earth: number = 0;
  danoPossivel_Energy: number = 0;
  danoPossivel_Ice: number = 0;
  danoPossivel_Holy: number = 0;
  danoPossivel_Death: number = 0;
  danoPossivel_Total: number = 0;

  danoPossivelPercentual_Physical: number = 0;
  danoPossivelPercentual_Fire: number = 0;
  danoPossivelPercentual_Earth: number = 0;
  danoPossivelPercentual_Energy: number = 0;
  danoPossivelPercentual_Ice: number = 0;
  danoPossivelPercentual_Holy: number = 0;
  danoPossivelPercentual_Death: number = 0;

  danoPossivelPercentual_Total: number = 0;

  itens: Item[] = [];



  constructor(
    private fb: FormBuilder,
    protected router: Router,
    protected route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.calcular();
    //this.definirVocacao(VocacaoEnum.Sorcerer);
  }

  calcular() {
    const damageArray = this.damageInput.split(/\r?\n/)
    if (!damageArray) return;

    this.danoAtual_Physical = 0;
    this.danoAtual_Fire = 0;
    this.danoAtual_Earth = 0;
    this.danoAtual_Holy = 0;
    this.danoAtual_Energy = 0;
    this.danoAtual_Ice = 0;
    this.danoAtual_Holy = 0;
    this.danoAtual_Death = 0;

    let loop = true;

    damageArray.forEach(line => {
      if (!loop || !line) return;

      if (line?.trim().startsWith("Physical")) {
        this.danoAtual_Physical = this.extrairDano(line);
      } else if (line?.trim().startsWith("Fire")) {
        this.danoAtual_Fire = this.extrairDano(line);
      } else if (line?.trim().startsWith("Earth")) {
        this.danoAtual_Earth = this.extrairDano(line);
      } else if (line?.trim().startsWith("Holy")) {
        this.danoAtual_Holy = this.extrairDano(line);
      } else if (line?.trim().startsWith("Energy")) {
        this.danoAtual_Energy = this.extrairDano(line);
      } else if (line?.trim().startsWith("Ice")) {
        this.danoAtual_Ice = this.extrairDano(line);
      } else if (line?.trim().startsWith("Holy")) {
        this.danoAtual_Holy = this.extrairDano(line);
      } else if (line?.trim().startsWith("Death")) {
        this.danoAtual_Death = this.extrairDano(line);
      } else if (line?.trim().startsWith("Damage Sources")) {
        loop = false;
      }
    });

    this.danoAtual_Total = this.danoAtual_Physical + this.danoAtual_Fire + this.danoAtual_Earth
      + this.danoAtual_Energy + this.danoAtual_Ice + this.danoAtual_Holy + this.danoAtual_Death;

    this.danoReal_Physical = (this.danoAtual_Physical * 100) / (100 - this.protecaoAtual_Physical);
    this.danoReal_Fire = (this.danoAtual_Fire * 100) / (100 - this.protecaoAtual_Fire);
    this.danoReal_Earth = (this.danoAtual_Earth * 100) / (100 - this.protecaoAtual_Earth);
    this.danoReal_Energy = (this.danoAtual_Energy * 100) / (100 - this.protecaoAtual_Energy);
    this.danoReal_Ice = (this.danoAtual_Ice * 100) / (100 - this.protecaoAtual_Ice);
    this.danoReal_Holy = (this.danoAtual_Holy * 100) / (100 - this.protecaoAtual_Holy);
    this.danoReal_Death = (this.danoAtual_Death * 100) / (100 - this.protecaoAtual_Death);

    this.danoReal_Total = this.danoReal_Physical + this.danoReal_Fire + this.danoReal_Earth
      + this.danoReal_Energy + this.danoReal_Ice + this.danoReal_Holy + this.danoReal_Death;

    this.danoRealPercentual_Physical = (this.danoReal_Physical * 100) / this.danoReal_Total;
    this.danoRealPercentual_Fire = (this.danoReal_Fire * 100) / this.danoReal_Total;
    this.danoRealPercentual_Earth = (this.danoReal_Earth * 100) / this.danoReal_Total;
    this.danoRealPercentual_Energy = (this.danoReal_Energy * 100) / this.danoReal_Total;
    this.danoRealPercentual_Ice = (this.danoReal_Ice * 100) / this.danoReal_Total;
    this.danoRealPercentual_Holy = (this.danoReal_Holy * 100) / this.danoReal_Total;
    this.danoRealPercentual_Death = (this.danoReal_Death * 100) / this.danoReal_Total;


    this.danoPossivel_Physical = (this.danoReal_Physical * (100 - this.protecaoSugestao_Physical)) / 100;
    this.danoPossivel_Fire = (this.danoReal_Fire * (100 - this.protecaoSugestao_Fire)) / 100;
    this.danoPossivel_Earth = (this.danoReal_Earth * (100 - this.protecaoSugestao_Earth)) / 100;
    this.danoPossivel_Energy = (this.danoReal_Energy * (100 - this.protecaoSugestao_Energy)) / 100;
    this.danoPossivel_Ice = (this.danoReal_Ice * (100 - this.protecaoSugestao_Ice)) / 100;
    this.danoPossivel_Holy = (this.danoReal_Holy * (100 - this.protecaoSugestao_Holy)) / 100;
    this.danoPossivel_Death = (this.danoReal_Death * (100 - this.protecaoSugestao_Death)) / 100;

    this.danoPossivel_Total = this.danoPossivel_Physical + this.danoPossivel_Fire + this.danoPossivel_Earth
      + this.danoPossivel_Energy + this.danoPossivel_Ice + this.danoPossivel_Holy + this.danoPossivel_Death;

    this.danoPossivelPercentual_Physical = (this.danoPossivel_Physical * 100) / this.danoPossivel_Total;
    this.danoPossivelPercentual_Fire = (this.danoPossivel_Fire * 100) / this.danoPossivel_Total;
    this.danoPossivelPercentual_Earth = (this.danoPossivel_Earth * 100) / this.danoPossivel_Total;
    this.danoPossivelPercentual_Energy = (this.danoPossivel_Energy * 100) / this.danoPossivel_Total;
    this.danoPossivelPercentual_Ice = (this.danoPossivel_Ice * 100) / this.danoPossivel_Total;
    this.danoPossivelPercentual_Holy = (this.danoPossivel_Holy * 100) / this.danoPossivel_Total;
    this.danoPossivelPercentual_Death = (this.danoPossivel_Death * 100) / this.danoPossivel_Total;

    this.danoPossivelPercentual_Total = 100 - (this.danoPossivel_Total * 100) / this.danoAtual_Total;
  }

  extrairDano(line: string): number {
    try {
      return +(line?.trim().split(" ")[1].replace(",", "").replace(".", "")) ?? 0;
    } catch (error) {
      return 0;
    }
  }

  definirVocacao(vocacao: VocacaoEnum) {
    this.itens = [];
    let id: number = 1;

    switch (vocacao) {
      case VocacaoEnum.Sorcerer:
        // Helmets
        this.itens.push(new Item(id++, "Arcanomancer Regalia", vocacao, SlotEnum.Helmet, 0, true, [new Protecao(ProtecaoEnum.Physical, 3), new Protecao(ProtecaoEnum.Earth, 7)], 0));
        this.itens.push(new Item(id++, "Falcon Circlet", vocacao, SlotEnum.Helmet, 0, true, [new Protecao(ProtecaoEnum.Fire, 9)], 0));
        this.itens.push(new Item(id++, "Eldritch Cowl", vocacao, SlotEnum.Helmet, 0, false, [new Protecao(ProtecaoEnum.Ice, 7)], 0));
        this.itens.push(new Item(id++, "Galea Mortis", vocacao, SlotEnum.Helmet, 0, true, [new Protecao(ProtecaoEnum.Death, 6), new Protecao(ProtecaoEnum.Holy, -3)], 0));
        this.itens.push(new Item(id++, "Gnome Helmet", vocacao, SlotEnum.Helmet, 0, true, [new Protecao(ProtecaoEnum.Physical, 3), new Protecao(ProtecaoEnum.Energy, 8), new Protecao(ProtecaoEnum.Ice, -2)], 0));

        // Armors
        this.itens.push(new Item(id++, "Soulmantle", vocacao, SlotEnum.Armor, 0, true, [new Protecao(ProtecaoEnum.Physical, 4)], 1, this.allImbuiments()));
        this.itens.push(new Item(id++, "Elven Mail", vocacao, SlotEnum.Armor, 0, false, [], 2, this.allImbuiments()));
        this.itens.push(new Item(id++, "Dawnfire Sherwani", vocacao, SlotEnum.Armor, 0, true, [new Protecao(ProtecaoEnum.Fire, 4), new Protecao(ProtecaoEnum.Earth, -2)], 0));
        this.itens.push(new Item(id++, "Toga Mortis", vocacao, SlotEnum.Armor, 0, true, [new Protecao(ProtecaoEnum.Death, 6)], 0));
        this.itens.push(new Item(id++, "Dream Shroud", vocacao, SlotEnum.Armor, 0, true, [new Protecao(ProtecaoEnum.Energy, 10)], 0));
        this.itens.push(new Item(id++, "Living Armor", vocacao, SlotEnum.Armor, 0, true, [new Protecao(ProtecaoEnum.Earth, 12), new Protecao(ProtecaoEnum.Fire, -5)], 0));

        // Legs
        this.itens.push(new Item(id++, "Soulshanks", vocacao, SlotEnum.Legs, 0, true, [new Protecao(ProtecaoEnum.Death, 10)], 0));
        this.itens.push(new Item(id++, "Dawnfire Pantaloons", vocacao, SlotEnum.Legs, 0, false, [new Protecao(ProtecaoEnum.Physical, 3)], 0));
        this.itens.push(new Item(id++, "Gnome Legs", vocacao, SlotEnum.Legs, 0, false, [new Protecao(ProtecaoEnum.Energy, 7), new Protecao(ProtecaoEnum.Ice, -2)], 0));
        this.itens.push(new Item(id++, "Soulful Legs", vocacao, SlotEnum.Legs, 0, true, [new Protecao(ProtecaoEnum.Holy, 8)], 0));
        this.itens.push(new Item(id++, "Gill Legs", vocacao, SlotEnum.Legs, 0, true, [new Protecao(ProtecaoEnum.Earth, 8), new Protecao(ProtecaoEnum.Earth, -8)], 0));
        this.itens.push(new Item(id++, "Icy Culottes", vocacao, SlotEnum.Legs, 0, false, [new Protecao(ProtecaoEnum.Ice, 8)], 0));
        this.itens.push(new Item(id++, "Dwarven Legs", vocacao, SlotEnum.Legs, 0, true, [new Protecao(ProtecaoEnum.Physical, 3)], 0));

        // Boots
        this.itens.push(new Item(id++, "Sanguine Boots", vocacao, SlotEnum.Boots, 0, false, [new Protecao(ProtecaoEnum.Physical, 2), new Protecao(ProtecaoEnum.Fire, 8)], 0));
        this.itens.push(new Item(id++, "Alchemist's Boots", vocacao, SlotEnum.Boots, 0, false, [new Protecao(ProtecaoEnum.Physical, 2)], 0));
        this.itens.push(new Item(id++, "Pair of Dreamwalkers", vocacao, SlotEnum.Boots, 0, true, [new Protecao(ProtecaoEnum.Earth, 8)], 0));
        this.itens.push(new Item(id++, "Makeshift Boots", vocacao, SlotEnum.Boots, 0, false, [new Protecao(ProtecaoEnum.Fire, 8)], 0));
        this.itens.push(new Item(id++, "Pair of Nightmare Boots", vocacao, SlotEnum.Boots, 0, true, [new Protecao(ProtecaoEnum.Energy, 6)], 0));
        this.itens.push(new Item(id++, "Void Boots", vocacao, SlotEnum.Boots, 0, true, [new Protecao(ProtecaoEnum.Energy, 10)], 0));

        // Spellbooks
        this.itens.push(new Item(id++, "Arcanomancer Folio", vocacao, SlotEnum.ShieldOrSpellbookOrQuiver, 0, true, [new Protecao(ProtecaoEnum.Physical, 3), new Protecao(ProtecaoEnum.Fire, 8)], 1, [ImbuimentProtecaoEnum.Death, ImbuimentProtecaoEnum.Earth, ImbuimentProtecaoEnum.Energy, ImbuimentProtecaoEnum.Holy, ImbuimentProtecaoEnum.Ice]));
        this.itens.push(new Item(id++, "Eldritch Folio", vocacao, SlotEnum.ShieldOrSpellbookOrQuiver, 0, false, [new Protecao(ProtecaoEnum.Earth, 6)], 1, [ImbuimentProtecaoEnum.Death, ImbuimentProtecaoEnum.Energy, ImbuimentProtecaoEnum.Fire, ImbuimentProtecaoEnum.Holy, ImbuimentProtecaoEnum.Ice]));
        this.itens.push(new Item(id++, "Alchemist's Notepad", vocacao, SlotEnum.ShieldOrSpellbookOrQuiver, 0, false, [new Protecao(ProtecaoEnum.Death, 5)], 1, [ImbuimentProtecaoEnum.Earth, ImbuimentProtecaoEnum.Energy, ImbuimentProtecaoEnum.Fire, ImbuimentProtecaoEnum.Holy, ImbuimentProtecaoEnum.Ice]));
        this.itens.push(new Item(id++, "Umbral Master Spellbook", vocacao, SlotEnum.ShieldOrSpellbookOrQuiver, 0, false, [new Protecao(ProtecaoEnum.Earth, 5), new Protecao(ProtecaoEnum.Energy, 5), new Protecao(ProtecaoEnum.Fire, 5), new Protecao(ProtecaoEnum.Ice, 5)], 1, [ImbuimentProtecaoEnum.Death, ImbuimentProtecaoEnum.Holy]));
        this.itens.push(new Item(id++, "Lion Spellbook", vocacao, SlotEnum.ShieldOrSpellbookOrQuiver, 0, true, [new Protecao(ProtecaoEnum.Physical, 3), new Protecao(ProtecaoEnum.Ice, 7)], 1, [ImbuimentProtecaoEnum.Death, ImbuimentProtecaoEnum.Earth, ImbuimentProtecaoEnum.Energy, ImbuimentProtecaoEnum.Fire, ImbuimentProtecaoEnum.Holy]));
        this.itens.push(new Item(id++, "Brain in a Jar", vocacao, SlotEnum.ShieldOrSpellbookOrQuiver, 0, false, [new Protecao(ProtecaoEnum.Earth, 7)], 1, [ImbuimentProtecaoEnum.Death, ImbuimentProtecaoEnum.Energy, ImbuimentProtecaoEnum.Fire, ImbuimentProtecaoEnum.Holy, ImbuimentProtecaoEnum.Ice]));
        this.itens.push(new Item(id++, "Shoulder Plate", vocacao, SlotEnum.ShieldOrSpellbookOrQuiver, 0, true, [new Protecao(ProtecaoEnum.Physical, 3), new Protecao(ProtecaoEnum.Earth, 6)], 1, [ImbuimentProtecaoEnum.Death, ImbuimentProtecaoEnum.Energy, ImbuimentProtecaoEnum.Fire, ImbuimentProtecaoEnum.Holy, ImbuimentProtecaoEnum.Ice]));
        this.itens.push(new Item(id++, "Spirit Guide", vocacao, SlotEnum.ShieldOrSpellbookOrQuiver, 0, true, [new Protecao(ProtecaoEnum.Energy, 6)], 1, [ImbuimentProtecaoEnum.Death, ImbuimentProtecaoEnum.Earth, ImbuimentProtecaoEnum.Fire, ImbuimentProtecaoEnum.Holy, ImbuimentProtecaoEnum.Ice]));
        this.itens.push(new Item(id++, "Spellbook of Ancient Arcana", vocacao, SlotEnum.ShieldOrSpellbookOrQuiver, 0, false, [new Protecao(ProtecaoEnum.Death, 5)], 0));
        this.itens.push(new Item(id++, "Umbral Spellbook", vocacao, SlotEnum.ShieldOrSpellbookOrQuiver, 0, false, [new Protecao(ProtecaoEnum.Earth, 3), new Protecao(ProtecaoEnum.Energy, 3), new Protecao(ProtecaoEnum.Fire, 3), new Protecao(ProtecaoEnum.Ice, 3)], 1, [ImbuimentProtecaoEnum.Death, ImbuimentProtecaoEnum.Holy]));
        this.itens.push(new Item(id++, "Spellbook of Vigilance", vocacao, SlotEnum.ShieldOrSpellbookOrQuiver, 0, false, [new Protecao(ProtecaoEnum.Earth, 3), new Protecao(ProtecaoEnum.Fire, 5)], 0));
        this.itens.push(new Item(id++, "Wooden Spellbook", vocacao, SlotEnum.ShieldOrSpellbookOrQuiver, 0, false, [new Protecao(ProtecaoEnum.Earth, 5)], 1, [ImbuimentProtecaoEnum.Death, ImbuimentProtecaoEnum.Energy, ImbuimentProtecaoEnum.Fire, ImbuimentProtecaoEnum.Holy, ImbuimentProtecaoEnum.Ice]));
        this.itens.push(new Item(id++, "Umbral Spellbook", vocacao, SlotEnum.ShieldOrSpellbookOrQuiver, 0, false, [new Protecao(ProtecaoEnum.Earth, 2), new Protecao(ProtecaoEnum.Energy, 2), new Protecao(ProtecaoEnum.Fire, 2), new Protecao(ProtecaoEnum.Ice, 2)], 0));
        break;
    }

    //let dicHelmet = this.obterDicionarioItemEProtecoesLiberados(SlotEnum.Helmet);

    let maiorDiminuicaoDeDano: number | undefined = undefined;

    let sHelmet: Item | undefined;
    let sArmor: Item | undefined;
    let sArmorImbuiment: ProtecaoEnum | undefined;
    let sShieldImbuiment: ProtecaoEnum | undefined;
    let sLegs: Item | undefined;
    let sBoots: Item | undefined;
    let sShield: Item | undefined;

    this.itens.filter(p => p.liberado && p.slot == SlotEnum.Helmet).forEach(helmet => {
      let protecoesHelmet = this.obterProtecoesDoItem(helmet);

      this.itens.filter(p => p.liberado && p.slot == SlotEnum.Armor).forEach(armor => {
        let protecoesArmor = this.obterProtecoesDoItem(armor);

        this.itens.filter(p => p.liberado && p.slot == SlotEnum.Legs).forEach(legs => {
          let protecoesLegs = this.obterProtecoesDoItem(legs);

          this.itens.filter(p => p.liberado && p.slot == SlotEnum.Boots).forEach(boots => {
            let protecoesBoots = this.obterProtecoesDoItem(boots);

            this.itens.filter(p => p.liberado && p.slot == SlotEnum.ShieldOrSpellbookOrQuiver).forEach(shield => {
              let protecoesShield = this.obterProtecoesDoItem(shield);

              let imbuimentsArmor = this.obterProtecoesDoItemViaImbuiments(armor);
              if (!imbuimentsArmor || imbuimentsArmor.length == 0) {
                imbuimentsArmor = [];
                imbuimentsArmor.push({ protecao: ProtecaoEnum.Physical, valorProtecao: 0 });
              }

              imbuimentsArmor.forEach(imbuiArmor => {


                let imbuimentsShield = this.obterProtecoesDoItemViaImbuiments(shield);
                if (!imbuimentsShield || imbuimentsShield.length == 0) {
                  imbuimentsShield = [];
                  imbuimentsShield.push({ protecao: ProtecaoEnum.Physical, valorProtecao: 0 });
                }

                imbuimentsShield.forEach(imbuiShield => {


                  this.protecaoSugestao_Physical = 0;
                  this.protecaoSugestao_Fire = 0;
                  this.protecaoSugestao_Earth = 0;
                  this.protecaoSugestao_Energy = 0;
                  this.protecaoSugestao_Ice = 0;
                  this.protecaoSugestao_Holy = 0;
                  this.protecaoSugestao_Death = 0;

                  this.aplicarProtecaoDoItem(protecoesHelmet);
                  this.aplicarProtecaoDoItem(protecoesArmor);
                  this.aplicarProtecaoDoItem([imbuiArmor]);
                  this.aplicarProtecaoDoItem([imbuiShield]);
                  this.aplicarProtecaoDoItem(protecoesLegs);
                  this.aplicarProtecaoDoItem(protecoesBoots);
                  this.aplicarProtecaoDoItem(protecoesShield);

                  this.calcular();

                  if (maiorDiminuicaoDeDano == undefined) {
                    maiorDiminuicaoDeDano = (this.danoAtual_Total - this.danoPossivel_Total);
                    sHelmet = helmet;
                    sArmor = armor;
                    sLegs = legs;
                    sBoots = boots;
                    sShield = shield;
                    sArmorImbuiment = imbuiArmor?.protecao;
                    sShieldImbuiment = imbuiShield?.protecao;
                  } else {
                    if ((this.danoAtual_Total - this.danoPossivel_Total) > maiorDiminuicaoDeDano) {
                      console.log(maiorDiminuicaoDeDano)
                      maiorDiminuicaoDeDano = (this.danoAtual_Total - this.danoPossivel_Total);
                      sHelmet = helmet;
                      sArmor = armor;
                      sLegs = legs;
                      sBoots = boots;
                      sShield = shield;
                      sArmorImbuiment = imbuiArmor?.protecao;
                      sShieldImbuiment = imbuiShield?.protecao;
                    }
                  }
                });
              });

            })
          })
        })
      })
    })

    console.log(maiorDiminuicaoDeDano);

    this.protecaoSugestao_Physical = 0;
    this.protecaoSugestao_Fire = 0;
    this.protecaoSugestao_Earth = 0;
    this.protecaoSugestao_Energy = 0;
    this.protecaoSugestao_Ice = 0;
    this.protecaoSugestao_Holy = 0;
    this.protecaoSugestao_Death = 0;

    console.log('resetou')

    if (sHelmet != undefined) this.aplicarProtecaoDoItem(this.obterProtecoesDoItem(sHelmet));
    if (sArmor != undefined) this.aplicarProtecaoDoItem(this.obterProtecoesDoItem(sArmor));
    if (sArmorImbuiment != undefined) this.aplicarProtecaoDoItem([{ protecao: sArmorImbuiment, valorProtecao: 15 }])
    if (sLegs != undefined) this.aplicarProtecaoDoItem(this.obterProtecoesDoItem(sLegs));
    if (sBoots != undefined) this.aplicarProtecaoDoItem(this.obterProtecoesDoItem(sBoots));
    if (sShield != undefined) this.aplicarProtecaoDoItem(this.obterProtecoesDoItem(sShield));
    if (sShieldImbuiment != undefined) this.aplicarProtecaoDoItem([{ protecao: sShieldImbuiment, valorProtecao: 15 }])

    // sun catche
    this.aplicarProtecaoDoItem([{ protecao: ProtecaoEnum.Fire, valorProtecao: 5 }])

    // theurgic
    this.aplicarProtecaoDoItem([{ protecao: ProtecaoEnum.Earth, valorProtecao: 14 }])
    this.aplicarProtecaoDoItem([{ protecao: ProtecaoEnum.Physical, valorProtecao: 3 }])

    // arcanomancer ring
    this.aplicarProtecaoDoItem([{ protecao: ProtecaoEnum.Earth, valorProtecao: 4 }])
    this.aplicarProtecaoDoItem([{ protecao: ProtecaoEnum.Fire, valorProtecao: 4 }])
    this.aplicarProtecaoDoItem([{ protecao: ProtecaoEnum.Energy, valorProtecao: 4 }])
    this.aplicarProtecaoDoItem([{ protecao: ProtecaoEnum.Ice, valorProtecao: 4 }])

    this.protecaoSugestao_Physical = Math.round(this.protecaoSugestao_Physical);
    this.protecaoSugestao_Fire = Math.round(this.protecaoSugestao_Fire);
    this.protecaoSugestao_Earth = Math.round(this.protecaoSugestao_Earth);
    this.protecaoSugestao_Energy = Math.round(this.protecaoSugestao_Energy);
    this.protecaoSugestao_Ice = Math.round(this.protecaoSugestao_Ice);
    this.protecaoSugestao_Holy = Math.round(this.protecaoSugestao_Holy);
    this.protecaoSugestao_Death = Math.round(this.protecaoSugestao_Death);

    console.log(sHelmet?.descricao);
    console.log(sArmor?.descricao);
    console.log('Armor imbui: ' + sArmorImbuiment);
    console.log(sLegs?.descricao);
    console.log(sBoots?.descricao);
    console.log(sShield?.descricao);
    console.log('Shield imbui: ' + sShieldImbuiment);

    this.calcular();

    console.log((this.danoAtual_Total - this.danoPossivel_Total));
  }

  aplicarProtecaoDoItem(protecoes: { protecao: ProtecaoEnum, valorProtecao: number }[]) {
    protecoes?.forEach(protecao => {
      if (protecao.valorProtecao == 0) return;

      switch (protecao.protecao) {
        case ProtecaoEnum.Physical: this.protecaoSugestao_Physical = this.calcularProtecao(this.protecaoSugestao_Physical, protecao.valorProtecao); break;
        case ProtecaoEnum.Fire: this.protecaoSugestao_Fire = this.calcularProtecao(this.protecaoSugestao_Fire, protecao.valorProtecao); break;
        case ProtecaoEnum.Earth: this.protecaoSugestao_Earth = this.calcularProtecao(this.protecaoSugestao_Earth, protecao.valorProtecao); break;
        case ProtecaoEnum.Energy: this.protecaoSugestao_Energy = this.calcularProtecao(this.protecaoSugestao_Energy, protecao.valorProtecao); break;
        case ProtecaoEnum.Ice: this.protecaoSugestao_Ice = this.calcularProtecao(this.protecaoSugestao_Ice, protecao.valorProtecao); break;
        case ProtecaoEnum.Holy: this.protecaoSugestao_Holy = this.calcularProtecao(this.protecaoSugestao_Holy, protecao.valorProtecao); break;
        case ProtecaoEnum.Death: this.protecaoSugestao_Death = this.calcularProtecao(this.protecaoSugestao_Death, protecao.valorProtecao); break;
      }
    });
  }

  calcularProtecao(protecaoAtual: number, adicionarProtecao: number): number {
    const valorInicial = (100 - protecaoAtual);
    //return Math.round(100 - (valorInicial - ((valorInicial * adicionarProtecao) / 100)))
    return 100 - (valorInicial - ((valorInicial * adicionarProtecao) / 100))
  }

  obterDicionarioItemEProtecoesLiberados(slot: SlotEnum) {
    let dic: { item: Item, protecao: ProtecaoEnum, valorProtecao: number }[] = [];
    this.itens.filter(p => p.liberado && p.slot == slot).forEach(item => {
      item.protecoes?.forEach(p => {
        dic.push({ item, protecao: p.protecao, valorProtecao: p.percentual });
      })
    })
    return dic;
  }

  obterProtecoesDoItem(item: Item) {
    let dic: { protecao: ProtecaoEnum, valorProtecao: number }[] = [];
    item.protecoes?.forEach(p => {
      dic.push({ protecao: p.protecao, valorProtecao: p.percentual });
    });
    return dic;
  }
  obterProtecoesDoItemViaImbuiments(item: Item) {
    if (!item) return;

    let dic: { protecao: ProtecaoEnum, valorProtecao: number }[] = [];
    if (item.imbuimentSlot > 0 && item.imbuiments) {

      item.imbuiments.forEach(imbui => {

        let prot: ProtecaoEnum | undefined = undefined;
        switch (imbui) {
          case ImbuimentProtecaoEnum.Fire: prot = ProtecaoEnum.Fire; break;
          case ImbuimentProtecaoEnum.Earth: prot = ProtecaoEnum.Earth; break;
          case ImbuimentProtecaoEnum.Energy: prot = ProtecaoEnum.Energy; break;
          case ImbuimentProtecaoEnum.Ice: prot = ProtecaoEnum.Ice; break;
          case ImbuimentProtecaoEnum.Holy: prot = ProtecaoEnum.Holy; break;
          case ImbuimentProtecaoEnum.Death: prot = ProtecaoEnum.Death; break;
        }

        if (prot != undefined) {
          dic.push({ protecao: prot, valorProtecao: 15 });
        }
      })
    }
    return dic;
  }

  obterItemMaiorProtecao(protecao: ProtecaoEnum, dicItens: { item: Item, protecao: ProtecaoEnum, valorProtecao: number }[]): { item: Item | undefined, valorProtecao: number } | undefined {
    let melhorProtecao: Item | undefined;

    let ultimoId: number = 0;
    let ultimaProtecao: number = 0;

    dicItens.filter(p => p.protecao == protecao).forEach(item => {
      if (ultimoId > 0) {

        if (item.valorProtecao > ultimaProtecao) {
          melhorProtecao = item.item;

          ultimoId = item.item.id;
          ultimaProtecao = item.valorProtecao;
        }
      } else {
        melhorProtecao = item.item;

        ultimoId = item.item.id;
        ultimaProtecao = item.valorProtecao;
      }
    })

    if (ultimaProtecao < 0)
      return undefined;

    return { item: melhorProtecao, valorProtecao: ultimaProtecao };
  }


  allImbuiments(): ImbuimentProtecaoEnum[] {
    return [
      ImbuimentProtecaoEnum.Fire,
      ImbuimentProtecaoEnum.Earth,
      ImbuimentProtecaoEnum.Energy,
      ImbuimentProtecaoEnum.Ice,
      ImbuimentProtecaoEnum.Holy,
      ImbuimentProtecaoEnum.Death,
    ]
  }
}
