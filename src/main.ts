import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { AppRootComponent } from './app/app-root.component';

bootstrapApplication(AppRootComponent).catch((error) => console.log(error));
