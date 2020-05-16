<?php

use App\Review;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ReviewerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $idUser = $this->command->ask("Enter User id", 'test');
        $date = $this->command->ask("Enter Date format: Y-m-d", 'test');
        DB::table('reviews')->insert([
            'user_id' => $idUser,
            'review' => Str::random(35),
            'rating' => rand(0, 5),
            'created_at' => $date,
            'updated_at' => $date
        ]);
    }
}
