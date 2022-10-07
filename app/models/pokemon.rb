class Pokemon < ApplicationRecord
    has_and_belongs_to_many :pokemons, join_table: 'user_pokemons'
    has_and_belongs_to_many :sprites, join_table: 'pokemon_sprites'
    has_and_belongs_to_many :types, join_table: 'pokemon_types'
    has_and_belongs_to_many :stats, join_table: 'pokemon_stats'

    validates :name, :game_index, :height, :weight, :base_experience, :flavor_text, presence: true
end
