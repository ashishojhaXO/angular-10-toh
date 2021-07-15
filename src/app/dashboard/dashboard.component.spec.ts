// tslint:disable
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform, Injectable, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Directive, Input, Output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { Component } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from '../hero.service';

@Injectable()
class MockHeroService {}

describe('DashboardComponent', () => {
  let fixture: ComponentFixture<DashboardComponent>;
  let component: DashboardComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [
        DashboardComponent,

      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      providers: [
        { provide: HeroService, useClass: MockHeroService }
      ]
    })
    // .overrideComponent(DashboardComponent, {
    // 
    // })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //afterEach(() => {
    //component.ngOnDestroy = function() {};
    //fixture.destroy();
  //});

  it('should run #constructor()', async () => {
    expect(component).toBeTruthy();
  });

  // NOTE: ORI: accessorTests

  // NOTE: ORI: functionTests

  // NOTE: NEW: functionTests

  it('should run #ngOnInit()', async () => {
    console.log("COMP-------: ", component);
    ( component as any).ngOnInit();
  });

  it('should run #getHeroes()', async () => {
    console.log("COMP 2-------: ", component);
    (component as any).heroService = (component as any).heroService || {};
    spyOn((component as any).heroService, 'getHeroes').and.returnValue(observableOf({}));
    ( component as any).getHeroes();
    // expect(component.heroService.getHeroes).toHaveBeenCalled();
  });

  it('should run #searchHeroes()', async () => {
    console.log("COMP 3-------: ", component);
    (component as any).heroService = (component as any).heroService || {};
    spyOn((component as any).heroService, 'searchHeroes').and.returnValue(observableOf({}));
    ( component as any).searchHeroes();
    // expect(component.heroService.searchHeroes).toHaveBeenCalled();
  });

});
