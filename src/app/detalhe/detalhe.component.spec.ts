import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheComponent } from './detalhe.component';
import { SharedModule } from '@shared/shared.module';
import { DepoimentosModule } from '../home/depoimentos/depoimentos.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DetalheComponent', () => {
  let component: DetalheComponent;
  let fixture: ComponentFixture<DetalheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        DetalheComponent
      ],
      imports: [
        SharedModule,
        DepoimentosModule,
        HttpClientTestingModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(DetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
