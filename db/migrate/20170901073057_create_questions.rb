class CreateQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :questions do |t|
      t.string :question_text
      t.integer :created_by
      t.boolean :archived, default: false, null: false
      t.timestamps
    end
  end
end
