import { Component } from '@angular/core';

@Component({
	selector: 'app-about',
	standalone: true,
	template: `
		<div class="max-w-7xl mx-auto px-4 py-12">
			<h1 class="text-4xl font-bold mb-8">Sobre Nosotros</h1>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
				<div>
					<h2 class="text-2xl font-semibold mb-4">Nuestra Misión</h2>
					<p class="text-gray-700 mb-6">
						En <strong>ConectaT</strong>, nos dedicamos a democratizar la educación tecnológica,
						haciendo que el aprendizaje sea accesible, práctico y relevante para todos.
					</p>

					<h2 class="text-2xl font-semibold mb-4">Nuestra Visión</h2>
					<p class="text-gray-700">
						Aspiramos a ser líderes en la formación tecnológica, creando una comunidad global de
						profesionales preparados para los desafíos digitales del futuro.
					</p>
				</div>

				<div class="bg-gray-100 p-8 rounded-lg">
					<h2 class="text-2xl font-semibold mb-4">Nuestros Valores</h2>
					<ul class="space-y-4">
						<li class="flex items-center">
							<span class="text-blue-600 mr-2">✓</span>
							<span>Excelencia en la enseñanza</span>
						</li>
						<li class="flex items-center">
							<span class="text-blue-600 mr-2">✓</span>
							<span>Innovación continua</span>
						</li>
						<li class="flex items-center">
							<span class="text-blue-600 mr-2">✓</span>
							<span>Compromiso con el estudiante</span>
						</li>
						<li class="flex items-center">
							<span class="text-blue-600 mr-2">✓</span>
							<span>Aprendizaje práctico</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	`,
})
export class AboutComponent {}
