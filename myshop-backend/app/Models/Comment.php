<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    // 👇 هاد السطر هو اللي كان خاصك (الرخصة)
    protected $fillable = [
        'name',
        'email',
        'message',
        'rating'
    ];
}
