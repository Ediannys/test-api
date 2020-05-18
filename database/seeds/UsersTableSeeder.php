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
            'first_name' =>'admin',
            'last_name' =>'admin',
            'email' =>'admin@mail.com',
        	'password' => bcrypt('secret'),
            ]);

        $admin->assignRole('admin');

        $admin= User::create([
            'first_name' =>'Tyrion',
            'last_name' =>'Lannister',
            'email' =>'lannister@mail.com',
        	'password' => bcrypt('123456'),
            ]);

        $admin->assignRole('user');
    }
}
