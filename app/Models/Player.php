<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property int|null $user_id
 * @property int $match_id
 * @property int|null $avatar_id
 * @property string|null $nickname
 * @property int $score
 * @property int $multiplier
 * @property array|null $votes
 */
class Player extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'match_id', 'avatar_id', 'nickname', 'score', 'multiplier', 'votes',
    ];

    protected $casts = [
        'votes' => 'array',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function match(): BelongsTo
    {
        return $this->belongsTo(MatchModel::class, 'match_id');
    }

    public function avatar(): BelongsTo
    {
        return $this->belongsTo(Avatar::class);
    }
}
