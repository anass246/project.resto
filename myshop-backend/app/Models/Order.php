<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    // هاد السطر كيعطي الإذن لـ Laravel باش يعمر هاد المعلومات
    protected $fillable = [
        'client_name',
        'email',
        'total_price',
        'items',
        'status',
        'transaction_id'
    ];

    // هاد السطر كيقول لـ Laravel: "راه items عبارة عن ليستة (Array)، ماشي كتبة عادية"
    protected $casts = [
        'items' => 'array',
    ];
}