class PokemonWithStatsSerializer < ActiveModel::Serializer
  attributes :base_stat, :name

  def name
    object.stat_names.first.name
  end
end
