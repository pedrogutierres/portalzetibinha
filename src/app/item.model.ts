export enum VocacaoEnum {
  Knight,
  Paladin,
  Druid,
  Sorcerer
}

export enum ProtecaoEnum {
  Physical,
  Fire,
  Earth,
  Energy,
  Ice,
  Holy,
  Death
}

export enum ImbuimentProtecaoEnum {
  Fire,
  Earth,
  Energy,
  Ice,
  Holy,
  Death
}

export enum SlotEnum {
  Helmet,
  Armor,
  Legs,
  Boots,
  ShieldOrSpellbookOrQuiver
}

export class Protecao {
  constructor(
    public protecao: ProtecaoEnum,
    public percentual: number) {
  }
}

export class Item {
  constructor(
    public id: number,
    public descricao: string,
    public vocacao: VocacaoEnum,
    public slot: SlotEnum,
    public pontos: number,
    public liberado: boolean,
    public protecoes: Protecao[],
    public imbuimentSlot: number,
    public imbuiments?: ImbuimentProtecaoEnum[]) {
  }
}