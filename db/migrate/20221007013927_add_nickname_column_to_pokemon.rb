class AddNicknameColumnToPokemon < ActiveRecord::Migration[7.0]
  def change
    add_column :pokemons, :nickname, :string
  end
end
