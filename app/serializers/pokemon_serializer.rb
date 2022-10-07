class PokemonSerializer < ActiveModel::Serializer
  attributes :id, :name, :game_index, :height, :weight, :base_experience, :flavor_text, :nickname
  has_many :types
  has_many :stats
  has_many :sprites
end
