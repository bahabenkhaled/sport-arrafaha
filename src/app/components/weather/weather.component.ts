import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  searchForm: FormGroup;
  weatherVariable: any = {};


  constructor(private weatherService: WeatherService, private fB: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.fB.group({
      city: ["", [Validators.required]],
    })
  }

  searchWeather() {
    this.weatherService.searchWeather(this.searchForm.value).subscribe((data) => {
      console.log("here data", data);
      this.weatherVariable = data.variable;

    })
  }

}
