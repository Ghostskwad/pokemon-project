class CreatePokemons < ActiveRecord::Migration[7.0]
  def change
    create_table :pokemons do |t|
      t.string :name
      t.integer :game_index
      t.integer :height
      t.integer :weight
      t.integer :base_experience
      t.text :flavor_text

      t.timestamps
    end
  end
end
