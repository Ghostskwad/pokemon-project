class CreateStats < ActiveRecord::Migration[7.0]
  def change
    create_table :stats do |t|
      t.integer :base_stat

      t.timestamps
    end
  end
end
