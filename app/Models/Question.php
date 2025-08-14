<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property int $game_id
 * @property int|null $category_id
 * @property string $question
 * @property array|null $options
 * @property string|null $image_url
 * @property bool $active
 */
class Question extends Model
{
    use HasFactory;

    protected $fillable = [
        'game_id', 'category_id', 'question', 'options', 'image_url', 'active',
    ];

    protected $casts = [
        'options' => 'array',
        'active' => 'boolean',
    ];

    public function game(): BelongsTo
    {
        return $this->belongsTo(Game::class);
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
}
