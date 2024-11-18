import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterModule, CommonModule],
	template: `
		<nav class="bg-white shadow-lg">
			<div class="max-w-7xl mx-auto px-4">
				<div class="flex justify-between h-16">
					<div class="flex items-center">
						<a routerLink="/" class="text-xl font-bold text-blue-600">ConectaT</a>
					</div>
					<div class="flex items-center space-x-4 max-sm:space-x-2">
						<a
							routerLink="/"
							routerLinkActive="text-blue-600"
							[routerLinkActiveOptions]="{ exact: true }"
							class="text-gray-700 hover:text-blue-600"
							>Inicio</a
						>
						<a
							routerLink="/about"
							routerLinkActive="text-blue-600"
							class="text-gray-700 hover:text-blue-600"
							>Sobre Nosotros</a
						>
						<a
							routerLink="/courses"
							routerLinkActive="text-blue-600"
							class="text-gray-700 hover:text-blue-600"
							>Cursos</a
						>
						<a
							routerLink="/contact"
							routerLinkActive="text-blue-600"
							class="text-gray-700 hover:text-blue-600"
							>Contacto</a
						>
					</div>
				</div>
			</div>
		</nav>

		<main>
			<router-outlet></router-outlet>
		</main>

		<footer class="bg-gray-800 text-white mt-12 py-8">
			<div class="max-w-7xl mx-auto px-4">
				<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						<h3 class="text-lg font-bold mb-4">TechEdu</h3>
						<p>Formando el futuro digital</p>
					</div>
					<div>
						<h3 class="text-lg font-bold mb-4">Contacto</h3>
						<p>Email: {{ email }}</p>
						<p>Tel: (123)</p>
					</div>
					<div>
						<h3 class="text-lg font-bold mb-4">Síguenos</h3>
						<div class="flex space-x-4">
							<a href="#" class="hover:text-blue-400">Facebook</a>
							<a href="#" class="hover:text-blue-400">Twitter</a>
							<a href="#" class="hover:text-blue-400">LinkedIn</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	`,
})
export class AppComponent {
	title = 'ConectaT';
	email = 'conectatoficial.gt@gmail.com';
}
