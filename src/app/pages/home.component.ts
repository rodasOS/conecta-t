import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div class="max-w-7xl mx-auto px-4">
        <h1 class="text-5xl font-bold mb-6">Aprende tecnología con expertos</h1>
        <p class="text-xl mb-8">Descubre nuestros cursos y talleres especializados</p>
        <a routerLink="/courses" class="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100">
          Ver Cursos
        </a>
      </div>
    </div>

    <section class="py-16 max-w-7xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">¿Por qué elegirnos?</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center">
          <div class="text-4xl mb-4">👨‍🏫</div>
          <h3 class="text-xl font-semibold mb-2">Instructores Expertos</h3>
          <p>Aprende de profesionales con experiencia en la industria</p>
        </div>
        <div class="text-center">
          <div class="text-4xl mb-4">💻</div>
          <h3 class="text-xl font-semibold mb-2">Contenido Actualizado</h3>
          <p>Mantente al día con las últimas tecnologías</p>
        </div>
        <div class="text-center">
          <div class="text-4xl mb-4">🎓</div>
          <h3 class="text-xl font-semibold mb-2">Certificación</h3>
          <p>Obtén certificados reconocidos en la industria</p>
        </div>
      </div>
    </section>
  `
})
export class HomeComponent {}