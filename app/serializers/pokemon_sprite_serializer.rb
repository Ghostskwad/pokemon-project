class PokemonSpriteSerializer < ActiveModel::Serializer
  attributes :id
  has_one :pokemon
  has_one :sprite
end
