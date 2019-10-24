|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
### Association
- has_many:members
- has_many:groups, through: :members
- has_many:messages
## groupﾃｰﾌﾞﾙ
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
- has_many:members
- has_many:groups, through: :members
- has_many:messages
## memberﾃｰﾌﾞﾙ
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key:true|
|group_id|integer|null: false, foreign_key:true|
### Association
- belongs_to:user
- belongs_to:group
## messageﾃｰﾌﾞﾙ
|Column|Type|Options|
|------|----|-------|
|body|text|foreign_key:true|
|image|string|foreign_key:true|
### Association
- belong_to:user
- belong_to:group