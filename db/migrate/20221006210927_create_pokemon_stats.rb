class CreatePokemonStats < ActiveRecord::Migration[7.0]
  def change
    create_table :pokemon_stats, id: false do |t|
      t.belongs_to :pokemon, null: false, foreign_key: true
      t.belongs_to :stat, null: false, foreign_key: true

      t.timestamps
    end
  end
end
