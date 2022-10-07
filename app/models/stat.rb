class Stat < ApplicationRecord
    has_and_belongs_to_many :pokemons, join_table: 'pokemon_stats'
    has_and_belongs_to_many :stat_names, join_table: 'stat_name_join_tables'
end
