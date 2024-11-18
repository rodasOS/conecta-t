import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-contact',
	standalone: true,
	imports: [FormsModule],
	template: `
		<div class="max-w-7xl mx-auto px-4 py-12">
			<h1 class="text-4xl font-bold mb-8">Contacto</h1>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
				<div>
					<h2 class="text-2xl font-semibold mb-4">Información de Contacto</h2>
					<div class="space-y-4">
						<p class="flex items-center">
							<span class="material-icons mr-2">📍</span>
							Santa Lucía Cotzumalguapa, Escuintla, Guatemala
						</p>
						<p class="flex items-center">
							<span class="material-icons mr-2">📧</span>
							{{ email }}
						</p>
						<p class="flex items-center">
							<span class="material-icons mr-2">📱</span>
							(123) 456-7890
						</p>
					</div>
				</div>

				<div>
					<form class="space-y-4">
						<div>
							<label class="block text-sm font-medium text-gray-700">Nombre</label>
							<input
								type="text"
								class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
						</div>

						<div>
							<label class="block text-sm font-medium text-gray-700">Email</label>
							<input
								type="email"
								class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
						</div>

						<div>
							<label class="block text-sm font-medium text-gray-700">Mensaje</label>
							<textarea
								rows="4"
								class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
						</div>

						<button type="submit" class="btn-primary">Enviar Mensaje</button>
					</form>
				</div>
			</div>
		</div>
	`,
})
export class ContactComponent {
	email = 'conectatoficial.gt@gmail.com';
}
