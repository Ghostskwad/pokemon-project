class CreatePokemonSprites < ActiveRecord::Migration[7.0]
  def change
    create_table :pokemon_sprites, id: false do |t|
      t.belongs_to :pokemon, null: false, foreign_key: true
      t.belongs_to :sprite, null: false, foreign_key: true

      t.timestamps
    end
  end
end
