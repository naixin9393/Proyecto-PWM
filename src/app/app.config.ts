import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { MOVIE_SERVICE, routes, SERIES_SERVICE } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {environment} from "../environments/environment";
import { getAuth, provideAuth } from '@angular/fire/auth';
import { SeriesService } from "./services/series.service";
import { MovieService } from "./services/movie.service";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"mistops-c0bce","appId":"1:794098111547:web:2a3973a72bd716364e781e","storageBucket":"mistops-c0bce.appspot.com","apiKey":"AIzaSyADtDo9LnPcWDsHYm-kDbGm0R_q4Nc70Tc","authDomain":"mistops-c0bce.firebaseapp.com","messagingSenderId":"794098111547","measurementId":"G-5MEF921126"}))),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideFirestore(() => getFirestore()),
      provideAuth(() => getAuth())
    ]), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"mistops-c0bce","appId":"1:794098111547:web:2a3973a72bd716364e781e","storageBucket":"mistops-c0bce.appspot.com","apiKey":"AIzaSyADtDo9LnPcWDsHYm-kDbGm0R_q4Nc70Tc","authDomain":"mistops-c0bce.firebaseapp.com","messagingSenderId":"794098111547","measurementId":"G-5MEF921126"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())),
    {
      provide: SERIES_SERVICE,
      useClass: SeriesService
    },
    {
      provide: MOVIE_SERVICE,
      useClass: MovieService
    }
  ]
};
