<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property int $id
 * @property string $code
 * @property int $game_id
 * @property int|null $leader_id
 * @property int $max_players
 * @property string $status
 * @property array|null $settings
 */
class Room extends Model
{
    use HasFactory;

    protected $fillable = [
        'code', 'game_id', 'leader_id', 'max_players', 'status', 'settings',
    ];

    protected $casts = [
        'settings' => 'array',
    ];

    public function game(): BelongsTo
    {
        return $this->belongsTo(Game::class);
    }

    public function leader(): BelongsTo
    {
        return $this->belongsTo(User::class, 'leader_id');
    }

    public function matches(): HasMany
    {
        return $this->hasMany(MatchModel::class, 'room_id');
    }
}
