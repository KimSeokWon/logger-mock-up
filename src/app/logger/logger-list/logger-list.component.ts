import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logger-list',
  templateUrl: './logger-list.component.html',
  styleUrls: ['./logger-list.component.css']
})
export class LoggerListComponent implements OnInit {

  private levels: string[] = [
    'ALL', 'DEBUG', 'INFO', 'WARN', 'TRACE', 'ERROR', 'CRITICAL'
  ];
  private items = [
    { group: 'POT', logger: 'com.sicc', appenders: [
      {pkg_name: 'com.sicc', level: 'DEBUG'}
    ]},
    { group: 'POT', logger: 'com.gms', appenders: [
      {pkg_name: 'com.sicc', level: 'DEBUG'}
    ]},
    { group: 'COMMON', logger: 'com.rds', appenders: [
      {pkg_name: 'com.sicc', level: 'DEBUG'}
    ]},
    { group: 'WRS', logger: 'com.rds.webresults', appenders: [
      {pkg_name: 'com.sicc', level: 'DEBUG'}
    ]},
  ];
  constructor() { }

  ngOnInit() {
  }

}