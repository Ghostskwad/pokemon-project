class StatNameJoinTableSerializer < ActiveModel::Serializer
  attributes :id
  has_one :stat
  has_one :stat_name
end
