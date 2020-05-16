<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin= User::create([
        	'name' =>'admin',
            'email' =>'admin@mail.com',
        	'password' => bcrypt('secret'),
            'activation_token'=> str_random(60),

            ]);

        $admin->assignRole('admin');

        $admin= User::create([
        	'name' =>'Tyrion',
            'email' =>'lannister@mail.com',
        	'password' => bcrypt('123456'),
            'activation_token'=> str_random(60),
            ]);

        $admin->assignRole('user');
    }
}
