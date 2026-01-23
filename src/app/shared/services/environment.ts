import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  private readonly env = environment;

  public get isProduction(): boolean {
    return this.env.production;
  }

  public get version(): string {
    return this.env.version;
  }
}
