class CreateArticles < ActiveRecord::Migration[5.1]
  def change
    create_table :articles do |t|
      t.string :title
      t.text :description
      t.integer :author_id
      t.string :tags

      t.timestamps
    end
  end
end
