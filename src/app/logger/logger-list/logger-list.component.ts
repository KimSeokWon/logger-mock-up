import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logger-list',
  templateUrl: './logger-list.component.html',
  styleUrls: ['./logger-list.component.css']
})
export class LoggerListComponent implements OnInit {
  systems: string[] = [
    'POT', 'ACR', 'WRS', 'CRS'
  ];
  private levels: string[] = [
    'ALL', 'DEBUG', 'INFO', 'WARN', 'TRACE', 'ERROR', 'CRITICAL'
  ];
  private items = [
    { logger: 'com.sicc', appenders: [
      {group: 'POT', pkg_name: 'com.sicc', level: 'DEBUG'}
    ]},
    { logger: 'com.gms', appenders: [
      {group: 'COMMON', pkg_name: 'com.sicc', level: 'DEBUG'}
    ]},
    { logger: 'com.rds', appenders: [
      {group: 'RDS', pkg_name: 'com.sicc', level: 'DEBUG'}
    ]},
    { logger: 'com.rds.webresults', appenders: [
      {group: 'webresults', pkg_name: 'com.sicc', level: 'DEBUG'}
    ]},
  ];
  constructor() { }

  ngOnInit() {
  }

  enableToAdd() {
    return this.items.filter( item => item.new_created == true ).length == 0;
  }

  addItem() {
    this.items.push(
      {logger: '', appenders: [
        {group: '', pkg_name: '', level: 'ERROR'}
      ], new_created: true}
    );
  }

  addNewAppender() {
    console.log("logger name is : " + this.items[this.items.length-1].logger);
    var logger: string = this.items[this.items.length-1].logger;
    this.items.filter( item => item.logger === logger).map(
      item => item.appenders.push(
        {group: '', pkg_name: '', level: 'ERROR'}
      )
    )
  };

  cancelAddItem() {
    this.items.pop();
  }
}