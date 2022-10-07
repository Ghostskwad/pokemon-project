class StatName < ApplicationRecord
    has_and_belongs_to_many :stats, join_table: 'stat_name_join_tables'
end
