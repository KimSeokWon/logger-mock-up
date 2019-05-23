import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
import { map, switchMap, filter, reduce, startWith, catchError } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-logger-list',
  templateUrl: './logger-list.component.html',
  styleUrls: ['./logger-list.component.css']
})
export class LoggerListComponent implements OnInit {
  // systems: string[] = [
  //   'POT', 'ACR', 'WRS', 'CRS'
  // ];
  // private levels: string[] = [
  //   'ALL', 'DEBUG', 'INFO', 'WARN', 'TRACE', 'ERROR', 'CRITICAL'
  // ];
  // private items = [
  //   { logger: 'com.sicc', appenders: [
  //     {group: 'POT', pkg_name: 'com.sicc', level: 'DEBUG'}
  //   ]},
  //   { logger: 'com.gms', appenders: [
  //     {group: 'COMMON', pkg_name: 'com.sicc', level: 'DEBUG'}
  //   ]},
  //   { logger: 'com.rds', appenders: [
  //     {group: 'RDS', pkg_name: 'com.sicc', level: 'DEBUG'}
  //   ]},
  //   { logger: 'com.rds.webresults', appenders: [
  //     {group: 'webresults', pkg_name: 'com.sicc', level: 'DEBUG'}
  //   ]},
  // ];
  systems: Observable<Object[]>;
  loggers: Object = null;
  levels: string[];
  obj: Object[];
  addFlag = false;
  selectedLevel = '';
  selectableLoggers: Observable<Object>;
  private _selectedSystem: string;
  myControl = new FormControl();
  
  serverInfo: Object = {};
  set selectedSystem(s : string ) {
    
    this.obj.forEach(item => {
      if ( item.name === s ) {
        this.serverInfo.address = item.address;
        this.serverInfo.port = item.port;
        this.fetch(item.address, item.port);
      }
    });
    this._selectedSystem = s;
  }
  get selectedSystem(): string {
    return this._selectedSystem;
  }
  constructor( private http: HttpClient) { 
  }

  fetch(address: string, port: number):void {
    this.http.get<Object>(`http://${address}:${port}/actuator/loggers`).pipe(
      map(
       o => {        
        this.levels = o.levels;
        this.loggers = o.loggers ;
       })).subscribe();
  }


  ngOnInit() {
    this.systems = this.http.get<Object[]>("http://localhost:8081/api/logger/system/list").pipe(
      map((item: Object[]) => {
        this.obj = item;
        return item;
      })
    );
    this.selectableLoggers = this.myControl.valueChanges.
      pipe(
        startWith(''),
        map( v => this._filter(v, this.loggers))
      );
  }

  private _filter(key: string, obj: Object): Object {
    return Object.keys(obj).filter(k => (k.includes(key) && k != 'ROOT'))
      .reduce((o, k) => {
        o[k] = obj[k];
        return o;
      }, {});
  }

  add() {
    this.addFlag = true;
  }
  applyPolicy(name: string, level: string) {
    console.log(`name: ${name}, level: ${level}`);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json',
     'Content-Security-Policy': 'upgrade-insecure-requests',
     'Access-Control-Allow-Origin': 'https://angular-pfasvq.stackblitz.io' });
    let options = { headers: headers };
    this.http.post(`http://203.224.132.131:${this.serverInfo.port}/actuator/loggers/${name}`, {configuredLevel:level}, { headers: headers })
      .subscribe();
  }
  handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}