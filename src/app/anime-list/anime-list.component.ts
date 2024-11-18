import { Component } from '@angular/core';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent {
  // Données des animes avec les notes et une couleur de fond spécifique
  animes = [
    { title: 'SNK LAST SEASON P2', rating: 8.6, backgroundColor: '#873600' },  // orange
    { title: 'Cowboy Bebop', rating: 8.5, backgroundColor: '#3498DB' },  // Bleu
    { title: 'Mushishi', rating: 8.2, backgroundColor: '#fbfcfc' },  // blanc
    { title: 'Ghost in the shell', rating: 8.0, backgroundColor: '#979a9a' },  // gris clair
    { title: 'Hellsing Ultimate', rating: 7.6, backgroundColor: '#e61010' },  // rouge
  ];
}
