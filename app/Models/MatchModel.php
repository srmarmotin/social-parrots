<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property int $id
 * @property int $room_id
 * @property string $status
 * @property int $rounds
 * @property int $players_count
 * @property array|null $stats
 */
class MatchModel extends Model
{
    use HasFactory;

    protected $table = 'matches';

    protected $fillable = [
        'room_id', 'status', 'rounds', 'players_count', 'stats',
    ];

    protected $casts = [
        'stats' => 'array',
    ];

    public function room(): BelongsTo
    {
        return $this->belongsTo(Room::class);
    }

    public function players(): HasMany
    {
        return $this->hasMany(Player::class, 'match_id');
    }
}
