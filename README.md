##userﾃｰﾌﾞﾙ
|Column|Type|Options|
|------|----|-------|
|user|string|null: false|
|email|string|null: false|
###Association
- has_many:members
- has_many:groups, through: :members
- has_many:members
##groupﾃｰﾌﾞﾙ
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
###Association
- has_many:members
- has_many:groups, through: :members
- has_many:members
##memberﾃｰﾌﾞﾙ
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false|
|group_id|integer|null: false|
###Association
- belongs_to:user
- belongs_to:group

##messageﾃｰﾌﾞﾙ
|Column|Type|Options|
|------|----|-------|
|body|text|-------|
|image|string|-------|
###Association
- belong_to:user
- belong_to:group
