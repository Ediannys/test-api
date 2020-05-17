<?php

use Illuminate\Database\Seeder;
use App\Ticket;
class TicketsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $ticket= Ticket::create([
            'use_id' =>'2',
            'issue' =>'Vientos de invierno (6x10)',
            'status' =>'1',
        ]);

        $ticket= Ticket::create([
            'use_id' =>'2',
            'issue' =>'Las lluvias de Castamere (3x09)',
            'status' =>'1',
        ]);

        $ticket= Ticket::create([
            'use_id' =>'2',
            'issue' =>'La batalla de los bastardos (6x09)',
            'status' =>'1',
        ]);

        $ticket= Ticket::create([
            'use_id' =>'2',
            'issue' =>'El ascenso (3x06)',
            'status' =>'1',
        ]);
    }
}
