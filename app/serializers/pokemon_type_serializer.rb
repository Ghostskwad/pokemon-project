class PokemonTypeSerializer < ActiveModel::Serializer
  attributes :id
  has_one :pokemon
  has_one :type
end
