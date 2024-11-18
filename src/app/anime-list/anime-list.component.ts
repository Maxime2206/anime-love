import { Component } from '@angular/core';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent {
  // Données des animes avec les notes et une couleur de fond spécifique
  animes = [
    { title: 'Naruto', rating: 4.5, backgroundColor: '#ff5733' },  // orange
    { title: 'One Piece', rating: 4.8, backgroundColor: '#3498DB' },  // Bleu
    { title: 'Attack on Titan', rating: 4.9, backgroundColor: '#873600' },  // marron
    { title: 'Demon Slayer', rating: 5.0, backgroundColor: '#d80808' },  // rouge
    { title: 'My Hero Academia', rating: 4.6, backgroundColor: '#239b56' },  // vert
  ];
}
