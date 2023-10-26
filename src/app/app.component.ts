import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ImbuimentProtecaoEnum, Item, Protecao, ProtecaoEnum, SlotEnum, VocacaoEnum } from './item.model';
import { Sorcerer } from './sorcerer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Portal Ze Tibinha';

  damageInput: string = `Received Damage
  Total: 1,449,865
  Max-DPS: 2,356
  Damage Types
    Physical 681,681 (47.0%)
    Earth 387,830 (26.7%)
    Fire 238,239 (16.4%)
    Holy 74,613 (5.1%)
    Energy 67,192 (4.6%)
    Death 310 (0.0%)
  Damage Sources
    adult goanna 496,794 (34.3%)
    feral sphinx 335,283 (23.1%)
    young goanna 303,700 (20.9%)
    manticore 74,615 (5.1%)
    ogre rowdy 64,932 (4.5%)`;

  protecaoAtual_Physical: number = 9;
  protecaoAtual_Fire: number = 26;
  protecaoAtual_Earth: number = 40;
  protecaoAtual_Energy: number = 4;
  protecaoAtual_Ice: number = 0;
  protecaoAtual_Holy: number = 0;
  protecaoAtual_Death: number = 21;

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
  sugestaoDeItensAplicada: boolean = false;

  constructor(
    private fb: FormBuilder,
    protected router: Router,
    protected route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.calcular();
    //this.carregarItens(VocacaoEnum.Sorcerer);
    //this.definirVocacao(VocacaoEnum.Sorcerer);
  }

  calcular(resetarSugestao: boolean = true) {
    if (resetarSugestao) {
      this.sugestaoDeItensAplicada = false;
      this.limparSugestoes();
    }

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
      return +(line?.trim().split(" ")[1].replace(/\,/gi, "").replace(/\./gi, "")) ?? 0;
    } catch (error) {
      return 0;
    }
  }

  carregarItens(vocacao: VocacaoEnum) {
    this.itens = [];

    switch (vocacao) {
      case VocacaoEnum.Sorcerer:
        this.itens.push(...Sorcerer.itensSorcerer())
        break;
    }
  }

  get helmets() { return this.itens.filter(p => p.slot == SlotEnum.Helmet); }
  get armors() { return this.itens.filter(p => p.slot == SlotEnum.Armor); }
  get legs() { return this.itens.filter(p => p.slot == SlotEnum.Legs); }
  get boots() { return this.itens.filter(p => p.slot == SlotEnum.Boots); }
  get shields() { return this.itens.filter(p => p.slot == SlotEnum.ShieldOrSpellbookOrQuiver); }

  helmetSugerido: Item | undefined;
  armorSugerida: Item | undefined;
  armorImbuimentSugerido: ProtecaoEnum[] = [];
  legsSugerida: Item | undefined;
  bootsSugerida: Item | undefined;
  shieldSugerido: Item | undefined;
  shieldImbuimentSugerido: ProtecaoEnum[] = [];

  limparSugestoes() {
    this.helmetSugerido = undefined;
    this.armorSugerida = undefined;
    this.armorImbuimentSugerido = [];
    this.legsSugerida = undefined;
    this.bootsSugerida = undefined;
    this.shieldSugerido = undefined;
    this.shieldImbuimentSugerido = [];
  }

  sugerirItens() {
    this.sugestaoDeItensAplicada = false;

    let maiorDiminuicaoDeDano: number | undefined = undefined;

    this.limparSugestoes();

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

                  this.calcular(false);

                  if (maiorDiminuicaoDeDano == undefined) {
                    maiorDiminuicaoDeDano = (this.danoAtual_Total - this.danoPossivel_Total);
                    this.helmetSugerido = helmet;
                    this.armorSugerida = armor;
                    this.legsSugerida = legs;
                    this.bootsSugerida = boots;
                    this.shieldSugerido = shield;
                    this.armorImbuimentSugerido = (imbuiArmor?.protecao ?? false) ? [imbuiArmor?.protecao] : [];
                    this.shieldImbuimentSugerido = (imbuiShield?.protecao ?? false) ? [imbuiShield?.protecao] : [];
                  } else {
                    if ((this.danoAtual_Total - this.danoPossivel_Total) > maiorDiminuicaoDeDano) {
                      console.log(maiorDiminuicaoDeDano)
                      maiorDiminuicaoDeDano = (this.danoAtual_Total - this.danoPossivel_Total);
                      this.helmetSugerido = helmet;
                      this.armorSugerida = armor;
                      this.legsSugerida = legs;
                      this.bootsSugerida = boots;
                      this.shieldSugerido = shield;
                      this.armorImbuimentSugerido = imbuiArmor ? [imbuiArmor?.protecao] : [];
                      this.shieldImbuimentSugerido =  (imbuiShield?.protecao ?? false) ? [imbuiShield?.protecao] : [];
                    }
                  }
                });
              });

            })
          })
        })
      })
    })

    this.protecaoSugestao_Physical = 0;
    this.protecaoSugestao_Fire = 0;
    this.protecaoSugestao_Earth = 0;
    this.protecaoSugestao_Energy = 0;
    this.protecaoSugestao_Ice = 0;
    this.protecaoSugestao_Holy = 0;
    this.protecaoSugestao_Death = 0;

    if (this.helmetSugerido != undefined) this.aplicarProtecaoDoItem(this.obterProtecoesDoItem(this.helmetSugerido));
    if (this.armorSugerida != undefined) this.aplicarProtecaoDoItem(this.obterProtecoesDoItem(this.armorSugerida));
    if (this.armorImbuimentSugerido != undefined) this.armorImbuimentSugerido.forEach(imbui => this.aplicarProtecaoDoItem([{ protecao: imbui, valorProtecao: 15 }]))
    if (this.legsSugerida != undefined) this.aplicarProtecaoDoItem(this.obterProtecoesDoItem(this.legsSugerida));
    if (this.bootsSugerida != undefined) this.aplicarProtecaoDoItem(this.obterProtecoesDoItem(this.bootsSugerida));
    if (this.shieldSugerido != undefined) this.aplicarProtecaoDoItem(this.obterProtecoesDoItem(this.shieldSugerido));
    if (this.shieldImbuimentSugerido != undefined) this.shieldImbuimentSugerido.forEach(imbui => this.aplicarProtecaoDoItem([{ protecao: imbui, valorProtecao: 15 }]))

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

    this.calcular(false);

    this.sugestaoDeItensAplicada = true;
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



  imbuimentText(imbui: ProtecaoEnum): string {
    switch (imbui) {
      case ProtecaoEnum.Fire: return "Imbuiment Fire";
      case ProtecaoEnum.Earth: return "Imbuiment Earth";
      case ProtecaoEnum.Energy: return "Imbuiment Energy";
      case ProtecaoEnum.Ice: return "Imbuiment Ice";
      case ProtecaoEnum.Holy: return "Imbuiment Holy";
      case ProtecaoEnum.Death: return "Imbuiment Death";
      default: return "";
    }
  }

  imbuimentTextCompleto(imbui: ProtecaoEnum, percentual: number): string {
    return `${this.imbuimentText(imbui)} +${percentual}%`;
  }
}
