import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),
     provideFirebaseApp(() => 
      initializeApp({"projectId":"app-pokemons-7c7a3","appId":"1:85938229192:web:6882c0a325ac6301223afd","storageBucket":"app-pokemons-7c7a3.appspot.com","apiKey":"AIzaSyCJtNYgN1uEkJRaG2x2ShTjwhovcpS5EAs","authDomain":"app-pokemons-7c7a3.firebaseapp.com","messagingSenderId":"85938229192","measurementId":"G-S88KFDB8FV"})), provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, provideFirestore(() => getFirestore()), provideStorage(() => getStorage())]
    };