class CreateQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :questions do |t|
      t.string :title
      t.string :description
      t.integer :created_by
      t.boolean :archived, default: false, null: false
      t.timestamps
    end
  end
end
