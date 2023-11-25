export default {
    "restaurants": [
        {
            name: "Café Académico",
            location: "Edificio Principal - Planta Baja - EP R014",
            description: "Ofrecemos una variedad de café, té y pasteles para estudiantes y profesores.",
            timetable: "8:00 AM - 6:00 PM",
        },
        {
            name: "Sabor Saludable",
            location: "Centro Deportivo - Primera Planta - CD R122",
            description: "Comida saludable y nutritiva para mantener a los estudiantes en forma.",
            timetable: "11:00 AM - 8:00 PM"
        },
        {
            name: "Pizzería Universitaria",
            location: "Área Recreativa - Primera Planta - AR R102",
            description: "Variedad de pizzas deliciosas para satisfacer tus antojos.",
            timetable: "12:00 PM - 9:00 PM"
        },
        {
            name: "Wok Express",
            location: "Zona de Ciencias - Segunda Planta - ZC R220",
            description: "Cocina asiática rápida y deliciosa para estudiantes ocupados.",
            timetable: "11:30 AM - 7:30 PM"
        },
        {
            name: "Taco Lab",
            location: "Facultad de Artes - Planta Baja - FA R012",
            description: "Auténticos tacos mexicanos para aquellos que aman la comida picante.",
            timetable: "10:30 AM - 8:00 PM"
        },
        {
            name: "Sandwich Hub",
            location: "Biblioteca General - Primera Planta - BG R103",
            description: "Variedad de sándwiches frescos para llevar a tus estudios o lecturas.",
            timetable: "9:00 AM - 7:00 PM"
        },
        {
            name: "Buffet Creativo",
            location: "Edificio de Ingeniería - Planta Baja - EI R028",
            description: "Un buffet con opciones creativas y deliciosas para satisfacer a todos los paladares.",
            timetable: "12:30 PM - 8:30 PM"
        },
        {
            name: "Smoothie Oasis",
            location: "Área Verde - Planta Baja - AV R001",
            description: "Smoothies frescos y saludables para mantenerte energizado durante el día.",
            timetable: "8:30 AM - 5:30 PM"
        }
    ],
    "dishes": {
        "Café Académico" :[
            {
                "name": "Espresso Doble",
                "description": "Una intensa dosis de café espresso para los amantes del café fuerte.",
                "price": 2.50, // USD
                "calories": 2, // kcal
                "carbohydrates": 0.1, // g
                "sugars": 0, // g
                "fiber": 0, // g
                "fats": 0.2, // g
                "saturated_fats": 0.1, // g
                "trans_fats": null, // g (null if not applicable)
                "cholesterol": 0, // mg
                "proteins": 0.3, // g
                "sodium": 0, // mg
                "iron": 5, // mg
                "calcium": 2, // mg
                "magnesium": 3, // mg
                "potassium": 49, // mg
                "phosphorus": 12, // mg
                "zinc": 0.04, // mg
                "vitamin_a": 0, // mg
                "vitamin_b": 0, // mg
                "vitamin_c": 0, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 0, // mg
                "vitamin_k": 0 // mg
              },
              {
                "name": "Latte de Vainilla",
                "description": "Café suave con leche vaporizada y un toque de esencia de vainilla.",
                "price": 4.00, // USD
                "calories": 50, // kcal
                "carbohydrates": 6, // g
                "sugars": 6, // g
                "fiber": 0, // g
                "fats": 2.5, // g
                "saturated_fats": 1.5, // g
                "trans_fats": null, // g (null if not applicable)
                "cholesterol": 10, // mg
                "proteins": 1, // g
                "sodium": 40, // mg
                "iron": 0.001, // mg
                "calcium": 90, // mg
                "magnesium": 8, // mg
                "potassium": 160, // mg
                "phosphorus": 50, // mg
                "zinc": 0.1, // mg
                "vitamin_a": 2, // mg
                "vitamin_b": 0, // mg
                "vitamin_c": 0, // mg
                "vitamin_d": 0.5, // mg
                "vitamin_e": 0, // mg
                "vitamin_k": 0 // mg
              },
              {
                "name": "Té Chai Especiado",
                "description": "Té negro infusionado con especias y leche, una opción reconfortante.",
                "price": 3.50, // USD
                "calories": 20, // kcal
                "carbohydrates": 5, // g
                "sugars": 5, // g
                "fiber": 0, // g
                "fats": 0, // g
                "saturated_fats": 0, // g
                "trans_fats": null, // g (null if not applicable)
                "cholesterol": 0, // mg
                "proteins": 0, // g
                "sodium": 10, // mg
                "iron": 0.1, // mg
                "calcium": 50, // mg
                "magnesium": 5, // mg
                "potassium": 20, // mg
                "phosphorus": 10, // mg
                "zinc": 0, // mg
                "vitamin_a": 0, // mg
                "vitamin_b": 0, // mg
                "vitamin_c": 0, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 0, // mg
                "vitamin_k": 0 // mg
              },
              {
                "name": "Croissant de Almendra",
                "description": "Delicioso croissant relleno de almendras y glaseado con azúcar.",
                "price": 3.75, // USD
                "calories": 320, // kcal
                "carbohydrates": 30, // g
                "sugars": 15, // g
                "fiber": 2, // g
                "fats": 20, // g
                "saturated_fats": 10, // g
                "trans_fats": 0, // g
                "cholesterol": 25, // mg
                "proteins": 5, // g
                "sodium": 250, // mg
                "iron": 1.5, // mg
                "calcium": 40, // mg
                "magnesium": 20, // mg
                "potassium": 80, // mg
                "phosphorus": 40, // mg
                "zinc": 0.5, // mg
                "vitamin_a": 0.03, // mg
                "vitamin_b": 0.2, // mg
                "vitamin_c": 0, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 1.5, // mg
                "vitamin_k": 0 // mg
              },
              {
                "name": "Ensalada Mediterránea",
                "description": "Mezcla fresca de lechuga, tomate, pepino, aceitunas y queso feta.",
                "price": 7.50, // USD
                "calories": 80, // kcal
                "carbohydrates": 10, // g
                "sugars": 5, // g
                "fiber": 4, // g
                "fats": 4, // g
                "saturated_fats": 1.5, // g
                "trans_fats": 0, // g
                "cholesterol": 5, // mg
                "proteins": 2, // g
                "sodium": 200, // mg
                "iron": 1, // mg
                "calcium": 50, // mg
                "magnesium": 20, // mg
                "potassium": 150, // mg
                "phosphorus": 40, // mg
                "zinc": 0.5, // mg
                "vitamin_a": 0.45, // mg
                "vitamin_b": 0.1, // mg
                "vitamin_c": 15, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 1, // mg
                "vitamin_k": 50 // mg
              },
              {
                "name": "Sandwich de Pavo y Aguacate",
                "description": "Pavo tierno, aguacate, lechuga y tomate en pan integral.",
                "price": 8.00, // USD
                "calories": 350, // kcal
                "carbohydrates": 40, // g
                "sugars": 5, // g
                "fiber": 6, // g
                "fats": 15, // g
                "saturated_fats": 3, // g
                "trans_fats": 0, // g
                "cholesterol": 30, // mg
                "proteins": 15, // g
                "sodium": 600, // mg
                "iron": 2, // mg
                "calcium": 100, // mg
                "magnesium": 30, // mg
                "potassium": 400, // mg
                "phosphorus": 120, // mg
                "zinc": 1.5, // mg
                "vitamin_a": 0.24, // mg
                "vitamin_b": 0.2, // mg
                "vitamin_c": 10, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 2, // mg
                "vitamin_k": 30 // mg
              },
              {
                "name": "Tarta de Manzana Casera",
                "description": "Una deliciosa tarta de manzana con crujiente cobertura.",
                "price": 4.50, // USD
                "calories": 250, // kcal
                "carbohydrates": 30, // g
                "sugars": 15, // g
                "fiber": 2, // g
                "fats": 12, // g
                "saturated_fats": 5, // g
                "trans_fats": 0, // g
                "cholesterol": 20, // mg
                "proteins": 2, // g
                "sodium": 100, // mg
                "iron": 0.5, // mg
                "calcium": 20, // mg
                "magnesium": 10, // mg
                "potassium": 80, // mg
                "phosphorus": 40, // mg
                "zinc": 0.2, // mg
                "vitamin_a": 0.02, // mg
                "vitamin_b": 0.1, // mg
                "vitamin_c": 2, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 0.5, // mg
                "vitamin_k": 1 // mg
              },
              {
                "name": "Smoothie de Frutas Tropicales",
                "description": "Mezcla refrescante de piña, mango, plátano y jugo de naranja.",
                "price": 5.00, // USD
                "calories": 60, // kcal
                "carbohydrates": 15, // g
                "sugars": 10, // g
                "fiber": 2, // g
                "fats": 0.5, // g
                "saturated_fats": 0, // g
                "trans_fats": 0, // g
                "cholesterol": 0, // mg
                "proteins": 1, // g
                "sodium": 5, // mg
                "iron": 0.2, // mg
                "calcium": 10, // mg
                "magnesium": 15, // mg
                "potassium": 100, // mg
                "phosphorus": 20, // mg
                "zinc": 0.1, // mg
                "vitamin_a": 0.03, // mg
                "vitamin_b": 0.1, // mg
                "vitamin_c": 30, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 0.5, // mg
                "vitamin_k": 1 // mg
              }
        ],
        "Sabor Saludable" :[
            {
                "name": "Ensalada de Pollo a la Parrilla",
                "description": "Ensalada fresca con pollo a la parrilla, hojas verdes, tomate, aguacate y aderezo ligero.",
                "price": 9.00, // USD
                "calories": 120, // kcal
                "carbohydrates": 8, // g
                "sugars": 2, // g
                "fiber": 3, // g
                "fats": 5, // g
                "saturated_fats": 1, // g
                "trans_fats": 0, // g
                "cholesterol": 25, // mg
                "proteins": 15, // g
                "sodium": 180, // mg
                "iron": 1.2, // mg
                "calcium": 40, // mg
                "magnesium": 20, // mg
                "potassium": 300, // mg
                "phosphorus": 120, // mg
                "zinc": 1, // mg
                "vitamin_a": 0.15, // mg
                "vitamin_b": 0.1, // mg
                "vitamin_c": 10, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 1, // mg
                "vitamin_k": 50 // mg
              },
              {
                "name": "Wrap de Pavo y Vegetales",
                "description": "Wrap integral con pavo magro, verduras frescas, queso y salsa de yogur.",
                "price": 8.50, // USD
                "calories": 180, // kcal
                "carbohydrates": 20, // g
                "sugars": 3, // g
                "fiber": 4, // g
                "fats": 7, // g
                "saturated_fats": 2, // g
                "trans_fats": 0, // g
                "cholesterol": 20, // mg
                "proteins": 12, // g
                "sodium": 220, // mg
                "iron": 1, // mg
                "calcium": 80, // mg
                "magnesium": 30, // mg
                "potassium": 250, // mg
                "phosphorus": 100, // mg
                "zinc": 0.8, // mg
                "vitamin_a": 0.09, // mg
                "vitamin_b": 0.2, // mg
                "vitamin_c": 8, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 0.8, // mg
                "vitamin_k": 30 // mg
              },
              {
                "name": "Bowl de Quinoa con Verduras Asadas",
                "description": "Bowl nutritivo con quinoa, brócoli, zanahorias y calabacines asados, aderezado con aceite de oliva.",
                "price": 10.50, // USD
                "calories": 120, // kcal
                "carbohydrates": 20, // g
                "sugars": 2, // g
                "fiber": 5, // g
                "fats": 3, // g
                "saturated_fats": 0.5, // g
                "trans_fats": 0, // g
                "cholesterol": 0, // mg
                "proteins": 5, // g
                "sodium": 150, // mg
                "iron": 1.5, // mg
                "calcium": 40, // mg
                "magnesium": 50, // mg
                "potassium": 200, // mg
                "phosphorus": 100, // mg
                "zinc": 1, // mg
                "vitamin_a": 0.03, // mg
                "vitamin_b": 0.2, // mg
                "vitamin_c": 15, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 2, // mg
                "vitamin_k": 30 // mg
              },
              {
                "name": "Batido Verde Energizante",
                "description": "Mezcla refrescante de espinacas, plátano, manzana, espirulina y leche de almendras.",
                "price": 7.00, // USD
                "calories": 80, // kcal
                "carbohydrates": 15, // g
                "sugars": 8, // g
                "fiber": 3, // g
                "fats": 2, // g
                "saturated_fats": 0.5, // g
                "trans_fats": 0, // g
                "cholesterol": 0, // mg
                "proteins": 2, // g
                "sodium": 50, // mg
                "iron": 0.8, // mg
                "calcium": 80, // mg
                "magnesium": 30, // mg
                "potassium": 180, // mg
                "phosphorus": 60, // mg
                "zinc": 0.5, // mg
                "vitamin_a": 0.15, // mg
                "vitamin_b": 0.1, // mg
                "vitamin_c": 10, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 1, // mg
                "vitamin_k": 20 // mg
              },
              {
                "name": "Sándwich de Aguacate y Huevo",
                "description": "Pan integral con aguacate, huevo pochado, tomate y espinacas.",
                "price": 8.50, // USD
                "calories": 180, // kcal
                "carbohydrates": 20, // g
                "sugars": 2, // g
                "fiber": 5, // g
                "fats": 10, // g
                "saturated_fats": 2.5, // g
                "trans_fats": 0, // g
                "cholesterol": 180, // mg
                "proteins": 8, // g
                "sodium": 200, // mg
                "iron": 1, // mg
                "calcium": 60, // mg
                "magnesium": 20, // mg
                "potassium": 200, // mg
                "phosphorus": 120, // mg
                "zinc": 1, // mg
                "vitamin_a": 0.15, // mg
                "vitamin_b": 0.2, // mg
                "vitamin_c": 5, // mg
                "vitamin_d": 1, // mg
                "vitamin_e": 1, // mg
                "vitamin_k": 30 // mg
              },
              {
                "name": "Bowl de Acai con Granola y Frutas",
                "description": "Acai bowl con granola, plátano, fresas y coco rallado.",
                "price": 9.50, // USD
                "calories": 200, // kcal
                "carbohydrates": 35, // g
                "sugars": 15, // g
                "fiber": 7, // g
                "fats": 5, // g
                "saturated_fats": 1, // g
                "trans_fats": 0, // g
                "cholesterol": 0, // mg
                "proteins": 3, // g
                "sodium": 20, // mg
                "iron": 2, // mg
                "calcium": 30, // mg
                "magnesium": 40, // mg
                "potassium": 150, // mg
                "phosphorus": 50, // mg
                "zinc": 0.5, // mg
                "vitamin_a": 0.3, // mg
                "vitamin_b": 0.1, // mg
                "vitamin_c": 10, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 2, // mg
                "vitamin_k": 15 // mg
              }
        ],
        "Pizzería Universitaria" :[
            {
                "name": "Pizza Margarita",
                "description": "Tradicional pizza con salsa de tomate, mozzarella fresca y albahaca.",
                "price": 10.00, // USD
                "calories": 250, // kcal
                "carbohydrates": 30, // g
                "sugars": 2, // g
                "fiber": 3, // g
                "fats": 12, // g
                "saturated_fats": 5, // g
                "trans_fats": 0, // g
                "cholesterol": 20, // mg
                "proteins": 10, // g
                "sodium": 400, // mg
                "iron": 1, // mg
                "calcium": 150, // mg
                "magnesium": 20, // mg
                "potassium": 180, // mg
                "phosphorus": 120, // mg
                "zinc": 1, // mg
                "vitamin_a": 0.24, // mg
                "vitamin_b": 0.2, // mg
                "vitamin_c": 2, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 1, // mg
                "vitamin_k": 10 // mg
              },
              {
                "name": "Pizza Pepperoni y Champiñones",
                "description": "Deliciosa pizza con salsa de tomate, pepperoni, champiñones y queso fundido.",
                "price": 12.00, // USD
                "calories": 300, // kcal
                "carbohydrates": 35, // g
                "sugars": 3, // g
                "fiber": 4, // g
                "fats": 15, // g
                "saturated_fats": 6, // g
                "trans_fats": 0, // g
                "cholesterol": 25, // mg
                "proteins": 12, // g
                "sodium": 450, // mg
                "iron": 1.5, // mg
                "calcium": 200, // mg
                "magnesium": 25, // mg
                "potassium": 200, // mg
                "phosphorus": 150, // mg
                "zinc": 1.2, // mg
                "vitamin_a": 0.3, // mg
                "vitamin_b": 0.3, // mg
                "vitamin_c": 3, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 2, // mg
                "vitamin_k": 15 // mg
              },
              {
                "name": "Calzone de Pollo y Queso Ricotta",
                "description": "Calzone relleno de pollo, queso ricotta, espinacas y salsa de tomate.",
                "price": 14.50, // USD
                "calories": 220, // kcal
                "carbohydrates": 25, // g
                "sugars": 3, // g
                "fiber": 4, // g
                "fats": 10, // g
                "saturated_fats": 4, // g
                "trans_fats": 0, // g
                "cholesterol": 30, // mg
                "proteins": 12, // g
                "sodium": 350, // mg
                "iron": 1.8, // mg
                "calcium": 120, // mg
                "magnesium": 30, // mg
                "potassium": 250, // mg
                "phosphorus": 180, // mg
                "zinc": 1.5, // mg
                "vitamin_a": 0.36, // mg
                "vitamin_b": 0.4, // mg
                "vitamin_c": 5, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 2.5, // mg
                "vitamin_k": 20 // mg
              },
              {
                "name": "Pizza Vegetariana",
                "description": "Pizza cargada de vegetales frescos como pimientos, cebollas, tomates y aceitunas.",
                "price": 11.50, // USD
                "calories": 180, // kcal
                "carbohydrates": 22, // g
                "sugars": 4, // g
                "fiber": 5, // g
                "fats": 8, // g
                "saturated_fats": 3, // g
                "trans_fats": 0, // g
                "cholesterol": 20, // mg
                "proteins": 8, // g
                "sodium": 300, // mg
                "iron": 1.5, // mg
                "calcium": 150, // mg
                "magnesium": 40, // mg
                "potassium": 200, // mg
                "phosphorus": 160, // mg
                "zinc": 1.2, // mg
                "vitamin_a": 0.3, // mg
                "vitamin_b": 0.3, // mg
                "vitamin_c": 8, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 2, // mg
                "vitamin_k": 15 // mg
              },
              {
                "name": "Pizza BBQ de Carne Asada",
                "description": "Pizza con salsa barbacoa, carne asada, cebollas caramelizadas y queso cheddar.",
                "price": 13.50, // USD
                "calories": 280, // kcal
                "carbohydrates": 30, // g
                "sugars": 5, // g
                "fiber": 3, // g
                "fats": 15, // g
                "saturated_fats": 6, // g
                "trans_fats": 0, // g
                "cholesterol": 35, // mg
                "proteins": 14, // g
                "sodium": 400, // mg
                "iron": 2, // mg
                "calcium": 180, // mg
                "magnesium": 25, // mg
                "potassium": 200, // mg
                "phosphorus": 150, // mg
                "zinc": 1.2, // mg
                "vitamin_a": 0.27, // mg
                "vitamin_b": 0.5, // mg
                "vitamin_c": 4, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 2, // mg
                "vitamin_k": 15 // mg
              }

        ],
        "Wok Express" :[
            {
                "name": "Wok de Pollo Teriyaki",
                "description": "Salteado de pollo tierno con verduras frescas, bañado en salsa teriyaki, servido sobre arroz al vapor.",
                "price": 9.50, // USD
                "calories": 180, // kcal
                "carbohydrates": 25, // g
                "sugars": 5, // g
                "fiber": 3, // g
                "fats": 8, // g
                "saturated_fats": 2, // g
                "trans_fats": 0, // g
                "cholesterol": 30, // mg
                "proteins": 15, // g
                "sodium": 400, // mg
                "iron": 1.5, // mg
                "calcium": 60, // mg
                "magnesium": 30, // mg
                "potassium": 250, // mg
                "phosphorus": 120, // mg
                "zinc": 1.2, // mg
                "vitamin_a": 0.24, // mg
                "vitamin_b": 0.4, // mg
                "vitamin_c": 10, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 2, // mg
                "vitamin_k": 15 // mg
              },
              {
                "name": "Rollitos de Primavera Vegetarianos",
                "description": "Rollitos crujientes rellenos de repollo, zanahorias, champiñones y fideos de arroz, acompañados de salsa agridulce.",
                "price": 6.50, // USD
                "calories": 120, // kcal
                "carbohydrates": 18, // g
                "sugars": 3, // g
                "fiber": 2, // g
                "fats": 4, // g
                "saturated_fats": 1, // g
                "trans_fats": 0, // g
                "cholesterol": 0, // mg
                "proteins": 3, // g
                "sodium": 250, // mg
                "iron": 1, // mg
                "calcium": 40, // mg
                "magnesium": 20, // mg
                "potassium": 150, // mg
                "phosphorus": 80, // mg
                "zinc": 0.8, // mg
                "vitamin_a": 0.15, // mg
                "vitamin_b": 0.2, // mg
                "vitamin_c": 8, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 1, // mg
                "vitamin_k": 10 // mg
              },
              {
                "name": "Arroz Frito con Camarones",
                "description": "Arroz salteado con camarones, guisantes, zanahorias y huevo, sazonado con especias asiáticas.",
                "price": 11.00, // USD
                "calories": 220, // kcal
                "carbohydrates": 30, // g
                "sugars": 2, // g
                "fiber": 3, // g
                "fats": 7, // g
                "saturated_fats": 1.5, // g
                "trans_fats": 0, // g
                "cholesterol": 65, // mg
                "proteins": 10, // g
                "sodium": 380, // mg
                "iron": 2.2, // mg
                "calcium": 40, // mg
                "magnesium": 35, // mg
                "potassium": 220, // mg
                "phosphorus": 150, // mg
                "zinc": 1, // mg
                "vitamin_a": 0.24, // mg
                "vitamin_b": 0.5, // mg
                "vitamin_c": 6, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 2, // mg
                "vitamin_k": 12 // mg
              },
              {
                "name": "Tofu Salteado con Verduras",
                "description": "Tofu firme salteado con una mezcla de verduras frescas en una salsa de soja y jengibre.",
                "price": 8.00, // USD
                "calories": 160, // kcal
                "carbohydrates": 18, // g
                "sugars": 4, // g
                "fiber": 5, // g
                "fats": 8, // g
                "saturated_fats": 1, // g
                "trans_fats": 0, // g
                "cholesterol": 0, // mg
                "proteins": 9, // g
                "sodium": 300, // mg
                "iron": 1.6, // mg
                "calcium": 200, // mg
                "magnesium": 45, // mg
                "potassium": 180, // mg
                "phosphorus": 120, // mg
                "zinc": 1.2, // mg
                "vitamin_a": 0.30, // mg
                "vitamin_b": 0.4, // mg
                "vitamin_c": 10, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 2, // mg
                "vitamin_k": 15 // mg
              }
        ],
        "Taco Lab" :[
            {
                "name": "Taco al Pastor",
                "description": "Tiras de cerdo adobado, piña, cebolla y cilantro en una tortilla de maíz.",
                "price": 2.50, // USD
                "calories": 150, // kcal
                "carbohydrates": 20, // g
                "sugars": 3, // g
                "fiber": 2, // g
                "fats": 6, // g
                "saturated_fats": 2, // g
                "trans_fats": 0, // g
                "cholesterol": 20, // mg
                "proteins": 8, // g
                "sodium": 300, // mg
                "iron": 1, // mg
                "calcium": 40, // mg
                "magnesium": 25, // mg
                "potassium": 200, // mg
                "phosphorus": 100, // mg
                "zinc": 0.8, // mg
                "vitamin_a": 0.15, // mg
                "vitamin_b": 0.2, // mg
                "vitamin_c": 5, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 1, // mg
                "vitamin_k": 10 // mg
              },
              {
                "name": "Taco de Barbacoa",
                "description": "Carne de res cocida a fuego lento, cebolla, cilantro y salsa de aguacate en una tortilla de maíz.",
                "price": 3.00, // USD
                "calories": 180, // kcal
                "carbohydrates": 15, // g
                "sugars": 1, // g
                "fiber": 3, // g
                "fats": 10, // g
                "saturated_fats": 3, // g
                "trans_fats": 0, // g
                "cholesterol": 25, // mg
                "proteins": 12, // g
                "sodium": 350, // mg
                "iron": 1.2, // mg
                "calcium": 30, // mg
                "magnesium": 20, // mg
                "potassium": 180, // mg
                "phosphorus": 120, // mg
                "zinc": 1, // mg
                "vitamin_a": 0.30, // mg
                "vitamin_b": 0.3, // mg
                "vitamin_c": 4, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 1.5, // mg
                "vitamin_k": 8 // mg
              },
              {
                "name": "Quesadilla de Chorizo y Queso",
                "description": "Tortilla de harina rellena de chorizo, queso fundido y guacamole.",
                "price": 4.50, // USD
                "calories": 280, // kcal
                "carbohydrates": 25, // g
                "sugars": 2, // g
                "fiber": 3, // g
                "fats": 16, // g
                "saturated_fats": 6, // g
                "trans_fats": 0, // g
                "cholesterol": 30, // mg
                "proteins": 10, // g
                "sodium": 400, // mg
                "iron": 1.8, // mg
                "calcium": 100, // mg
                "magnesium": 40, // mg
                "potassium": 150, // mg
                "phosphorus": 120, // mg
                "zinc": 1.2, // mg
                "vitamin_a": 0.21, // mg
                "vitamin_b": 0.5, // mg
                "vitamin_c": 6, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 2, // mg
                "vitamin_k": 15 // mg
              },
              {
                "name": "Taco Vegano de Champiñones",
                "description": "Champiñones salteados con ajo, cebolla, pimientos y guacamole en una tortilla de maíz.",
                "price": 3.50, // USD
                "calories": 120, // kcal
                "carbohydrates": 15, // g
                "sugars": 2, // g
                "fiber": 4, // g
                "fats": 6, // g
                "saturated_fats": 1, // g
                "trans_fats": 0, // g
                "cholesterol": 0, // mg
                "proteins": 4, // g
                "sodium": 250, // mg
                "iron": 1.2, // mg
                "calcium": 30, // mg
                "magnesium": 25, // mg
                "potassium": 200, // mg
                "phosphorus": 90, // mg
                "zinc": 0.8, // mg
                "vitamin_a": 0.09, // mg
                "vitamin_b": 0.2, // mg
                "vitamin_c": 8, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 1.5, // mg
                "vitamin_k": 12 // mg
              }
        ],
        "Sandwich Hub" :[
            {
                "name": "Club Sandwich",
                "description": "Tres capas de pan tostado rellenas de pollo, tocino, lechuga, tomate y mayonesa.",
                "price": 5.00, // USD
                "calories": 250, // kcal
                "carbohydrates": 20, // g
                "sugars": 2, // g
                "fiber": 3, // g
                "fats": 15, // g
                "saturated_fats": 5, // g
                "trans_fats": 0, // g
                "cholesterol": 30, // mg
                "proteins": 12, // g
                "sodium": 400, // mg
                "iron": 2, // mg
                "calcium": 80, // mg
                "magnesium": 30, // mg
                "potassium": 200, // mg
                "phosphorus": 150, // mg
                "zinc": 1.5, // mg
                "vitamin_a": 0.3, // mg
                "vitamin_b": 0.5, // mg
                "vitamin_c": 8, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 2, // mg
                "vitamin_k": 15 // mg
              },
              {
                "name": "Vegetariano Wrap",
                "description": "Wrap de tortilla de espinaca relleno de hummus, aguacate, tomate, lechuga y pepino.",
                "price": 4.75, // USD
                "calories": 200, // kcal
                "carbohydrates": 18, // g
                "sugars": 1, // g
                "fiber": 4, // g
                "fats": 12, // g
                "saturated_fats": 3, // g
                "trans_fats": 0, // g
                "cholesterol": 0, // mg
                "proteins": 8, // g
                "sodium": 350, // mg
                "iron": 1.5, // mg
                "calcium": 60, // mg
                "magnesium": 25, // mg
                "potassium": 180, // mg
                "phosphorus": 100, // mg
                "zinc": 1, // mg
                "vitamin_a": 0.24, // mg
                "vitamin_b": 0.4, // mg
                "vitamin_c": 10, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 1.5, // mg
                "vitamin_k": 12 // mg
              },
              {
                "name": "Panini de Pavo y Queso",
                "description": "Panini caliente con pavo, queso suizo, espinacas y mostaza dijon.",
                "price": 6.25, // USD
                "calories": 280, // kcal
                "carbohydrates": 22, // g
                "sugars": 3, // g
                "fiber": 4, // g
                "fats": 16, // g
                "saturated_fats": 6, // g
                "trans_fats": 0, // g
                "cholesterol": 40, // mg
                "proteins": 14, // g
                "sodium": 450, // mg
                "iron": 2.5, // mg
                "calcium": 120, // mg
                "magnesium": 40, // mg
                "potassium": 220, // mg
                "phosphorus": 180, // mg
                "zinc": 1.8, // mg
                "vitamin_a": 0.36, // mg
                "vitamin_b": 0.6, // mg
                "vitamin_c": 10, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 2, // mg
                "vitamin_k": 15 // mg
              },
              {
                "name": "Sándwich de Pollo Pesto",
                "description": "Pechuga de pollo a la parrilla con pesto, tomate y mozzarella en pan integral.",
                "price": 5.50, // USD
                "calories": 240, // kcal
                "carbohydrates": 20, // g
                "sugars": 2, // g
                "fiber": 3, // g
                "fats": 14, // g
                "saturated_fats": 4, // g
                "trans_fats": 0, // g
                "cholesterol": 35, // mg
                "proteins": 13, // g
                "sodium": 380, // mg
                "iron": 2.2, // mg
                "calcium": 100, // mg
                "magnesium": 35, // mg
                "potassium": 200, // mg
                "phosphorus": 160, // mg
                "zinc": 1.6, // mg
                "vitamin_a": 0.3, // mg
                "vitamin_b": 0.5, // mg
                "vitamin_c": 8, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 1.5, // mg
                "vitamin_k": 12 // mg
              },
              {
                "name": "Wrap de Salmón Ahumado",
                "description": "Wrap de salmón ahumado, queso crema, espinacas y cebolla roja.",
                "price": 7.00, // USD
                "calories": 220, // kcal
                "carbohydrates": 15, // g
                "sugars": 1, // g
                "fiber": 3, // g
                "fats": 15, // g
                "saturated_fats": 5, // g
                "trans_fats": 0, // g
                "cholesterol": 30, // mg
                "proteins": 12, // g
                "sodium": 350, // mg
                "iron": 2.5, // mg
                "calcium": 80, // mg
                "magnesium": 30, // mg
                "potassium": 180, // mg
                "phosphorus": 150, // mg
                "zinc": 1.7, // mg
                "vitamin_a": 0.27, // mg
                "vitamin_b": 0.6, // mg
                "vitamin_c": 10, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 2, // mg
                "vitamin_k": 15 // mg
              },
              {
                "name": "Sándwich de Aguacate y Queso de Cabra",
                "description": "Aguacate fresco, queso de cabra, tomate y rúcula en pan de centeno.",
                "price": 6.00, // USD
                "calories": 260, // kcal
                "carbohydrates": 20, // g
                "sugars": 2, // g
                "fiber": 4, // g
                "fats": 18, // g
                "saturated_fats": 6, // g
                "trans_fats": 0, // g
                "cholesterol": 25, // mg
                "proteins": 8, // g
                "sodium": 320, // mg
                "iron": 2.0, // mg
                "calcium": 90, // mg
                "magnesium": 40, // mg
                "potassium": 200, // mg
                "phosphorus": 130, // mg
                "zinc": 1.5, // mg
                "vitamin_a": 0.24, // mg
                "vitamin_b": 0.4, // mg
                "vitamin_c": 9, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 1.8, // mg
                "vitamin_k": 12 // mg
              }
        ],
        "Buffet Creativo" :[
            {
                "name": "Pollo Teriyaki con Piña",
                "description": "Muslos de pollo glaseados con salsa teriyaki, acompañados de trozos de piña.",
                "price": 9.50, // USD
                "calories": 200, // kcal
                "carbohydrates": 15, // g
                "sugars": 10, // g
                "fiber": 2, // g
                "fats": 12, // g
                "saturated_fats": 4, // g
                "trans_fats": 0, // g
                "cholesterol": 40, // mg
                "proteins": 20, // g
                "sodium": 600, // mg
                "iron": 1.5, // mg
                "calcium": 40, // mg
                "magnesium": 30, // mg
                "potassium": 250, // mg
                "phosphorus": 180, // mg
                "zinc": 1.8, // mg
                "vitamin_a": 0.36, // mg
                "vitamin_b": 0.8, // mg
                "vitamin_c": 5, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 2, // mg
                "vitamin_k": 10 // mg
              },
              {
                "name": "Ensalada de Quinoa y Aguacate",
                "description": "Ensalada fresca de quinoa, aguacate, tomate, pepino y aderezo de limón.",
                "price": 8.00, // USD
                "calories": 180, // kcal
                "carbohydrates": 25, // g
                "sugars": 2, // g
                "fiber": 5, // g
                "fats": 8, // g
                "saturated_fats": 1, // g
                "trans_fats": 0, // g
                "cholesterol": 0, // mg
                "proteins": 6, // g
                "sodium": 150, // mg
                "iron": 1.2, // mg
                "calcium": 30, // mg
                "magnesium": 20, // mg
                "potassium": 200, // mg
                "phosphorus": 120, // mg
                "zinc": 1.2, // mg
                "vitamin_a": 0.24, // mg
                "vitamin_b": 0.6, // mg
                "vitamin_c": 10, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 1.5, // mg
                "vitamin_k": 15 // mg
              },
              {
                "name": "Pasta Alfredo con Champiñones",
                "description": "Pasta fettuccine en salsa Alfredo cremosa con champiñones salteados.",
                "price": 10.00, // USD
                "calories": 280, // kcal
                "carbohydrates": 30, // g
                "sugars": 3, // g
                "fiber": 2, // g
                "fats": 15, // g
                "saturated_fats": 8, // g
                "trans_fats": 0, // g
                "cholesterol": 50, // mg
                "proteins": 12, // g
                "sodium": 400, // mg
                "iron": 2.5, // mg
                "calcium": 80, // mg
                "magnesium": 40, // mg
                "potassium": 200, // mg
                "phosphorus": 150, // mg
                "zinc": 1.5, // mg
                "vitamin_a": 0.3, // mg
                "vitamin_b": 0.6, // mg
                "vitamin_c": 2, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 2, // mg
                "vitamin_k": 10 // mg
              },
              {
                "name": "Sushi Rolls Variados",
                "description": "Variedad de rolls de sushi, incluyendo rolls de aguacate, salmón y pepino.",
                "price": 12.50, // USD
                "calories": 250, // kcal
                "carbohydrates": 35, // g
                "sugars": 5, // g
                "fiber": 4, // g
                "fats": 10, // g
                "saturated_fats": 2, // g
                "trans_fats": 0, // g
                "cholesterol": 20, // mg
                "proteins": 15, // g
                "sodium": 500, // mg
                "iron": 1.8, // mg
                "calcium": 60, // mg
                "magnesium": 25, // mg
                "potassium": 180, // mg
                "phosphorus": 200, // mg
                "zinc": 1.2, // mg
                "vitamin_a": 0.27, // mg
                "vitamin_b": 0.5, // mg
                "vitamin_c": 1, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 1.5, // mg
                "vitamin_k": 8 // mg
              },
              {
                "name": "Tacos de Camarones con Mango",
                "description": "Tacos de camarones salteados con mango fresco, cilantro y salsa de chipotle.",
                "price": 11.00, // USD
                "calories": 220, // kcal
                "carbohydrates": 25, // g
                "sugars": 5, // g
                "fiber": 3, // g
                "fats": 10, // g
                "saturated_fats": 2, // g
                "trans_fats": 0, // g
                "cholesterol": 80, // mg
                "proteins": 15, // g
                "sodium": 450, // mg
                "iron": 2.2, // mg
                "calcium": 40, // mg
                "magnesium": 30, // mg
                "potassium": 300, // mg
                "phosphorus": 160, // mg
                "zinc": 1.5, // mg
                "vitamin_a": 0.36, // mg
                "vitamin_b": 0.8, // mg
                "vitamin_c": 15, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 2, // mg
                "vitamin_k": 12 // mg
              },
              {
                "name": "Bowl de Burrito con Guacamole",
                "description": "Bowl con arroz, frijoles, carne asada, guacamole, pico de gallo y queso.",
                "price": 10.50, // USD
                "calories": 260, // kcal
                "carbohydrates": 30, // g
                "sugars": 2, // g
                "fiber": 5, // g
                "fats": 12, // g
                "saturated_fats": 4, // g
                "trans_fats": 0, // g
                "cholesterol": 45, // mg
                "proteins": 18, // g
                "sodium": 550, // mg
                "iron": 2.5, // mg
                "calcium": 80, // mg
                "magnesium": 35, // mg
                "potassium": 280, // mg
                "phosphorus": 200, // mg
                "zinc": 1.8, // mg
                "vitamin_a": 0.45, // mg
                "vitamin_b": 1.2, // mg
                "vitamin_c": 8, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 2, // mg
                "vitamin_k": 15 // mg
              },
              {
                "name": "Pizza Vegetariana de Berenjena",
                "description": "Pizza con salsa de tomate, berenjena asada, espinacas, queso y albahaca.",
                "price": 9.00, // USD
                "calories": 230, // kcal
                "carbohydrates": 25, // g
                "sugars": 3, // g
                "fiber": 4, // g
                "fats": 12, // g
                "saturated_fats": 5, // g
                "trans_fats": 0, // g
                "cholesterol": 15, // mg
                "proteins": 8, // g
                "sodium": 400, // mg
                "iron": 2.0, // mg
                "calcium": 120, // mg
                "magnesium": 30, // mg
                "potassium": 180, // mg
                "phosphorus": 160, // mg
                "zinc": 1.5, // mg
                "vitamin_a": 0.3, // mg
                "vitamin_b": 0.6, // mg
                "vitamin_c": 8, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 1.5, // mg
                "vitamin_k": 10 // mg
              },
              {
                "name": "Postre de Tiramisú",
                "description": "Clásico postre italiano con capas de bizcocho empapado en café y crema de mascarpone.",
                "price": 7.50, // USD
                "calories": 280, // kcal
                "carbohydrates": 30, // g
                "sugars": 18, // g
                "fiber": 1, // g
                "fats": 18, // g
                "saturated_fats": 10, // g
                "trans_fats": 0, // g
                "cholesterol": 90, // mg
                "proteins": 4, // g
                "sodium": 30, // mg
                "iron": 0.8, // mg
                "calcium": 120, // mg
                "magnesium": 15, // mg
                "potassium": 100, // mg
                "phosphorus": 70, // mg
                "zinc": 0.8, // mg
                "vitamin_a": 0.36, // mg
                "vitamin_b": 0.2, // mg
                "vitamin_c": 0, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 1, // mg
                "vitamin_k": 5 // mg
              }
        ],
        "Smoothie Oasis" :[
            {
                "name": "Smoothie Energizante de Frutas Tropicales",
                "description": "Mezcla refrescante de piña, mango, plátano y jugo de naranja.",
                "price": 5.50, // USD
                "calories": 60, // kcal
                "carbohydrates": 15, // g
                "sugars": 10, // g
                "fiber": 2, // g
                "fats": 0.5, // g
                "saturated_fats": 0.1, // g
                "trans_fats": 0, // g
                "cholesterol": 0, // mg
                "proteins": 1, // g
                "sodium": 5, // mg
                "iron": 0.3, // mg
                "calcium": 20, // mg
                "magnesium": 15, // mg
                "potassium": 180, // mg
                "phosphorus": 10, // mg
                "zinc": 0.1, // mg
                "vitamin_a": 0.03, // IU
                "vitamin_b": 0.02, // mg
                "vitamin_c": 30, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 0.5, // mg
                "vitamin_k": 0.2 // mg
              },
              {
                "name": "Smoothie Verde Detox",
                "description": "Batido saludable con espinacas, manzana, pepino y limón.",
                "price": 6.00, // USD
                "calories": 50, // kcal
                "carbohydrates": 12, // g
                "sugars": 7, // g
                "fiber": 3, // g
                "fats": 0.3, // g
                "saturated_fats": 0.1, // g
                "trans_fats": 0, // g
                "cholesterol": 0, // mg
                "proteins": 1.5, // g
                "sodium": 10, // mg
                "iron": 0.4, // mg
                "calcium": 30, // mg
                "magnesium": 20, // mg
                "potassium": 200, // mg
                "phosphorus": 15, // mg
                "zinc": 0.2, // mg
                "vitamin_a": 0.06, // mg
                "vitamin_b": 0.03, // mg
                "vitamin_c": 25, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 0.6, // mg
                "vitamin_k": 0.5 // mg
              },
              {
                "name": "Smoothie de Bayas y Yogur",
                "description": "Mezcla cremosa de bayas frescas con yogur natural.",
                "price": 6.50, // USD
                "calories": 70, // kcal
                "carbohydrates": 15, // g
                "sugars": 10, // g
                "fiber": 2, // g
                "fats": 0.5, // g
                "saturated_fats": 0.3, // g
                "trans_fats": 0, // g
                "cholesterol": 5, // mg
                "proteins": 2, // g
                "sodium": 15, // mg
                "iron": 0.2, // mg
                "calcium": 80, // mg
                "magnesium": 10, // mg
                "potassium": 120, // mg
                "phosphorus": 20, // mg
                "zinc": 0.1, // mg
                "vitamin_a": 0.03, // mg
                "vitamin_b": 0.05, // mg
                "vitamin_c": 15, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 0.3, // mg
                "vitamin_k": 0.1 // mg
              },
              {
                "name": "Smoothie de Proteínas con Almendras",
                "description": "Batido de proteínas con plátano, almendras y leche de almendras.",
                "price": 7.00, // USD
                "calories": 90, // kcal
                "carbohydrates": 10, // g
                "sugars": 6, // g
                "fiber": 3, // g
                "fats": 4, // g
                "saturated_fats": 0.5, // g
                "trans_fats": 0, // g
                "cholesterol": 5, // mg
                "proteins": 5, // g
                "sodium": 20, // mg
                "iron": 1.2, // mg
                "calcium": 120, // mg
                "magnesium": 30, // mg
                "potassium": 180, // mg
                "phosphorus": 40, // mg
                "zinc": 0.4, // mg
                "vitamin_a": 0.01, // mg
                "vitamin_b": 0.1, // mg
                "vitamin_c": 10, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 1.2, // mg
                "vitamin_k": 0.2 // mg
              },
              {
                "name": "Smoothie de Acai Bowl",
                "description": "Acai bowl con granola, plátano, fresas y coco rallado.",
                "price": 8.00, // USD
                "calories": 90, // kcal
                "carbohydrates": 20, // g
                "sugars": 10, // g
                "fiber": 4, // g
                "fats": 2, // g
                "saturated_fats": 0.5, // g
                "trans_fats": 0, // g
                "cholesterol": 0, // mg
                "proteins": 2, // g
                "sodium": 5, // mg
                "iron": 1.5, // mg
                "calcium": 30, // mg
                "magnesium": 20, // mg
                "potassium": 120, // mg
                "phosphorus": 15, // mg
                "zinc": 0.3, // mg
                "vitamin_a": 0.06, // mg
                "vitamin_b": 0.02, // mg
                "vitamin_c": 10, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 1, // mg
                "vitamin_k": 0.1 // mg
              },
              {
                "name": "Smoothie de Mango y Coco",
                "description": "Combinación tropical de mango fresco y leche de coco.",
                "price": 5.00, // USD
                "calories": 80, // kcal
                "carbohydrates": 18, // g
                "sugars": 15, // g
                "fiber": 2, // g
                "fats": 0.5, // g
                "saturated_fats": 0.2, // g
                "trans_fats": 0, // g
                "cholesterol": 0, // mg
                "proteins": 1, // g
                "sodium": 10, // mg
                "iron": 0.5, // mg
                "calcium": 40, // mg
                "magnesium": 15, // mg
                "potassium": 160, // mg
                "phosphorus": 10, // mg
                "zinc": 0.2, // mg
                "vitamin_a": 0.03, // mg
                "vitamin_b": 0.1, // mg
                "vitamin_c": 30, // mg
                "vitamin_d": 0, // mg
                "vitamin_e": 0.5, // mg
                "vitamin_k": 0.2 // mg
              }
        ],
    }
    
}