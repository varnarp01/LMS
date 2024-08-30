import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';  // Correct usage here
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),  // Configure HttpClient at the root of the application
    // Add other global providers if necessary
  ]
}).catch(err => console.error(err));
