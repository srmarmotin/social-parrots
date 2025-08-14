<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property int $id
 * @property string $name
 * @property string|null $description
 * @property bool $active
 */
class Game extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'description', 'active',
    ];

    public function questions(): HasMany
    {
        return $this->hasMany(Question::class);
    }

    public function rooms(): HasMany
    {
        return $this->hasMany(Room::class);
    }
}
