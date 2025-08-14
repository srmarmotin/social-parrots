<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property int $id
 * @property string $name
 * @property string|null $image_url
 */
class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'image_url',
    ];

    public function questions(): HasMany
    {
        return $this->hasMany(Question::class);
    }
}
