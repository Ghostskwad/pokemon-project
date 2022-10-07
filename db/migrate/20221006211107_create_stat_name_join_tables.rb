class CreateStatNameJoinTables < ActiveRecord::Migration[7.0]
  def change
    create_table :stat_name_join_tables, id: false do |t|
      t.references :stat, null: false, foreign_key: true
      t.references :stat_name, null: false, foreign_key: true
    end
  end
end
