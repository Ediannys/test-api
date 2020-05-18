

## Pasos de ejecución

Necesitará tener Node >= 8.10 y npm >= 5.6
PHP >= 7.2.5
Clonar el repositorio
Desde la raiz del proyecto ejecutar composer install
Copiar el archivo .env.example, crear el archivo .env y pegar
Crear una base de datos llamada tickets


Desde la raiz del proyecto ejecutar los siguientes comandos:
php artisan key:generate
php artisan:migrate
php artisan passport:install
php artisan db:seed

npm install
php artisan serve


