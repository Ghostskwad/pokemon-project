class SpriteSerializer < ActiveModel::Serializer
  attributes :id, :front_default, :back_default, :official_artwork
end
