import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ImbuimentProtecaoEnum, Item, Protecao, ProtecaoEnum, SlotEnum, VocacaoEnum } from './item.model';
import { ToastrService } from 'ngx-toastr';
import { VocacaoItens } from './vocacao.service';
import { LocalStorageUtils } from './local.storage.util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Portal Ze Tibinha';

  
}
