<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Casts\Attribute;

/**
 * @property int $id
 * @property string $name
 * @property string|null $image_url
 */
class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'image_url', 'thumbnail_url'
    ];

    public function questions(): HasMany
    {
        return $this->hasMany(Question::class);
    }

    protected function thumbnailUrl(): Attribute
    {
        return Attribute::make(
            get: fn (?string $value) => $value !== null
            ? asset('storage/' . ltrim($value, '/'))
            : null,
        );
    }
}
