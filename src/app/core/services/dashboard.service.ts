import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, map, startWith } from 'rxjs';

export interface KpiData {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  delta: number;   // porcentaje de cambio
  trend: 'up' | 'down';
}

@Injectable({
  providedIn: 'root'
})
export class Dashboard {

  // Estado central de KPIs como BehaviorSubject
  private kpisSubject = new BehaviorSubject<KpiData[]>([
    { label: 'Ingresos',    value: 84200, prefix: '$', delta: 12.4, trend: 'up'   },
    { label: 'Usuarios',    value: 3847,                delta: 8.1,  trend: 'up'   },
    { label: 'Pedidos',     value: 1294,                delta: -3.2, trend: 'down' },
    { label: 'Conversión',  value: 4.7,  suffix: '%',  delta: 0.5,  trend: 'up'   },
  ]);

  // Observable público (read-only)
  kpis$ = this.kpisSubject.asObservable();

  // Simula datos en tiempo real cada 5 segundos
  realtimeKpis$ = interval(5000).pipe(
    startWith(0),
    map(() => this.kpisSubject.getValue().map(k => ({
      ...k,
      value: k.value + Math.floor(Math.random() * 10 - 5),
      delta: parseFloat((k.delta + (Math.random() * 0.4 - 0.2)).toFixed(1))
    })))
  );

  // Datos para gráfica de barras (ventas mensuales)
  monthlySales$ = new BehaviorSubject<number[]>(
    [42, 58, 45, 70, 62, 85, 78, 91, 67, 83, 95, 110]
  );
}
