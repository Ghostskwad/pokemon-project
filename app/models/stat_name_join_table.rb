class StatNameJoinTable < ApplicationRecord
  belongs_to :stat
  belongs_to :stat_name
end
