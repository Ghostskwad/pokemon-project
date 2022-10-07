class PokemonStatSerializer < ActiveModel::Serializer
  attributes :id
  has_one :pokemon
  has_one :stat
end
