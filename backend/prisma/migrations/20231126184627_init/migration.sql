-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "admin" BOOLEAN NOT NULL,
    "restaurant_id" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Restaurant" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "timetable" TEXT NOT NULL,

    CONSTRAINT "Restaurant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dish" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DECIMAL(5,2) NOT NULL,
    "vegetarian" BOOLEAN NOT NULL DEFAULT false,
    "alergies" TEXT,
    "calories" INTEGER NOT NULL,
    "carbohydrates" DECIMAL(5,2) NOT NULL,
    "sugars" DECIMAL(5,2) NOT NULL,
    "fiber" DECIMAL(5,2) NOT NULL,
    "fats" DECIMAL(5,2) NOT NULL,
    "saturated_fats" DECIMAL(5,2),
    "trans_fats" DECIMAL(5,2),
    "cholesterol" DECIMAL(5,2),
    "proteins" DECIMAL(5,2) NOT NULL,
    "sodium" DECIMAL(5,2),
    "iron" DECIMAL(5,2),
    "calcium" DECIMAL(5,2),
    "magnesium" DECIMAL(5,2),
    "potasium" DECIMAL(5,2),
    "phosphorus" DECIMAL(5,2),
    "zinc" DECIMAL(5,2),
    "vitamin_a" DECIMAL(5,2),
    "vitamin_b" DECIMAL(5,2),
    "vitamin_c" DECIMAL(5,2),
    "vitamin_d" DECIMAL(5,2),
    "vitamin_e" DECIMAL(5,2),
    "vitamin_k" DECIMAL(5,2),
    "restaurant_id" INTEGER NOT NULL,

    CONSTRAINT "Dish_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Timetable" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "dish_id" INTEGER NOT NULL,
    "date_id" INTEGER NOT NULL,

    CONSTRAINT "Timetable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Date" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "day" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "workable" BOOLEAN NOT NULL DEFAULT true,
    "vegetarian" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Date_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reservation" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "date_id" INTEGER NOT NULL,
    "fullname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "amount_people" INTEGER NOT NULL,
    "hour" INTEGER NOT NULL,
    "minute" INTEGER NOT NULL,
    "restaurant_id" INTEGER NOT NULL,

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DishFoodTypeTag" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "dish_id" INTEGER NOT NULL,
    "tag_id" INTEGER NOT NULL,

    CONSTRAINT "DishFoodTypeTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FoodTypeTag" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "FoodTypeTag_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_user_id_key" ON "User"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Restaurant_name_key" ON "Restaurant"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Dish_name_restaurant_id_key" ON "Dish"("name", "restaurant_id");

-- CreateIndex
CREATE UNIQUE INDEX "Timetable_dish_id_date_id_key" ON "Timetable"("dish_id", "date_id");

-- CreateIndex
CREATE UNIQUE INDEX "Date_day_month_year_key" ON "Date"("day", "month", "year");

-- CreateIndex
CREATE UNIQUE INDEX "DishFoodTypeTag_dish_id_tag_id_key" ON "DishFoodTypeTag"("dish_id", "tag_id");

-- CreateIndex
CREATE UNIQUE INDEX "FoodTypeTag_name_key" ON "FoodTypeTag"("name");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_restaurant_id_fkey" FOREIGN KEY ("restaurant_id") REFERENCES "Restaurant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dish" ADD CONSTRAINT "Dish_restaurant_id_fkey" FOREIGN KEY ("restaurant_id") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Timetable" ADD CONSTRAINT "Timetable_dish_id_fkey" FOREIGN KEY ("dish_id") REFERENCES "Dish"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Timetable" ADD CONSTRAINT "Timetable_date_id_fkey" FOREIGN KEY ("date_id") REFERENCES "Date"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_date_id_fkey" FOREIGN KEY ("date_id") REFERENCES "Date"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_restaurant_id_fkey" FOREIGN KEY ("restaurant_id") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DishFoodTypeTag" ADD CONSTRAINT "DishFoodTypeTag_dish_id_fkey" FOREIGN KEY ("dish_id") REFERENCES "Dish"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DishFoodTypeTag" ADD CONSTRAINT "DishFoodTypeTag_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "FoodTypeTag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
