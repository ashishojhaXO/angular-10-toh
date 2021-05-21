// tslint:disable
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform, Injectable, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Directive, Input, Output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { Component } from '@angular/core';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  // beforeEach((() => {
  //   TestBed.configureTestingModule({
  //   imports: [ FormsModule, ReactiveFormsModule ],
  //   declarations: [AppComponent]}).compileComponents();
  // }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [
        AppComponent,
        // NOTE: THIS extra comma is also a problem
        // ,
      ],

      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      // providers: [
      //   AppComponent,
      // ]

    })
    // .overrideComponent(AppComponent, {})
    // .compileComponents();
    // .compileComponents()

    // component = TestBed.inject(AppComponent);

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  //afterEach(() => {
    //component.ngOnDestroy = function() {};
    //fixture.destroy();
  //});

  it('Check Title', async () => {
    expect(component.title).toBe('Tour of Heroes');
  });

  it('should run #constructor()', async () => {
    expect(component).toBeTruthy();
  });

});
