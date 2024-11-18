import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Course {
	id: number;
	title: string;
	description: string;
	duration: string;
	price: string;
	image: string;
}

@Component({
	selector: 'app-courses',
	standalone: true,
	imports: [CommonModule, RouterModule],
	template: `
		<div class="max-w-7xl mx-auto px-4 py-12">
			<h1 class="text-4xl font-bold mb-8">Nuestros Cursos</h1>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				<div *ngFor="let course of courses" class="card p-4 border-2 rounded-xl">
					<img
						[src]="course.image"
						[alt]="course.title"
						class="w-full h-48 object-cover rounded-lg mb-4" />
					<h3 class="text-xl font-semibold mb-2">{{ course.title }}</h3>
					<p class="text-gray-600 mb-4">{{ course.description }}</p>
					<div class="flex justify-between items-center mb-4">
						<span class="text-gray-500">{{ course.duration }}</span>
						<!-- <span class="text-blue-600 font-semibold">{{ course.price }}</span> -->
					</div>
					<a [routerLink]="['/course', course.id]" class="btn-primary block text-center">
						Ver Detalles
					</a>
				</div>
			</div>
		</div>
	`,
})
export class CoursesComponent {
	courses: Course[] = [
		{
			id: 1,
			title: 'Taller de introducción a la programación',
			description: 'Aprende los fundamentos de la programación desde cero',
			duration: '4 semanas',
			price: '$299',
			image: 'https://i.ibb.co/JrkbVTJ/taller-de-introduccion-a-la-programacion.png',
		},
		{
			id: 2,
			title: 'Seguridad en línea y privacidad',
			description: 'Protege tu información y navega de forma segura',
			duration: '4 semanas',
			price: '$199',
			image: 'https://i.ibb.co/SJ5x6JC/seguridad-en-linea-y-privacidad.png',
		},
		{
			id: 3,
			title: 'Uso de herramientas digitales para negocios',
			description: 'Optimiza tu negocio con herramientas digitales',
			duration: '4 semanas',
			price: '$399',
			image: 'https://i.ibb.co/MSb6GH5/herramientas-digitales-para-negocios.png',
		},
		{
			id: 4,
			title: 'Manejo de redes sociales para negocios',
			description: 'Estrategias efectivas para redes sociales',
			duration: '4 semanas',
			price: '$299',
			image: 'https://i.ibb.co/dpJk4sB/manejo-de-redes-sociales-para-negocios.png',
		},
		{
			id: 5,
			title: 'Electrónica Básica',
			description: 'Fundamentos de electrónica y circuitos',
			duration: '4 semanas',
			price: '$499',
			image: 'https://i.ibb.co/nkwq0qv/electronica-basica.png',
		},
		{
			id: 6,
			title: 'Ofimática Básica',
			description: 'Domina las herramientas de oficina',
			duration: '5 semanas',
			price: '$199',
			image: 'https://i.ibb.co/xYMZgt8/ofimatica-basica.png',
		},
		// {
		// 	id: 7,
		// 	title: 'Gestión de energía doméstica',
		// 	description: 'Optimiza el consumo energético en casa',
		// 	duration: '5 semanas',
		// 	price: '$149',
		// 	image: 'https://source.unsplash.com/random/800x600/?energy',
		// },
		{
			id: 7,
			title: 'Educación vial en línea',
			description: 'Aprende las normas de tránsito',
			duration: '5 semanas',
			price: '$99',
			image: 'https://i.ibb.co/BsQG3fj/educacion-vial-en-linea.png',
		},
	];
}
