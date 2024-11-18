import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-course-detail',
	standalone: true,
	imports: [CommonModule],
	template: `
		<div class="max-w-7xl mx-auto px-4 py-12" *ngIf="course">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
				<div>
					<img [src]="course.image" [alt]="course.title" class="w-full rounded-lg shadow-lg" />
				</div>

				<div>
					<h1 class="text-4xl font-bold mb-4">{{ course.title }}</h1>
					<div class="flex items-center mb-4">
						<span class="text-gray-600 mr-4">{{ course.duration }}</span>
						<!-- <span class="text-blue-600 font-semibold text-2xl">{{ course.price }}</span> -->
					</div>

					<div class="prose max-w-none">
						<h2 class="text-2xl font-semibold mb-4">Descripción del Curso</h2>
						<p class="mb-6">{{ course.description }}</p>

						<h2 class="text-2xl font-semibold mb-4">¿Qué aprenderás?</h2>
						<ul class="list-disc pl-6 mb-6">
							<li>Fundamentos básicos y conceptos clave</li>
							<li>Aplicaciones prácticas y casos de uso</li>
							<li>Mejores prácticas y técnicas avanzadas</li>
							<li>Proyectos reales y ejercicios prácticos</li>
						</ul>

						<button class="btn-primary">Inscribirse al Curso</button>
					</div>
				</div>
			</div>
		</div>
	`,
})
export class CourseDetailComponent {
	course: any;

	constructor(private route: ActivatedRoute) {
		const courses = [
			{
				id: 1,
				title: 'Taller de introducción a la programación',
				description:
					'Aprende los fundamentos de la programación desde cero. Este curso está diseñado para principiantes y cubre los conceptos básicos de la programación, lógica de programación, y primeros pasos en desarrollo web.',
				duration: '6 semanas',
				price: '$299',
				image: 'https://i.ibb.co/s9mPFwD/INTRODUCCI-N-A-LA-PROGRA.png',
			},
			{
				id: 2,
				title: 'Seguridad en línea y privacidad',
				description:
					'Protege tu información y navega de forma segura en internet. Aprenderás sobre cifrado, contraseñas seguras, navegación privada y mejores prácticas de seguridad digital.',
				duration: '4 semanas',
				price: '$199',
				image: 'https://i.ibb.co/CJDzdKR/SEGURIDAD-EN-LINEA.png',
			},
			{
				id: 3,
				title: 'Uso de herramientas digitales para negocios',
				description:
					'Optimiza tu negocio con herramientas digitales modernas. Descubre cómo utilizar software de productividad, herramientas de colaboración y plataformas de gestión empresarial.',
				duration: '8 semanas',
				price: '$399',
				image: 'https://i.ibb.co/7j8d3Hr/HERRAMIENTAS-DIGITALES-PARA-NEGO.png',
			},
			{
				id: 4,
				title: 'Manejo de redes sociales para negocios',
				description:
					'Estrategias efectivas para redes sociales y marketing digital. Aprende a crear contenido efectivo, gestionar comunidades y medir resultados.',
				duration: '6 semanas',
				price: '$299',
				image: 'https://i.ibb.co/qm99Qhc/MANEJO-DE-REDES-SOCIALES.png',
			},
			{
				id: 5,
				title: 'Electrónica Básica',
				description:
					'Fundamentos de electrónica y circuitos. Comprende los principios básicos de la electricidad, componentes electrónicos y diseño de circuitos simples.',
				duration: '10 semanas',
				price: '$499',
				image: 'https://i.ibb.co/HP266s7/ELECTRONICA-BASICA.png',
			},
			{
				id: 6,
				title: 'Ofimática Básica',
				description:
					'Domina las herramientas de oficina más utilizadas. Aprende a usar procesadores de texto, hojas de cálculo y presentaciones de manera efectiva.',
				duration: '4 semanas',
				price: '$199',
				image: 'https://i.ibb.co/ZGV0KPN/OFIMATICA.png',
			},
			// {
			// 	id: 7,
			// 	title: 'Gestión de energía doméstica',
			// 	description:
			// 		'Optimiza el consumo energético en casa. Aprende sobre eficiencia energética, dispositivos inteligentes y prácticas sostenibles.',
			// 	duration: '3 semanas',
			// 	price: '$149',
			// 	image: 'https://source.unsplash.com/random/800x600/?energy',
			// },
			{
				id: 7,
				title: 'Educación vial en línea',
				description:
					'Aprende las normas de tránsito y seguridad vial. Curso completo sobre regulaciones, señales de tránsito y conducción segura.',
				duration: '2 semanas',
				price: '$99',
				image: 'https://i.ibb.co/9bKhC0y/EDUCACION-VIAL.png',
			},
		];

		this.route.params.subscribe((params) => {
			const id = +params['id'];
			this.course = courses.find((c) => c.id === id);
		});
	}
}
