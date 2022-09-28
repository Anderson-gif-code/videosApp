import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'jurassic-world',
    loadChildren: () => import('./filmes/jurassic-world/jurassic-world.module').then( m => m.JurassicWorldPageModule)
  },
  {
    path: 'mortal-kombat',
    loadChildren: () => import('./filmes/mortal-kombat/mortal-kombat.module').then( m => m.MortalKombatPageModule)
  },
  {
    path: 'dados-filme',
    loadChildren: () => import('./dados-filme/dados-filme.module').then( m => m.DadosFilmePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
