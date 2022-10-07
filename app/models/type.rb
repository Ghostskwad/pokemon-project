class Type < ApplicationRecord
    has_and_belongs_to_many :pokemons, join_table: 'pokemon_types'
end
