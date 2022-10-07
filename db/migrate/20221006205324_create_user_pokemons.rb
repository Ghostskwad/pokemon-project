class CreateUserPokemons < ActiveRecord::Migration[7.0]
  def change
    create_table :user_pokemons, id: false do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :pokemon, null: false, foreign_key: true

      t.timestamps
    end
  end
end
