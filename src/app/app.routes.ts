import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/remote', pathMatch: 'full' },
    // {
    //   path: 'remote',
    //   loadComponent: () => {
    //     return loadRemoteModule({
    //       remoteEntry: 'http://localhost:4300/remoteEntry.js',
    //       remoteName: 'mfeApp17',
    //       exposedModule: './Component'
    //     }).then(m => m.AppComponent).catch(err => console.log(err));
    //   }
    // },
    {
        path: 'remote',
        loadComponent: () => import('mfeApp17/Component').then(mod => mod.AppComponent)        
     }
  ];
