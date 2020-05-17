<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $name = $this->command->ask("Enter User name", 'test');
        DB::table('users')->insert([
            'name' => $name,
            'email' => strtolower($name) . '@corsi.it'
        ]);
    }
}
