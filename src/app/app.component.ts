import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(
    private fb: FormBuilder,
    protected router: Router,
    protected route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.calcular();
  }

  calcular() {
    const damageArray = this.damageInput.split(/\r?\n/)

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
}
