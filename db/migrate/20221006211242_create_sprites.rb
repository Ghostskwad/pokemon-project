class CreateSprites < ActiveRecord::Migration[7.0]
  def change
    create_table :sprites do |t|
      t.string :front_default
      t.string :back_default
      t.string :official_artwork

      t.timestamps
    end
  end
end
